import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ relatedIds }: { relatedIds?: string[] }) => {
  if (!relatedIds || relatedIds.length === 0) return null;
  const related = products.filter((p) => relatedIds.includes(p.id));
  if (related.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">You may also like</p>
          <h3 className="text-lg font-semibold text-gray-900">Recommended products</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;

