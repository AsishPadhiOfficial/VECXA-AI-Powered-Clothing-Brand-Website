type Review = {
  author: string;
  role: string;
  rating: number;
  summary: string;
};

const sampleReviews: Review[] = [
  {
    author: "Alex Romero",
    role: "Chief Safety Officer, Industrial",
    rating: 5,
    summary: "Deployment-ready hardware with dashboards our ops team actually uses. The telemetry closed gaps we couldn’t see before.",
  },
  {
    author: "Dana Lee",
    role: "Head Coach, Elite Sports",
    rating: 4,
    summary: "The insole data let us tune workloads mid-season. Easy export to our analytics stack and great support.",
  },
  {
    author: "Morgan Blake",
    role: "VP R&D, Apparel",
    rating: 5,
    summary: "Fast prototypes, washable sensors, and no surprises in production. Exactly the partner we needed.",
  },
];

const ReviewsSection = ({
  rating,
  reviewsCount,
}: {
  rating?: number;
  reviewsCount?: number;
}) => {
  return (
    <section className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Customer proof</p>
          <h3 className="text-lg font-semibold text-gray-900">Reviews & outcomes</h3>
        </div>
        {rating ? (
          <div className="text-right">
            <div className="text-xl font-semibold text-gray-900">{rating.toFixed(1)} ★</div>
            <p className="text-sm text-gray-500">{reviewsCount ?? 0} reviews</p>
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {sampleReviews.map((review) => (
          <div key={review.author} className="rounded-xl border border-gray-100 p-4 bg-gray-50">
            <div className="text-sm text-gray-900 font-semibold">{review.author}</div>
            <div className="text-xs text-gray-500 mb-2">{review.role}</div>
            <div className="text-yellow-500 text-sm mb-2">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{review.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;

