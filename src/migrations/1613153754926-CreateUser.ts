import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1613153754926 implements MigrationInterface {
  name = 'CreateUser1613153754926';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "isActive" boolean NOT NULL DEFAULT (1), "createdBy" varchar, "updatedBy" varchar, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, "name" varchar NOT NULL, "email" varchar NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
