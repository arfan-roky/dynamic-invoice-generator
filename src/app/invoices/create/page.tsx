"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { FileText, ArrowLeft, Plus, Trash2 } from "lucide-react";

export default function CreateInvoicePage() {
  const [invoiceType, setInvoiceType] = useState("fixed-price");
  const [lineItems, setLineItems] = useState([
    { description: "", quantity: 1, rate: 0, amount: 0 },
  ]);

  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      { description: "", quantity: 1, rate: 0, amount: 0 },
    ]);
  };

  const removeLineItem = (index) => {
    const newLineItems = [...lineItems];
    newLineItems.splice(index, 1);
    setLineItems(newLineItems);
  };

  const updateLineItem = (index, field, value) => {
    const newLineItems = [...lineItems];
    newLineItems[index][field] = value;

    // Calculate amount if quantity or rate changes
    if (field === "quantity" || field === "rate") {
      newLineItems[index].amount =
        newLineItems[index].quantity * newLineItems[index].rate;
    }

    setLineItems(newLineItems);
  };

  const calculateTotal = () => {
    return lineItems.reduce((total, item) => total + (item.amount || 0), 0);
  };

  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="icon" asChild>
          <Link href="/invoices">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Create New Invoice</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Invoice Details</CardTitle>
              <CardDescription>
                Enter the details for your new invoice
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="invoice-number">Invoice Number</Label>
                  <Input id="invoice-number" placeholder="INV-2023-001" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="invoice-date">Invoice Date</Label>
                  <Input
                    id="invoice-date"
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="due-date">Due Date</Label>
                  <Input id="due-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="invoice-type">Invoice Type</Label>
                  <Select
                    defaultValue={invoiceType}
                    onValueChange={setInvoiceType}
                  >
                    <SelectTrigger id="invoice-type">
                      <SelectValue placeholder="Select invoice type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fixed-price">Fixed-Price</SelectItem>
                      <SelectItem value="time-material">
                        Time & Material
                      </SelectItem>
                      <SelectItem value="credit-note">Credit Note</SelectItem>
                      <SelectItem value="vendor">Vendor Invoice</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="customer">Customer</Label>
                  <Select>
                    <SelectTrigger id="customer">
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acme">Acme Corp</SelectItem>
                      <SelectItem value="globex">Globex Inc</SelectItem>
                      <SelectItem value="wayne">Wayne Enterprises</SelectItem>
                      <SelectItem value="stark">Stark Industries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project">Project</Label>
                  <Select>
                    <SelectTrigger id="project">
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website Redesign</SelectItem>
                      <SelectItem value="mobile">
                        Mobile App Development
                      </SelectItem>
                      <SelectItem value="security">Security Audit</SelectItem>
                      <SelectItem value="api">API Integration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Tabs
                defaultValue={invoiceType}
                value={invoiceType}
                onValueChange={setInvoiceType}
              >
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="fixed-price">Fixed-Price</TabsTrigger>
                  <TabsTrigger value="time-material">
                    Time & Material
                  </TabsTrigger>
                  <TabsTrigger value="credit-note">Credit Note</TabsTrigger>
                  <TabsTrigger value="vendor">Vendor Invoice</TabsTrigger>
                </TabsList>

                <TabsContent value="fixed-price" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="milestone">Milestone</Label>
                    <Select>
                      <SelectTrigger id="milestone">
                        <SelectValue placeholder="Select milestone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="contract">
                          Contract Signing (20%)
                        </SelectItem>
                        <SelectItem value="design">
                          Design Approval (30%)
                        </SelectItem>
                        <SelectItem value="development">
                          Development Complete (30%)
                        </SelectItem>
                        <SelectItem value="launch">
                          Project Launch (20%)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input id="amount" type="number" placeholder="0.00" />
                  </div>
                </TabsContent>

                <TabsContent value="time-material" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Line Items</h3>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addLineItem}
                      >
                        <Plus className="h-4 w-4 mr-2" /> Add Item
                      </Button>
                    </div>

                    {lineItems.map((item, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-12 gap-2 items-center"
                      >
                        <div className="col-span-5">
                          <Input
                            placeholder="Description"
                            value={item.description}
                            onChange={(e) =>
                              updateLineItem(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="col-span-2">
                          <Input
                            type="number"
                            placeholder="Qty"
                            value={item.quantity}
                            onChange={(e) =>
                              updateLineItem(
                                index,
                                "quantity",
                                Number.parseFloat(e.target.value)
                              )
                            }
                          />
                        </div>
                        <div className="col-span-2">
                          <Input
                            type="number"
                            placeholder="Rate"
                            value={item.rate}
                            onChange={(e) =>
                              updateLineItem(
                                index,
                                "rate",
                                Number.parseFloat(e.target.value)
                              )
                            }
                          />
                        </div>
                        <div className="col-span-2">
                          <Input
                            type="number"
                            placeholder="Amount"
                            value={item.amount}
                            readOnly
                          />
                        </div>
                        <div className="col-span-1">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeLineItem(index)}
                            disabled={lineItems.length === 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}

                    <div className="flex justify-end">
                      <div className="w-1/3 space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span>${calculateTotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax (10%):</span>
                          <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span>Total:</span>
                          <span>${(calculateTotal() * 1.1).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="credit-note" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="original-invoice">Original Invoice</Label>
                    <Select>
                      <SelectTrigger id="original-invoice">
                        <SelectValue placeholder="Select invoice" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inv-001">
                          INV-2023-001 - Acme Corp
                        </SelectItem>
                        <SelectItem value="inv-002">
                          INV-2023-002 - Globex Inc
                        </SelectItem>
                        <SelectItem value="inv-003">
                          INV-2023-003 - Wayne Enterprises
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="credit-reason">Reason for Credit</Label>
                    <Select>
                      <SelectTrigger id="credit-reason">
                        <SelectValue placeholder="Select reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="overbilling">Overbilling</SelectItem>
                        <SelectItem value="service-issue">
                          Service Issue
                        </SelectItem>
                        <SelectItem value="cancellation">
                          Project Cancellation
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="credit-amount">Credit Amount</Label>
                    <Input
                      id="credit-amount"
                      type="number"
                      placeholder="0.00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="credit-notes">Notes</Label>
                    <Textarea
                      id="credit-notes"
                      placeholder="Enter additional details about this credit note"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="vendor" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="vendor">Vendor</Label>
                    <Select>
                      <SelectTrigger id="vendor">
                        <SelectValue placeholder="Select vendor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vendor1">
                          Software Supplier Inc
                        </SelectItem>
                        <SelectItem value="vendor2">
                          Hardware Solutions Ltd
                        </SelectItem>
                        <SelectItem value="vendor3">
                          Cloud Services Co
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vendor-invoice">
                      Vendor Invoice Number
                    </Label>
                    <Input
                      id="vendor-invoice"
                      placeholder="Enter vendor's invoice number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Chargeable Status</Label>
                    <Select defaultValue="chargeable">
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chargeable">
                          Chargeable to Customer
                        </SelectItem>
                        <SelectItem value="non-chargeable">
                          Non-Chargeable
                        </SelectItem>
                        <SelectItem value="partial">
                          Partially Chargeable
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vendor-amount">Amount</Label>
                    <Input
                      id="vendor-amount"
                      type="number"
                      placeholder="0.00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="markup">Markup Percentage</Label>
                    <Input
                      id="markup"
                      type="number"
                      placeholder="0"
                      defaultValue="10"
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Enter any additional notes for this invoice"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/invoices">Cancel</Link>
              </Button>
              <div className="flex gap-2">
                <Button variant="outline">Save as Draft</Button>
                <Button>Create Invoice</Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Invoice Preview</CardTitle>
              <CardDescription>
                Preview how your invoice will look
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4 bg-muted/40">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold">INVOICE</h3>
                  <p className="text-sm text-muted-foreground">#INV-2023-001</p>
                </div>
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="font-medium">From:</p>
                    <p>Your Company Name</p>
                    <p>123 Business Street</p>
                    <p>City, State ZIP</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">To:</p>
                    <p>Customer Name</p>
                    <p>Customer Address</p>
                    <p>City, State ZIP</p>
                  </div>
                </div>
                <div className="flex justify-between mb-4 text-sm">
                  <div>
                    <p>
                      <span className="font-medium">Invoice Date:</span>{" "}
                      {new Date().toLocaleDateString()}
                    </p>
                    <p>
                      <span className="font-medium">Due Date:</span>{" "}
                      {new Date(
                        Date.now() + 30 * 24 * 60 * 60 * 1000
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-medium">Project:</span> Project Name
                    </p>
                    <p>
                      <span className="font-medium">Type:</span>{" "}
                      {invoiceType === "fixed-price"
                        ? "Fixed-Price"
                        : "Time & Material"}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <table className="w-full text-sm">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left py-2">Description</th>
                        <th className="text-right py-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceType === "fixed-price" ? (
                        <tr className="border-b">
                          <td className="py-2">
                            Project Milestone: Contract Signing (20%)
                          </td>
                          <td className="text-right py-2">$5,000.00</td>
                        </tr>
                      ) : (
                        lineItems.map((item, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-2">
                              {item.description || "Line Item"}
                            </td>
                            <td className="text-right py-2">
                              ${item.amount ? item.amount.toFixed(2) : "0.00"}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td className="text-right py-2 font-medium">Total:</td>
                        <td className="text-right py-2 font-bold">
                          $
                          {invoiceType === "fixed-price"
                            ? "5,000.00"
                            : (calculateTotal() * 1.1).toFixed(2)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Notes:</p>
                  <p className="text-muted-foreground">
                    Thank you for your business!
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" size="sm">
                  Download Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
