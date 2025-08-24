import type { LucideIcon } from "lucide-react";
import { House, BookOpen, BookDown } from "lucide-react";

interface Navlink {
  id: number;
  route: string;
  name: string;
  icon: LucideIcon;
}

export const navLinks: Navlink[] = [
  { id: 1, route: "/", name: "Home", icon: House },
  { id: 2, route: "/all-books", name: "All Books", icon: BookOpen },
  { id: 3, route: "/add-book", name: "Add Book", icon: BookDown },
];



export const serverLink: string = "http://localhost:5000/";
