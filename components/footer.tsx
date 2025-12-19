import { Instagram, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-[#0A1A2F] px-4 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold">MoneySense</h3>
            <p className="mb-6 max-w-md text-white/70">
              A guided finance workbook and community to help young people learn practical money skills while
              implementing them in real life.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#D9CBB5] hover:text-[#0A1A2F]"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#D9CBB5] hover:text-[#0A1A2F]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#D9CBB5] hover:text-[#0A1A2F]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@moneysense.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#D9CBB5] hover:text-[#0A1A2F]"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-[#D9CBB5]">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="#home" className="transition-colors hover:text-[#D9CBB5]">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="transition-colors hover:text-[#D9CBB5]">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="transition-colors hover:text-[#D9CBB5]">
                  Features
                </a>
              </li>
              <li>
                <a href="#waitlist" className="transition-colors hover:text-[#D9CBB5]">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-[#D9CBB5]">Legal</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="#" className="transition-colors hover:text-[#D9CBB5]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#D9CBB5]">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#D9CBB5]">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {currentYear} MoneySense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
