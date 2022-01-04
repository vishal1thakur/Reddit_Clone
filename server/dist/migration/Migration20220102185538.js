"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220102185538 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220102185538 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "post" drop constraint if exists "post_created_at_check";');
        this.addSql('alter table "post" alter column "created_at" type jsonb using ("created_at"::jsonb);');
        this.addSql('alter table "post" drop constraint if exists "post_updated_at_check";');
        this.addSql('alter table "post" alter column "updated_at" type jsonb using ("updated_at"::jsonb);');
    }
}
exports.Migration20220102185538 = Migration20220102185538;
//# sourceMappingURL=Migration20220102185538.js.map