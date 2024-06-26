import Link from "next/link"

export default function Community() {
  return (
    <>
      <header>
        <div className="flex flex-col">
          <div className="hero flex flex-col justify-center align-center items-center gap-4">
            <h1 className="text-5xl font-bold">Here&apos;s the community page!</h1>
            <p className="text-3xl font-semibold">We gather across the globe...</p>
          </div>
          <div className="cta-section text-2xl font-semibold flex gap-4 my-4 justify-center align-center items-center">
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>       
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
          <h2 className="font-bold text-4xl my-4">Community Subheader 1</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae id repellat quam autem magni! Nihil, omnis quia alias illum aperiam nam consequuntur explicabo sapiente voluptatibus hic officiis suscipit dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem assumenda nihil, temporibus illum magnam expedita possimus, earum laudantium accusamus minima voluptate perspiciatis et rerum. Ut ea eius corrupti sit libero.
          Quas, cum, dolorum provident voluptate itaque iste fugiat est porro qui corporis ut exercitationem ducimus. Hic commodi iusto nihil inventore repellendus nesciunt sed quod necessitatibus eligendi! Sequi, suscipit. Reiciendis, qui.
          Dolore quam rem cum provident, exercitationem perspiciatis. Ullam quo nam amet quos quasi magnam, laudantium vel. Aliquam perspiciatis possimus ratione neque enim, explicabo nihil deserunt ex dolorem id mollitia nisi!
          Vitae voluptates, provident nam, eum itaque dolor laudantium voluptatum quam, placeat nobis minus. Delectus sint saepe aliquid veritatis repellat adipisci? Doloremque fuga voluptatum, eaque reprehenderit saepe eius neque a? Quaerat?</p> 
        </section>
        <section className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
          <h2 className="font-bold text-4xl my-4">Community Subheader 2</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae id repellat quam autem magni! Nihil, omnis quia alias illum aperiam nam consequuntur explicabo sapiente voluptatibus hic officiis suscipit dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem assumenda nihil, temporibus illum magnam expedita possimus, earum laudantium accusamus minima voluptate perspiciatis et rerum. Ut ea eius corrupti sit libero.
          Quas, cum, dolorum provident voluptate itaque iste fugiat est porro qui corporis ut exercitationem ducimus. Hic commodi iusto nihil inventore repellendus nesciunt sed quod necessitatibus eligendi! Sequi, suscipit. Reiciendis, qui.
          Dolore quam rem cum provident, exercitationem perspiciatis. Ullam quo nam amet quos quasi magnam, laudantium vel. Aliquam perspiciatis possimus ratione neque enim, explicabo nihil deserunt ex dolorem id mollitia nisi!
          Vitae voluptates, provident nam, eum itaque dolor laudantium voluptatum quam, placeat nobis minus. Delectus sint saepe aliquid veritatis repellat adipisci? Doloremque fuga voluptatum, eaque reprehenderit saepe eius neque a? Quaerat?</p> 
        </section>
        <section className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
          <h2 className="font-bold text-4xl my-4">Community Subheader 3</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae id repellat quam autem magni! Nihil, omnis quia alias illum aperiam nam consequuntur explicabo sapiente voluptatibus hic officiis suscipit dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem assumenda nihil, temporibus illum magnam expedita possimus, earum laudantium accusamus minima voluptate perspiciatis et rerum. Ut ea eius corrupti sit libero.
          Quas, cum, dolorum provident voluptate itaque iste fugiat est porro qui corporis ut exercitationem ducimus. Hic commodi iusto nihil inventore repellendus nesciunt sed quod necessitatibus eligendi! Sequi, suscipit. Reiciendis, qui.
          Dolore quam rem cum provident, exercitationem perspiciatis. Ullam quo nam amet quos quasi magnam, laudantium vel. Aliquam perspiciatis possimus ratione neque enim, explicabo nihil deserunt ex dolorem id mollitia nisi!
          Vitae voluptates, provident nam, eum itaque dolor laudantium voluptatum quam, placeat nobis minus. Delectus sint saepe aliquid veritatis repellat adipisci? Doloremque fuga voluptatum, eaque reprehenderit saepe eius neque a? Quaerat?</p> 
        </section>   
      </main>
    </>
  )
}