import Link from 'next/link';
import Image from 'next/image';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="flex flex-col">
      <header>
        <div className="meal-coverImg">
          <Image src={image} alt={title} fill />
        </div>
        <div className="flex flex-col">
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col">
        <p className="text-sm">{summary}</p>
        <div className="text-sm">
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}