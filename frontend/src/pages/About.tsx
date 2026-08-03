import { motion } from "framer-motion";
import { Award, HeartHandshake, Leaf, ShieldCheck, Truck, Users } from "lucide-react";

const values = [
  [Leaf, "Freshly Ground", "Small-batch grinding keeps color, aroma, and natural oils alive."],
  [ShieldCheck, "Quality Checked", "Every batch is checked for purity, hygiene, and consistent taste."],
  [Truck, "Delivered Fresh", "Aroma-safe packs are shipped quickly across serviceable Indian PIN codes."],
  [HeartHandshake, "Made For Home", "Balanced blends for everyday dal, sabzi, biryani, snacks, and festive meals."],
];

export function About() {
  return (
    <div className="bg-masala-cream">
      <section className="relative min-h-[68vh] overflow-hidden bg-masala-black text-white">
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1800&q=85"
          alt="Premium Indian spices"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[68vh] max-w-7xl items-center px-4">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="font-semibold text-masala-gold">About House Of Spices</p>
            <h1 className="mt-4 font-heading text-5xl font-extrabold md:text-7xl">Spices with the soul of Indian kitchens.</h1>
            <p className="mt-5 text-lg text-zinc-100">We source whole spices from trusted Indian farms, roast and grind them in careful batches, and pack them fresh for homes that care about real flavor.</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <h2 className="font-heading text-4xl font-extrabold text-masala-red">Our Story</h2>
          <p className="mt-4 text-zinc-700">House Of Spices began with one promise: make spices feel as fresh as the masala box opened in a family kitchen. Our blends are inspired by regional Indian cooking, from Punjabi chole to coastal fish curry and fragrant biryani.</p>
          <p className="mt-4 text-zinc-700">The brand is built for modern homes: premium sourcing, clean packing, transparent batches, fast shipping, and recipes that help every cook feel confident.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map(([Icon, title, text]: any) => (
            <motion.article whileHover={{ y: -5 }} key={title} className="rounded-lg bg-white p-6 shadow-premium">
              <Icon className="text-masala-red" />
              <h3 className="mt-4 font-heading text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-14">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[[Award, "20+", "Signature blends"], [Users, "50k+", "Happy kitchens"], [ShieldCheck, "100%", "Batch traceability"], [Truck, "India", "Wide delivery"]].map(([Icon, value, label]: any) => (
            <div key={label} className="rounded-lg border border-zinc-100 p-6 text-center shadow-premium">
              <Icon className="mx-auto text-masala-gold" />
              <b className="mt-3 block font-heading text-4xl text-masala-red">{value}</b>
              <span className="text-sm text-zinc-600">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
