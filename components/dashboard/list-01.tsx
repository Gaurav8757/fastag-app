import { cn } from "@/lib/utils";
import {
  Wallet,
  SendHorizontal,
  QrCode,
  Plus,
  ArrowRight,
  CreditCard,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AccountItem {
  id: string;
  title: string;
  description?: string;
  balance: string;
  type: "savings" | "checking" | "investment" | "debt";
  plate?: string;
}

interface List01Props {
  totalBalance?: string;
  accounts?: AccountItem[];
  className?: string;
}

const ACCOUNTS: AccountItem[] = [
  {
    id: "1",
    title: "Primary FASTag Wallet",
    description: "Main NHAI toll balance",
    balance: "₹8,459.45",
    type: "savings",
  },
  {
    id: "2",
    title: "Vehicle DL-01-AB-1234",
    description: "Sedan (Toyota Camry)",
    balance: "₹2,850.00",
    type: "checking",
  },
  {
    id: "3",
    title: "Vehicle HR-26-DK-9081",
    description: "SUV (Mahindra XUV700)",
    balance: "₹5,230.80",
    type: "checking",
  },
  {
    id: "4",
    title: "Commercial Fleet Pool",
    description: "Multi-vehicle pool wallet",
    balance: "₹10,000.00",
    type: "investment",
  },
];

export default function List01({
  totalBalance = "₹26,540.25",
  accounts = ACCOUNTS,
  className,
}: Readonly<List01Props>) {
  return (
    <div className={cn("w-full flex flex-col justify-between space-y-4", className)}>
      {/* Total Balance Card */}
      <div className="p-4 rounded-xl bg-muted/40 border border-border/60 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground">Aggregated Wallet Balance</p>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">{totalBalance}</h1>
        </div>
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <Wallet className="w-5 h-5" />
        </div>
      </div>

      {/* Accounts List */}
      <div className="space-y-2">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Connected Vehicles & Wallets
        </h2>

        <div className="space-y-1.5">
          {accounts.map((account) => (
            <div
              key={account.id}
              className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/60 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn("p-2 rounded-lg shrink-0", {
                    "bg-emerald-500/10 text-emerald-600": account.type === "savings",
                    "bg-primary/10 text-primary": account.type === "checking",
                    "bg-amber-500/10 text-amber-600": account.type === "investment",
                    "bg-destructive/10 text-destructive": account.type === "debt",
                  })}
                >
                  {account.type === "savings" && <Wallet className="w-4 h-4" />}
                  {account.type === "checking" && <Car className="w-4 h-4" />}
                  {account.type === "investment" && <QrCode className="w-4 h-4" />}
                  {account.type === "debt" && <CreditCard className="w-4 h-4" />}
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-foreground">{account.title}</h3>
                  {account.description && (
                    <p className="text-[11px] text-muted-foreground">{account.description}</p>
                  )}
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-foreground">{account.balance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2">
        <div className="grid grid-cols-4 gap-2">
          <Button variant="default" size="sm" className="h-9 px-2 text-xs">
            <Plus className="w-3.5 h-3.5 mr-1" />
            Top-up
          </Button>
          <Button variant="outline" size="sm" className="h-9 px-2 text-xs">
            <SendHorizontal className="w-3.5 h-3.5 mr-1" />
            Transfer
          </Button>
          <Button variant="outline" size="sm" className="h-9 px-2 text-xs">
            <Car className="w-3.5 h-3.5 mr-1" />
            Tag Link
          </Button>
          <Button variant="outline" size="sm" className="h-9 px-2 text-xs">
            <ArrowRight className="w-3.5 h-3.5 mr-1" />
            More
          </Button>
        </div>
      </div>
    </div>
  );
}
