import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto py-12">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>

        <div className="prose max-w-none space-y-4">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: November 10, 2023
          </p>

          <strong>1. Introduction</strong>
          <p>
            At Dynamic Invoice Generator, we respect your privacy and are
            committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our website and services.
          </p>
          <p>
            Please read this Privacy Policy carefully. If you do not agree with
            the terms of this Privacy Policy, please do not access the site or
            use our services.
          </p>

          <strong>2. Information We Collect</strong>
          <p>
            We collect several types of information from and about users of our
            Services, including:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personal identifiers such as name,
              email address, phone number, billing address, and payment
              information.
            </li>
            <li>
              <strong>Business Data:</strong> Information about your business
              such as company name, tax ID, and business address.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              Services, including log data, device information, and analytics
              data.
            </li>
            <li>
              <strong>Customer Data:</strong> Information about your customers
              that you input into our system for invoicing purposes.
            </li>
          </ul>

          <strong>3. How We Collect Information</strong>
          <p>We collect information:</p>
          <ul>
            <li>
              Directly from you when you register for our Services, use our
              Services, or communicate with us.
            </li>
            <li>
              Automatically as you navigate through our Services, using cookies
              and similar technologies.
            </li>
            <li>
              From third parties, such as business partners and service
              providers.
            </li>
          </ul>

          <strong>4. How We Use Your Information</strong>
          <p>
            We may use the information we collect about you for various
            purposes, including:
          </p>
          <ul>
            <li>Providing, maintaining, and improving our Services.</li>
            <li>
              Processing your transactions and sending related information,
              including confirmations and invoices.
            </li>
            <li>Responding to your comments, questions, and requests.</li>
            <li>
              Sending you technical notices, updates, security alerts, and
              support and administrative messages.
            </li>
            <li>
              Communicating with you about products, services, offers,
              promotions, and events, and providing news and information we
              think will be of interest to you.
            </li>
            <li>
              Monitoring and analyzing trends, usage, and activities in
              connection with our Services.
            </li>
            <li>
              Detecting, investigating, and preventing fraudulent transactions
              and other illegal activities and protecting the rights and
              property of Dynamic Invoice Generator and others.
            </li>
            <li>
              Personalizing and improving the Services and providing content or
              features that match user profiles or interests.
            </li>
          </ul>

          <strong>5. Disclosure of Your Information</strong>
          <p>
            We may disclose personal information that we collect or you provide:
          </p>
          <ul>
            <li>To our subsidiaries and affiliates.</li>
            <li>
              To contractors, service providers, and other third parties we use
              to support our business.
            </li>
            <li>
              To a buyer or other successor in the event of a merger,
              divestiture, restructuring, reorganization, dissolution, or other
              sale or transfer of some or all of our assets.
            </li>
            <li>To fulfill the purpose for which you provide it.</li>
            <li>
              For any other purpose disclosed by us when you provide the
              information.
            </li>
            <li>With your consent.</li>
            <li>
              To comply with any court order, law, or legal process, including
              to respond to any government or regulatory request.
            </li>
            <li>
              To enforce our rights arising from any contracts entered into
              between you and us, including the Terms of Service.
            </li>
            <li>
              If we believe disclosure is necessary or appropriate to protect
              the rights, property, or safety of Dynamic Invoice Generator, our
              customers, or others.
            </li>
          </ul>

          <strong>6. Data Security</strong>
          <p>
            We have implemented measures designed to secure your personal
            information from accidental loss and from unauthorized access, use,
            alteration, and disclosure. All information you provide to us is
            stored on secure servers behind firewalls.
          </p>
          <p>
            The safety and security of your information also depends on you.
            Where we have given you (or where you have chosen) a password for
            access to certain parts of our Services, you are responsible for
            keeping this password confidential.
          </p>

          <strong>7. Your Rights</strong>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, such as:
          </p>
          <ul>
            <li>The right to access your personal information.</li>
            <li>The right to rectify inaccurate personal information.</li>
            <li>
              The right to request the deletion of your personal information.
            </li>
            <li>
              The right to restrict the processing of your personal information.
            </li>
            <li>The right to data portability.</li>
            <li>
              The right to object to the processing of your personal
              information.
            </li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information
            provided in the "Contact Us" section below.
          </p>

          <strong>8. Children's Privacy</strong>
          <p>
            Our Services are not intended for children under 16 years of age. We
            do not knowingly collect personal information from children under
            16. If you are under 16, do not use or provide any information on
            our Services.
          </p>

          <strong>9. Changes to Our Privacy Policy</strong>
          <p>
            We may update our Privacy Policy from time to time. If we make
            material changes to how we treat our users' personal information, we
            will notify you through a notice on the website or by email.
          </p>
          <p>
            The date the Privacy Policy was last revised is identified at the
            top of the page. You are responsible for ensuring we have an
            up-to-date active and deliverable email address for you, and for
            periodically visiting our website and this Privacy Policy to check
            for any changes.
          </p>

          <strong>10. Contact Us</strong>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>
            Dynamic Invoice Generator
            <br />
            123 Invoice Street, Suite 456
            <br />
            San Francisco, CA 94103
            <br />
            privacy@invoicegenerator.com
            <br />
            (555) 123-4567
          </p>
        </div>
      </div>
    </main>
  );
}
