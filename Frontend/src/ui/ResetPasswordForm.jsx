import { Lock, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

function ResetPasswordForm() {
  return (
    <form className="relative w-full max-w-md space-y-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-2xl">
      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-100">
          Reset Password
        </h2>
        <p className="text-sm leading-6 text-slate-400">
          Enter your new password to secure your account.
        </p>
      </div>

      <div className="relative">
        <label
          htmlFor="password"
          className="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase"
        >
          New Password
        </label>
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
          />
        </div>
      </div>

      <div className="relative">
        <label
          htmlFor="passwordConfirm"
          className="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase"
        >
          Confirm New Password
        </label>
        <div className="relative">
          <Lock
            size={18}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-500"
          />
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder="••••••••"
            required
            className="box-border w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 pl-10 text-sm text-slate-100 transition outline-none placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-900/60 p-4">
        <p className="mb-3 text-xs font-bold tracking-wider text-slate-500 uppercase">
          Password requirements
        </p>
        <ul className="space-y-2 text-sm text-slate-400">
          <li className="flex items-center gap-2">
            <CheckCircle size={16} className="text-slate-500" /> At least 8
            characters
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={16} className="text-slate-500" /> Contains a
            number or symbol
          </li>
        </ul>
      </div>

      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3.5 text-sm font-bold tracking-wider text-white uppercase shadow-lg shadow-blue-950/20 transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500/50 focus:outline-none active:scale-[0.99]"
      >
        Reset Password <ArrowRight size={18} />
      </button>

      <div className="text-center">
        <Link
          to="/login"
          className="text-sm text-blue-400 transition hover:text-blue-300"
        >
          Return to Sign In
        </Link>
      </div>
    </form>
  );
}

export default ResetPasswordForm;
