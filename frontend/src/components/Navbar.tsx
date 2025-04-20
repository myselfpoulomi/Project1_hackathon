
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-mentor-blue text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Future Forge</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-mentor-purple/20 transition-colors">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-mentor-purple/20 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-mentor-purple/20 transition-colors">
              Contact Us
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-mentor-purple/20 transition-colors">
                  Services <ChevronDown size={16} className="ml-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/assessment" className="cursor-pointer text-mentor-dark hover:text-mentor-purple">
                    Career Prediction
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/courses" className="cursor-pointer text-mentor-dark hover:text-mentor-purple">
                    Courses
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/knowledge-network" className="cursor-pointer text-mentor-dark hover:text-mentor-purple">
                    Knowledge Network
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/auth" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-mentor-purple text-white hover:bg-mentor-purple/90 transition-colors">
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-mentor-purple/20 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-mentor-blue border-t border-mentor-purple/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-mentor-purple/20">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-mentor-purple/20">
              About Us
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-mentor-purple/20">
              Contact Us
            </Link>

            <div className="relative">
              <button className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-mentor-purple/20 transition-colors">
                Services <ChevronDown size={16} />
              </button>
              <div className="pl-4 mt-1 space-y-1 border-l-2 border-mentor-purple/50">
                <Link to="/assessment" className="block px-3 py-2 rounded-md text-sm hover:bg-mentor-purple/20">
                  Career Prediction
                </Link>
                <Link to="/courses" className="block px-3 py-2 rounded-md text-sm hover:bg-mentor-purple/20">
                  Courses
                </Link>
                <Link to="/knowledge-network" className="block px-3 py-2 rounded-md text-sm hover:bg-mentor-purple/20">
                  Knowledge Network
                </Link>
              </div>
            </div>

            <Link to="/auth" className="block w-full text-center mt-4 px-4 py-2 rounded-md text-base font-medium bg-mentor-purple text-white hover:bg-mentor-purple/90">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
