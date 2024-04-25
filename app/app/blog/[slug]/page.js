export default function Post({ params }) {
  //params pulls in an object of key/value pairs from the URL params -- just like in the
  //react spa tutorial

  return (
    <>
      <h1>This is a type of blog</h1>
      <p>{params.slug}</p>
    </>
  )
}