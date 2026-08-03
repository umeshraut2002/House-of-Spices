import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
export function Button({className,...props}:ButtonHTMLAttributes<HTMLButtonElement>){return <button className={twMerge("inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold transition hover:-translate-y-0.5 disabled:opacity-50",className)} {...props}/>;}
