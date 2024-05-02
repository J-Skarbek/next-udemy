'use client';
import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  //This hook provided by react returned different properties as
  //an object you can access via destructuring or via dot notation
  //the Pending prop returns a Boolean value

  return (
    <button type='submit' disabled={pending}>
      { pending ? 'Submitting...' : 'Share Meal'}
    </button>
  )

}