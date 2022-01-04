import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
// import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
  // Initialize a type of entry
  const orm = await MikroORM.init(mikroConfig);

  // Migrate on change
  await orm.getMigrator().up();

  // const posts = await orm.em.find(Post, {});
  // console.log(posts);

  // Create a Post (Only makes an instance of a Post)
  // const post = orm.em.create(Post, { title: "my first post" });

  // // Insert the instance of Post into the db
  // await orm.em.persistAndFlush(post);
};

main().catch((err) => {
  console.error(err);
});
