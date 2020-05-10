import {MigrationInterface, QueryRunner,  Table, TableIndex} from "typeorm";

export class maratona1589065700831 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "maratona",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "aula",
                    type: "varchar",
                }
            ]
        }), true)

        await queryRunner.createIndex("maratona", new TableIndex({
            name: "IDX_MARATONA_NAME",
            columnNames: ["name"]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropIndex("maratona", "IDX_MARATONA_NAME");
        await queryRunner.dropTable("maratona");
    }

}
