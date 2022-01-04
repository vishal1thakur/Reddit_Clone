import { Migration } from '@mikro-orm/migrations';

export class Migration20220102185557 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" drop constraint if exists "post_created_at_check";');
    this.addSql('alter table "post" alter column "created_at" type jsonb using ("created_at"::jsonb);');
    this.addSql('alter table "post" drop constraint if exists "post_updated_at_check";');
    this.addSql('alter table "post" alter column "updated_at" type jsonb using ("updated_at"::jsonb);');
  }

}
