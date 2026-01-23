import ChevronRight from "@/icons/ChevronRight";
import Link from "next/link";
import styles from "../styles/SideBar.module.css";

function SideBarSection({
  sectionTitle,
  items,
  currentPath,
}: NavSection & { currentPath: string }) {
  return (
    <section className={styles.side_bar_section}>
      <p className={styles.title}>{sectionTitle}</p>
      <ul>
        {items.map(({ title, path, icon }) => {
          const isActive = currentPath === path;
          return (
            <li key={path}>
              <Link href={path}>
                <div
                  style={
                    isActive
                      ? ({
                          "--active-color": "#708B2E",
                        } as React.CSSProperties)
                      : {}
                  }
                >
                  {icon}
                  <span
                    style={
                      isActive
                        ? ({
                            fontWeight: "600",
                          } as React.CSSProperties)
                        : {}
                    }
                  >
                    {title}
                  </span>
                </div>
                <ChevronRight />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SideBarSection;
