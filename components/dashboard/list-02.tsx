import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  Car,
  CreditCard,
  type LucideIcon,
  Fuel,
  ParkingCircle,
} from "lucide-react";

interface Transaction {
  id: string;
  title: string;
  amount: string;
  type: "incoming" | "outgoing";
  category: string;
  icon: LucideIcon;
  timestamp: string;
  status: "completed" | "pending" | "failed";
}

interface List02Props {
  transactions?: Transaction[];
  className?: string;
}

const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    title: "NH-48 Kherki Daula Plaza",
    amount: "₹85.00",
    type: "outgoing",
    category: "toll",
    icon: Car,
    timestamp: "Today, 2:45 PM",
    status: "completed",
  },
  {
    id: "2",
    title: "Instant Wallet Recharge (UPI)",
    amount: "₹2,000.00",
    type: "incoming",
    category: "recharge",
    icon: Wallet,
    timestamp: "Today, 11:20 AM",
    status: "completed",
  },
  {
    id: "3",
    title: "IGI Airport T3 Parking",
    amount: "₹120.00",
    type: "outgoing",
    category: "parking",
    icon: ParkingCircle,
    timestamp: "Yesterday, 6:15 PM",
    status: "completed",
  },
  {
    id: "4",
    title: "Eastern Peripheral Expressway",
    amount: "₹170.00",
    type: "outgoing",
    category: "toll",
    icon: Car,
    timestamp: "Yesterday, 9:30 AM",
    status: "completed",
  },
  {
    id: "5",
    title: "HPCL FASTag Fuel Payment",
    amount: "₹2,500.00",
    type: "outgoing",
    category: "fuel",
    icon: Fuel,
    timestamp: "01 Nov, 4:10 PM",
    status: "completed",
  },
];

export default function List02({
  transactions = TRANSACTIONS,
  className,
}: List02Props) {
  return (
    <div className={cn("w-full flex flex-col justify-between space-y-3", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Recent Debits & Credits
        </h2>
        <span className="text-xs text-muted-foreground font-medium">Last 7 Days</span>
      </div>

      <div className="space-y-1.5">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60 transition-all duration-200"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={cn("p-2 rounded-lg shrink-0", {
                  "bg-emerald-500/10 text-emerald-600": transaction.type === "incoming",
                  "bg-primary/10 text-primary": transaction.type === "outgoing",
                })}
              >
                <transaction.icon className="w-4 h-4" />
              </div>

              <div className="space-y-0.5 truncate">
                <h3 className="text-xs font-semibold text-foreground truncate">
                  {transaction.title}
                </h3>
                <p className="text-[11px] text-muted-foreground">{transaction.timestamp}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 pl-3 shrink-0">
              <span
                className={cn(
                  "text-xs font-bold",
                  transaction.type === "incoming"
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-foreground"
                )}
              >
                {transaction.type === "incoming" ? "+" : "-"}
                {transaction.amount}
              </span>
              {transaction.type === "incoming" ? (
                <ArrowDownLeft className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
