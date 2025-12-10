import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products, type Product, type ProductVariant } from "@/data/products";

export type CartLine = {
  productId: string;
  variantId: string;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  addToCart: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeFromCart: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  resolveLine: (line: CartLine) => { product?: Product; variant?: ProductVariant };
};

const CartContext = createContext<CartContextValue | null>(null);

const CART_KEY = "vecxa-cart";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [lines, setLines] = useState<CartLine[]>(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? (JSON.parse(raw) as CartLine[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(lines));
  }, [lines]);

  const addToCart = (product: Product, variant: ProductVariant, quantity = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.variantId === variant.id);
      if (existing) {
        return prev.map((l) =>
          l.variantId === variant.id ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [...prev, { productId: product.id, variantId: variant.id, quantity }];
    });
  };

  const removeFromCart = (variantId: string) => {
    setLines((prev) => prev.filter((l) => l.variantId !== variantId));
  };

  const updateQuantity = (variantId: string, quantity: number) => {
    setLines((prev) =>
      prev.map((l) => (l.variantId === variantId ? { ...l, quantity: Math.max(1, quantity) } : l))
    );
  };

  const clearCart = () => setLines([]);

  const resolveLine = (line: CartLine) => {
    const product = products.find((p) => p.id === line.productId);
    const variant = product?.variants.find((v) => v.id === line.variantId);
    return { product, variant };
  };

  const subtotal = useMemo(() => {
    return lines.reduce((sum, line) => {
      const { variant } = resolveLine(line);
      if (!variant) return sum;
      return sum + variant.price * line.quantity;
    }, 0);
  }, [lines]);

  const totalItems = useMemo(
    () => lines.reduce((sum, line) => sum + line.quantity, 0),
    [lines]
  );

  const value: CartContextValue = {
    lines,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    resolveLine,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
};

