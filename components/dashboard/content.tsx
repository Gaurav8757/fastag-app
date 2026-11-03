import {
  Wallet,
  CreditCard,
  Car,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowDownLeft,
  Clock,
  Sparkles,
} from "lucide-react";
import List01 from "./list-01";
import List02 from "./list-02";
import { Button } from "@/components/ui/button";

export default function Content() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner matching site brand theme */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-[#004299] to-[#002f6c] p-6 text-white shadow-xl shadow-primary/10">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-52 h-52 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-xs font-semibold backdrop-blur-xs text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FASTag Express Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back to ASL FastPay
            </h1>
            <p className="text-sm text-blue-100 max-w-xl">
              Monitor active FASTag RFID tags, instant toll wallet balances, and track automated highway debits in real-time.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 hover:text-white"
            >
              <Car className="w-4 h-4 mr-1.5" />
              Add Vehicle
            </Button>
            <Button
              size="sm"
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold shadow-md shadow-amber-400/20"
            >
              <Zap className="w-4 h-4 mr-1.5 text-slate-900" />
              Quick Recharge
            </Button>
          </div>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-card border border-border/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Wallet Balance</p>
            <h3 className="text-xl font-bold text-foreground mt-0.5">₹26,540.25</h3>
            <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-0.5 mt-0.5">
              <ArrowDownLeft className="w-3 h-3" /> Auto-recharge Active
            </span>
          </div>
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <Wallet className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Active Tags</p>
            <h3 className="text-xl font-bold text-foreground mt-0.5">5 Vehicles</h3>
            <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-0.5 mt-0.5">
              <ShieldCheck className="w-3 h-3" /> All Validated
            </span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600">
            <Car className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Monthly Toll Spend</p>
            <h3 className="text-xl font-bold text-foreground mt-0.5">₹4,820.00</h3>
            <span className="text-[11px] text-blue-600 font-semibold flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="w-3 h-3" /> -12% vs last month
            </span>
          </div>
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Last Crossing</p>
            <h3 className="text-xl font-bold text-foreground mt-0.5">₹85.00</h3>
            <span className="text-[11px] text-muted-foreground flex items-center gap-0.5 mt-0.5">
              <Clock className="w-3 h-3" /> Kherki Daula Toll (2h ago)
            </span>
          </div>
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600">
            <Zap className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Grid: Accounts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-2xl p-5 sm:p-6 flex flex-col border border-border/80 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-border/60">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                <Wallet className="w-4 h-4" />
              </div>
              Accounts & Wallets
            </h2>
            <span className="text-xs font-semibold text-primary cursor-pointer hover:underline">
              Manage
            </span>
          </div>
          <div className="flex-1">
            <List01 className="h-full border-0 shadow-none p-0 bg-transparent" />
          </div>
        </div>

        <div className="bg-card rounded-2xl p-5 sm:p-6 flex flex-col border border-border/80 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-border/60">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                <CreditCard className="w-4 h-4" />
              </div>
              Toll & Wallet History
            </h2>
            <span className="text-xs font-semibold text-primary cursor-pointer hover:underline">
              View All
            </span>
          </div>
          <div className="flex-1">
            <List02 className="h-full border-0 shadow-none p-0 bg-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
