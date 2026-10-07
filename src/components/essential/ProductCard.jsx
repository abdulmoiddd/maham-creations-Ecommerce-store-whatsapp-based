import { useContext } from 'react';
import { CartContext } from '@/lib/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-6 border rounded-lg bg-card text-foreground shadow-sm flex flex-col items-center">
      <div className="text-6xl mb-4">{product.image}</div>
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-primary font-semibold mt-2">${product.price}</p>
      <button 
        onClick={() => addToCart(product)}
        className="mt-4 bg-primary text-white px-4 py-2 rounded hover:opacity-90 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}