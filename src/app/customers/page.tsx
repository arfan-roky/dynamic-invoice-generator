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
  FileText,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Building,
  Mail,
  Phone,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export default function CustomersPage() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Customers</h1>
        <Button asChild>
          <Link href="/customers/create">
            <Plus className="h-4 w-4 mr-2" /> Add New Customer
          </Link>
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Customer Management</CardTitle>
          <CardDescription>
            View, filter, and manage all your customers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search customers..." className="pl-8" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Acme Corp</CardTitle>
                    <CardDescription>Technology</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                      <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                      <DropdownMenuItem>View Invoices</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>123 Tech Avenue, San Francisco, CA</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>contact@acmecorp.com</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>(555) 123-4567</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <Badge>Active</Badge>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">$28,250</span> invoiced
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Globex Inc</CardTitle>
                    <CardDescription>Manufacturing</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                      <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                      <DropdownMenuItem>View Invoices</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>456 Industrial Blvd, Chicago, IL</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>info@globexinc.com</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>(555) 987-6543</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <Badge>Active</Badge>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">$8,750</span> invoiced
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Wayne Enterprises</CardTitle>
                    <CardDescription>Conglomerate</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                      <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                      <DropdownMenuItem>View Invoices</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>1007 Mountain Drive, Gotham City</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>bruce@wayneenterprises.com</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>(555) 228-4377</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <Badge>Active</Badge>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">$15,000</span> invoiced
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Stark Industries</CardTitle>
                    <CardDescription>Technology</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                      <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                      <DropdownMenuItem>View Invoices</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>200 Park Avenue, New York, NY</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>tony@starkindustries.com</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>(555) 476-6265</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                    Overdue
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">$6,320</span> invoiced
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Umbrella Corp</CardTitle>
                    <CardDescription>Pharmaceuticals</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                      <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                      <DropdownMenuItem>View Invoices</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>789 Raccoon St, Raccoon City</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>info@umbrellacorp.com</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>(555) 666-7890</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                    Pending
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">$9,850</span> invoiced
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Cyberdyne Systems</CardTitle>
                    <CardDescription>Robotics & AI</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                      <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                      <DropdownMenuItem>View Invoices</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>18144 El Camino Real, Sunnyvale, CA</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>miles@cyberdyne.com</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>(555) 101-0101</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                    Pending
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">$22,500</span> invoiced
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-muted-foreground">
              Showing 6 of 24 customers
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
            <CardTitle>Customer Statistics</CardTitle>
            <CardDescription>Overview of your customer base</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Total Customers</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Active Customers
                </p>
                <p className="text-2xl font-bold">18</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">New This Month</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Avg. Invoice Value
                </p>
                <p className="text-2xl font-bold">$12,450</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Customers</CardTitle>
            <CardDescription>
              Customers with highest invoice totals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-2 border-b">
                <div className="flex items-center gap-2">
                  <div className="font-medium">Cyberdyne Systems</div>
                </div>
                <div className="font-bold">$22,500</div>
              </div>
              <div className="flex items-center justify-between p-2 border-b">
                <div className="flex items-center gap-2">
                  <div className="font-medium">Wayne Enterprises</div>
                </div>
                <div className="font-bold">$15,000</div>
              </div>
              <div className="flex items-center justify-between p-2 border-b">
                <div className="flex items-center gap-2">
                  <div className="font-medium">Acme Corp</div>
                </div>
                <div className="font-bold">$12,500</div>
              </div>
              <div className="flex items-center justify-between p-2 border-b">
                <div className="flex items-center gap-2">
                  <div className="font-medium">Umbrella Corp</div>
                </div>
                <div className="font-bold">$9,850</div>
              </div>
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center gap-2">
                  <div className="font-medium">Globex Inc</div>
                </div>
                <div className="font-bold">$8,750</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
