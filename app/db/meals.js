// import fs from 'node:fs';
//Hide the fs stuff from above
import { S3 } from '@aws-sdk/client-s3';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const s3 = new S3({
  region: 'us-east-2'
});

const db = sql('meals.db');

export async function getMeals() {
  //Worth noting -- becuase Next.js uses server componenets, you can wrap
  // a react componet into an async function. In this example, sqllite3 does
  // not naturllly return a promise. But by doing this, the parent component can
  // 'await' a promise in its default function

  //Abritrary delay...
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error('Loading meals failed.')
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function postMeal(meal) {
  meal.slug = slugify(meal.title, {lower: true});
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}-${Math.floor(Math.random() * 100000)}.${extension}`;
  // const stream = fs.createWriteStream(`public/images/${fileName}`); //Don't need this anymore
  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: 'jskarbek--nextjs-demo-users-image',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  //Can remove this below since we're now writing to s3
  // stream.write(Buffer.from(bufferedImage), error => {
  //   if (error) {
  //     throw new Error('Saving image failed.')
  //   }
  // });

  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
}