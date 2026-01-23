interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

interface NavSection {
  sectionTitle: string;
  items: NavItem[];
}

// interface SideBarList {
//   sections: NavSection[];
// }
