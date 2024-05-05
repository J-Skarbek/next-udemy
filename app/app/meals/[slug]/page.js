import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getMeal } from '@/db/meals';
import classes from './page.module.css';


//This function works like static metadata function but must be structred and 
//named like this so next.js knows to get the metadata for the page
export async function generateMetadata({ params }) {
  const meal = getMeal(params.slug);
  //Should add this check to redirect to the correct 404 page
  //if the page slug does not exist
  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary
  }
};

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