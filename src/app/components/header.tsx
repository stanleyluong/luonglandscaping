import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Using lucide-react for icons

const mainNavLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "About Us", to: "/about" },
];

// Sub-links for the mobile menu under "Services"
const serviceSubLinks = [
  { name: "Fences & Gates", to: "/services/fences-gates" },
  { name: "Retaining Walls", to: "/services/retaining-walls" },
  { name: "Patios", to: "/services/patios" },
  { name: "Sustainable Landscape Design", to: "/services/sustainable-landscape-design" },
  { name: "Irrigation", to: "/services/irrigation" },
  { name: "Yard Maintenance", to: "/services/yard-maintenance" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesSubMenuOpen, setIsServicesSubMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) { // If closing main menu, also close sub-menu
      setIsServicesSubMenuOpen(false);
    }
  };

  const toggleServicesSubMenu = (e: React.MouseEvent) => {
    // Prevent navigation if it's a main "Services" link in mobile view
    if (window.innerWidth < 1280 && mainNavLinks.find(link => link.to === "/services" && link.name === "Services")) {
       e.preventDefault(); 
    }
    setIsServicesSubMenuOpen(!isServicesSubMenuOpen);
  };
  

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesSubMenuOpen(false); // Also close sub-menu on route change
  }, [location]);

  return (
    <header className="bg-green-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo / Site Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl sm:text-2xl font-bold hover:text-green-300 transition-colors duration-300">
              Luong Landscaping
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-2">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`px-3 py-2 rounded-md text-base font-medium hover:bg-green-800 hover:text-green-200 transition-colors duration-300 ${
                  location.pathname.startsWith(link.to) && link.to !== "/" || location.pathname === link.to ? "bg-green-800 text-green-100" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Get a Quote Button */}
          <div className="hidden xl:block flex-shrink-0">
            <Link to="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-2.5 px-5 rounded-md text-base transition-colors duration-300">
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-200 hover:text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-green-900 shadow-xl z-40" id="mobile-menu">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainNavLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.to}
                  className={`flex justify-between items-center px-3 py-3 rounded-md text-base font-medium hover:bg-green-800 hover:text-green-200 transition-colors duration-300 ${
                    location.pathname.startsWith(link.to) && link.to !== "/" || location.pathname === link.to ? "bg-green-800 text-green-100" : ""
                  }`}
                  onClick={(e) => {
                    if (link.name === "Services") {
                      toggleServicesSubMenu(e);
                    } else {
                      setIsMobileMenuOpen(false); // Close main menu for other links
                      setIsServicesSubMenuOpen(false); // Ensure sub-menu is closed
                    }
                  }}
                >
                  {link.name}
                  {link.name === "Services" && (
                    <svg className={`w-5 h-5 transform transition-transform duration-200 ${isServicesSubMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </Link>
                {link.name === "Services" && isServicesSubMenuOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {serviceSubLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.to}
                        className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 hover:text-green-100 transition-colors duration-300 ${
                          location.pathname === subLink.to ? "bg-green-700 text-green-50" : ""
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false); // Close main menu
                          setIsServicesSubMenuOpen(false); // Close sub-menu
                        }}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 px-1">
              <Link to="/contact" className="block" onClick={() => { setIsMobileMenuOpen(false); setIsServicesSubMenuOpen(false);}}>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-4 rounded-md text-base transition-colors duration-300">
                  Get a Quote
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}