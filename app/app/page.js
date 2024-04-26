import Link from "next/link"


export default function Home() {
    
  return (
    <>
      <header>
        <div className="slideshow">

        </div>
        <div>
          <div className="hero flex flex-col justify-center align-center items-center gap-4">
            <h1 className="text-5xl font-bold">Next Level Foot for Next Level Foodies</h1>
            <p className="text-3xl font-semibold">Taste and share food from all over the world.</p>
          </div>
          <div className="cta-section text-2xl font-semibold flex gap-4 my-4 justify-center align-center items-center">
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>       
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>This is the homepage</h1> 
        </div>     
      </main>
    </>
    
  );
}
