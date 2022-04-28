import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterCarsFineAmoutName1651089555712 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("cars", "final_amount", "fine_amount");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("cars", "final_amount", "final_amount");
  }
}
