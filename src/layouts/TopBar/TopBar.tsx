import SearchInput from "@/components/Input/SearchInput";
import ChevronDown from "@/icons/ChevronDown";
import Image from "next/image";
import styles from "./styles/TopBar.module.css";

function TopBar() {
  return (
    <section className={styles.top_bar}>
      <h1>Welcome Back, Alex</h1>
      <div className={styles.top_bar_right}>
        <SearchInput placeholder="Search" />
        <button className={styles.action_btn}>
          <Image src="/avatar.svg" alt="User Avatar" width={40} height={40} />
          <ChevronDown />
        </button>
      </div>
    </section>
  );
}

export default TopBar;
