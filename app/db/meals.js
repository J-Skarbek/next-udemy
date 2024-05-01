import sql from 'better-sqlite3';

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