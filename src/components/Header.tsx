import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-warm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1>CULTURED AFRICA</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors font-medium">
              Benefits
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="default" className="hidden sm:inline-flex">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScHTVDA4qASTF7ild2SbZRgF5DxeaZR47OOu_iz3tbMaPUoPw/viewform?usp=header">Pre-Order Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;