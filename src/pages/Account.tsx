import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, CreditCard, Package, Heart, Shield } from "lucide-react";

const Account = () => {
  const orders = [
    { id: "ORD-1024", status: "Processing", total: "$7,899", date: "Dec 12, 2025" },
    { id: "ORD-1002", status: "Delivered", total: "$5,320", date: "Nov 02, 2025" },
  ];

  const addresses = [
    { label: "HQ", name: "VECXA Ops", line: "123 Market St", city: "San Francisco, CA 94103" },
    { label: "EU Hub", name: "VECXA EU", line: "Karlavägen 18", city: "Stockholm, Sweden" },
  ];

  const payments = [
    { brand: "Visa", last4: "4242", exp: "12/28" },
    { brand: "Mastercard", last4: "9901", exp: "04/27" },
  ];

  const wishlist = [
    { name: "FireCat 6th SENSE Jacket", link: "/product/firecat-6th-sense-jacket" },
    { name: "Workwear Climate Shell", link: "/product/workwear-climate-shell" },
  ];

  return (
    <PageLayout>
      <SEO
        title="Account | VECXA"
        description="Account dashboard with orders, addresses, and saved items."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
      />
      <section className="pt-24 pb-14 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">Account</p>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
            </div>
            <Button variant="outline" asChild>
              <Link to="/shop">Shop products</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-500 mb-1">Status</div>
                <div className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  Verified <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-sm text-gray-600 mt-2">Trusted account with procurement access.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-500 mb-1">Orders</div>
                <div className="text-xl font-semibold text-gray-900">{orders.length}</div>
                <p className="text-sm text-gray-600 mt-2">Recent purchase activity.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-500 mb-1">Saved items</div>
                <div className="text-xl font-semibold text-gray-900">{wishlist.length}</div>
                <p className="text-sm text-gray-600 mt-2">Wishlist ready to order.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-500 mb-1">Support</div>
                <div className="text-xl font-semibold text-gray-900">Priority</div>
                <p className="text-sm text-gray-600 mt-2">24/7 deployment assistance.</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Orders</p>
                    <h2 className="text-lg font-semibold text-gray-900">Order history</h2>
                  </div>
                  <Link to="/orders" className="text-sm text-gray-600 hover:text-gray-800">
                    View all
                  </Link>
                </div>
                <div className="space-y-3">
                  {orders.map((order) => (
                    <div key={order.id} className="rounded-xl border border-gray-100 p-4 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="bg-gray-900 text-white">
                          {order.status}
                        </Badge>
                        <p className="text-sm text-gray-900 font-semibold mt-1">{order.total}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <h3 className="font-semibold text-gray-900">Saved addresses</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    {addresses.map((addr) => (
                      <div key={addr.label} className="rounded-lg border border-gray-100 p-3">
                        <div className="font-medium text-gray-900">{addr.label}</div>
                        <div>{addr.name}</div>
                        <div>{addr.line}</div>
                        <div>{addr.city}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-gray-500" />
                    <h3 className="font-semibold text-gray-900">Payment methods</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    {payments.map((pm) => (
                      <div key={pm.last4} className="rounded-lg border border-gray-100 p-3 flex items-center justify-between">
                        <span>{pm.brand} •••• {pm.last4}</span>
                        <span className="text-gray-500 text-xs">Exp {pm.exp}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-gray-500" />
                  <h3 className="font-semibold text-gray-900">Wishlist</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {wishlist.map((item) => (
                    <Link key={item.name} to={item.link} className="rounded-lg border border-gray-100 p-3 hover:border-gray-300">
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <p className="text-sm text-gray-600">Ready to configure and order.</p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-500" />
                  <h3 className="font-semibold text-gray-900">Security</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MFA enforced for this account</li>
                  <li>• Device verification enabled</li>
                  <li>• SOC 2 & GDPR ready processes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Account;

