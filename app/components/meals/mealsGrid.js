export default function MealsGrid({meals}) {

  return (
    <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto">
      {meals.map(meal => <li key={meal.id}>


      </li>)}
      
    </ul>
  )
}