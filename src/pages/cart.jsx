import { useContext } from 'react';
import Link from 'next/link';
import { CartContext } from '@/lib/CartContext';
import CheckoutButton from '@/components/essential/CheckoutButton';

export default function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center">
            <p className="mb-4">Your cart is empty.</p>
            <Link href="/" className="text-primary underline">Return to Store</Link>
          </div>
        ) : (
          <div className="bg-card p-6 rounded-lg border">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between border-b py-4 last:border-0">
                <div>
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-sm text-gray-500 ml-2">x{item.qty}</span>
                </div>
                <span>${item.price * item.qty}</span>
              </div>
            ))}

            <div className="flex justify-between text-xl font-bold mt-6 pt-4 border-t">
              <span>Total:</span>
              <span>${total}</span>
            </div>

            <div className="mt-8">
              <CheckoutButton />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}