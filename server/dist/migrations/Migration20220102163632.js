"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220102163632 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220102163632 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "created_at" jsonb not null, "updated_at" jsonb not null, "title" varchar(255) not null);');
    }
}
exports.Migration20220102163632 = Migration20220102163632;
//# sourceMappingURL=Migration20220102163632.js.map