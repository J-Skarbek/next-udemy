import Link from 'next/link';
import Image from 'next/image';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="flex flex-col">
      <header>
        <div className="meal-coverImg relative w-100 h-52">
          <Image src={`https://jskarbek--nextjs-demo-users-image.s3.us-east-2.amazonaws.com/${image}`} alt={title} className="object-cover" fill />
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