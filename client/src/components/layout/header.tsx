import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/ChatGPT_Image_Jan_14,_2026,_03_53_09_PM_1768406021429.png";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Destinations", href: "/destinations" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-44">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <img 
                  src={logoImage} 
                  alt="EduLocate" 
                  className="h-52 cursor-pointer"
                />
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span
                      className={`transition-colors font-medium cursor-pointer ${
                        location === item.href
                          ? "text-[var(--edu-blue)]"
                          : "text-[var(--edu-dark)] hover:text-[var(--edu-blue)]"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-[var(--edu-blue)] text-white hover:bg-blue-700">
                Get Free Consultation
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                      location === item.href
                        ? "text-[var(--edu-blue)] bg-blue-50"
                        : "text-[var(--edu-dark)] hover:text-[var(--edu-blue)] hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <Button 
                  className="w-full mt-4 bg-[var(--edu-blue)] text-white hover:bg-blue-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
