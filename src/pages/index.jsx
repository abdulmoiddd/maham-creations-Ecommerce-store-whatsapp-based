import Head from 'next/head';
import Link from 'next/link';
import { products } from '@/lib/data';
import ProductCard from '@/components/essential/ProductCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <Head>
        <title>My WhatsApp Store</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Our Products</h1>
          <Link href="/cart" className="bg-secondary text-white px-4 py-2 rounded">
            View Cart
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}