import { useContext } from 'react';
import { CartContext } from '@/lib/CartContext';

export default function ProductCard({ product }) {
  // If you spelled it differently in the provider, this will be undefined
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-6 border rounded-lg bg-card text-foreground shadow-sm flex flex-col items-center">
      <div className="text-6xl mb-4">{product.image}</div>
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-primary font-semibold mt-2">${product.price}</p>
      <button onClick={() => addToCart(product)}> Add to Cart </button>
    </div>
  );
}