import Link from "next/link"
import { Car } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FloatingEmergencyButton } from "@/components/floating-emergency-button"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-bg-lavender/95 backdrop-blur supports-[backdrop-filter]:bg-bg-lavender/60">
        <div className="container flex h-16 items-center justify-between max-w-[70%] mx-auto">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Car className="h-6 w-6 text-accent-green" />
            <span className="text-text-dark">RoadAssist</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#features" className="text-text-dark/70 hover:text-text-dark transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-text-dark/70 hover:text-text-dark transition-colors">
              How it works
            </Link>
            <Link href="/#pricing" className="text-text-dark/70 hover:text-text-dark transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-text-dark/70 hover:text-text-dark transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-text-dark/70 hover:text-text-dark transition-colors">
              Contact Us
            </Link>
            <Link href="/terms" className="text-text-dark font-medium transition-colors">
              Terms & Conditions
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button variant="secondary">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-accent-green text-text-dark">
                Legal Information
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-text-dark">Terms & Conditions</h1>
              <p className="max-w-[700px] text-text-dark/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Last updated: April 11, 2023
              </p>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none bg-bg-lavender p-8 rounded-xl border border-accent-green/20">
              <h2 className="text-2xl font-bold mt-8 mb-4 text-text-dark">1. Introduction</h2>
              <p className="text-text-dark">
                Welcome to RoadAssist ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of
                Service") govern your use of our website and mobile application (collectively, the "Service") operated
                by RoadAssist.
              </p>
              <p className="text-text-dark">
                Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and
                disclose information that results from your use of our web pages. Please read it here:{" "}
                <Link href="/privacy" className="text-accent-green hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="text-text-dark">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part
                of the terms, then you may not access the Service.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-text-dark">2. Communications</h2>
              <p className="text-text-dark">
                By creating an Account on our Service, you agree to subscribe to newsletters, marketing or promotional
                materials and other information we may send. However, you may opt out of receiving any, or all, of these
                communications from us by following the unsubscribe link or instructions provided in any email we send.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-text-dark">3. Purchases</h2>
              <p className="text-text-dark">
                If you wish to purchase any product or service made available through the Service ("Purchase"), you may
                be asked to supply certain information relevant to your Purchase including, without limitation, your
                credit card number, the expiration date of your credit card, your billing address, and your shipping
                information.
              </p>
              <p className="text-text-dark">
                You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment
                method(s) in connection with any Purchase; and that (ii) the information you supply to us is true,
                correct and complete.
              </p>
              <p className="text-text-dark">
                The Service may employ the use of third-party services for the purpose of facilitating payment and the
                completion of Purchases. By submitting your information, you grant us the right to provide the
                information to these third parties subject to our Privacy Policy.
              </p>
              <p className="text-text-dark">
                We reserve the right to refuse or cancel your order at any time for reasons including but not limited
                to: product or service availability, errors in the description or price of the product or service, error
                in your order or other reasons.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-text-dark">4. Service Providers</h2>
              <p className="text-text-dark">Service Providers who register on our platform agree to:</p>
              <ul className="list-disc pl-6 space-y-2 my-4 text-text-dark">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain appropriate insurance coverage for the services they offer</li>
                <li>Respond promptly to service requests when available</li>
                <li>Provide services in a professional and courteous manner</li>
                <li>Charge fair and transparent prices for services rendered</li>
                <li>Pay the platform fee of 10% on all completed services</li>
              </ul>
              <p className="text-text-dark">
                RoadAssist reserves the right to remove any Service Provider from the platform for violations of these
                terms, poor performance, or customer complaints.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-text-dark">5. Car Owners</h2>
              <p className="text-text-dark">Car Owners who register on our platform agree to:</p>
              <ul className="list-disc pl-6 space-y-2 my-4 text-text-dark">
                <li>Provide accurate information about their vehicle and service needs</li>
                <li>Be present at the specified location when service is scheduled</li>
                <li>Pay for services rendered through the platform</li>
                <li>Provide honest feedback and ratings for Service Providers</li>
                <li>Not engage in fraudulent activities or misuse of the platform</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-text-dark">6. Intellectual Property</h2>
              <p className="text-text-dark">
                The Service and its original content (excluding content provided by users), features and functionality
                are and will remain the exclusive property of RoadAssist and its licensors. The Service is protected by
                copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and
                trade dress may not be used in connection with any product or service without the prior written consent
                of RoadAssist.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-text-dark">7. Limitation of Liability</h2>
              <p className="text-text-dark">
                In no event shall RoadAssist, nor its directors, employees, partners, agents, suppliers, or affiliates,
                be liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your
                access to or use of or inability to access or use the Service; (ii) any conduct or content of any third
                party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or
                alteration of your transmissions or content, whether based on warranty, contract, tort (including
                negligence) or any other legal theory, whether or not we have been informed of the possibility of such
                damage.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-text-dark">8. Changes to Terms</h2>
              <p className="text-text-dark">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material we will try to provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-text-dark">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound
                by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-text-dark">9. Contact Us</h2>
              <p className="text-text-dark">
                If you have any questions about these Terms, please{" "}
                <Link href="/contact" className="text-accent-green hover:underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row max-w-[70%] mx-auto">
          <div className="flex items-center gap-2 font-bold">
            <Car className="h-5 w-5 text-accent-green" />
            <span className="text-text-dark">RoadAssist</span>
          </div>
          <p className="text-center text-sm text-text-dark/70 md:text-left">
            © {new Date().getFullYear()} RoadAssist. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-text-dark hover:text-text-dark">
              Terms
            </Link>
            <Link href="/privacy" className="text-text-dark/70 hover:text-text-dark">
              Privacy
            </Link>
            <Link href="/contact" className="text-text-dark/70 hover:text-text-dark">
              Contact
            </Link>
          </div>
        </div>
      </footer>

      {/* Floating Emergency Button */}
      <FloatingEmergencyButton />
    </div>
  )
}
