import { Bell, Heart, Home, KeyRound, MapPin, PackageCheck, ReceiptText, Settings, Smartphone, UserRound } from "lucide-react";

const menu = [
  [UserRound, "Profile", "Name, email, mobile number, and account details"],
  [MapPin, "Address Book", "Add home, office, and saved delivery addresses"],
  [PackageCheck, "Orders", "Current orders, past purchases, returns, and invoices"],
  [ReceiptText, "Invoices", "Download GST-ready invoice copies"],
  [Heart, "Wishlist", "Your favorite masalas and spice blends"],
  [Settings, "Settings", "Notifications, privacy, language, and preferences"],
  [KeyRound, "Change Password", "Update password and security details"],
  [Bell, "Notifications", "Payment, delivery, offers, and stock alerts"],
];

const timeline = ["Order Placed", "Payment Verified", "Packing", "Shipped", "Out For Delivery", "Delivered"];

export function Dashboard() {
  return (
    <section className="bg-masala-cream px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-lg bg-masala-black p-6 text-white shadow-premium">
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/160?img=48" alt="Customer profile" className="h-20 w-20 rounded-full object-cover" />
              <div>
                <h1 className="font-heading text-3xl text-masala-gold">My Profile</h1>
                <p className="text-sm text-zinc-300">Priya Sharma</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-zinc-200">
              <p className="flex items-center gap-2"><Smartphone size={16} className="text-masala-gold" /> +91 98765 43210</p>
              <p className="flex items-center gap-2"><Home size={16} className="text-masala-gold" /> Jaipur, Rajasthan</p>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-4">
              {menu.map(([Icon, title, text]: any) => (
                <article key={title} className="rounded-lg bg-white p-5 shadow-premium">
                  <Icon className="text-masala-red" />
                  <h2 className="mt-3 font-heading text-xl font-bold">{title}</h2>
                  <p className="mt-2 text-xs text-zinc-600">{text}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-lg bg-white p-6 shadow-premium">
                <h2 className="font-heading text-3xl text-masala-red">Add Address</h2>
                <div className="mt-4 grid gap-3">
                  <input placeholder="Full name" className="rounded-md border p-3" />
                  <input placeholder="Mobile number" className="rounded-md border p-3" />
                  <input placeholder="House no, area, street" className="rounded-md border p-3" />
                  <div className="grid gap-3 sm:grid-cols-3">
                    <input placeholder="PIN code" className="rounded-md border p-3" />
                    <input placeholder="City" className="rounded-md border p-3" />
                    <input placeholder="State" className="rounded-md border p-3" />
                  </div>
                  <button className="rounded-md bg-masala-red p-3 font-semibold text-white">Save Address</button>
                </div>
              </section>

              <section className="rounded-lg bg-white p-6 shadow-premium">
                <h2 className="font-heading text-3xl text-masala-red">Track Latest Order</h2>
                <div className="mt-4 flex gap-3">
                  <input placeholder="Order ID" className="min-w-0 flex-1 rounded-md border p-3" />
                  <button className="rounded-md bg-masala-gold px-4 font-semibold text-masala-black">Track</button>
                </div>
                <div className="mt-6">
                  {timeline.map((step, index) => (
                    <div key={step} className="flex gap-4 pb-4">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${index < 3 ? "bg-masala-red text-white" : "bg-zinc-200 text-zinc-600"}`}>{index + 1}</span>
                      <div>
                        <b>{step}</b>
                        <p className="text-xs text-zinc-500">{index < 3 ? "Completed" : "Pending update"}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
