'use server';

import { postMeal } from "@/db/meals";
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
    isInvalidText(meal.creator_email) || meal.creator_email.includes('@') || 
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
  redirect('/meals');
}
