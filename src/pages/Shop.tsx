import { useMemo, useState } from "react";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

const Shop = () => {
  const categories = useMemo(() => Array.from(new Set(products.map((p) => p.category))), []);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 6000]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory ? p.category === activeCategory : true;
    const lowestPrice = Math.min(...p.variants.map((v) => v.price));
    const matchesPrice = lowestPrice >= priceRange[0] && lowestPrice <= priceRange[1];
    const hasStock = inStockOnly ? p.variants.some((v) => v.inStock) : true;
    return matchesSearch && matchesCategory && matchesPrice && hasStock;
  });

  return (
    <PageLayout>
      <SEO
        title="Shop smart textile systems | VECXA"
        description="Browse sensor-enabled textiles, performance wearables, and safety systems from VECXA."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
      />
      <section className="pt-24 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <div className="inline-block mb-3 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Shop
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Sensor-enabled products ready to deploy
            </h1>
            <p className="text-gray-600">
              Curated kits, shells, and bundles that pair hardware, textile integration, and analytics so you can move from pilot to rollout faster.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={activeCategory ? "outline" : "default"}
                className={activeCategory ? "" : "bg-gray-900 text-white"}
                onClick={() => setActiveCategory(null)}
                style={{ cursor: "pointer" }}
              >
                All
              </Badge>
              {categories.map((cat) => (
                <Badge
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  className={activeCategory === cat ? "bg-gray-900 text-white" : ""}
                  onClick={() => setActiveCategory(cat)}
                  style={{ cursor: "pointer" }}
                >
                  {cat}
                </Badge>
              ))}
            </div>
            <div className="w-full md:w-64">
              <Input
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-gray-100 bg-white">
              <div className="text-sm text-gray-600 mb-2">Price range</div>
              <Slider
                defaultValue={priceRange}
                max={7000}
                step={100}
                minStepsBetweenThumbs={10}
                onValueChange={(val) => setPriceRange([val[0], val[1]] as [number, number])}
              />
              <div className="text-sm text-gray-700 mt-2">
                ${priceRange[0]} - ${priceRange[1]}
              </div>
            </div>
            <div className="p-4 rounded-xl border border-gray-100 bg-white flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Availability</div>
                <div className="text-sm text-gray-900 font-medium">In stock only</div>
              </div>
              <button
                onClick={() => setInStockOnly((prev) => !prev)}
                className={`w-12 h-6 rounded-full transition-all ${inStockOnly ? "bg-gray-900" : "bg-gray-200"}`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-all ${
                    inStockOnly ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            <div className="p-4 rounded-xl border border-gray-100 bg-white text-sm text-gray-600">
              Filters are demo-only. For production, we can wire these to server-side faceting and search.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-gray-600 text-sm">
                No products match your search. Try adjusting filters.
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Shop;

