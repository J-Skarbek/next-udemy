'use client';

// import { useActionState } from "react";
import { useFormState } from 'react-dom';
import ImagePicker from '@/components/meals/imagePicker';
import submitMeal from '@/serverActions/submitMeal';
import classes from './page.module.css';
import MealsFormSubmit from '@/components/meals/mealsFormSubmit';

export default function ShareMealPage() {
  //This hook mamages the state of the componet it's placed in
  //and works with submitting forms. 1st argument is the server action
  //function we need to reference, 2nd argument is the 'state' we want to
  //initialize with: it can be null, or you can add an object with a shape
  //corresponding to the returned server action object, like below
  // https://react.dev/reference/react/useActionState
  // const [state, formAction] = useActionState(submitMeal, {message: null});
  //Arugably, this hook could be put into its own component making use of
  //'use client' directive and imported for better seperation of concerns

  //All the notes above apply to this hook too, for some reason this one
  //will work but useServerAction() will not right now (5/3/24)
  const [state, formAction] = useFormState(submitMeal, {message: null});
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        {/* with useActionState, you set the 'formAction' value to the action in the form element */}
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label='Your Image' name='image'/>
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}