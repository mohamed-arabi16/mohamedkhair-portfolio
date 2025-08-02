import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageToggle } from "@/components/LanguageToggle";

import { analytics } from "@/lib/analytics";
import { Link, useLocation } from "react-router-dom";

const getNavigationItems = (t: (key: string) => string) => [
  { name: t("nav.home"), href: "/" },
  { name: t("nav.projects"), href: "/projects" },
  { name: t("nav.content"), href: "/content" },
  { name: t("nav.services"), href: "/services" },
  { name: t("nav.qobouli"), href: "/qobouli" },
  { name: t("nav.clientSuccess"), href: "/client-success" },
  { name: t("nav.contact"), href: "/contact" },
];

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);
    analytics.trackNavigation(href);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    analytics.event('theme_toggle', 'UI', newTheme);
  };

  const navigationItems = getNavigationItems(t);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/20 shadow-sm motion-enhanced">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:from-accent hover:to-primary transition-all duration-300"
              onClick={() => handleNavigation("/")}
            >
              Mohamed Khair
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    "text-foreground/80 hover:text-foreground transition-all duration-300 font-medium relative group px-4 py-2 rounded-xl hover:bg-accent/5",
                    isActive && "text-accent bg-accent/10"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute inset-x-0 bottom-1 h-0.5 bg-gradient-to-r from-primary to-accent transition-transform duration-300 origin-left rounded-full",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}></span>
                </Link>
              );
            })}
            
            <div className="flex items-center space-x-2 ml-6 pl-6 border-l border-border/30">
              {/* Language Toggle */}
              <LanguageToggle />
              
              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9 rounded-xl hover:bg-accent/10 transition-colors"
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Toggle */}
            <LanguageToggle />
            
            {/* Mobile Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 rounded-xl hover:bg-accent/10"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="h-9 w-9 rounded-xl hover:bg-accent/10"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={cn(
          "md:hidden transition-all duration-300 overflow-hidden border-t border-border/20",
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 space-y-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    "block w-full text-left px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent/5 rounded-xl transition-all duration-300 font-medium",
                    isActive && "text-accent bg-accent/10"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}