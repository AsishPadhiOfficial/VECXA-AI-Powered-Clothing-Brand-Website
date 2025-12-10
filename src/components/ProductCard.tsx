import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const lowestPrice = Math.min(...product.variants.map((v) => v.price));

  return (
    <Card className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
      <div
        className="relative h-48 bg-gray-900"
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {product.badge && (
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {product.badge}
            </Badge>
          )}
          <Badge variant="outline" className="bg-black/60 text-white border-white/20">
            {product.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.shortDescription}</p>
          </div>
          <span className="text-sm font-medium text-gray-700">${lowestPrice}</span>
        </div>

        {product.highlights && (
          <ul className="text-sm text-gray-600 space-y-1 mb-3">
            {product.highlights.slice(0, 3).map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-gray-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <Link
            to={`/product/${product.slug}`}
            className={cn(
              "inline-flex items-center text-sm text-gray-800 font-medium hover:text-gray-600 transition-colors"
            )}
          >
            View details
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          <Link
            to={`/product/${product.slug}`}
            className="inline-flex items-center px-3 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to cart
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

