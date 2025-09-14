"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, CreditCard, Car, CheckCircle, AlertCircle, Clock } from "lucide-react"

interface FASTagInfo {
  id: string
  vehicleNumber: string
  balance: number
  status: "active" | "inactive" | "blocked"
  issuer: string
  vehicleType: string
  lastTransaction?: {
    date: string
    amount: number
    location: string
  }
}

export function SearchSection() {
  const [searchType, setSearchType] = useState<"fastag" | "vehicle">("fastag")
  const [searchValue, setSearchValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [searchResult, setSearchResult] = useState<FASTagInfo | null>(null)
  const [error, setError] = useState("")

  const handleSearch = async () => {
    if (!searchValue.trim()) {
      setError("Please enter a valid search value")
      return
    }

    setIsLoading(true)
    setError("")
    setSearchResult(null)

    // Simulate API call
    setTimeout(() => {
      // Mock data for demonstration
      const mockResult: FASTagInfo = {
        id: searchType === "fastag" ? searchValue : "FT123456789012",
        vehicleNumber: searchType === "vehicle" ? searchValue.toUpperCase() : "MH12AB1234",
        balance: Math.floor(Math.random() * 1000) + 100,
        status: Math.random() > 0.2 ? "active" : Math.random() > 0.5 ? "inactive" : "blocked",
        issuer: ["ICICI Bank", "HDFC Bank", "SBI", "Axis Bank", "Paytm Payments Bank"][Math.floor(Math.random() * 5)],
        vehicleType: ["Car", "Motorcycle", "Bus", "Truck"][Math.floor(Math.random() * 4)],
        lastTransaction: {
          date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          amount: Math.floor(Math.random() * 200) + 20,
          location: ["Mumbai-Pune Expressway", "Delhi-Gurgaon Toll", "Bangalore Electronic City", "Chennai OMR"][
            Math.floor(Math.random() * 4)
          ],
        },
      }

      setSearchResult(mockResult)
      setIsLoading(false)
    }, 1500)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "inactive":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "blocked":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4" />
      case "inactive":
        return <Clock className="h-4 w-4" />
      case "blocked":
        return <AlertCircle className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Search FASTag Information</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Find your FASTag details using FASTag ID or Vehicle Registration Number
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search FASTag
              </CardTitle>
              <CardDescription>
                Enter your FASTag ID or Vehicle Registration Number to get detailed information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={searchType} onValueChange={(value) => setSearchType(value as "fastag" | "vehicle")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="fastag" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    FASTag ID
                  </TabsTrigger>
                  <TabsTrigger value="vehicle" className="flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Vehicle Number
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="fastag" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="fastag-id">NETC FASTag ID</Label>
                    <Input
                      id="fastag-id"
                      placeholder="Enter 14-digit FASTag ID (e.g., 12345678901234)"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value.replace(/\D/g, "").slice(0, 14))}
                      maxLength={14}
                    />
                    <p className="text-sm text-muted-foreground">
                      FASTag ID is a 14-digit number found on your FASTag sticker
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="vehicle" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-number">Vehicle Registration Number (VRN)</Label>
                    <Input
                      id="vehicle-number"
                      placeholder="Enter vehicle number (e.g., MH12AB1234)"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value.toUpperCase().slice(0, 10))}
                      maxLength={10}
                    />
                    <p className="text-sm text-muted-foreground">
                      Enter your vehicle registration number as shown on your RC
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <Button onClick={handleSearch} className="w-full mt-6" disabled={isLoading || !searchValue.trim()}>
                {isLoading ? "Searching..." : "Search FASTag"}
              </Button>
            </CardContent>
          </Card>

          {/* Search Results */}
          {searchResult && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">FASTag Information</CardTitle>
                    <Badge className={`${getStatusColor(searchResult.status)} flex items-center gap-1`}>
                      {getStatusIcon(searchResult.status)}
                      {searchResult.status.charAt(0).toUpperCase() + searchResult.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">FASTag ID</Label>
                        <p className="text-lg font-mono">{searchResult.id}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Vehicle Number</Label>
                        <p className="text-lg font-semibold">{searchResult.vehicleNumber}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Vehicle Type</Label>
                        <p className="text-lg">{searchResult.vehicleType}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Current Balance</Label>
                        <p className="text-2xl font-bold text-primary">₹{searchResult.balance}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Issuer Bank</Label>
                        <p className="text-lg">{searchResult.issuer}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                        <div className="flex items-center gap-2 mt-1">
                          {getStatusIcon(searchResult.status)}
                          <span className="capitalize">{searchResult.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {searchResult.lastTransaction && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Last Transaction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Date</Label>
                        <p className="text-base">{searchResult.lastTransaction.date}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Amount</Label>
                        <p className="text-base font-semibold">₹{searchResult.lastTransaction.amount}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Location</Label>
                        <p className="text-base">{searchResult.lastTransaction.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                  <CardDescription>Manage your FASTag account</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button className="w-full" size="lg">
                      Recharge FASTag
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" size="lg">
                      View Transaction History
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Balance Alert */}
              {searchResult.balance < 200 && (
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      <div>
                        <p className="font-semibold text-yellow-800">Low Balance Alert</p>
                        <p className="text-sm text-yellow-700">
                          Your FASTag balance is low. Recharge now to avoid any inconvenience during your journey.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Help Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg">Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Where to find FASTag ID?</h4>
                  <p className="text-sm text-muted-foreground">
                    Your 14-digit FASTag ID is printed on the FASTag sticker attached to your vehicle's windshield.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Vehicle Number Format</h4>
                  <p className="text-sm text-muted-foreground">
                    Enter your vehicle registration number exactly as shown on your Registration Certificate (RC).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
