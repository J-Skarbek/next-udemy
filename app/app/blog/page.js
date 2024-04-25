import Link from "next/link"

export default function BlogPage() {
  return (
    <>
    <h1>This is the blog archive</h1>
    <p>
      <Link href='blog/post-1'>Post 1</Link>
    </p>
    <p>
      <Link href='blog/post-2'>Post 2</Link>
    </p>
    </>
  )
}