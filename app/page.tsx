// client component
// server component - default

import Product from "@/components/Product";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();
  // console.log(products)

  return (
    <main className="min-h-screen max-w-7x1 mx-auto px-8 xl:px-0 mt-48">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-4xl font-bold text-center">Deals of the day</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
