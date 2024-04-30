import MealsGrid from "@/components/meals/mealsGrid"
import Link from "next/link"

import { getMeals } from "@/db/meals";

export default async function Meals() {

  const meals = await getMeals();

  return (
    <>
      <header>
        <div className="flex flex-col">
          <div className="hero flex flex-col justify-center align-center items-center gap-4 p-8">
            <h1 className="text-5xl font-bold">Delicious Meals Created <span className="underline">By You</span></h1>
            <div className="px-16">
              <p className="text-lg">Choose your favorite recipie and cook it yourself -- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos corporis ducimus delectus eveniet? Itaque laudantium eum illo iste quidem in laborum nihil, facere quasi omnis consequuntur minima aut fugit rem!</p>
              <p className="text-lg font-normal">Share your favorite recipie and cook it yourself -- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos corporis ducimus delectus eveniet? Itaque laudantium eum illo iste quidem in laborum nihil, facere quasi omnis consequuntur minima aut fugit rem!</p>
            </div>
          </div>
          <div className="cta-section text-2xl font-semibold flex gap-4 my-4 justify-center align-center items-center">
            <Link href="/meals/share">Share Your Favorite Recipe</Link>
          </div>
        </div>   
      </header>
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  )
}