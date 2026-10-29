import { Lock, Mail, ArrowRight } from "lucide-react";
import { Link, redirect } from "react-router-dom";
import { useLogin } from "../features/Authentication/useLogin";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const { loginUser, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    loginUser({ email, password });
    redirect("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-md space-y-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-2xl"
    >
      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-100">
          Sign In
        </h2>
        <p className="text-sm leading-6 text-slate-400">
          Welcome back. Enter your credentials to continue.
        </p>
      </div>

      <div className="relative">
        <label
          htmlFor="email"
          className="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase"
        >
          Email
        </label>
        <div className="relative">
          <Mail
            size={18}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-500"
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="box-border w-full cursor-pointer rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 pl-10 text-sm text-slate-100 transition outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="relative">
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-xs font-bold tracking-wider text-slate-400 uppercase"
          >
            Password
          </label>
          <Link
            to="/forgotPassword"
            className="text-xs text-blue-400 transition hover:text-blue-300"
          >
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <Lock
            size={18}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-500"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
            className="box-border w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 pl-10 text-sm text-slate-100 transition outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          id="remember"
          name="remember"
          type="checkbox"
          className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0"
          value={check}
          onChange={(e) => setCheck(e.target.value)}
        />
        <label htmlFor="remember" className="text-sm text-slate-400">
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3.5 text-sm font-bold tracking-wider text-white uppercase shadow-lg shadow-blue-950/20 transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500/50 focus:outline-none active:scale-[0.99]"
        disabled={isLoading}
      >
        Sign In <ArrowRight size={18} />
      </button>

      <div className="text-center">
        <span className="text-sm text-slate-400">Don't have an account? </span>
        <Link
          to="/signup"
          className="text-sm text-blue-400 transition hover:text-blue-300"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
