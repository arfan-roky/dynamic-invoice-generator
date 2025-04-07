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
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  ArrowLeft,
  Plus,
  Trash2,
  Calendar,
  Save,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function EditProjectPage() {
  const id = useParams().id;
  const router = useRouter();
  // This would normally come from an API call using the params.id
  const projectData = {
    id: id,
    name: "Website Redesign",
    customer: "acme",
    description:
      "Complete redesign of the corporate website with modern UI/UX, responsive design, and integration with the company's CRM system.",
    type: "fixed-price",
    status: "active",
    progress: 50,
    budget: 25000,
    invoiced: 12500,
    remaining: 12500,
    startDate: "2023-07-15",
    endDate: "2023-12-15",
    manager: "john",
    category: "web",
    priority: "medium",
    paymentTerms: "net30",
    invoiceSchedule: "milestone",
    team: ["John Smith", "Karen Lee", "Mike Roberts"],
    milestones: [
      {
        name: "Contract Signing",
        percentage: 20,
        amount: 5000,
        dueDate: "2023-07-15",
        status: "completed",
        invoiceStatus: "paid",
      },
      {
        name: "Design Approval",
        percentage: 30,
        amount: 7500,
        dueDate: "2023-09-30",
        status: "completed",
        invoiceStatus: "paid",
      },
      {
        name: "Development Complete",
        percentage: 30,
        amount: 7500,
        dueDate: "2023-11-30",
        status: "in-progress",
        invoiceStatus: "not-invoiced",
      },
      {
        name: "Project Launch",
        percentage: 20,
        amount: 5000,
        dueDate: "2023-12-15",
        status: "not-started",
        invoiceStatus: "not-invoiced",
      },
    ],
    importantDates: [
      { name: "Kickoff Meeting", date: "2023-07-20" },
      { name: "First Deliverable", date: "2023-09-15" },
      { name: "Final Delivery", date: "2023-12-10" },
    ],
    tags: "website, redesign, responsive, crm",
  };

  const [projectType, setProjectType] = useState(projectData.type);
  const [milestones, setMilestones] = useState(projectData.milestones);
  const [importantDates, setImportantDates] = useState(
    projectData.importantDates
  );
  const [projectName, setProjectName] = useState(projectData.name);
  const [description, setDescription] = useState(projectData.description);
  const [budget, setBudget] = useState(projectData.budget);
  const [tags, setTags] = useState(projectData.tags);

  const addMilestone = () => {
    setMilestones([
      ...milestones,
      {
        name: "",
        percentage: 0,
        amount: 0,
        dueDate: "",
        status: "not-started",
        invoiceStatus: "not-invoiced",
      },
    ]);
  };

  const removeMilestone = (index) => {
    const newMilestones = [...milestones];
    newMilestones.splice(index, 1);
    setMilestones(newMilestones);
  };

  const updateMilestone = (index, field, value) => {
    const newMilestones = [...milestones];
    newMilestones[index][field] = value;
    setMilestones(newMilestones);
  };

  const addImportantDate = () => {
    setImportantDates([...importantDates, { name: "", date: "" }]);
  };

  const removeImportantDate = (index) => {
    const newDates = [...importantDates];
    newDates.splice(index, 1);
    setImportantDates(newDates);
  };

  const updateImportantDate = (index, field, value) => {
    const newDates = [...importantDates];
    newDates[index][field] = value;
    setImportantDates(newDates);
  };

  const handleSave = () => {
    // This would normally send the updated project data to an API
    console.log("Saving project...", {
      id: id,
      name: projectName,
      description,
      type: projectType,
      budget,
      milestones,
      importantDates,
      tags,
      // Include other fields here
    });

    // Redirect to project details page after save
    router.push(`/projects/${id}`);
  };

  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/projects/${id}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Edit Project</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Update the details for this project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input
                    id="project-name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-type">Project Type</Label>
                  <Select value={projectType} onValueChange={setProjectType}>
                    <SelectTrigger id="project-type">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fixed-price">Fixed-Price</SelectItem>
                      <SelectItem value="time-material">
                        Time & Material
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="project-description">Description</Label>
                <Textarea
                  id="project-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="customer">Customer</Label>
                  <Select defaultValue={projectData.customer}>
                    <SelectTrigger id="customer">
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acme">Acme Corp</SelectItem>
                      <SelectItem value="globex">Globex Inc</SelectItem>
                      <SelectItem value="wayne">Wayne Enterprises</SelectItem>
                      <SelectItem value="stark">Stark Industries</SelectItem>
                      <SelectItem value="umbrella">Umbrella Corp</SelectItem>
                      <SelectItem value="cyberdyne">
                        Cyberdyne Systems
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-manager">Project Manager</Label>
                  <Select defaultValue={projectData.manager}>
                    <SelectTrigger id="project-manager">
                      <SelectValue placeholder="Select project manager" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Smith</SelectItem>
                      <SelectItem value="sarah">Sarah Johnson</SelectItem>
                      <SelectItem value="michael">Michael Brown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input
                    id="start-date"
                    type="date"
                    defaultValue={projectData.startDate}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">Estimated End Date</Label>
                  <Input
                    id="end-date"
                    type="date"
                    defaultValue={projectData.endDate}
                  />
                </div>
              </div>

              <Tabs
                defaultValue={projectType}
                value={projectType}
                onValueChange={setProjectType}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="fixed-price">Fixed-Price</TabsTrigger>
                  <TabsTrigger value="time-material">
                    Time & Material
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="fixed-price" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="total-budget">Total Budget</Label>
                      <Input
                        id="total-budget"
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger id="currency">
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
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Milestones</h3>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addMilestone}
                      >
                        <Plus className="h-4 w-4 mr-2" /> Add Milestone
                      </Button>
                    </div>

                    {milestones.map((milestone, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-12 gap-2 items-center"
                      >
                        <div className="col-span-3">
                          <Input
                            placeholder="Milestone name"
                            value={milestone.name}
                            onChange={(e) =>
                              updateMilestone(index, "name", e.target.value)
                            }
                          />
                        </div>
                        <div className="col-span-2">
                          <Input
                            type="number"
                            placeholder="Percentage"
                            value={milestone.percentage}
                            onChange={(e) =>
                              updateMilestone(
                                index,
                                "percentage",
                                Number.parseFloat(e.target.value)
                              )
                            }
                          />
                        </div>
                        <div className="col-span-2">
                          <Input
                            type="number"
                            placeholder="Amount"
                            value={milestone.amount}
                            onChange={(e) =>
                              updateMilestone(
                                index,
                                "amount",
                                Number.parseFloat(e.target.value)
                              )
                            }
                          />
                        </div>
                        <div className="col-span-2">
                          <Input
                            type="date"
                            placeholder="Due date"
                            value={milestone.dueDate}
                            onChange={(e) =>
                              updateMilestone(index, "dueDate", e.target.value)
                            }
                          />
                        </div>
                        <div className="col-span-2">
                          <Select
                            value={milestone.status}
                            onValueChange={(value) =>
                              updateMilestone(index, "status", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="not-started">
                                Not Started
                              </SelectItem>
                              <SelectItem value="in-progress">
                                In Progress
                              </SelectItem>
                              <SelectItem value="completed">
                                Completed
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="col-span-1">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeMilestone(index)}
                            disabled={milestones.length === 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="time-material" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="estimated-budget">Estimated Budget</Label>
                      <Input
                        id="estimated-budget"
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tm-currency">Currency</Label>
                      <Select defaultValue="usd">
                        <SelectTrigger id="tm-currency">
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
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hourly-rate">Default Hourly Rate</Label>
                      <Input
                        id="hourly-rate"
                        type="number"
                        defaultValue="150"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estimated-hours">Estimated Hours</Label>
                      <Input
                        id="estimated-hours"
                        type="number"
                        defaultValue="300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="billing-cycle">Billing Cycle</Label>
                    <Select defaultValue="monthly">
                      <SelectTrigger id="billing-cycle">
                        <SelectValue placeholder="Select billing cycle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expense-handling">Expense Handling</Label>
                    <Select defaultValue="billable">
                      <SelectTrigger id="expense-handling">
                        <SelectValue placeholder="Select expense handling" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="billable">
                          Billable to Client
                        </SelectItem>
                        <SelectItem value="non-billable">
                          Non-Billable
                        </SelectItem>
                        <SelectItem value="markup">
                          Billable with Markup
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-2">
                <Label htmlFor="team-members">Team Members</Label>
                <Select>
                  <SelectTrigger id="team-members">
                    <SelectValue placeholder="Select team members" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Smith</SelectItem>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="michael">Michael Brown</SelectItem>
                    <SelectItem value="emily">Emily Davis</SelectItem>
                    <SelectItem value="david">David Wilson</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex flex-wrap gap-2 mt-2">
                  {projectData.team.map((member, index) => (
                    <Badge key={index} className="flex items-center gap-1">
                      {member}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 p-0 hover:bg-transparent"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Enter any additional notes for this project"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href={`/projects/${id}`}>Cancel</Link>
              </Button>
              <Button onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" /> Save Changes
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Project Settings</CardTitle>
              <CardDescription>
                Additional configuration options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="project-status">Status</Label>
                <Select defaultValue={projectData.status}>
                  <SelectTrigger id="project-status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="on-hold">On Hold</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select defaultValue={projectData.priority}>
                  <SelectTrigger id="priority">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select defaultValue={projectData.category}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  placeholder="Enter tags separated by commas"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="invoice-schedule">Invoice Schedule</Label>
                <Select defaultValue={projectData.invoiceSchedule}>
                  <SelectTrigger id="invoice-schedule">
                    <SelectValue placeholder="Select invoice schedule" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="milestone">
                      On Milestone Completion
                    </SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="biweekly">Bi-weekly</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="completion">
                      On Project Completion
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="payment-terms">Payment Terms</Label>
                <Select defaultValue={projectData.paymentTerms}>
                  <SelectTrigger id="payment-terms">
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="net15">Net 15</SelectItem>
                    <SelectItem value="net30">Net 30</SelectItem>
                    <SelectItem value="net45">Net 45</SelectItem>
                    <SelectItem value="net60">Net 60</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Important Dates</CardTitle>
              <CardDescription>Key project timeline dates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {importantDates.map((date, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-2 border rounded-md"
                >
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Event name"
                      value={date.name}
                      onChange={(e) =>
                        updateImportantDate(index, "name", e.target.value)
                      }
                    />
                    <Input
                      type="date"
                      value={date.date}
                      onChange={(e) =>
                        updateImportantDate(index, "date", e.target.value)
                      }
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeImportantDate(index)}
                    disabled={importantDates.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={addImportantDate}
              >
                <Plus className="h-4 w-4 mr-2" /> Add Date
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
