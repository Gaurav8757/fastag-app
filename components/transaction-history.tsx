"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  History,
  Download,
  Filter,
  Search,
  CalendarIcon,
  ArrowUpDown,
  CheckCircle,
  XCircle,
  Clock,
  Receipt,
  CreditCard,
  Car,
} from "lucide-react"
import { format } from "date-fns"

interface Transaction {
  id: string
  date: string
  type: "recharge" | "toll" | "refund"
  amount: number
  status: "success" | "failed" | "pending"
  vehicleNumber: string
  location?: string
  operator: string
  paymentMethod: string
  transactionId: string
}

// Mock transaction data
const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "2024-01-15T10:30:00Z",
    type: "recharge",
    amount: 500,
    status: "success",
    vehicleNumber: "MH12AB1234",
    operator: "ICICI Bank",
    paymentMethod: "UPI",
    transactionId: "TXN123456789",
  },
  {
    id: "2",
    date: "2024-01-14T08:45:00Z",
    type: "toll",
    amount: 45,
    status: "success",
    vehicleNumber: "MH12AB1234",
    location: "Mumbai-Pune Expressway",
    operator: "ICICI Bank",
    paymentMethod: "FASTag",
    transactionId: "TXN123456788",
  },
  {
    id: "3",
    date: "2024-01-13T16:20:00Z",
    type: "toll",
    amount: 35,
    status: "success",
    vehicleNumber: "MH12AB1234",
    location: "Delhi-Gurgaon Toll",
    operator: "ICICI Bank",
    paymentMethod: "FASTag",
    transactionId: "TXN123456787",
  },
  {
    id: "4",
    date: "2024-01-12T12:15:00Z",
    type: "recharge",
    amount: 1000,
    status: "failed",
    vehicleNumber: "MH12AB1234",
    operator: "ICICI Bank",
    paymentMethod: "Card",
    transactionId: "TXN123456786",
  },
  {
    id: "5",
    date: "2024-01-11T09:30:00Z",
    type: "toll",
    amount: 25,
    status: "success",
    vehicleNumber: "MH12AB1234",
    location: "Bangalore Electronic City",
    operator: "ICICI Bank",
    paymentMethod: "FASTag",
    transactionId: "TXN123456785",
  },
  {
    id: "6",
    date: "2024-01-10T14:45:00Z",
    type: "recharge",
    amount: 200,
    status: "pending",
    vehicleNumber: "MH12AB1234",
    operator: "ICICI Bank",
    paymentMethod: "Net Banking",
    transactionId: "TXN123456784",
  },
]

export function TransactionHistory() {
  const [transactions] = useState<Transaction[]>(mockTransactions)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [dateFrom, setDateFrom] = useState<Date>()
  const [dateTo, setDateTo] = useState<Date>()
  const [sortBy, setSortBy] = useState<"date" | "amount">("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const filteredTransactions = useMemo(() => {
    const filtered = transactions.filter((transaction) => {
      const matchesSearch =
        transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (transaction.location && transaction.location.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesType = filterType === "all" || transaction.type === filterType
      const matchesStatus = filterStatus === "all" || transaction.status === filterStatus

      const transactionDate = new Date(transaction.date)
      const matchesDateFrom = !dateFrom || transactionDate >= dateFrom
      const matchesDateTo = !dateTo || transactionDate <= dateTo

      return matchesSearch && matchesType && matchesStatus && matchesDateFrom && matchesDateTo
    })

    // Sort transactions
    filtered.sort((a, b) => {
      let comparison = 0
      if (sortBy === "date") {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
      } else if (sortBy === "amount") {
        comparison = a.amount - b.amount
      }
      return sortOrder === "asc" ? comparison : -comparison
    })

    return filtered
  }, [transactions, searchTerm, filterType, filterStatus, dateFrom, dateTo, sortBy, sortOrder])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800 border-green-200"
      case "failed":
        return "bg-red-100 text-red-800 border-red-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "recharge":
        return <CreditCard className="h-4 w-4 text-blue-600" />
      case "toll":
        return <Car className="h-4 w-4 text-purple-600" />
      case "refund":
        return <Receipt className="h-4 w-4 text-green-600" />
      default:
        return null
    }
  }

  const totalAmount = filteredTransactions
    .filter((t) => t.status === "success")
    .reduce((sum, t) => sum + (t.type === "recharge" ? t.amount : -t.amount), 0)

  const handleExport = () => {
    // Simulate export functionality
    alert("Transaction history exported successfully!")
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Transaction History</h2>
            <p className="text-xl text-muted-foreground text-pretty">View and manage all your FASTag transactions</p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{filteredTransactions.length}</p>
                  <p className="text-sm text-muted-foreground">Total Transactions</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">
                    {filteredTransactions.filter((t) => t.status === "success").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Successful</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">
                    {filteredTransactions.filter((t) => t.status === "failed").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Failed</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">₹{Math.abs(totalAmount)}</p>
                  <p className="text-sm text-muted-foreground">Net Amount</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters & Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* Search */}
                <div className="space-y-2">
                  <Label>Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search transactions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Type Filter */}
                <div className="space-y-2">
                  <Label>Transaction Type</Label>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="recharge">Recharge</SelectItem>
                      <SelectItem value="toll">Toll Payment</SelectItem>
                      <SelectItem value="refund">Refund</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Status Filter */}
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="success">Success</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort */}
                <div className="space-y-2">
                  <Label>Sort By</Label>
                  <div className="flex gap-2">
                    <Select value={sortBy} onValueChange={(value: "date" | "amount") => setSortBy(value)}>
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date">Date</SelectItem>
                        <SelectItem value="amount">Amount</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                    >
                      <ArrowUpDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Date Range */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>From Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateFrom ? format(dateFrom, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={dateFrom} onSelect={setDateFrom} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>To Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateTo ? format(dateTo, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={dateTo} onSelect={setDateTo} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Export Button */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">Showing {filteredTransactions.length} transactions</p>
            <Button onClick={handleExport} variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>

          {/* Transactions List */}
          <div className="space-y-4">
            {filteredTransactions.length === 0 ? (
              <Card>
                <CardContent className="pt-8 pb-8 text-center">
                  <History className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No transactions found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters or search criteria</p>
                </CardContent>
              </Card>
            ) : (
              filteredTransactions.map((transaction) => (
                <Card key={transaction.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                          {getTypeIcon(transaction.type)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold capitalize">{transaction.type}</p>
                            <Badge className={getStatusColor(transaction.status)}>
                              <div className="flex items-center gap-1">
                                {getStatusIcon(transaction.status)}
                                {transaction.status}
                              </div>
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {format(new Date(transaction.date), "PPP 'at' p")}
                          </p>
                          {transaction.location && (
                            <p className="text-sm text-muted-foreground">{transaction.location}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-lg font-bold ${
                            transaction.type === "recharge" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {transaction.type === "recharge" ? "+" : "-"}₹{transaction.amount}
                        </p>
                        <p className="text-sm text-muted-foreground">{transaction.vehicleNumber}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Transaction ID</p>
                          <p className="font-mono">{transaction.transactionId}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Operator</p>
                          <p>{transaction.operator}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Payment Method</p>
                          <p>{transaction.paymentMethod}</p>
                        </div>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                            <Receipt className="h-3 w-3" />
                            Receipt
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
