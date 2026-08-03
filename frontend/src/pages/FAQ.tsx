import { HelpCircle } from "lucide-react";
import { faqs } from "../lib/data";

export function FAQ(){
  return <section className="bg-masala-cream px-4 py-12"><div className="mx-auto max-w-5xl"><div className="max-w-3xl"><p className="font-semibold text-masala-gold">Questions</p><h1 className="font-heading text-5xl font-extrabold text-masala-red md:text-6xl">FAQ</h1><p className="mt-4 text-zinc-700">Find quick answers about freshness, delivery, quality, order tracking, and support.</p></div><div className="mt-10 grid gap-4">{faqs.map((faq,index)=><details key={`${faq.q}-${index}`} className="rounded-lg bg-white p-5 shadow-premium"><summary className="flex cursor-pointer items-center gap-3 font-semibold text-masala-black"><HelpCircle className="h-5 w-5 shrink-0 text-masala-red"/>{faq.q}</summary><p className="mt-3 pl-8 text-zinc-600">{faq.a}</p></details>)}</div></div></section>
}
