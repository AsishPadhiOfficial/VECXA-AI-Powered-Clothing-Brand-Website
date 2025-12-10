import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  gallery?: string[];
  fallback: string;
};

const ProductGallery = ({ gallery, fallback }: Props) => {
  const images = gallery && gallery.length > 0 ? gallery : [fallback];
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      <div
        className="relative h-[320px] sm:h-[380px] rounded-xl overflow-hidden bg-gray-900"
        style={{
          backgroundImage: `url(${images[active]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((src, idx) => (
            <button
              key={src}
              onClick={() => setActive(idx)}
              className={cn(
                "h-16 rounded-lg overflow-hidden border transition-all",
                active === idx ? "border-gray-900 ring-2 ring-gray-900" : "border-gray-200 hover:border-gray-400"
              )}
              style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" }}
              aria-label={`Select image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;

