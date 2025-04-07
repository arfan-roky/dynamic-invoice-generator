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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  BarChart3,
  PieChart,
  LineChart,
  Download,
  Calendar,
} from "lucide-react";
import { Label } from "@/components/ui/label";

export default function ReportsPage() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <Button>
          <Download className="h-4 w-4 mr-2" /> Export Reports
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Report Filters</CardTitle>
          <CardDescription>Customize your report view</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date-range">Date Range</Label>
              <Select defaultValue="this-month">
                <SelectTrigger id="date-range">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="this-quarter">This Quarter</SelectItem>
                  <SelectItem value="last-quarter">Last Quarter</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                  <SelectItem value="last-year">Last Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customer">Customer</Label>
              <Select defaultValue="all">
                <SelectTrigger id="customer">
                  <SelectValue placeholder="Select customer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Customers</SelectItem>
                  <SelectItem value="acme">Acme Corp</SelectItem>
                  <SelectItem value="globex">Globex Inc</SelectItem>
                  <SelectItem value="wayne">Wayne Enterprises</SelectItem>
                  <SelectItem value="stark">Stark Industries</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="project">Project</Label>
              <Select defaultValue="all">
                <SelectTrigger id="project">
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Projects</SelectItem>
                  <SelectItem value="website">Website Redesign</SelectItem>
                  <SelectItem value="mobile">Mobile App Development</SelectItem>
                  <SelectItem value="security">Security Audit</SelectItem>
                  <SelectItem value="api">API Integration</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="invoice-status">Invoice Status</Label>
              <Select defaultValue="all">
                <SelectTrigger id="invoice-status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button>Generate Report</Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="revenue">
        <TabsList>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="time">Time Tracking</TabsTrigger>
        </TabsList>
        <TabsContent value="revenue" className="mt-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>
                  Monthly revenue for the current year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md border">
                  <div className="text-center">
                    <LineChart className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Revenue chart visualization
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      Total Revenue
                    </p>
                    <p className="text-2xl font-bold">$245,680.00</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      Average Monthly
                    </p>
                    <p className="text-2xl font-bold">$24,568.00</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Growth</p>
                    <p className="text-2xl font-bold text-green-600">+15.3%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue by Customer</CardTitle>
                <CardDescription>
                  Top revenue generating customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md border mb-4">
                  <div className="text-center">
                    <PieChart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Customer distribution
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Wayne Enterprises</p>
                      <div className="w-full h-2 bg-muted rounded-full mt-1">
                        <div
                          className="bg-primary h-full rounded-full"
                          style={{ width: "35%" }}
                        ></div>
                      </div>
                    </div>
                    <p className="font-medium">$86,000</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Acme Corp</p>
                      <div className="w-full h-2 bg-muted rounded-full mt-1">
                        <div
                          className="bg-primary h-full rounded-full"
                          style={{ width: "28%" }}
                        ></div>
                      </div>
                    </div>
                    <p className="font-medium">$68,750</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Stark Industries</p>
                      <div className="w-full h-2 bg-muted rounded-full mt-1">
                        <div
                          className="bg-primary h-full rounded-full"
                          style={{ width: "22%" }}
                        ></div>
                      </div>
                    </div>
                    <p className="font-medium">$54,320</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="invoices" className="mt-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Invoice Status</CardTitle>
                <CardDescription>Overview of invoice statuses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md border">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Invoice status chart
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-6">
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold">42</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Paid</p>
                    <p className="text-2xl font-bold text-green-600">28</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-2xl font-bold text-amber-600">12</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Overdue</p>
                    <p className="text-2xl font-bold text-red-600">2</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Time</CardTitle>
                <CardDescription>Average days to payment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md border mb-4">
                  <div className="text-center">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Payment timeline</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      Average Payment Time
                    </p>
                    <p className="text-2xl font-bold">15 days</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      Fastest Payment
                    </p>
                    <p className="text-2xl font-bold">2 days</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      Slowest Payment
                    </p>
                    <p className="text-2xl font-bold">45 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="customers" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Analysis</CardTitle>
              <CardDescription>
                Insights about your customer base
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    Customer Retention
                  </h3>
                  <div className="h-[250px] flex items-center justify-center bg-muted/20 rounded-md border">
                    <div className="text-center">
                      <LineChart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Retention visualization
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        Retention Rate
                      </p>
                      <p className="text-2xl font-bold">85%</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        Avg. Customer Age
                      </p>
                      <p className="text-2xl font-bold">1.8 years</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Customer Value</h3>
                  <div className="h-[250px] flex items-center justify-center bg-muted/20 rounded-md border">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Value visualization
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        Avg. Lifetime Value
                      </p>
                      <p className="text-2xl font-bold">$48,500</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        Avg. Project Value
                      </p>
                      <p className="text-2xl font-bold">$12,450</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Customer Growth</h3>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md border">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Growth visualization
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      Total Customers
                    </p>
                    <p className="text-2xl font-bold">24</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      New This Year
                    </p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Growth Rate</p>
                    <p className="text-2xl font-bold text-green-600">+33%</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Churn Rate</p>
                    <p className="text-2xl font-bold text-amber-600">5%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="time" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Time Tracking Analysis</CardTitle>
              <CardDescription>
                Insights about billable hours and productivity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">Billable Hours</h3>
                  <div className="h-[250px] flex items-center justify-center bg-muted/20 rounded-md border">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Billable hours chart
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        Total Hours
                      </p>
                      <p className="text-2xl font-bold">1,245</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Billable</p>
                      <p className="text-2xl font-bold">1,120</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        Billable %
                      </p>
                      <p className="text-2xl font-bold">90%</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">
                    Time by Project Type
                  </h3>
                  <div className="h-[250px] flex items-center justify-center bg-muted/20 rounded-md border">
                    <div className="text-center">
                      <PieChart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Project type distribution
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Development</p>
                        <div className="w-full h-2 bg-muted rounded-full mt-1">
                          <div
                            className="bg-primary h-full rounded-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      <p className="font-medium">560 hrs</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Design</p>
                        <div className="w-full h-2 bg-muted rounded-full mt-1">
                          <div
                            className="bg-primary h-full rounded-full"
                            style={{ width: "25%" }}
                          ></div>
                        </div>
                      </div>
                      <p className="font-medium">310 hrs</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Consulting</p>
                        <div className="w-full h-2 bg-muted rounded-full mt-1">
                          <div
                            className="bg-primary h-full rounded-full"
                            style={{ width: "30%" }}
                          ></div>
                        </div>
                      </div>
                      <p className="font-medium">375 hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Team Productivity</h3>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md border">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Team productivity chart
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Team Member</th>
                        <th className="text-left p-2">Total Hours</th>
                        <th className="text-left p-2">Billable Hours</th>
                        <th className="text-left p-2">Billable %</th>
                        <th className="text-left p-2">Utilization</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="p-2">John Smith</td>
                        <td className="p-2">320</td>
                        <td className="p-2">295</td>
                        <td className="p-2">92%</td>
                        <td className="p-2">
                          <div className="w-full h-2 bg-muted rounded-full">
                            <div
                              className="bg-green-500 h-full rounded-full"
                              style={{ width: "92%" }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="p-2">Sarah Johnson</td>
                        <td className="p-2">280</td>
                        <td className="p-2">245</td>
                        <td className="p-2">88%</td>
                        <td className="p-2">
                          <div className="w-full h-2 bg-muted rounded-full">
                            <div
                              className="bg-green-500 h-full rounded-full"
                              style={{ width: "88%" }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="p-2">Michael Brown</td>
                        <td className="p-2">310</td>
                        <td className="p-2">290</td>
                        <td className="p-2">94%</td>
                        <td className="p-2">
                          <div className="w-full h-2 bg-muted rounded-full">
                            <div
                              className="bg-green-500 h-full rounded-full"
                              style={{ width: "94%" }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-muted/50">
                        <td className="p-2">Emily Davis</td>
                        <td className="p-2">335</td>
                        <td className="p-2">290</td>
                        <td className="p-2">87%</td>
                        <td className="p-2">
                          <div className="w-full h-2 bg-muted rounded-full">
                            <div
                              className="bg-green-500 h-full rounded-full"
                              style={{ width: "87%" }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
