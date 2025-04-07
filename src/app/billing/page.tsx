import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  CreditCard,
  DollarSign,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BillingPage() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Billing Management</h1>
        <Button asChild>
          <Link href="/invoices/create">Create New Invoice</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,070.00</div>
            <p className="text-xs text-muted-foreground">From 4 invoices</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$6,320.00</div>
            <p className="text-xs text-muted-foreground">From 1 invoice</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Paid (This Month)
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$27,500.00</div>
            <p className="text-xs text-muted-foreground">From 3 invoices</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,500.00</div>
            <p className="text-xs text-muted-foreground">Due in next 30 days</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="schedules">Billing Schedules</TabsTrigger>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
        </TabsList>
        <TabsContent value="invoices" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Invoice Management</CardTitle>
              <CardDescription>
                View and manage all your invoices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Invoice #</th>
                      <th className="text-left p-2">Customer</th>
                      <th className="text-left p-2">Project</th>
                      <th className="text-left p-2">Amount</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">Due Date</th>
                      <th className="text-left p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2">INV-2023-001</td>
                      <td className="p-2">Acme Corp</td>
                      <td className="p-2">Website Redesign</td>
                      <td className="p-2">$12,500.00</td>
                      <td className="p-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Paid
                        </Badge>
                      </td>
                      <td className="p-2">2023-10-24</td>
                      <td className="p-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2">INV-2023-002</td>
                      <td className="p-2">Globex Inc</td>
                      <td className="p-2">Mobile App Development</td>
                      <td className="p-2">$8,750.00</td>
                      <td className="p-2">
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                          Pending
                        </Badge>
                      </td>
                      <td className="p-2">2023-11-23</td>
                      <td className="p-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2">INV-2023-003</td>
                      <td className="p-2">Wayne Enterprises</td>
                      <td className="p-2">Security Audit</td>
                      <td className="p-2">$15,000.00</td>
                      <td className="p-2">
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                          Sent
                        </Badge>
                      </td>
                      <td className="p-2">2023-11-21</td>
                      <td className="p-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2">INV-2023-004</td>
                      <td className="p-2">Stark Industries</td>
                      <td className="p-2">API Integration</td>
                      <td className="p-2">$6,320.00</td>
                      <td className="p-2">
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                          Overdue
                        </Badge>
                      </td>
                      <td className="p-2">2023-10-30</td>
                      <td className="p-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="schedules" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Schedules</CardTitle>
              <CardDescription>
                Manage recurring billing schedules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">Monthly Maintenance</h3>
                      <p className="text-sm text-muted-foreground">
                        Acme Corp - Website Maintenance
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Active
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-medium">$1,500.00</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Frequency</p>
                      <p className="font-medium">Monthly</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Next Invoice</p>
                      <p className="font-medium">Dec 1, 2023</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">Quarterly Security Audit</h3>
                      <p className="text-sm text-muted-foreground">
                        Wayne Enterprises - Security Services
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Active
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-medium">$5,000.00</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Frequency</p>
                      <p className="font-medium">Quarterly</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Next Invoice</p>
                      <p className="font-medium">Jan 15, 2024</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">Annual Hosting</h3>
                      <p className="text-sm text-muted-foreground">
                        Globex Inc - Web Hosting
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Active
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-medium">$2,400.00</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Frequency</p>
                      <p className="font-medium">Annually</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Next Invoice</p>
                      <p className="font-medium">Mar 1, 2024</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button>Create Billing Schedule</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="methods" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Configure payment options for your clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Credit Card</h3>
                      <p className="text-sm text-muted-foreground">
                        Accept Visa, Mastercard, Amex
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    Active
                  </Badge>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Bank Transfer</h3>
                      <p className="text-sm text-muted-foreground">
                        Direct bank transfers
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    Active
                  </Badge>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="h-5 w-5 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 21L3 16.5M3 16.5L7.5 12M3 16.5H16.5M16.5 3L21 7.5M21 7.5L16.5 12M21 7.5H7.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">PayPal</h3>
                      <p className="text-sm text-muted-foreground">
                        Online payments via PayPal
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100">
                    Inactive
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Check</h3>
                      <p className="text-sm text-muted-foreground">
                        Accept paper checks
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100">
                    Inactive
                  </Badge>
                </div>
              </div>

              <div className="mt-6">
                <Button>Configure Payment Methods</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
