"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  FileText,
  Save,
  Upload,
  Download,
  Key,
  Users,
  CreditCard,
  FileTextIcon as FileText2,
  SettingsIcon,
  Plus,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button>
          <Save className="h-4 w-4 mr-2" /> Save Changes
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-1">
          <CardContent className="p-4">
            <nav className="space-y-1">
              <Button
                variant={activeTab === "company" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("company")}
              >
                <SettingsIcon className="h-4 w-4 mr-2" />
                Company Profile
              </Button>
              <Button
                variant={activeTab === "invoice" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("invoice")}
              >
                <FileText2 className="h-4 w-4 mr-2" />
                Invoice Settings
              </Button>
              <Button
                variant={activeTab === "payment" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("payment")}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Payment Methods
              </Button>
              <Button
                variant={activeTab === "users" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("users")}
              >
                <Users className="h-4 w-4 mr-2" />
                Users & Permissions
              </Button>
              <Button
                variant={activeTab === "api" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("api")}
              >
                <Key className="h-4 w-4 mr-2" />
                API Integration
              </Button>
            </nav>
          </CardContent>
        </Card>

        <div className="md:col-span-3">
          {activeTab === "company" && (
            <Card>
              <CardHeader>
                <CardTitle>Company Profile</CardTitle>
                <CardDescription>
                  Manage your company information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" defaultValue="Your Company Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tax-id">Tax ID / VAT Number</Label>
                    <Input id="tax-id" defaultValue="123456789" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-address">Address</Label>
                  <Textarea
                    id="company-address"
                    defaultValue="123 Business Street, Suite 100"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-city">City</Label>
                    <Input id="company-city" defaultValue="San Francisco" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-state">State/Province</Label>
                    <Input id="company-state" defaultValue="CA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-zip">ZIP/Postal Code</Label>
                    <Input id="company-zip" defaultValue="94103" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-country">Country</Label>
                    <Select defaultValue="us">
                      <SelectTrigger id="company-country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-phone">Phone</Label>
                    <Input id="company-phone" defaultValue="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-email">Email</Label>
                  <Input
                    id="company-email"
                    type="email"
                    defaultValue="billing@yourcompany.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-website">Website</Label>
                  <Input
                    id="company-website"
                    defaultValue="https://www.yourcompany.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Company Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-40 bg-muted flex items-center justify-center rounded-md">
                      <span className="text-muted-foreground">
                        Logo Preview
                      </span>
                    </div>
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" /> Upload Logo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "invoice" && (
            <Card>
              <CardHeader>
                <CardTitle>Invoice Settings</CardTitle>
                <CardDescription>
                  Customize your invoice templates and defaults
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="invoice-prefix">Invoice Number Prefix</Label>
                  <Input id="invoice-prefix" defaultValue="INV-" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="next-invoice-number">
                      Next Invoice Number
                    </Label>
                    <Input id="next-invoice-number" defaultValue="2023-007" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="default-due-days">Default Due Days</Label>
                    <Input
                      id="default-due-days"
                      type="number"
                      defaultValue="30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="default-currency">Default Currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger id="default-currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD ($)</SelectItem>
                        <SelectItem value="eur">EUR (€)</SelectItem>
                        <SelectItem value="gbp">GBP (£)</SelectItem>
                        <SelectItem value="cad">CAD ($)</SelectItem>
                        <SelectItem value="aud">AUD ($)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="default-tax-rate">
                      Default Tax Rate (%)
                    </Label>
                    <Input
                      id="default-tax-rate"
                      type="number"
                      defaultValue="10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="invoice-notes">Default Invoice Notes</Label>
                  <Textarea
                    id="invoice-notes"
                    defaultValue="Thank you for your business. Payment is due within the specified terms."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="invoice-footer">Invoice Footer Text</Label>
                  <Textarea
                    id="invoice-footer"
                    defaultValue="All prices are in USD unless otherwise specified. Please include the invoice number in your payment reference."
                  />
                </div>

                <div className="space-y-4">
                  <Label>Invoice Template</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-md p-2 cursor-pointer bg-muted">
                      <div className="aspect-[8.5/11] bg-background rounded-md flex items-center justify-center mb-2">
                        <span className="text-xs text-muted-foreground">
                          Standard
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Standard</span>
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="border rounded-md p-2 cursor-pointer">
                      <div className="aspect-[8.5/11] bg-background rounded-md flex items-center justify-center mb-2">
                        <span className="text-xs text-muted-foreground">
                          Modern
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Modern</span>
                      </div>
                    </div>
                    <div className="border rounded-md p-2 cursor-pointer">
                      <div className="aspect-[8.5/11] bg-background rounded-md flex items-center justify-center mb-2">
                        <span className="text-xs text-muted-foreground">
                          Minimal
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Minimal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "payment" && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>
                  Configure payment options for your invoices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-2">
                      <Switch id="bank-transfer" defaultChecked />
                      <Label htmlFor="bank-transfer" className="font-medium">
                        Bank Transfer
                      </Label>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>

                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-2">
                      <Switch id="credit-card" defaultChecked />
                      <Label htmlFor="credit-card" className="font-medium">
                        Credit Card
                      </Label>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>

                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-2">
                      <Switch id="paypal" />
                      <Label htmlFor="paypal" className="font-medium">
                        PayPal
                      </Label>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>

                  <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-2">
                      <Switch id="check" />
                      <Label htmlFor="check" className="font-medium">
                        Check
                      </Label>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bank-details">Bank Account Details</Label>
                  <Textarea
                    id="bank-details"
                    defaultValue="Bank: Example Bank
Account Name: Your Company Name
Account Number: 123456789
Routing Number: 987654321
SWIFT/BIC: EXAMPLEBANKXXX"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="payment-instructions">
                    Payment Instructions
                  </Label>
                  <Textarea
                    id="payment-instructions"
                    defaultValue="Please include the invoice number in your payment reference. All bank charges are to be paid by the sender."
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "users" && (
            <Card>
              <CardHeader>
                <CardTitle>Users & Permissions</CardTitle>
                <CardDescription>Manage user access and roles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Team Members</h3>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" /> Add User
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">John Smith</p>
                      <p className="text-sm text-muted-foreground">
                        john@example.com
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="admin">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Administrator</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="user">Regular User</SelectItem>
                          <SelectItem value="viewer">Viewer</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">
                        sarah@example.com
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="manager">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Administrator</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="user">Regular User</SelectItem>
                          <SelectItem value="viewer">Viewer</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-4">
                    <div>
                      <p className="font-medium">Michael Brown</p>
                      <p className="text-sm text-muted-foreground">
                        michael@example.com
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="user">
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Administrator</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="user">Regular User</SelectItem>
                          <SelectItem value="viewer">Viewer</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Role Permissions</h3>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-role" className="font-medium">
                        Administrator
                      </Label>
                      <Button variant="outline" size="sm">
                        Edit Permissions
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Full access to all features and settings
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="manager-role" className="font-medium">
                        Manager
                      </Label>
                      <Button variant="outline" size="sm">
                        Edit Permissions
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Can create and approve invoices, manage customers and
                      projects
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="user-role" className="font-medium">
                        Regular User
                      </Label>
                      <Button variant="outline" size="sm">
                        Edit Permissions
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Can create invoice drafts and manage assigned customers
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="viewer-role" className="font-medium">
                        Viewer
                      </Label>
                      <Button variant="outline" size="sm">
                        Edit Permissions
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Read-only access to invoices and reports
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "api" && (
            <Card>
              <CardHeader>
                <CardTitle>API Integration</CardTitle>
                <CardDescription>
                  Manage API keys and third-party integrations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">API Keys</h3>

                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Production API Key</p>
                      <p className="text-sm text-muted-foreground">
                        Last used: 2 hours ago
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        type="password"
                        value="••••••••••••••••••••••••"
                        className="w-[240px]"
                        readOnly
                      />
                      <Button variant="outline" size="sm">
                        Reveal
                      </Button>
                      <Button variant="outline" size="sm">
                        Regenerate
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-4">
                    <div>
                      <p className="font-medium">Test API Key</p>
                      <p className="text-sm text-muted-foreground">
                        Last used: 5 days ago
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        type="password"
                        value="••••••••••••••••••••••••"
                        className="w-[240px]"
                        readOnly
                      />
                      <Button variant="outline" size="sm">
                        Reveal
                      </Button>
                      <Button variant="outline" size="sm">
                        Regenerate
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Integrations</h3>

                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">QuickBooks</p>
                      <p className="text-sm text-muted-foreground">
                        Accounting software integration
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900"
                      >
                        Connected
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Xero</p>
                      <p className="text-sm text-muted-foreground">
                        Accounting software integration
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Stripe</p>
                      <p className="text-sm text-muted-foreground">
                        Payment processing integration
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900"
                      >
                        Connected
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-4">
                    <div>
                      <p className="font-medium">Asana</p>
                      <p className="text-sm text-muted-foreground">
                        Project management integration
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Webhooks</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure webhooks to notify external systems about invoice
                    events
                  </p>

                  <div className="flex justify-end">
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" /> Add Webhook
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">API Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Access our API documentation to integrate with your systems
                  </p>

                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" /> Download API Docs
                    </Button>
                    <Button>View API Documentation</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
