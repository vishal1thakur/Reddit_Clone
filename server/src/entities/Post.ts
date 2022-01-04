import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
// Post is the Table
export class Post {
  // These are each a column
  @PrimaryKey() // create a column type
  id!: number; // what the column is

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: "text" })
  title!: string;
}
