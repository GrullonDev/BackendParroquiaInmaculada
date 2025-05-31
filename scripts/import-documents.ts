import * as csvParser from 'csv-parser'; // ✅ Correcto
import { AppDataSource } from '../data-source';
import * as fs from 'fs';
import { Documento, TipoDocumento } from 'src/modules/documento/entity/documento.entity';
import { Cliente } from 'src/modules/cliente/entity/cliente.entity';
import { Sacerdote } from 'src/modules/sacerdote/entity/sacerdote.entity';
import { Padrino } from 'src/modules/padrino/entity/padrino.entity';

async function importDocumentos() {
    const registros: any[] = [];

    fs.createReadStream('registro_parroquial.csv', { encoding: 'utf8' })
        .pipe(csvParser({ headers: false }))
        .on('data', (row: any[]) => {
            const nombreNino = row[11]?.trim();
            const folio = row[3]?.toString().replace('|', '').trim();
            const partida = row[6]?.toString().replace('|', '').trim();
            const sacerdoteNombre = row[0]?.trim();
            const padrinoNombre = row[4]?.trim();

            if (!nombreNino || !folio || !partida || !sacerdoteNombre) return;

            const noFolioLibro = `${folio}-${partida}`;
            const rawFecha = row[1]?.trim();
            const fechaConstancia = rawFecha && !isNaN(Date.parse(rawFecha))
                ? new Date(rawFecha)
                : new Date(); // fallback

            registros.push({
                nombreNino,
                padre: row[5]?.trim() || '',
                madre: row[7]?.trim() || '',
                fechaNacimiento: row[2]?.trim(),
                fechaBautismo: row[10]?.trim(),
                parroquia: 'Parroquia Inmaculada',
                firmaSacerdote: sacerdoteNombre,
                celebrante: sacerdoteNombre,
                observacionesCliente: row[8]?.trim() || '',
                observacionesDoc: row[9]?.trim() || '',
                campo34: row[12]?.trim() || '',
                campo35: row[13]?.trim() || '',
                campo36: row[14]?.trim() || '',
                noFolioLibro,
                fechaConstancia,
                sacerdoteNombre,
                padrinoNombre,
            });
        })
        .on('end', async () => {
            await AppDataSource.initialize();

            let insertados = 0;
            let duplicados = 0;

            for (const row of registros) {
                try {
                    const { noFolioLibro, padrinoNombre } = row;

                    // Padrino (opcional)
                    let padrino: Padrino | null = null;
                    if (padrinoNombre && !padrinoNombre.toLowerCase().includes('no aparece')) {
                        padrino = await AppDataSource.manager.findOne(Padrino, {
                            where: { nombre: padrinoNombre },
                        });
                        if (!padrino) {
                            padrino = AppDataSource.manager.create(Padrino, { nombre: padrinoNombre });
                            await AppDataSource.manager.save(padrino);
                        }
                    }

                    // Sacerdote
                    let sacerdote = await AppDataSource.manager.findOne(Sacerdote, {
                        where: { nombreCompleto: row.sacerdoteNombre },
                    });

                    if (!sacerdote) {
                        sacerdote = AppDataSource.manager.create(Sacerdote, {
                            nombreCompleto: row.sacerdoteNombre,
                            cantidad: 1,
                        });
                        await AppDataSource.manager.save(sacerdote);
                    }

                    // Cliente
                    let cliente = await AppDataSource.manager.findOne(Cliente, {
                        where: { noFolioLibro },
                    });

                    if (!cliente) {
                        cliente = AppDataSource.manager.create(Cliente, {
                            nombreNino: row.nombreNino,
                            padre: row.padre,
                            madre: row.madre,
                            fechaNacimiento: row.fechaNacimiento,
                            fechaBautismo: row.fechaBautismo,
                            parroquia: row.parroquia,
                            firmaSacerdote: row.firmaSacerdote,
                            celebrante: row.celebrante,
                            observaciones: row.observacionesCliente,
                            campo34: row.campo34,
                            campo35: row.campo35,
                            campo36: row.campo36,
                            noFolioLibro: row.noFolioLibro,
                            createdAt: row.fechaConstancia,
                            sacerdote,
                        });

                        await AppDataSource.manager.save(cliente);
                    }

                    // Documento
                    const documento = AppDataSource.manager.create(Documento, {
                        tipo: TipoDocumento.BAUTIZO,
                        fechaEmision: row.fechaConstancia.toISOString(),
                        observaciones: row.observacionesDoc,
                        cliente,
                        sacerdote,
                        creadoEn: row.fechaConstancia,
                    });

                    await AppDataSource.manager.save(documento);
                    insertados++;
                } catch (err) {
                    console.error(`❌ Error al procesar registro ${row.noFolioLibro}:`, err.message);
                }
            }

            console.log(
                `✅ Documentos insertados: ${insertados}, Duplicados omitidos: ${duplicados}`,
            );
            process.exit(0);
        });
}

importDocumentos();