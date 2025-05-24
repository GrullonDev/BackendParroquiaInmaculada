import * as csvParser from 'csv-parser'; // ✅ Correcto
import { AppDataSource } from '../data-source';
import * as fs from 'fs';
import { Cliente } from 'src/modules/cliente/entity/cliente.entity';

async function importClientes() {
    const clientes: Partial<Cliente>[] = [];

    fs.createReadStream('clientes.csv')
        .pipe(csvParser({ headers: false }))
        .on('data', (row: any[]) => {
            const nombreNino = row[11]?.trim();
            const folio = row[3]?.trim();
            const partida = row[6]?.trim();
            if (!nombreNino || !folio || !partida) return;

            const noFolioLibro = `${folio}-${partida}`;
            const fechaConstancia = new Date(row[1]);
            const createdAt = isNaN(fechaConstancia.getTime()) ? new Date() : fechaConstancia;

            clientes.push({
                nombreNino,
                padre: row[5]?.trim() || '',
                madre: row[7]?.trim() || '',
                fechaNacimiento: row[2]?.trim(),
                fechaBautismo: row[10]?.trim(),
                parroquia: 'Parroquia Inmaculada',
                firmaSacerdote: row[0]?.trim(),
                celebrante: row[0]?.trim(),
                observaciones: row[8]?.trim() || '',
                campo34: row[12]?.trim() || '',
                campo35: row[13]?.trim() || '',
                campo36: row[14]?.trim() || '',
                noFolioLibro,
                createdAt,
            });
        })
        .on('end', async () => {
            await AppDataSource.initialize();
            let insertados = 0;
            let duplicados = 0;

            for (const data of clientes) {
                try {
                    const existente = await AppDataSource.manager.findOne(Cliente, {
                        where: { noFolioLibro: data.noFolioLibro },
                    });

                    if (existente) {
                        duplicados++;
                        continue;
                    }

                    const cliente = AppDataSource.manager.create(Cliente, data);
                    await AppDataSource.manager.save(cliente);
                    insertados++;
                } catch (error) {
                    console.error(`❌ Error al guardar cliente con folio ${data.noFolioLibro}:`, error.message);
                }
            }

            console.log(`✅ Importación completada. Insertados: ${insertados}, Duplicados omitidos: ${duplicados}`);
            process.exit(0);
        });
}

importClientes();
