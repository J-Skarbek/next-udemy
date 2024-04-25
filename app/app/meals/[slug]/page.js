export default function MealDetails({ params }) {
  return (
    <main>
      <h1>
        This page is for {params.slug}
      </h1>
    </main>
  )
}