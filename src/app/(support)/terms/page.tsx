import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto py-12">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>

        <div className="prose max-w-none space-y-4">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: November 10, 2023
          </p>

          <strong>1. Introduction</strong>
          <p>
            Welcome to Dynamic Invoice Generator ("we," "our," or "us"). These
            Terms of Service ("Terms") govern your access to and use of our
            website, products, and services (collectively, the "Services").
          </p>
          <p>
            By accessing or using our Services, you agree to be bound by these
            Terms. If you do not agree to these Terms, you may not access or use
            the Services.
          </p>

          <strong>2. Account Registration</strong>
          <p>
            To use certain features of the Services, you may be required to
            register for an account. You agree to provide accurate, current, and
            complete information during the registration process and to update
            such information to keep it accurate, current, and complete.
          </p>
          <p>
            You are responsible for safeguarding your account credentials and
            for all activities that occur under your account. You agree to
            notify us immediately of any unauthorized use of your account.
          </p>

          <strong>3. Subscription and Payments</strong>
          <p>
            Some of our Services require payment of fees. You agree to pay all
            fees in accordance with the fees, charges, and billing terms in
            effect at the time a fee is due and payable.
          </p>
          <p>
            You are responsible for paying all taxes associated with your use of
            the Services. If you dispute any charges, you must notify us within
            30 days of the date of the charge.
          </p>

          <strong>4. User Content</strong>
          <p>
            Our Services may allow you to store, share, or otherwise make
            available certain information, text, graphics, or other material
            ("User Content"). You retain all rights in, and are solely
            responsible for, the User Content you post to the Services.
          </p>
          <p>
            By making any User Content available through the Services, you grant
            us a non-exclusive, transferable, sublicensable, worldwide,
            royalty-free license to use, copy, modify, create derivative works
            based upon, distribute, publicly display, and publicly perform your
            User Content in connection with operating and providing the
            Services.
          </p>

          <strong>5. Prohibited Conduct</strong>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the Services in any manner that could interfere with, disrupt,
              negatively affect, or inhibit other users from fully enjoying the
              Services
            </li>
            <li>
              Use the Services in any way that violates applicable laws or
              regulations
            </li>
            <li>
              Use the Services to distribute unsolicited promotional or
              commercial content
            </li>
            <li>
              Attempt to circumvent any content-filtering techniques we employ
            </li>
            <li>
              Attempt to access or search the Services through the use of any
              engine, software, tool, agent, device, or mechanism other than the
              software and/or search agents provided by us
            </li>
          </ul>

          <strong>6. Termination</strong>
          <p>
            We may terminate or suspend your access to the Services at any time,
            with or without cause, and with or without notice. Upon termination,
            your right to use the Services will immediately cease.
          </p>

          <strong>7. Disclaimer of Warranties</strong>
          <p>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT
            NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
          </p>

          <strong>8. Limitation of Liability</strong>
          <p>
            IN NO EVENT WILL WE BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
            INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
            DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER
            DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN
            ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>

          <strong>9. Changes to Terms</strong>
          <p>
            We reserve the right to modify these Terms at any time. If we make
            changes to these Terms, we will provide notice of such changes, such
            as by sending an email notification, providing notice through the
            Services, or updating the "Last Updated" date at the beginning of
            these Terms.
          </p>

          <strong>10. Governing Law</strong>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of California, without giving effect to any
            principles of conflicts of law.
          </p>

          <strong>11. Contact Information</strong>
          <p>
            If you have any questions about these Terms, please contact us at
            legal@invoicegenerator.com.
          </p>
        </div>
      </div>
    </main>
  );
}
