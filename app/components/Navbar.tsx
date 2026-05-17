import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <div className="text-lg bg-[#4970cc] p-2 text-white rounded font-bold">
            FN
          </div>
          <div className="text-xl text-[#4970cc] font-bold">Portofolio</div>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <a href="#features" className="px-4 py-2">
                Home
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#pricing" className="px-4 py-2">
                Summary
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/contact" className="px-4 py-2">
                Experience
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/contact" className="px-4 py-2">
                Education
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/contact" className="px-4 py-2">
                Skills
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/contact" className="px-4 py-2">
                Contact
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
          <div className="flex items-center gap-2">
            <Button variant="default" className="bg-primary!">
              Get In Touch
            </Button>
          </div>
        </NavigationMenu>
      </div>
    </nav>
  );
}
