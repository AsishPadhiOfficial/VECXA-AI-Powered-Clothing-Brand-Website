import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const mockOrders = [
  {
    id: "ORD-1024",
    status: "Processing",
    total: "$7,899",
    date: "Dec 12, 2025",
    items: [
      { name: "FireCat 6th SENSE Jacket", qty: 3 },
      { name: "Workwear Climate Shell", qty: 5 },
    ],
  },
  {
    id: "ORD-1002",
    status: "Delivered",
    total: "$5,320",
    date: "Nov 02, 2025",
    items: [{ name: "Performance Footwear Insole", qty: 4 }],
  },
];

const Orders = () => {
  return (
    <PageLayout>
      <SEO
        title="Orders | VECXA"
        description="Order history and details."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
      />
      <section className="pt-24 pb-14 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">Orders</p>
              <h1 className="text-3xl font-bold text-gray-900">Order history</h1>
            </div>
            <Button variant="outline" asChild>
              <Link to="/shop">Shop</Link>
            </Button>
          </div>

          <div className="space-y-4">
            {mockOrders.map((order) => (
              <Card key={order.id} className="border border-gray-100">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">{order.date}</p>
                      <h2 className="text-lg font-semibold text-gray-900">{order.id}</h2>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="bg-gray-900 text-white">
                        {order.status}
                      </Badge>
                      <div className="text-sm font-semibold text-gray-900 mt-1">{order.total}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 space-y-1">
                    {order.items.map((item) => (
                      <div key={item.name} className="flex justify-between">
                        <span>{item.name}</span>
                        <span className="text-gray-500">Qty {item.qty}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Download invoice
                    </Button>
                    <Button variant="outline" size="sm">
                      Track shipment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Orders;

