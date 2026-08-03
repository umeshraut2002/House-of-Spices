import { ShieldCheck, Smartphone } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/Button";

export function Auth() {
  const [mode, setMode] = useState<"login" | "register" | "forgot">("login");
  const [loginType, setLoginType] = useState<"mobile" | "email">("mobile");
  const [otpSent, setOtpSent] = useState(false);

  return (
    <section className="mx-auto grid max-w-5xl gap-8 px-4 py-14 md:grid-cols-[.9fr_1.1fr]">
      <div className="rounded-lg bg-masala-black p-8 text-white shadow-premium">
        <Smartphone className="text-masala-gold" />
        <h1 className="mt-4 font-heading text-4xl text-masala-gold">Secure customer login</h1>
        <p className="mt-3 text-zinc-300">Login with mobile number and OTP, or use email and password for registered accounts.</p>
        <div className="mt-8 space-y-3 text-sm">
          {["OTP verification", "Saved addresses", "Order tracking in profile", "Wishlist and invoice access"].map((item) => (
            <p key={item} className="flex items-center gap-2"><ShieldCheck size={16} className="text-masala-gold" /> {item}</p>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-premium">
        <h2 className="font-heading text-4xl text-masala-red">{mode === "login" ? "Login" : mode === "register" ? "Register" : "Forgot Password"}</h2>
        {mode === "login" && (
          <div className="mt-5 grid grid-cols-2 gap-2 rounded-lg bg-masala-cream p-2">
            {(["mobile", "email"] as const).map((type) => <button key={type} onClick={() => setLoginType(type)} className={`rounded-md p-3 font-semibold capitalize ${loginType === type ? "bg-masala-red text-white" : "text-masala-black"}`}>{type}</button>)}
          </div>
        )}
        <div className="mt-6 space-y-3">
          {mode === "register" && <input placeholder="Full name" className="w-full rounded-md border p-3" />}
          {(mode === "register" || loginType === "email" || mode === "forgot") && <input placeholder="Email address" className="w-full rounded-md border p-3" />}
          {(mode === "register" || loginType === "mobile") && <input placeholder="Mobile number" className="w-full rounded-md border p-3" />}
          {mode === "login" && loginType === "mobile" && otpSent && <input placeholder="Enter 6 digit OTP" className="w-full rounded-md border p-3" />}
          {mode !== "forgot" && loginType === "email" && <input type="password" placeholder="Password" className="w-full rounded-md border p-3" />}
          {mode === "login" && loginType === "mobile" ? <Button onClick={() => setOtpSent(true)} className="w-full bg-masala-red text-white">{otpSent ? "Verify OTP" : "Send OTP"}</Button> : <Button className="w-full bg-masala-red text-white">{mode === "forgot" ? "Send Reset Link" : mode}</Button>}
        </div>
        <div className="mt-4 flex justify-between text-sm">
          <button onClick={() => setMode("login")}>Login</button>
          <button onClick={() => setMode("register")}>Register</button>
          <button onClick={() => setMode("forgot")}>Forgot Password</button>
        </div>
      </div>
    </section>
  );
}
