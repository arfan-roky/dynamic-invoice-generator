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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Clock,
  Play,
  Pause,
  Plus,
  Calendar,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TimeTrackingPage() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Time Tracking</h1>
        <Button asChild>
          <Link href="/time-tracking/log">
            <Plus className="h-4 w-4 mr-2" /> Log Time Entry
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2h 45m</div>
            <p className="text-xs text-muted-foreground">Across 3 projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18h 30m</div>
            <p className="text-xs text-muted-foreground">Across 5 projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76h 15m</div>
            <p className="text-xs text-muted-foreground">Across 8 projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Billable Hours
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68h 45m</div>
            <p className="text-xs text-muted-foreground">90% of total time</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Time Tracker</CardTitle>
          <CardDescription>Track time for your current task</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-3 space-y-4">
              <div className="grid grid-cols-2 gap-4">
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
                      <SelectItem value="api">API Integration</SelectItem>
                      <SelectItem value="data">Data Migration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="task">Task</Label>
                  <Select>
                    <SelectTrigger id="task">
                      <SelectValue placeholder="Select task" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="design">UI Design</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="testing">Testing</SelectItem>
                      <SelectItem value="meeting">Client Meeting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="What are you working on?"
                />
              </div>
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="billable"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="billable"
                    className="rounded"
                    defaultChecked
                  />
                  <span>Billable</span>
                </Label>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="text-4xl font-bold">00:00:00</div>
              <div className="flex gap-2">
                <Button size="lg" className="rounded-full h-12 w-12 p-0">
                  <Play className="h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 w-12 p-0"
                  disabled
                >
                  <Pause className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="recent">
        <TabsList>
          <TabsTrigger value="recent">Recent Time Entries</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="projects">By Project</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Time Entries</CardTitle>
              <CardDescription>
                Your most recent time tracking activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Date</th>
                      <th className="text-left p-2">Project</th>
                      <th className="text-left p-2">Task</th>
                      <th className="text-left p-2">Description</th>
                      <th className="text-left p-2">Duration</th>
                      <th className="text-left p-2">Billable</th>
                      <th className="text-left p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2">Today</td>
                      <td className="p-2">Website Redesign</td>
                      <td className="p-2">Development</td>
                      <td className="p-2">Homepage implementation</td>
                      <td className="p-2">1h 30m</td>
                      <td className="p-2">Yes</td>
                      <td className="p-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2">Today</td>
                      <td className="p-2">Mobile App Development</td>
                      <td className="p-2">UI Design</td>
                      <td className="p-2">Profile screen mockups</td>
                      <td className="p-2">45m</td>
                      <td className="p-2">Yes</td>
                      <td className="p-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2">Today</td>
                      <td className="p-2">Website Redesign</td>
                      <td className="p-2">Meeting</td>
                      <td className="p-2">Client feedback session</td>
                      <td className="p-2">30m</td>
                      <td className="p-2">Yes</td>
                      <td className="p-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2">Yesterday</td>
                      <td className="p-2">API Integration</td>
                      <td className="p-2">Development</td>
                      <td className="p-2">Authentication endpoints</td>
                      <td className="p-2">2h 15m</td>
                      <td className="p-2">Yes</td>
                      <td className="p-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2">Yesterday</td>
                      <td className="p-2">Data Migration</td>
                      <td className="p-2">Testing</td>
                      <td className="p-2">Data integrity validation</td>
                      <td className="p-2">1h 45m</td>
                      <td className="p-2">Yes</td>
                      <td className="p-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="week" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>This Week's Time Entries</CardTitle>
              <CardDescription>
                Summary of your time entries for the current week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-2">Monday, Nov 6</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 border-b">
                      <div>
                        <p className="font-medium">Website Redesign</p>
                        <p className="text-sm text-muted-foreground">
                          Homepage implementation
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">3h 15m</p>
                        <p className="text-sm text-muted-foreground">
                          Billable
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 border-b">
                      <div>
                        <p className="font-medium">Mobile App Development</p>
                        <p className="text-sm text-muted-foreground">
                          UI Design
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">2h 30m</p>
                        <p className="text-sm text-muted-foreground">
                          Billable
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Tuesday, Nov 7</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 border-b">
                      <div>
                        <p className="font-medium">API Integration</p>
                        <p className="text-sm text-muted-foreground">
                          Authentication endpoints
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">4h 45m</p>
                        <p className="text-sm text-muted-foreground">
                          Billable
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Wednesday, Nov 8 (Today)
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 border-b">
                      <div>
                        <p className="font-medium">Website Redesign</p>
                        <p className="text-sm text-muted-foreground">
                          Homepage implementation
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">1h 30m</p>
                        <p className="text-sm text-muted-foreground">
                          Billable
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 border-b">
                      <div>
                        <p className="font-medium">Mobile App Development</p>
                        <p className="text-sm text-muted-foreground">
                          Profile screen mockups
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">45m</p>
                        <p className="text-sm text-muted-foreground">
                          Billable
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2">
                      <div>
                        <p className="font-medium">Website Redesign</p>
                        <p className="text-sm text-muted-foreground">
                          Client feedback session
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">30m</p>
                        <p className="text-sm text-muted-foreground">
                          Billable
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="projects" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Time by Project</CardTitle>
              <CardDescription>
                Summary of time spent on each project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Website Redesign</h3>
                    <p className="font-medium">8h 45m</p>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    45% of total tracked time
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Mobile App Development</h3>
                    <p className="font-medium">5h 15m</p>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: "27%" }}
                    ></div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    27% of total tracked time
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">API Integration</h3>
                    <p className="font-medium">4h 45m</p>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: "23%" }}
                    ></div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    23% of total tracked time
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Data Migration</h3>
                    <p className="font-medium">1h 45m</p>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: "5%" }}
                    ></div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    5% of total tracked time
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
