import styles from "../styles/pages/HomePage.module.css";
import Image from "next/image";
import Link from "next/link";
import "animate.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div
        className={`${styles.title_container} animate__animated animate__fadeIn`}
      >
        <Image src={"/favicon.ico"} width={"30"} height={"30"} alt={"Logo"} />
        <div className={styles.portfolio_link}>
          <Link href={"https://pottmayer.dev"} target={"_blank"}>
            <h1>pottmayer.dev</h1>
          </Link>
        </div>

        <Image
          className={styles.github_profile_image}
          src={"https://avatars.githubusercontent.com/u/50502129?v=4"}
          width={"150"}
          height={"150"}
          alt={"Github profile image"}
        />
      </div>
    </div>
  );
}
