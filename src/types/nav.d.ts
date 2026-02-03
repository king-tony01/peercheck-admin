interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  children?: NavItemChild[];
}

interface NavItemChild {
  title: string;
  path: string;
}

interface NavSection {
  sectionTitle: string;
  items: NavItem[];
}

// interface SideBarList {
//   sections: NavSection[];
// }
