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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  Plus,
  Search,
  Filter,
  Download,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function InvoicesPage() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <Button asChild>
          <Link href="/invoices/create">
            <Plus className="h-4 w-4 mr-2" /> Create New Invoice
          </Link>
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Invoice Management</CardTitle>
          <CardDescription>
            View, filter, and manage all your invoices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search invoices..." className="pl-8" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="fixed-price">Fixed-Price</SelectItem>
                  <SelectItem value="time-material">Time & Material</SelectItem>
                  <SelectItem value="credit-note">Credit Note</SelectItem>
                  <SelectItem value="vendor">Vendor Invoice</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Invoice #</th>
                  <th className="text-left p-2">Customer</th>
                  <th className="text-left p-2">Project</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Amount</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Due Date</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-2">INV-2023-001</td>
                  <td className="p-2">Acme Corp</td>
                  <td className="p-2">Website Redesign</td>
                  <td className="p-2">Fixed-Price</td>
                  <td className="p-2">$12,500.00</td>
                  <td className="p-2">
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">
                      Paid
                    </span>
                  </td>
                  <td className="p-2">2023-10-25</td>
                  <td className="p-2">2023-11-24</td>
                  <td className="p-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Download PDF</DropdownMenuItem>
                        <DropdownMenuItem>Send to Customer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-2">INV-2023-002</td>
                  <td className="p-2">Globex Inc</td>
                  <td className="p-2">Mobile App Development</td>
                  <td className="p-2">T&M</td>
                  <td className="p-2">$8,750.00</td>
                  <td className="p-2">
                    <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs">
                      Pending
                    </span>
                  </td>
                  <td className="p-2">2023-10-24</td>
                  <td className="p-2">2023-11-23</td>
                  <td className="p-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Download PDF</DropdownMenuItem>
                        <DropdownMenuItem>Send to Customer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-2">INV-2023-003</td>
                  <td className="p-2">Wayne Enterprises</td>
                  <td className="p-2">Security Audit</td>
                  <td className="p-2">Fixed-Price</td>
                  <td className="p-2">$15,000.00</td>
                  <td className="p-2">
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">
                      Sent
                    </span>
                  </td>
                  <td className="p-2">2023-10-22</td>
                  <td className="p-2">2023-11-21</td>
                  <td className="p-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Download PDF</DropdownMenuItem>
                        <DropdownMenuItem>Send to Customer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-2">INV-2023-004</td>
                  <td className="p-2">Stark Industries</td>
                  <td className="p-2">API Integration</td>
                  <td className="p-2">T&M</td>
                  <td className="p-2">$6,320.00</td>
                  <td className="p-2">
                    <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs">
                      Overdue
                    </span>
                  </td>
                  <td className="p-2">2023-10-15</td>
                  <td className="p-2">2023-10-30</td>
                  <td className="p-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Download PDF</DropdownMenuItem>
                        <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-2">CN-2023-001</td>
                  <td className="p-2">Acme Corp</td>
                  <td className="p-2">Website Redesign</td>
                  <td className="p-2">Credit Note</td>
                  <td className="p-2">-$1,500.00</td>
                  <td className="p-2">
                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-xs">
                      Processed
                    </span>
                  </td>
                  <td className="p-2">2023-10-28</td>
                  <td className="p-2">N/A</td>
                  <td className="p-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Download PDF</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing 5 of 24 invoices
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Invoice Proposals</CardTitle>
            <CardDescription>
              Preliminary drafts awaiting review
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-2 border rounded-lg hover:bg-muted/50">
                <div>
                  <p className="font-medium">Globex Inc - API Development</p>
                  <p className="text-sm text-muted-foreground">
                    Time & Material - $4,250.00
                  </p>
                </div>
                <Button size="sm">Review</Button>
              </div>
              <div className="flex items-center justify-between p-2 border rounded-lg hover:bg-muted/50">
                <div>
                  <p className="font-medium">
                    Wayne Enterprises - Cloud Migration
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fixed-Price - $18,500.00
                  </p>
                </div>
                <Button size="sm">Review</Button>
              </div>
              <div className="flex items-center justify-between p-2 border rounded-lg hover:bg-muted/50">
                <div>
                  <p className="font-medium">Stark Industries - Maintenance</p>
                  <p className="text-sm text-muted-foreground">
                    Time & Material - $2,800.00
                  </p>
                </div>
                <Button size="sm">Review</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Invoice Statistics</CardTitle>
            <CardDescription>
              Overview of your invoicing activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Total Invoiced (This Month)
                </p>
                <p className="text-2xl font-bold">$42,570.00</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Outstanding Amount
                </p>
                <p className="text-2xl font-bold">$15,070.00</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Overdue Invoices
                </p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Average Payment Time
                </p>
                <p className="text-2xl font-bold">15 days</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" /> Export Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
