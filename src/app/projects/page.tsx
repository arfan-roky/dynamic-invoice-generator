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
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  Users,
  DollarSign,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProjectsPage() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button asChild>
          <Link href="/projects/create">
            <Plus className="h-4 w-4 mr-2" /> Create New Project
          </Link>
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Project Management</CardTitle>
          <CardDescription>
            View, filter, and manage all your projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-8" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="on-hold">On Hold</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
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
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Project Name</th>
                      <th className="text-left p-2">Customer</th>
                      <th className="text-left p-2">Type</th>
                      <th className="text-left p-2">Budget</th>
                      <th className="text-left p-2">Invoiced</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">Progress</th>
                      <th className="text-left p-2">Due Date</th>
                      <th className="text-left p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2 font-medium">Website Redesign</td>
                      <td className="p-2">Acme Corp</td>
                      <td className="p-2">Fixed-Price</td>
                      <td className="p-2">$25,000.00</td>
                      <td className="p-2">$12,500.00</td>
                      <td className="p-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Active
                        </Badge>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Progress value={50} className="h-2 w-24" />
                          <span className="text-xs">50%</span>
                        </div>
                      </td>
                      <td className="p-2">2023-12-15</td>
                      <td className="p-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href="/projects/1">View Details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Project</DropdownMenuItem>
                            <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                            <DropdownMenuItem>View Invoices</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2 font-medium">
                        Mobile App Development
                      </td>
                      <td className="p-2">Globex Inc</td>
                      <td className="p-2">Time & Material</td>
                      <td className="p-2">$45,000.00</td>
                      <td className="p-2">$8,750.00</td>
                      <td className="p-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Active
                        </Badge>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Progress value={20} className="h-2 w-24" />
                          <span className="text-xs">20%</span>
                        </div>
                      </td>
                      <td className="p-2">2024-03-30</td>
                      <td className="p-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href="/projects/2">View Details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Project</DropdownMenuItem>
                            <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                            <DropdownMenuItem>View Invoices</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2 font-medium">Security Audit</td>
                      <td className="p-2">Wayne Enterprises</td>
                      <td className="p-2">Fixed-Price</td>
                      <td className="p-2">$15,000.00</td>
                      <td className="p-2">$15,000.00</td>
                      <td className="p-2">
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                          Completed
                        </Badge>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Progress value={100} className="h-2 w-24" />
                          <span className="text-xs">100%</span>
                        </div>
                      </td>
                      <td className="p-2">2023-10-15</td>
                      <td className="p-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href="/projects/3">View Details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Project</DropdownMenuItem>
                            <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                            <DropdownMenuItem>View Invoices</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2 font-medium">API Integration</td>
                      <td className="p-2">Stark Industries</td>
                      <td className="p-2">Time & Material</td>
                      <td className="p-2">$18,000.00</td>
                      <td className="p-2">$6,320.00</td>
                      <td className="p-2">
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                          On Hold
                        </Badge>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Progress value={35} className="h-2 w-24" />
                          <span className="text-xs">35%</span>
                        </div>
                      </td>
                      <td className="p-2">2023-11-30</td>
                      <td className="p-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href="/projects/4">View Details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Project</DropdownMenuItem>
                            <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                            <DropdownMenuItem>View Invoices</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2 font-medium">Data Migration</td>
                      <td className="p-2">Umbrella Corp</td>
                      <td className="p-2">Time & Material</td>
                      <td className="p-2">$22,000.00</td>
                      <td className="p-2">$9,850.00</td>
                      <td className="p-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Active
                        </Badge>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Progress value={45} className="h-2 w-24" />
                          <span className="text-xs">45%</span>
                        </div>
                      </td>
                      <td className="p-2">2023-12-31</td>
                      <td className="p-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href="/projects/5">View Details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Project</DropdownMenuItem>
                            <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                            <DropdownMenuItem>View Invoices</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2 font-medium">AI Implementation</td>
                      <td className="p-2">Cyberdyne Systems</td>
                      <td className="p-2">Fixed-Price</td>
                      <td className="p-2">$75,000.00</td>
                      <td className="p-2">$22,500.00</td>
                      <td className="p-2">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          Active
                        </Badge>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <Progress value={30} className="h-2 w-24" />
                          <span className="text-xs">30%</span>
                        </div>
                      </td>
                      <td className="p-2">2024-05-15</td>
                      <td className="p-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href="/projects/6">View Details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Project</DropdownMenuItem>
                            <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                            <DropdownMenuItem>View Invoices</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Showing 6 of 12 projects
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
            </TabsContent>

            <TabsContent value="active" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          Website Redesign
                        </CardTitle>
                        <CardDescription>Acme Corp</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Active
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Progress
                          </span>
                          <span className="font-medium">50%</span>
                        </div>
                        <Progress value={50} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <span className="text-muted-foreground">Type</span>
                          <p className="font-medium">Fixed-Price</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">Budget</span>
                          <p className="font-medium">$25,000.00</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">
                            Start Date
                          </span>
                          <p className="font-medium">2023-07-15</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">
                            Due Date
                          </span>
                          <p className="font-medium">2023-12-15</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <div className="flex -space-x-2">
                          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs">
                            JS
                          </div>
                          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                            KL
                          </div>
                          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                            MR
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/projects/1">View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          Mobile App Development
                        </CardTitle>
                        <CardDescription>Globex Inc</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Active
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Progress
                          </span>
                          <span className="font-medium">20%</span>
                        </div>
                        <Progress value={20} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <span className="text-muted-foreground">Type</span>
                          <p className="font-medium">Time & Material</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">Budget</span>
                          <p className="font-medium">$45,000.00</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">
                            Start Date
                          </span>
                          <p className="font-medium">2023-09-01</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">
                            Due Date
                          </span>
                          <p className="font-medium">2024-03-30</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <div className="flex -space-x-2">
                          <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
                            AJ
                          </div>
                          <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">
                            TW
                          </div>
                          <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                            SL
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/projects/2">View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          Data Migration
                        </CardTitle>
                        <CardDescription>Umbrella Corp</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Active
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Progress
                          </span>
                          <span className="font-medium">45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <span className="text-muted-foreground">Type</span>
                          <p className="font-medium">Time & Material</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">Budget</span>
                          <p className="font-medium">$22,000.00</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">
                            Start Date
                          </span>
                          <p className="font-medium">2023-08-15</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">
                            Due Date
                          </span>
                          <p className="font-medium">2023-12-31</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <div className="flex -space-x-2">
                          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                            RK
                          </div>
                          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                            JD
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/projects/5">View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          AI Implementation
                        </CardTitle>
                        <CardDescription>Cyberdyne Systems</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Active
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Progress
                          </span>
                          <span className="font-medium">30%</span>
                        </div>
                        <Progress value={30} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <span className="text-muted-foreground">Type</span>
                          <p className="font-medium">Fixed-Price</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">Budget</span>
                          <p className="font-medium">$75,000.00</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">
                            Start Date
                          </span>
                          <p className="font-medium">2023-10-01</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">
                            Due Date
                          </span>
                          <p className="font-medium">2024-05-15</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <div className="flex -space-x-2">
                          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs">
                            SC
                          </div>
                          <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
                            MB
                          </div>
                          <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">
                            AT
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/projects/6">View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          Security Audit
                        </CardTitle>
                        <CardDescription>Wayne Enterprises</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        Completed
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Progress
                          </span>
                          <span className="font-medium">100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <span className="text-muted-foreground">Type</span>
                          <p className="font-medium">Fixed-Price</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">Budget</span>
                          <p className="font-medium">$15,000.00</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">
                            Start Date
                          </span>
                          <p className="font-medium">2023-08-01</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">
                            Completion Date
                          </span>
                          <p className="font-medium">2023-10-15</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <div className="flex -space-x-2">
                          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                            BW
                          </div>
                          <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                            LF
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/projects/3">View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          Cloud Migration
                        </CardTitle>
                        <CardDescription>Wayne Enterprises</CardDescription>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                        Upcoming
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Progress
                          </span>
                          <span className="font-medium">0%</span>
                        </div>
                        <Progress value={0} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <span className="text-muted-foreground">Type</span>
                          <p className="font-medium">Fixed-Price</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">Budget</span>
                          <p className="font-medium">$18,500.00</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">
                            Start Date
                          </span>
                          <p className="font-medium">2023-12-01</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted-foreground">
                            Due Date
                          </span>
                          <p className="font-medium">2024-02-28</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <div className="flex -space-x-2">
                          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                            BW
                          </div>
                          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                            JD
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/projects/7">View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Project Statistics</CardTitle>
            <CardDescription>
              Overview of your project portfolio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Total Projects</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Active Projects</p>
                <p className="text-2xl font-bold">4</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">7</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Upcoming</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Project Timeline</CardTitle>
            <CardDescription>Upcoming milestones and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-2 border-l-4 border-green-500 bg-muted/50 rounded-r-md">
                <Calendar className="h-8 w-8 text-green-500" />
                <div className="flex-1">
                  <p className="font-medium">
                    Website Redesign - Design Approval
                  </p>
                  <p className="text-sm text-muted-foreground">Acme Corp</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Nov 15, 2023</p>
                  <p className="text-sm text-muted-foreground">In 5 days</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-2 border-l-4 border-blue-500 bg-muted/50 rounded-r-md">
                <Calendar className="h-8 w-8 text-blue-500" />
                <div className="flex-1">
                  <p className="font-medium">
                    Mobile App Development - Alpha Release
                  </p>
                  <p className="text-sm text-muted-foreground">Globex Inc</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Nov 30, 2023</p>
                  <p className="text-sm text-muted-foreground">In 20 days</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-2 border-l-4 border-purple-500 bg-muted/50 rounded-r-md">
                <Calendar className="h-8 w-8 text-purple-500" />
                <div className="flex-1">
                  <p className="font-medium">
                    Data Migration - Phase 1 Completion
                  </p>
                  <p className="text-sm text-muted-foreground">Umbrella Corp</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Dec 10, 2023</p>
                  <p className="text-sm text-muted-foreground">In 30 days</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-2 border-l-4 border-yellow-500 bg-muted/50 rounded-r-md">
                <Calendar className="h-8 w-8 text-yellow-500" />
                <div className="flex-1">
                  <p className="font-medium">
                    AI Implementation - Initial Demo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cyberdyne Systems
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Dec 15, 2023</p>
                  <p className="text-sm text-muted-foreground">In 35 days</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
