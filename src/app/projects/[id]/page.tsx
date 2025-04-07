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
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  ArrowLeft,
  Calendar,
  Users,
  DollarSign,
  Clock,
  FileEdit,
  BarChart3,
  CheckCircle2,
  Plus,
} from "lucide-react";
import { useParams } from "next/navigation";

export default function ProjectDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const id = useParams().id;

  // This would normally come from an API call using the params.id
  const project = {
    id: id,
    name: "Website Redesign",
    customer: "Acme Corp",
    description:
      "Complete redesign of the corporate website with modern UI/UX, responsive design, and integration with the company's CRM system.",
    type: "Fixed-Price",
    status: "Active",
    progress: 50,
    budget: 25000,
    invoiced: 12500,
    remaining: 12500,
    startDate: "2023-07-15",
    endDate: "2023-12-15",
    manager: "John Smith",
    team: [
      { initials: "JS", name: "John Smith", role: "Project Manager" },
      { initials: "KL", name: "Karen Lee", role: "UI/UX Designer" },
      { initials: "MR", name: "Mike Roberts", role: "Frontend Developer" },
    ],
    milestones: [
      {
        name: "Contract Signing",
        percentage: 20,
        amount: 5000,
        dueDate: "2023-07-15",
        status: "Completed",
        invoiceStatus: "Paid",
      },
      {
        name: "Design Approval",
        percentage: 30,
        amount: 7500,
        dueDate: "2023-09-30",
        status: "Completed",
        invoiceStatus: "Paid",
      },
      {
        name: "Development Complete",
        percentage: 30,
        amount: 7500,
        dueDate: "2023-11-30",
        status: "In Progress",
        invoiceStatus: "Not Invoiced",
      },
      {
        name: "Project Launch",
        percentage: 20,
        amount: 5000,
        dueDate: "2023-12-15",
        status: "Not Started",
        invoiceStatus: "Not Invoiced",
      },
    ],
    invoices: [
      {
        number: "INV-2023-001",
        date: "2023-07-15",
        amount: 5000,
        status: "Paid",
        description: "Contract Signing Milestone",
      },
      {
        number: "INV-2023-002",
        date: "2023-10-01",
        amount: 7500,
        status: "Paid",
        description: "Design Approval Milestone",
      },
    ],
    timeEntries: [
      {
        date: "2023-10-15",
        user: "Mike Roberts",
        hours: 8,
        description: "Homepage development",
      },
      {
        date: "2023-10-16",
        user: "Mike Roberts",
        hours: 6,
        description: "About page development",
      },
      {
        date: "2023-10-16",
        user: "Karen Lee",
        hours: 4,
        description: "UI refinements",
      },
      {
        date: "2023-10-17",
        user: "Mike Roberts",
        hours: 7,
        description: "Contact form implementation",
      },
      {
        date: "2023-10-18",
        user: "Karen Lee",
        hours: 5,
        description: "Responsive design adjustments",
      },
    ],
  };

  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="icon" asChild>
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <p className="text-muted-foreground">Client: {project.customer}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/projects/${project.id}/edit`}>
              <FileEdit className="h-4 w-4 mr-2" /> Edit Project
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/invoices/create?project=${project.id}`}>
              <FileText className="h-4 w-4 mr-2" /> Create Invoice
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${project.budget.toLocaleString()}
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Invoiced:</span>
                <span>${project.invoiced.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Remaining:</span>
                <span>${project.remaining.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{project.progress}%</div>
            <Progress value={project.progress} className="h-2 mt-2" />
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Status:</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  {project.status}
                </Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Type:</span>
                <span>{project.type}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Timeline</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">151 days</div>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Start Date:</span>
                <span>{project.startDate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">End Date:</span>
                <span>{project.endDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs
        defaultValue="overview"
        value={activeTab}
        onValueChange={setActiveTab}
        className="mb-6"
      >
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="time">Time Tracking</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Project Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>

                  <div className="mt-6 space-y-4">
                    <h3 className="font-medium">Project Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">
                          Project Manager
                        </h4>
                        <p>{project.manager}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">
                          Customer
                        </h4>
                        <p>{project.customer}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">
                          Project Type
                        </h4>
                        <p>{project.type}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">
                          Status
                        </h4>
                        <p>{project.status}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <h3 className="font-medium">Recent Activity</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4 p-2 border-l-4 border-green-500 pl-4">
                        <div className="flex-1">
                          <p className="font-medium">
                            Invoice INV-2023-002 paid
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Design Approval Milestone - $7,500.00
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Oct 10, 2023
                        </div>
                      </div>
                      <div className="flex gap-4 p-2 border-l-4 border-blue-500 pl-4">
                        <div className="flex-1">
                          <p className="font-medium">Milestone completed</p>
                          <p className="text-sm text-muted-foreground">
                            Design Approval - 30% of project
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Sep 30, 2023
                        </div>
                      </div>
                      <div className="flex gap-4 p-2 border-l-4 border-purple-500 pl-4">
                        <div className="flex-1">
                          <p className="font-medium">New team member added</p>
                          <p className="text-sm text-muted-foreground">
                            Mike Roberts - Frontend Developer
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Sep 15, 2023
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.team.map((member, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          {member.initials}
                        </div>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Milestones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.milestones
                      .filter((m) => m.status !== "Completed")
                      .map((milestone, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-2 border rounded-md"
                        >
                          <Calendar className="h-8 w-8 text-muted-foreground" />
                          <div className="flex-1">
                            <p className="font-medium">{milestone.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {milestone.dueDate}
                            </p>
                          </div>
                          <Badge
                            className={
                              milestone.status === "In Progress"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }
                          >
                            {milestone.status}
                          </Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="milestones" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Milestones</CardTitle>
              <CardDescription>
                Track progress and billing for each project milestone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Milestone</th>
                      <th className="text-left p-2">Percentage</th>
                      <th className="text-left p-2">Amount</th>
                      <th className="text-left p-2">Due Date</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">Invoice Status</th>
                      <th className="text-left p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.milestones.map((milestone, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-2 font-medium">{milestone.name}</td>
                        <td className="p-2">{milestone.percentage}%</td>
                        <td className="p-2">
                          ${milestone.amount.toLocaleString()}
                        </td>
                        <td className="p-2">{milestone.dueDate}</td>
                        <td className="p-2">
                          <Badge
                            className={
                              milestone.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : milestone.status === "In Progress"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }
                          >
                            {milestone.status}
                          </Badge>
                        </td>
                        <td className="p-2">
                          <Badge
                            className={
                              milestone.invoiceStatus === "Paid"
                                ? "bg-green-100 text-green-800"
                                : milestone.invoiceStatus === "Invoiced"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                            }
                          >
                            {milestone.invoiceStatus}
                          </Badge>
                        </td>
                        <td className="p-2">
                          {milestone.status !== "Completed" ? (
                            <Button size="sm" variant="outline">
                              <CheckCircle2 className="h-4 w-4 mr-2" /> Mark
                              Complete
                            </Button>
                          ) : milestone.invoiceStatus === "Not Invoiced" ? (
                            <Button size="sm">
                              <FileText className="h-4 w-4 mr-2" /> Create
                              Invoice
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" disabled>
                              Completed
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Invoices</CardTitle>
              <CardDescription>
                All invoices associated with this project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Invoice #</th>
                      <th className="text-left p-2">Date</th>
                      <th className="text-left p-2">Description</th>
                      <th className="text-left p-2">Amount</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.invoices.map((invoice, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-2 font-medium">{invoice.number}</td>
                        <td className="p-2">{invoice.date}</td>
                        <td className="p-2">{invoice.description}</td>
                        <td className="p-2">
                          ${invoice.amount.toLocaleString()}
                        </td>
                        <td className="p-2">
                          <Badge
                            className={
                              invoice.status === "Paid"
                                ? "bg-green-100 text-green-800"
                                : invoice.status === "Sent"
                                ? "bg-blue-100 text-blue-800"
                                : invoice.status === "Draft"
                                ? "bg-gray-100 text-gray-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {invoice.status}
                          </Badge>
                        </td>
                        <td className="p-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link
                              href={`/invoices/${invoice.number.toLowerCase()}`}
                            >
                              View
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4">
                <Button asChild>
                  <Link href={`/invoices/create?project=${project.id}`}>
                    <FileText className="h-4 w-4 mr-2" /> Create New Invoice
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="time" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Time Tracking</CardTitle>
              <CardDescription>
                Time entries logged for this project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Date</th>
                      <th className="text-left p-2">User</th>
                      <th className="text-left p-2">Hours</th>
                      <th className="text-left p-2">Description</th>
                      <th className="text-left p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.timeEntries.map((entry, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-2">{entry.date}</td>
                        <td className="p-2">{entry.user}</td>
                        <td className="p-2">{entry.hours}</td>
                        <td className="p-2">{entry.description}</td>
                        <td className="p-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t">
                      <td className="p-2 font-medium" colSpan={2}>
                        Total Hours
                      </td>
                      <td className="p-2 font-medium">
                        {project.timeEntries.reduce(
                          (sum, entry) => sum + entry.hours,
                          0
                        )}
                      </td>
                      <td colSpan={2}></td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="mt-4">
                <Button>
                  <Clock className="h-4 w-4 mr-2" /> Log Time
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Team</CardTitle>
              <CardDescription>
                Team members assigned to this project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {project.team.map((member, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl">
                          {member.initials}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Email:</span>
                          <span>
                            {member.name.toLowerCase().replace(" ", ".")}
                            @example.com
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Hours Logged:
                          </span>
                          <span>
                            {project.timeEntries
                              .filter((entry) => entry.user === member.name)
                              .reduce((sum, entry) => sum + entry.hours, 0)}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="border-dashed">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                    <Users className="h-12 w-12 text-muted-foreground mb-2" />
                    <h3 className="text-lg font-medium">Add Team Member</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      Assign a new team member to this project
                    </p>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" /> Add Member
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
