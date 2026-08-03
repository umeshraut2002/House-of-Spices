import { motion } from "framer-motion";
import { BadgeCheck, Camera, Star } from "lucide-react";

const customers = [
  ["Priya Sharma", "Jaipur", "The haldi is bright, earthy, and so fresh.", "https://i.pravatar.cc/220?img=47"],
  ["Ananya Iyer", "Bengaluru", "My sambar and rasam finally taste like home.", "https://i.pravatar.cc/220?img=32"],
  ["Meera Kapoor", "Delhi", "Beautiful packaging and strong aroma.", "https://i.pravatar.cc/220?img=44"],
  ["Farah Khan", "Mumbai", "Biryani masala is rich without overpowering.", "https://i.pravatar.cc/220?img=49"],
  ["Kavita Rao", "Hyderabad", "Fast delivery and very clean spice powders.", "https://i.pravatar.cc/220?img=26"],
  ["Nisha Patel", "Ahmedabad", "Chaat masala is now a family favorite.", "https://i.pravatar.cc/220?img=45"],
];

const gallery = ["photo-1601050690597-df0568f70950", "photo-1596040033229-a9821ebd058d", "photo-1563379091339-03246963d96a", "photo-1506368249639-73a05d6f6488", "photo-1606491956689-2ea866880c84", "photo-1571934811356-5cc061b6821f"];

export function HappyCustomers() {
  return (
    <section className="bg-masala-cream px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-semibold text-masala-gold">Customer Gallery</p>
          <h1 className="font-heading text-5xl font-extrabold text-masala-red md:text-6xl">Happy Customers, Happier Kitchens</h1>
          <p className="mt-4 text-zinc-700">Real kitchen moments, verified purchases, and warm notes from families cooking with House Of Spices across India.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {customers.map(([name, city, quote, photo], index) => (
            <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} key={name} className="rounded-lg bg-white p-5 shadow-premium">
              <div className="flex items-center gap-4">
                <img src={photo} alt={name} className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <h2 className="font-heading text-xl font-bold">{name}</h2>
                  <p className="text-sm text-zinc-500">{city}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1 text-masala-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-3 text-zinc-700">"{quote}"</p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-md bg-green-50 px-3 py-2 text-sm font-semibold text-green-700"><BadgeCheck size={16} /> Verified Purchase</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex items-center gap-3">
          <Camera className="text-masala-red" />
          <h2 className="font-heading text-4xl font-extrabold text-masala-red">Kitchen Gallery</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((imageId) => (
            <img key={imageId} src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=800&h=700&q=85`} onError={e=>{e.currentTarget.src="/images/spice-market-hero.png"}} alt="Happy customer kitchen moment" className="h-72 w-full rounded-lg object-cover shadow-premium transition hover:-translate-y-1" />
          ))}
        </div>
      </div>
    </section>
  );
}
