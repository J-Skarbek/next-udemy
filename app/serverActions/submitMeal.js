'use server';

import { postMeal } from "@/db/meals";
import { redirect } from "next/navigation";

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export default async function submitMeal(formData) {
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
    throw new Error('Invalid Input!')

  }

  await postMeal(meal);
  redirect('/meals');
}
