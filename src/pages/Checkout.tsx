import { useMemo, useState } from "react";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { useCart } from "@/contexts/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { lines, resolveLine, subtotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shippingEstimate = subtotal > 0 ? 49 : 0;
  const taxEstimate = Math.round((subtotal - discount) * 0.08);
  const total = subtotal - discount + shippingEstimate + taxEstimate;

  const lineItems = useMemo(
    () =>
      lines
        .map((line) => ({ line, detail: resolveLine(line) }))
        .filter(({ detail }) => detail.product && detail.variant),
    [lines, resolveLine]
  );

  const handlePlaceOrder = () => {
    setLoading(true);
    setTimeout(() => {
      clearCart();
      toast({
        title: "Order placed",
        description: "We’ve received your request. A specialist will follow up shortly.",
      });
      navigate("/");
    }, 900);
  };

  return (
    <PageLayout>
      <SEO
        title="Checkout | VECXA"
        description="Secure checkout for VECXA smart textile products."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
      />

      <section className="pt-24 pb-14 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">Checkout</p>
              <h1 className="text-3xl font-bold text-gray-900">Secure your order</h1>
            </div>
            <Link to="/cart" className="text-sm text-gray-600 hover:text-gray-800">
              Back to cart
            </Link>
          </div>

          {lineItems.length === 0 ? (
            <Card className="p-6">
              <p className="text-gray-700 mb-4">No items to checkout.</p>
              <Button asChild className="bg-gray-900 hover:bg-gray-800">
                <Link to="/shop">Browse products</Link>
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card className="border border-gray-100">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
                      <p className="text-sm text-gray-600">We’ll use this to confirm details and delivery.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full name</Label>
                        <Input id="name" placeholder="Jane Doe" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Work email</Label>
                        <Input id="email" type="email" placeholder="jane@company.com" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" placeholder="Acme Corp" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 555-5555" className="mt-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-100">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">Shipping address</h2>
                      <p className="text-sm text-gray-600">For delivery estimates and invoicing.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="address">Address line</Label>
                        <Input id="address" placeholder="123 Market St" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="San Francisco" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="state">State/Region</Label>
                        <Input id="state" placeholder="CA" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="postal">Postal code</Label>
                        <Input id="postal" placeholder="94103" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" placeholder="United States" className="mt-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-100">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">Payment preference</h2>
                        <p className="text-sm text-gray-600">Demo checkout—no live charges.</p>
                      </div>
                      <span className="text-xs text-gray-500">PCI-ready when wired to Stripe</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {["Card (Stripe)", "Bank transfer", "Purchase order"].map((method) => (
                        <button
                          key={method}
                          className="w-full rounded-lg border border-gray-200 hover:border-gray-400 px-4 py-3 text-left transition-colors text-gray-800"
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">
                      For production, we’ll enable Stripe Elements or your preferred PSP, add tax calculation, and shipping rate quotes.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border border-gray-100">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-gray-900">Order summary</h2>
                  <div className="space-y-3">
                    {lineItems.map(({ line, detail }) => {
                      const { product, variant } = detail;
                      if (!product || !variant) return null;
                      return (
                        <div key={line.variantId} className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{product.name}</p>
                            <p className="text-sm text-gray-600">{variant.name}</p>
                            <p className="text-xs text-gray-500">Qty {line.quantity}</p>
                          </div>
                          <div className="text-sm font-semibold text-gray-900">
                            ${(variant.price * line.quantity).toFixed(2)}
                          </div>
                        </div>
                      );
                    })}
                  </div>

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
                    <Input
                      placeholder="Promo code"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                    />
                    <Button
                      variant="outline"
                      className="border-gray-200"
                      onClick={() => setPromoApplied(Boolean(promo.trim()))}
                    >
                      Apply
                    </Button>
                  </div>

                  <Button
                    className="w-full bg-gray-900 hover:bg-gray-800"
                    onClick={handlePlaceOrder}
                    disabled={loading}
                  >
                    {loading ? "Placing order..." : "Place order"}
                  </Button>
                  <p className="text-xs text-gray-500">
                    By placing this order you agree to our Privacy Policy and that a specialist may contact you to finalize shipping and billing details.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Checkout;

