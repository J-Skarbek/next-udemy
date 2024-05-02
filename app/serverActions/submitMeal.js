'use server';

import { postMeal } from "@/db/meals";
import { redirect } from "next/navigation";

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
  }
  await postMeal(meal);
  redirect('/meals');
}
