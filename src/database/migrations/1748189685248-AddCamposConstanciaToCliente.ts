import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCamposConstanciaToCliente1748189685248 implements MigrationInterface {
    name = 'AddCamposConstanciaToCliente1748189685248'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" DROP CONSTRAINT "FK_f1542c7027ce222f5767ca5320b"`);
        await queryRunner.query(`ALTER TABLE "padrino" DROP CONSTRAINT "PK_508631db684e94a161af8ba615d"`);
        await queryRunner.query(`ALTER TABLE "padrino" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "padrino" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "padrino" ADD CONSTRAINT "PK_508631db684e94a161af8ba615d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP CONSTRAINT "FK_08de450dacefc029fb35d9b938c"`);
        await queryRunner.query(`ALTER TABLE "documento" DROP CONSTRAINT "FK_d5ae42b2c6274d576708d9d73cd"`);
        await queryRunner.query(`ALTER TABLE "sacerdote" DROP CONSTRAINT "PK_0d04c1bce0a71390688055d28ff"`);
        await queryRunner.query(`ALTER TABLE "sacerdote" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "sacerdote" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sacerdote" ADD CONSTRAINT "PK_0d04c1bce0a71390688055d28ff" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "documento" DROP CONSTRAINT "FK_bbfdca8d145c7da656f0f75caf8"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "padrinoId"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "padrinoId" integer`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "sacerdote_id"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "sacerdote_id" integer`);
        await queryRunner.query(`ALTER TABLE "documento" DROP CONSTRAINT "PK_14a00534ba5a1136f420342c965"`);
        await queryRunner.query(`ALTER TABLE "documento" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "documento" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "documento" ADD CONSTRAINT "PK_14a00534ba5a1136f420342c965" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "documento" DROP COLUMN "fechaEmision"`);
        await queryRunner.query(`ALTER TABLE "documento" ADD "fechaEmision" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "documento" DROP COLUMN "cliente_id"`);
        await queryRunner.query(`ALTER TABLE "documento" ADD "cliente_id" integer`);
        await queryRunner.query(`ALTER TABLE "documento" DROP COLUMN "sacerdote_id"`);
        await queryRunner.query(`ALTER TABLE "documento" ADD "sacerdote_id" integer`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD CONSTRAINT "FK_f1542c7027ce222f5767ca5320b" FOREIGN KEY ("padrinoId") REFERENCES "padrino"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD CONSTRAINT "FK_08de450dacefc029fb35d9b938c" FOREIGN KEY ("sacerdote_id") REFERENCES "sacerdote"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "documento" ADD CONSTRAINT "FK_bbfdca8d145c7da656f0f75caf8" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "documento" ADD CONSTRAINT "FK_d5ae42b2c6274d576708d9d73cd" FOREIGN KEY ("sacerdote_id") REFERENCES "sacerdote"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "documento" DROP CONSTRAINT "FK_d5ae42b2c6274d576708d9d73cd"`);
        await queryRunner.query(`ALTER TABLE "documento" DROP CONSTRAINT "FK_bbfdca8d145c7da656f0f75caf8"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP CONSTRAINT "FK_08de450dacefc029fb35d9b938c"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP CONSTRAINT "FK_f1542c7027ce222f5767ca5320b"`);
        await queryRunner.query(`ALTER TABLE "documento" DROP COLUMN "sacerdote_id"`);
        await queryRunner.query(`ALTER TABLE "documento" ADD "sacerdote_id" uuid`);
        await queryRunner.query(`ALTER TABLE "documento" DROP COLUMN "cliente_id"`);
        await queryRunner.query(`ALTER TABLE "documento" ADD "cliente_id" uuid`);
        await queryRunner.query(`ALTER TABLE "documento" DROP COLUMN "fechaEmision"`);
        await queryRunner.query(`ALTER TABLE "documento" ADD "fechaEmision" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "documento" DROP CONSTRAINT "PK_14a00534ba5a1136f420342c965"`);
        await queryRunner.query(`ALTER TABLE "documento" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "documento" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "documento" ADD CONSTRAINT "PK_14a00534ba5a1136f420342c965" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "sacerdote_id"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "sacerdote_id" uuid`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "padrinoId"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "padrinoId" uuid`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "documento" ADD CONSTRAINT "FK_bbfdca8d145c7da656f0f75caf8" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sacerdote" DROP CONSTRAINT "PK_0d04c1bce0a71390688055d28ff"`);
        await queryRunner.query(`ALTER TABLE "sacerdote" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "sacerdote" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "sacerdote" ADD CONSTRAINT "PK_0d04c1bce0a71390688055d28ff" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "documento" ADD CONSTRAINT "FK_d5ae42b2c6274d576708d9d73cd" FOREIGN KEY ("sacerdote_id") REFERENCES "sacerdote"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD CONSTRAINT "FK_08de450dacefc029fb35d9b938c" FOREIGN KEY ("sacerdote_id") REFERENCES "sacerdote"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "padrino" DROP CONSTRAINT "PK_508631db684e94a161af8ba615d"`);
        await queryRunner.query(`ALTER TABLE "padrino" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "padrino" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "padrino" ADD CONSTRAINT "PK_508631db684e94a161af8ba615d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD CONSTRAINT "FK_f1542c7027ce222f5767ca5320b" FOREIGN KEY ("padrinoId") REFERENCES "padrino"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
