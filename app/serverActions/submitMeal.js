'use server';

import { postMeal } from "@/db/meals";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function isInvalidText(text) {
  return !text || text.trim() === '';
}

//Note: this function now accepts two arguments because the useActionState()
//hook will by default pass in two arguments, 
//the previous state value and the form data
export default async function submitMeal(prevState, formData) {
  // Can declare a function to run only on server, but must add
  // async keyword in addition to the directive below
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  };

  if (
    isInvalidText(meal.title) || 
    isInvalidText(meal.summary) || 
    isInvalidText(meal.instructions) || 
    isInvalidText(meal.creator) || 
    isInvalidText(meal.creator_email) || !meal.creator_email.includes('@') || 
    !meal.image || meal.image.size === 0
  ) {
    // throw new Error('Invalid Input!');
    
    //server actions can return response objects as well. -- These types
    //of objects cannot have methods in them -- must be simple 
    //values, nested objects, nested arrays, etc.
    return {
      message: 'Invalid Input.'
    }
  }

  await postMeal(meal);
  revalidatePath('/meals', 'layout'); 
  //This method tells next.js to revalidate any cahce that belongs to a 
  //certain routepath -- but it only revalidates the path it is given, and if something
  //like nested paths also need revalidation, you need to call the method again
  //But you can also add a 2nd argument to the parameters, 'layout' which will change the method's
  //default revalidation of the 'page' component to the 'layout' component, which will
  //in fact wrap the main componenet in the route folder plus any nested components
  redirect('/meals');
}
