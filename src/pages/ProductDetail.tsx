import { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, ShoppingBag, ShieldCheck, Truck, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ProductGallery from "@/components/ProductGallery";
import ReviewsSection from "@/components/ReviewsSection";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);
  const [variantId, setVariantId] = useState(product?.variants[0]?.id);

  if (!product) {
    return (
      <PageLayout>
        <section className="pt-24 pb-12 w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <p className="text-gray-700">Product not found.</p>
          <Button variant="link" onClick={() => navigate("/shop")}>
            Go to shop
          </Button>
        </section>
      </PageLayout>
    );
  }

  const selectedVariant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];

  const handleAdd = () => {
    if (!selectedVariant) return;
    addToCart(product, selectedVariant, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} — ${selectedVariant.name}`,
    });
  };

  return (
    <PageLayout>
      <SEO
        title={`${product.name} | VECXA`}
        description={product.shortDescription}
        imageUrl={product.image}
      />
      <section className="pt-24 pb-14 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Link to="/shop" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-4">
              <Card className="overflow-hidden border border-gray-100 p-6">
                {product.badge && (
                  <Badge variant="secondary" className="bg-gray-900 text-white mb-3">
                    {product.badge}
                  </Badge>
                )}
                <ProductGallery gallery={product.gallery} fallback={product.image} />
              </Card>
              <Card className="border border-gray-100">
                <CardContent className="p-6 space-y-3">
                  <p className="text-sm text-gray-600">{product.description}</p>
                  {product.highlights && (
                    <div className="grid sm:grid-cols-2 gap-2">
                      {product.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-gray-500 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="border border-gray-100 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-1">
                    <Badge variant="outline">{product.category}</Badge>
                    <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                    <p className="text-gray-600">{product.shortDescription}</p>
                    {product.rating && (
                      <p className="text-sm text-gray-600">
                        {product.rating.toFixed(1)} ★ ({product.reviewsCount ?? 0} reviews)
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-gray-500">Select configuration</p>
                    <div className="space-y-2">
                      {product.variants.map((v) => (
                        <button
                          key={v.id}
                          onClick={() => setVariantId(v.id)}
                          className={`w-full flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors ${variantId === v.id
                              ? "border-gray-900 bg-gray-900 text-white"
                              : "border-gray-200 hover:border-gray-400 text-gray-800"
                            }`}
                        >
                          <div>
                            <div className="font-semibold">{v.name}</div>
                            <div className={variantId === v.id ? "text-gray-200" : "text-gray-500 text-sm"}>
                              {v.inStock ? "In stock" : "Backorder"}
                            </div>
                          </div>
                          <div className="text-right font-semibold">${v.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button size="lg" onClick={handleAdd} className="bg-gray-900 hover:bg-gray-800">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to cart
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => navigate("/contact")} className="border-gray-200">
                      Talk to sales
                    </Button>
                  </div>

                  <div className="border-t border-gray-100 pt-4 space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-gray-500" />
                      <span>Ships in 5-7 business days. Expedited available.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-gray-500" />
                      <span>2-year hardware warranty. Serviceable modules.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span>Downloadable specs, API docs, and onboarding playbook.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <ReviewsSection rating={product.rating} reviewsCount={product.reviewsCount} />
            </div>
            <div className="space-y-6">
              <Card className="border border-gray-100">
                <CardContent className="p-5 space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Datasheets</p>
                    <h3 className="font-semibold text-gray-900">Documents</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-500" /> Technical spec (PDF)
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-500" /> Integration guide
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-500" /> Safety and compliance
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-10">
            <RelatedProducts relatedIds={product.relatedIds} />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProductDetail;

