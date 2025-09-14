"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Car, Zap, Shield, CheckCircle } from "lucide-react"

interface Operator {
  id: string
  name: string
  logo: string
  processingFee: number
}

const operators: Operator[] = [
  { id: "icici", name: "ICICI Bank", logo: "🏦", processingFee: 0 },
  { id: "hdfc", name: "HDFC Bank", logo: "🏦", processingFee: 0 },
  { id: "sbi", name: "State Bank of India", logo: "🏦", processingFee: 0 },
  { id: "axis", name: "Axis Bank", logo: "🏦", processingFee: 0 },
  { id: "paytm", name: "Paytm Payments Bank", logo: "💳", processingFee: 0 },
  { id: "kotak", name: "Kotak Mahindra Bank", logo: "🏦", processingFee: 0 },
]

const quickAmounts = [100, 200, 500, 1000, 2000, 5000]

export function RechargeSection() {
  const [vehicleNumber, setVehicleNumber] = useState("")
  const [selectedOperator, setSelectedOperator] = useState("")
  const [rechargeAmount, setRechargeAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState<"details" | "payment" | "success">("details")
  const [paymentMethod, setPaymentMethod] = useState("")

  const handleQuickAmount = (amount: number) => {
    setRechargeAmount(amount.toString())
  }

  const handleProceedToPayment = () => {
    if (!vehicleNumber || !selectedOperator || !rechargeAmount) {
      alert("Please fill all required fields")
      return
    }

    if (Number.parseInt(rechargeAmount) < 50) {
      alert("Minimum recharge amount is ₹50")
      return
    }

    setStep("payment")
  }

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method")
      return
    }

    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      setStep("success")
    }, 3000)
  }

  const handleNewRecharge = () => {
    setVehicleNumber("")
    setSelectedOperator("")
    setRechargeAmount("")
    setPaymentMethod("")
    setStep("details")
  }

  const selectedOperatorInfo = operators?.find((op) => op.id === selectedOperator)
  const totalAmount = rechargeAmount ? Number.parseInt(rechargeAmount) + (selectedOperatorInfo?.processingFee || 0) : 0

  if (step === "success") {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-8 pb-8">
                <div className="space-y-6">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-green-800 mb-2">Recharge Successful!</h2>
                    <p className="text-green-700">Your FASTag has been recharged successfully</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vehicle Number:</span>
                      <span className="font-semibold">{vehicleNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Operator:</span>
                      <span className="font-semibold">{selectedOperatorInfo?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-semibold">₹{rechargeAmount}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-semibold">Transaction ID:</span>
                      <span className="font-mono text-sm">TXN{Date.now()}</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button onClick={handleNewRecharge} className="flex-1">
                      New Recharge
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Download Receipt
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  if (step === "payment") {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold">Complete Payment</h2>
              <p className="text-muted-foreground">Choose your preferred payment method</p>
            </div>

            <div className="space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Vehicle Number:</span>
                      <span className="font-semibold">{vehicleNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Operator:</span>
                      <span className="font-semibold">{selectedOperatorInfo?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Recharge Amount:</span>
                      <span>₹{rechargeAmount}</span>
                    </div>
                    {selectedOperatorInfo.processingFee > 0 && (
                      <div className="flex justify-between">
                        <span>Processing Fee:</span>
                        <span>₹{selectedOperatorInfo?.processingFee}</span>
                      </div>
                    )}
                    <div className="border-t pt-3 flex justify-between font-bold text-lg">
                      <span>Total Amount:</span>
                      <span className="text-primary">₹{totalAmount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Select Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                              <span className="text-sm">📱</span>
                            </div>
                            <div>
                              <p className="font-semibold">UPI</p>
                              <p className="text-sm text-muted-foreground">Pay using any UPI app</p>
                            </div>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                              <CreditCard className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="font-semibold">Credit/Debit Card</p>
                              <p className="text-sm text-muted-foreground">Visa, Mastercard, RuPay</p>
                            </div>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                              <span className="text-sm">🏦</span>
                            </div>
                            <div>
                              <p className="font-semibold">Net Banking</p>
                              <p className="text-sm text-muted-foreground">All major banks supported</p>
                            </div>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                        <RadioGroupItem value="wallet" id="wallet" />
                        <Label htmlFor="wallet" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                              <span className="text-sm">💳</span>
                            </div>
                            <div>
                              <p className="font-semibold">Digital Wallet</p>
                              <p className="text-sm text-muted-foreground">Paytm, PhonePe, Google Pay</p>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Security Info */}
              <Card className="border-green-200 bg-green-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800">Secure Payment</p>
                      <p className="text-sm text-green-700">Your payment is protected by 256-bit SSL encryption</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep("details")} className="flex-1">
                  Back
                </Button>
                <Button onClick={handlePayment} className="flex-1" disabled={isLoading || !paymentMethod}>
                  {isLoading ? "Processing..." : `Pay ₹${totalAmount}`}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Recharge FASTag</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Quick and secure FASTag recharge for all operators
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recharge Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Recharge Details
                  </CardTitle>
                  <CardDescription>Enter your vehicle details and select recharge amount</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Vehicle Number */}
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-number">Vehicle Registration Number *</Label>
                    <div className="flex">
                      <div className="flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                        <Car className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <Input
                        id="vehicle-number"
                        placeholder="Enter vehicle number (e.g., MH12AB1234)"
                        value={vehicleNumber}
                        onChange={(e) => setVehicleNumber(e.target.value.toUpperCase().slice(0, 10))}
                        className="rounded-l-none"
                        maxLength={10}
                      />
                    </div>
                  </div>

                  {/* Operator Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="operator">Select FASTag Operator *</Label>
                    <Select value={selectedOperator} onValueChange={setSelectedOperator}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your FASTag issuer" />
                      </SelectTrigger>
                      <SelectContent>
                        {operators.map((operator) => (
                          <SelectItem key={operator.id} value={operator.id}>
                            <div className="flex items-center gap-2">
                              <span>{operator.logo}</span>
                              <span>{operator.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Quick Amount Selection */}
                  <div className="space-y-3">
                    <Label>Quick Amount Selection</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {quickAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={rechargeAmount === amount.toString() ? "default" : "outline"}
                          onClick={() => handleQuickAmount(amount)}
                          className="h-12"
                        >
                          ₹{amount}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="space-y-2">
                    <Label htmlFor="amount">Or Enter Custom Amount *</Label>
                    <div className="flex">
                      <div className="flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                        <span className="text-muted-foreground">₹</span>
                      </div>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Enter amount (Min: ₹50)"
                        value={rechargeAmount}
                        onChange={(e) => setRechargeAmount(e.target.value)}
                        className="rounded-l-none"
                        min="50"
                        max="10000"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">Minimum: ₹50 | Maximum: ₹10,000</p>
                  </div>

                  <Button
                    onClick={handleProceedToPayment}
                    className="w-full"
                    size="lg"
                    disabled={!vehicleNumber || !selectedOperator || !rechargeAmount}
                  >
                    Proceed to Payment
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose FastPay?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Instant Recharge</p>
                      <p className="text-sm text-muted-foreground">Your FASTag is recharged within seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">100% Secure</p>
                      <p className="text-sm text-muted-foreground">Bank-grade security for all transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">All Operators</p>
                      <p className="text-sm text-muted-foreground">Support for all major FASTag issuers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="pt-4">
                  <div className="text-center space-y-2">
                    <p className="font-semibold text-blue-800">💡 Pro Tip</p>
                    <p className="text-sm text-blue-700">
                      Set up auto-recharge to never worry about low balance again!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
