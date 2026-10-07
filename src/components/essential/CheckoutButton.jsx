import { useContext, useState } from 'react';
import { CartContext } from '@/lib/CartContext';
import { formatOrderForWhatsApp } from '@/lib/whatsappFormatter';
import { ClipboardCopy, AlertCircle } from 'lucide-react';

export default function CheckoutButton() {
  const { cart } = useContext(CartContext);
  const [showFallback, setShowFallback] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Replace with your actual business WhatsApp number (country code only, no + or 00)
  const BUSINESS_NUMBER = "923369487441";

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setIsProcessing(true);

    try {
      // Optional: Fire off an event to Firebase Realtime Database/Firestore 
      // here to track the checkout intent before redirecting.
      
      const payload = formatOrderForWhatsApp(cart);
      const whatsappUrl = `https://wa.me/${BUSINESS_NUMBER}?text=${payload}`;
      
      // Attempt to launch WhatsApp
      const newWindow = window.open(whatsappUrl, '_blank');
      
      // Fallback detection: Check if the browser's popup blocker stopped the window
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        setShowFallback(true);
      } else {
        // Window opened, but reveal fallback in current tab in case desktop users get stuck
        setTimeout(() => setShowFallback(true), 2000);
      }
    } catch (error) {
      console.error("Redirection error:", error);
      setShowFallback(true);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleManualCopy = async () => {
    const payload = formatOrderForWhatsApp(cart);
    // Decode the URL-safe payload back to human-readable text for the clipboard
    await navigator.clipboard.writeText(decodeURIComponent(payload));
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="w-full">
      <button 
        onClick={handleCheckout}
        disabled={isProcessing}
        className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
      >
        {isProcessing ? "Processing..." : "Buy Now via WhatsApp"}
      </button>

      {/* Fallback Modal */}
      {showFallback && (
        <div className="mt-6 p-4 border border-orange-200 bg-orange-50 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2 text-orange-800 font-semibold mb-2">
            <AlertCircle size={20} />
            <p>Having trouble opening WhatsApp?</p>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            If the chat didn't open automatically, or you are on a desktop without WhatsApp installed, copy your order details below and manually message us at <strong>+{BUSINESS_NUMBER}</strong>.
          </p>
          
          <button 
            onClick={handleManualCopy}
            className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            <ClipboardCopy size={18} className={copied ? "text-green-600" : "text-gray-500"} />
            {copied ? "Order Copied to Clipboard!" : "Copy Order Details"}
          </button>
        </div>
      )}
    </div>
  );
}