import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { useCart } from "@/contexts/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart = () => {
  const { lines, resolveLine, updateQuantity, removeFromCart, subtotal } = useCart();
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shippingEstimate = subtotal > 0 ? 49 : 0;
  const taxEstimate = Math.round((subtotal - discount) * 0.08);
  const total = subtotal - discount + shippingEstimate + taxEstimate;

  return (
    <PageLayout>
      <SEO
        title="Cart | VECXA"
        description="Review your VECXA cart before checkout."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
      />

      <section className="pt-24 pb-14 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your cart</h1>

          {lines.length === 0 ? (
            <Card className="p-6">
              <p className="text-gray-700 mb-4">Your cart is empty.</p>
              <Button asChild className="bg-gray-900 hover:bg-gray-800">
                <Link to="/shop">Browse products</Link>
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 border border-gray-100">
                <CardContent className="p-0 divide-y divide-gray-100">
                  {lines.map((line) => {
                    const { product, variant } = resolveLine(line);
                    if (!product || !variant) return null;
                    return (
                      <div key={line.variantId} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4">
                        <div
                          className="h-20 w-24 rounded-lg bg-gray-100 flex-shrink-0"
                          style={{
                            backgroundImage: `url(${product.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-sm text-gray-500">{product.category}</p>
                              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                              <p className="text-sm text-gray-600">{variant.name}</p>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => removeFromCart(line.variantId)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-3">
                              <button
                                className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50"
                                onClick={() => updateQuantity(line.variantId, line.quantity - 1)}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-sm font-medium">{line.quantity}</span>
                              <button
                                className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50"
                                onClick={() => updateQuantity(line.variantId, line.quantity + 1)}
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">Unit</p>
                              <p className="text-lg font-semibold text-gray-900">${variant.price}</p>
                              <p className="text-sm text-gray-500">Subtotal ${(variant.price * line.quantity).toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="border border-gray-100">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900">Order summary</h2>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Promo code</span>
                      <span className={promoApplied ? "text-emerald-600" : "text-gray-500"}>
                        {promoApplied ? `- $${discount.toFixed(2)}` : "Add code"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping (est.)</span>
                      <span>${shippingEstimate.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes (est.)</span>
                      <span>${taxEstimate.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between text-gray-900 font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      placeholder="Promo code"
                      className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    <Button
                      variant="outline"
                      onClick={() => {
                        setPromoApplied(Boolean(promo.trim()));
                      }}
                      className="border-gray-200"
                    >
                      Apply
                    </Button>
                  </div>
                  <Button asChild className="w-full bg-gray-900 hover:bg-gray-800">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </Button>
                  <Button variant="outline" className="w-full border-gray-200" asChild>
                    <Link to="/shop">Continue shopping</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Cart;

