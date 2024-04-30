import classes from './loading.module.css';

export default function MealsLoading() {
  return (
    <h1 className={`${classes.loading} text-bold font-4xl`}>Fetching Meals...</h1>
  )
}