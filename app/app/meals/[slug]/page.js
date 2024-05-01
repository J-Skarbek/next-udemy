import Image from 'next/image';
import classes from './page.module.css';


export default function MealDetails({ params }) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill alt='helo' />

        </div>
        <div className={classes.headerText}>
          <h1>TITLE</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${'EMAIL'}`}>NAME</a>
          </p>
          <p className={classes.summary}></p>
        </div>

      </header>
        <main>
        <h1>
          This page is for {params.slug}
        </h1>
        <p 
          className={classes.instructions} 
          dangerouslySetInnerHTML={{
            __html: '...'
          }}
        >
        </p>
      </main>
    </>
  )
}