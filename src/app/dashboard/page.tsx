// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   FileText,
//   Clock,
//   CreditCard,
//   ArrowUpRight,
//   ArrowDownRight,
//   DollarSign,
// } from "lucide-react";

// export default function DashboardPage() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <header className="sticky top-0 z-10 border-b bg-background">
//         <div className="container flex h-16 items-center justify-between py-4">
//           <div className="flex items-center gap-2">
//             <FileText className="h-6 w-6" />
//             <h1 className="text-xl font-bold">Dynamic Invoice Generator</h1>
//           </div>
//           <nav className="flex items-center gap-4">
//             <Button variant="ghost" asChild className="font-bold">
//               <Link href="/dashboard">Dashboard</Link>
//             </Button>
//             <Button variant="ghost" asChild>
//               <Link href="/invoices">Invoices</Link>
//             </Button>
//             <Button variant="ghost" asChild>
//               <Link href="/projects">Projects</Link>
//             </Button>
//             <Button variant="ghost" asChild>
//               <Link href="/customers">Customers</Link>
//             </Button>
//             <Button variant="ghost" asChild>
//               <Link href="/settings">Settings</Link>
//             </Button>
//           </nav>
//         </div>
//       </header>
//       <main className="flex-1 p-6">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold">Dashboard</h1>
//           <Button asChild>
//             <Link href="/invoices/create">Create New Invoice</Link>
//           </Button>
//         </div>
//         <div className="grid gap-6 md:grid-cols-3">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 Total Invoiced
//               </CardTitle>
//               <DollarSign className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">$45,231.89</div>
//               <p className="text-xs text-muted-foreground flex items-center">
//                 <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
//                 <span className="text-green-500">+20.1%</span> from last month
//               </p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
//               <CreditCard className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">$12,234.00</div>
//               <p className="text-xs text-muted-foreground flex items-center">
//                 <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
//                 <span className="text-red-500">-4.5%</span> from last month
//               </p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 Billable Hours
//               </CardTitle>
//               <Clock className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">1,245</div>
//               <p className="text-xs text-muted-foreground flex items-center">
//                 <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
//                 <span className="text-green-500">+12.3%</span> from last month
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//         <div className="mt-6">
//           <Tabs defaultValue="recent">
//             <TabsList>
//               <TabsTrigger value="recent">Recent Invoices</TabsTrigger>
//               <TabsTrigger value="pending">Pending Approval</TabsTrigger>
//               <TabsTrigger value="overdue">Overdue</TabsTrigger>
//             </TabsList>
//             <TabsContent value="recent" className="mt-4">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Recent Invoices</CardTitle>
//                   <CardDescription>
//                     Overview of the most recent invoices created in the system.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="overflow-x-auto">
//                     <table className="w-full">
//                       <thead>
//                         <tr className="border-b">
//                           <th className="text-left p-2">Invoice #</th>
//                           <th className="text-left p-2">Customer</th>
//                           <th className="text-left p-2">Project</th>
//                           <th className="text-left p-2">Type</th>
//                           <th className="text-left p-2">Amount</th>
//                           <th className="text-left p-2">Status</th>
//                           <th className="text-left p-2">Date</th>
//                           <th className="text-left p-2">Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr className="border-b">
//                           <td className="p-2">INV-2023-001</td>
//                           <td className="p-2">Acme Corp</td>
//                           <td className="p-2">Website Redesign</td>
//                           <td className="p-2">Fixed-Price</td>
//                           <td className="p-2">$12,500.00</td>
//                           <td className="p-2">
//                             <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">
//                               Paid
//                             </span>
//                           </td>
//                           <td className="p-2">2023-10-25</td>
//                           <td className="p-2">
//                             <Button variant="ghost" size="sm">
//                               View
//                             </Button>
//                           </td>
//                         </tr>
//                         <tr className="border-b">
//                           <td className="p-2">INV-2023-002</td>
//                           <td className="p-2">Globex Inc</td>
//                           <td className="p-2">Mobile App Development</td>
//                           <td className="p-2">T&M</td>
//                           <td className="p-2">$8,750.00</td>
//                           <td className="p-2">
//                             <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs">
//                               Pending
//                             </span>
//                           </td>
//                           <td className="p-2">2023-10-24</td>
//                           <td className="p-2">
//                             <Button variant="ghost" size="sm">
//                               View
//                             </Button>
//                           </td>
//                         </tr>
//                         <tr className="border-b">
//                           <td className="p-2">INV-2023-003</td>
//                           <td className="p-2">Wayne Enterprises</td>
//                           <td className="p-2">Security Audit</td>
//                           <td className="p-2">Fixed-Price</td>
//                           <td className="p-2">$15,000.00</td>
//                           <td className="p-2">
//                             <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">
//                               Sent
//                             </span>
//                           </td>
//                           <td className="p-2">2023-10-22</td>
//                           <td className="p-2">
//                             <Button variant="ghost" size="sm">
//                               View
//                             </Button>
//                           </td>
//                         </tr>
//                         <tr className="border-b">
//                           <td className="p-2">INV-2023-004</td>
//                           <td className="p-2">Stark Industries</td>
//                           <td className="p-2">API Integration</td>
//                           <td className="p-2">T&M</td>
//                           <td className="p-2">$6,320.00</td>
//                           <td className="p-2">
//                             <span className="px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs">
//                               Overdue
//                             </span>
//                           </td>
//                           <td className="p-2">2023-10-15</td>
//                           <td className="p-2">
//                             <Button variant="ghost" size="sm">
//                               View
//                             </Button>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//             <TabsContent value="pending" className="mt-4">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Pending Approval</CardTitle>
//                   <CardDescription>
//                     Invoices waiting for review and approval before being sent.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="overflow-x-auto">
//                     <table className="w-full">
//                       <thead>
//                         <tr className="border-b">
//                           <th className="text-left p-2">Invoice #</th>
//                           <th className="text-left p-2">Customer</th>
//                           <th className="text-left p-2">Project</th>
//                           <th className="text-left p-2">Type</th>
//                           <th className="text-left p-2">Amount</th>
//                           <th className="text-left p-2">Created By</th>
//                           <th className="text-left p-2">Date</th>
//                           <th className="text-left p-2">Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr className="border-b">
//                           <td className="p-2">INV-2023-005</td>
//                           <td className="p-2">Umbrella Corp</td>
//                           <td className="p-2">Data Migration</td>
//                           <td className="p-2">T&M</td>
//                           <td className="p-2">$9,850.00</td>
//                           <td className="p-2">John Smith</td>
//                           <td className="p-2">2023-10-26</td>
//                           <td className="p-2">
//                             <div className="flex gap-2">
//                               <Button variant="outline" size="sm">
//                                 Review
//                               </Button>
//                               <Button size="sm">Approve</Button>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr className="border-b">
//                           <td className="p-2">INV-2023-006</td>
//                           <td className="p-2">Cyberdyne Systems</td>
//                           <td className="p-2">AI Implementation</td>
//                           <td className="p-2">Fixed-Price</td>
//                           <td className="p-2">$22,500.00</td>
//                           <td className="p-2">Sarah Connor</td>
//                           <td className="p-2">2023-10-25</td>
//                           <td className="p-2">
//                             <div className="flex gap-2">
//                               <Button variant="outline" size="sm">
//                                 Review
//                               </Button>
//                               <Button size="sm">Approve</Button>
//                             </div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//             <TabsContent value="overdue" className="mt-4">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Overdue Invoices</CardTitle>
//                   <CardDescription>
//                     Invoices that are past their due date and require follow-up.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="overflow-x-auto">
//                     <table className="w-full">
//                       <thead>
//                         <tr className="border-b">
//                           <th className="text-left p-2">Invoice #</th>
//                           <th className="text-left p-2">Customer</th>
//                           <th className="text-left p-2">Project</th>
//                           <th className="text-left p-2">Amount</th>
//                           <th className="text-left p-2">Due Date</th>
//                           <th className="text-left p-2">Days Overdue</th>
//                           <th className="text-left p-2">Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr className="border-b">
//                           <td className="p-2">INV-2023-004</td>
//                           <td className="p-2">Stark Industries</td>
//                           <td className="p-2">API Integration</td>
//                           <td className="p-2">$6,320.00</td>
//                           <td className="p-2">2023-10-15</td>
//                           <td className="p-2 text-red-500">12</td>
//                           <td className="p-2">
//                             <div className="flex gap-2">
//                               <Button variant="outline" size="sm">
//                                 View
//                               </Button>
//                               <Button size="sm">Send Reminder</Button>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr className="border-b">
//                           <td className="p-2">INV-2023-001</td>
//                           <td className="p-2">Oscorp Industries</td>
//                           <td className="p-2">Database Optimization</td>
//                           <td className="p-2">$4,750.00</td>
//                           <td className="p-2">2023-10-10</td>
//                           <td className="p-2 text-red-500">17</td>
//                           <td className="p-2">
//                             <div className="flex gap-2">
//                               <Button variant="outline" size="sm">
//                                 View
//                               </Button>
//                               <Button size="sm">Send Reminder</Button>
//                             </div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </main>
//       <footer className="border-t bg-muted/40">
//         <div className="container flex h-16 items-center justify-between py-4">
//           <p className="text-sm text-muted-foreground">
//             © 2023 Dynamic Invoice Generator. All rights reserved.
//           </p>
//           <nav className="flex items-center gap-4">
//             <Link
//               href="#"
//               className="text-sm text-muted-foreground hover:underline"
//             >
//               Terms
//             </Link>
//             <Link
//               href="#"
//               className="text-sm text-muted-foreground hover:underline"
//             >
//               Privacy
//             </Link>
//             <Link
//               href="#"
//               className="text-sm text-muted-foreground hover:underline"
//             >
//               Contact
//             </Link>
//           </nav>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
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
  Clock,
  CreditCard,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
} from "lucide-react";
import * as d3 from "d3";

export default function DashboardPage() {
  const invoiceChartRef = useRef(null);
  const statusChartRef = useRef(null);

  useEffect(() => {
    if (invoiceChartRef.current) {
      drawInvoiceChart();
    }

    if (statusChartRef.current) {
      drawStatusChart();
    }

    // Cleanup function
    return () => {
      d3.select(invoiceChartRef.current).selectAll("*").remove();
      d3.select(statusChartRef.current).selectAll("*").remove();
    };
  }, []);

  const drawInvoiceChart = () => {
    // Sample data for monthly invoices
    const data = [
      { month: "Jan", amount: 32500 },
      { month: "Feb", amount: 28700 },
      { month: "Mar", amount: 35200 },
      { month: "Apr", amount: 29800 },
      { month: "May", amount: 38400 },
      { month: "Jun", amount: 42100 },
      { month: "Jul", amount: 39600 },
      { month: "Aug", amount: 36200 },
      { month: "Sep", amount: 41800 },
      { month: "Oct", amount: 45200 },
      { month: "Nov", amount: 0 },
      { month: "Dec", amount: 0 },
    ];

    // Clear any existing chart
    d3.select(invoiceChartRef.current).selectAll("*").remove();

    // Set dimensions
    const margin = { top: 20, right: 30, bottom: 40, left: 60 };
    const width =
      invoiceChartRef.current.clientWidth - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Create SVG
    const svg = d3
      .select(invoiceChartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // X scale
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0.3);

    // Y scale
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.amount) * 1.1])
      .range([height, 0]);

    // Add X axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("text-anchor", "middle");

    // Add Y axis
    svg.append("g").call(
      d3
        .axisLeft(y)
        .ticks(5)
        .tickFormat((d) => `$${d / 1000}k`)
    );

    // Add bars
    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.month))
      .attr("y", (d) => y(d.amount))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.amount))
      .attr("fill", "#3b82f6")
      .attr("rx", 4);

    // Add title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 0 - margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .text("Monthly Invoice Totals");
  };

  const drawStatusChart = () => {
    // Sample data for invoice statuses
    const data = [
      { status: "Paid", value: 65, color: "#22c55e" },
      { status: "Pending", value: 20, color: "#eab308" },
      { status: "Sent", value: 10, color: "#3b82f6" },
      { status: "Overdue", value: 5, color: "#ef4444" },
    ];

    // Clear any existing chart
    d3.select(statusChartRef.current).selectAll("*").remove();

    // Set dimensions
    const width = statusChartRef.current.clientWidth;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    // Create SVG
    const svg = d3
      .select(statusChartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Create pie chart layout
    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null);

    // Generate arc
    const arc = d3
      .arc()
      .innerRadius(radius * 0.5) // Donut chart
      .outerRadius(radius * 0.8);

    // Generate outer arc for labels
    const outerArc = d3
      .arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    // Add slices
    const slices = svg
      .selectAll("path")
      .data(pie(data))
      .join("path")
      .attr("d", arc)
      .attr("fill", (d) => d.data.color)
      .attr("stroke", "white")
      .style("stroke-width", "2px");

    // Add labels
    const text = svg
      .selectAll("text")
      .data(pie(data))
      .join("text")
      .attr("transform", (d) => {
        const pos = outerArc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.95 * (midAngle < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .style("text-anchor", (d) => {
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midAngle < Math.PI ? "start" : "end";
      })
      .style("font-size", "12px")
      .text((d) => `${d.data.status} (${d.data.value}%)`);

    // Add polylines between slices and labels
    svg
      .selectAll("polyline")
      .data(pie(data))
      .join("polyline")
      .attr("points", (d) => {
        const pos = outerArc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.95 * (midAngle < Math.PI ? 1 : -1);
        return [arc.centroid(d), outerArc.centroid(d), pos];
      })
      .style("fill", "none")
      .style("stroke", "#999")
      .style("stroke-width", "1px");

    // Add center text
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Invoice Status");
  };

  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button asChild>
          <Link href="/invoices/create">Create New Invoice</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Invoiced
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">+20.1%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234.00</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
              <span className="text-red-500">-4.5%</span> from last month
            </p>
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
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">+12.3%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 mt-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Invoice Trends</CardTitle>
            <CardDescription>
              Monthly invoice totals for the current year
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div ref={invoiceChartRef} className="w-full h-[300px]"></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Invoice Status Distribution</CardTitle>
            <CardDescription>
              Breakdown of invoices by current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div ref={statusChartRef} className="w-full h-[300px]"></div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Tabs defaultValue="recent">
          <TabsList>
            <TabsTrigger value="recent">Recent Invoices</TabsTrigger>
            <TabsTrigger value="pending">Pending Approval</TabsTrigger>
            <TabsTrigger value="overdue">Overdue</TabsTrigger>
          </TabsList>
          <TabsContent value="recent" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Invoices</CardTitle>
                <CardDescription>
                  Overview of the most recent invoices created in the system.
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
                        <th className="text-left p-2">Type</th>
                        <th className="text-left p-2">Amount</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Date</th>
                        <th className="text-left p-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
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
                        <td className="p-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b">
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
                        <td className="p-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b">
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
                        <td className="p-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-b">
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
                        <td className="p-2">
                          <Button variant="ghost" size="sm">
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
          <TabsContent value="pending" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Approval</CardTitle>
                <CardDescription>
                  Invoices waiting for review and approval before being sent.
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
                        <th className="text-left p-2">Type</th>
                        <th className="text-left p-2">Amount</th>
                        <th className="text-left p-2">Created By</th>
                        <th className="text-left p-2">Date</th>
                        <th className="text-left p-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">INV-2023-005</td>
                        <td className="p-2">Umbrella Corp</td>
                        <td className="p-2">Data Migration</td>
                        <td className="p-2">T&M</td>
                        <td className="p-2">$9,850.00</td>
                        <td className="p-2">John Smith</td>
                        <td className="p-2">2023-10-26</td>
                        <td className="p-2">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Review
                            </Button>
                            <Button size="sm">Approve</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">INV-2023-006</td>
                        <td className="p-2">Cyberdyne Systems</td>
                        <td className="p-2">AI Implementation</td>
                        <td className="p-2">Fixed-Price</td>
                        <td className="p-2">$22,500.00</td>
                        <td className="p-2">Sarah Connor</td>
                        <td className="p-2">2023-10-25</td>
                        <td className="p-2">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Review
                            </Button>
                            <Button size="sm">Approve</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="overdue" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Overdue Invoices</CardTitle>
                <CardDescription>
                  Invoices that are past their due date and require follow-up.
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
                        <th className="text-left p-2">Due Date</th>
                        <th className="text-left p-2">Days Overdue</th>
                        <th className="text-left p-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">INV-2023-004</td>
                        <td className="p-2">Stark Industries</td>
                        <td className="p-2">API Integration</td>
                        <td className="p-2">$6,320.00</td>
                        <td className="p-2">2023-10-15</td>
                        <td className="p-2 text-red-500">12</td>
                        <td className="p-2">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button size="sm">Send Reminder</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">INV-2023-001</td>
                        <td className="p-2">Oscorp Industries</td>
                        <td className="p-2">Database Optimization</td>
                        <td className="p-2">$4,750.00</td>
                        <td className="p-2">2023-10-10</td>
                        <td className="p-2 text-red-500">17</td>
                        <td className="p-2">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button size="sm">Send Reminder</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
