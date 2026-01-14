import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--edu-dark)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">EduLocate</h3>
            <p className="text-gray-300 mb-6">
              Your trusted partner in international education. Helping students achieve their dreams since 2011.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[var(--edu-blue)] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--edu-blue)] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--edu-blue)] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--edu-blue)] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    University Selection
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Application Assistance
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Visa Processing
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Test Preparation
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Accommodation
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Pre-Departure Support
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* UK Regions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">UK Universities</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/destinations">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    England
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/destinations">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Scotland
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/destinations">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Wales
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/destinations">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Northern Ireland
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/destinations">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    London
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/destinations">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Russell Group
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/about">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Success Stories
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Resources
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 EduLocate. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-300 mt-4 md:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
