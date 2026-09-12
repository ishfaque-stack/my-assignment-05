import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">

          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <img
                src={logo}
                alt="Logo"
                className="h-7 w-auto object-contain"
              />
            </div>

            <p className="max-w-xs text-xs leading-5 text-gray-500">
              Curated tools, technology, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-4 text-[11px] text-gray-500">
              <a href="#" className="transition hover:text-pink-500">
                GitHub
              </a>

              <a href="#" className="transition hover:text-pink-500">
                Twitter
              </a>

              <a href="#" className="transition hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <ul className="space-y-3 text-[11px] text-gray-500">
              <li>
                <a href="#" className="transition hover:text-pink-500">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-pink-500">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-pink-500">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <ul className="space-y-3 text-[11px] text-gray-500">
              <li>
                <a href="#" className="transition hover:text-pink-500">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-pink-500">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-pink-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <ul className="space-y-3 text-[11px] text-gray-500">
              <li>
                <a href="#" className="transition hover:text-pink-500">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-pink-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[10px] text-gray-400">
            © 2026 All rights reserved.
          </p>

          <div className="flex gap-5 text-[10px] text-gray-400">
            <a href="#" className="transition hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="transition hover:text-pink-500">
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;