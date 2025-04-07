import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Clock,
  CreditCard,
  BarChart3,
  CheckCircle2,
  Star,
  ChevronDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto py-20 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Streamline Your Invoicing Process
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Automate the creation, management, and tracking of invoices for
              both Fixed-Price and Time & Material projects with our powerful
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-white text-slate-900 hover:bg-slate-100"
              >
                <Link href="/invoices/create">Create New Invoice</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-white text-white "
              >
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs border-2 border-white">
                  JD
                </div>
                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs border-2 border-white">
                  KL
                </div>
                <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs border-2 border-white">
                  MR
                </div>
              </div>
              <p className="text-slate-300">
                Join 5,000+ businesses using our platform
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
              alt="Invoice Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive invoicing solution helps you manage your finances
            with ease
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Invoice Management
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Create & Manage</div>
              <p className="text-xs text-muted-foreground">
                Generate invoices for Fixed-Price and T&M projects
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" asChild className="w-full">
                <Link href="/invoices">View Invoices</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Time Tracking
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Track Hours</div>
              <p className="text-xs text-muted-foreground">
                Log billable hours for Time & Material projects
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" asChild className="w-full">
                <Link href="/time-tracking">Track Time</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Billing</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Flexible Billing</div>
              <p className="text-xs text-muted-foreground">
                Support for milestones and custom billing schedules
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" asChild className="w-full">
                <Link href="/billing">Manage Billing</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reports</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Analytics</div>
              <p className="text-xs text-muted-foreground">
                Generate reports by project, customer, and date range
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" asChild className="w-full">
                <Link href="/reports">View Reports</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive invoicing solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Invoice Generation</h3>
              <p className="text-muted-foreground mb-4">
                Create professional invoices with customizable templates for
                both fixed-price and time & material projects.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Multiple invoice templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Automatic tax calculation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Multi-currency support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Time Tracking</h3>
              <p className="text-muted-foreground mb-4">
                Accurately track billable hours across projects and team members
                with our intuitive time tracking system.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Timer and manual entry</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Team time tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Detailed time reports</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Financial Reporting</h3>
              <p className="text-muted-foreground mb-4">
                Gain valuable insights into your business finances with
                comprehensive reporting and analytics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Revenue tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Client profitability</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Customizable dashboards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of businesses worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex text-amber-400 mb-4">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="text-muted-foreground mb-4">
              "This invoicing system has completely transformed how we manage
              our client billing. The time tracking feature is especially
              valuable for our consulting business."
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                JD
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">
                  CEO, TechConsult
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex text-amber-400 mb-4">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="text-muted-foreground mb-4">
              "The milestone-based invoicing has been a game-changer for our
              agency. We can now easily track project progress and bill clients
              accordingly."
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                SJ
              </div>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">
                  Director, Creative Solutions
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex text-amber-400 mb-4">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="text-muted-foreground mb-4">
              "The reporting features provide invaluable insights into our
              business finances. We can now make data-driven decisions about our
              projects and clients."
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                MB
              </div>
              <div>
                <p className="font-medium">Michael Brown</p>
                <p className="text-sm text-muted-foreground">
                  Founder, DataDriven
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our invoicing platform
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does the pricing work?</AccordionTrigger>
                <AccordionContent>
                  We offer flexible pricing plans based on your business needs.
                  Our starter plan begins at $19/month and includes all
                  essential invoicing features. For larger teams, our
                  professional plan at $49/month offers advanced reporting and
                  team management capabilities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I customize invoice templates?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, our platform offers multiple customizable invoice
                  templates. You can add your company logo, change colors, and
                  modify layouts to match your brand identity. For enterprise
                  customers, we also offer fully custom template development.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How does time tracking work?
                </AccordionTrigger>
                <AccordionContent>
                  Our time tracking feature allows you to log hours manually or
                  use the built-in timer. You can categorize time entries by
                  project, task, and client. Team members can submit their time
                  for approval, and managers can review and approve before
                  invoicing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I integrate with accounting software?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer integrations with popular accounting software
                  including QuickBooks, Xero, and FreshBooks. These integrations
                  allow for seamless data synchronization, eliminating the need
                  for manual data entry and reducing errors.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Is there a mobile app available?
                </AccordionTrigger>
                <AccordionContent>
                  No, we currently don't offer a mobile app. However, our web
                  application is fully responsive and works well on mobile
                  browsers, allowing you to access your invoices, track time,
                  and view reports from any device. A dedicated mobile app is on
                  our future roadmap based on user demand.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to streamline your invoicing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses that trust our platform for their
            invoicing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link href="/invoices/create">Get Started Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-white text-white"
            >
              <Link href="/dashboard">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
