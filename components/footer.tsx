import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/uct-logo.png" alt="UCT Groups" className="h-12 w-auto" />
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Professional security services across Australia. Licensed, trained, and ready to protect what matters
              most.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <Link href="/services" className="hover:text-secondary-foreground transition-colors">
                  VIP Protection
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-foreground transition-colors">
                  Static Guards
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-foreground transition-colors">
                  Mobile Patrols
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-foreground transition-colors">
                  CCTV Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-foreground transition-colors">
                  Event Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <Link href="/about" className="hover:text-secondary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-secondary-foreground transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-secondary-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-secondary-foreground transition-colors">
                  Security Tips
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>1300 UCT GRP</li>
              <li>info@uctgroups.com.au</li>
              <li>Sydney, NSW</li>
              <li className="pt-2">
                <div className="font-semibold text-secondary-foreground">24/7 Emergency Response</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/80">
          <p>
            &copy; {new Date().getFullYear()} UCT Groups. All rights reserved. Licensed Security Provider - NSW,
            Australia
          </p>
        </div>
      </div>
    </footer>
  )
}
