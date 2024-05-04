import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getMeal } from '@/db/meals';
import classes from './page.module.css';

export default function MealDetails({ params }) {

  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }
  
  meal.instructions = meal.instructions.replace(/\n/g, '<br />')

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={`https://jskarbek--nextjs-demo-users-image.s3.us-east-2.amazonaws.com/${meal.image}`} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p 
          className={classes.instructions} 
          dangerouslySetInnerHTML={{
            __html: meal.instructions
          }}
        >
        </p>
      </main>
    </>
  )
}