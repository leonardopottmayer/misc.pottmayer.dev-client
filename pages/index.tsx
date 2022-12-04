import styles from "../styles/pages/HomePage.module.css";
import Image from "next/image";
import Link from "next/link";
import "animate.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.title_container}>
        <Image
          className={"animate__animated animate__fadeIn"}
          src={"/favicon.ico"}
          width={"30"}
          height={"30"}
          alt={"Logo"}
        />
        <Link
          className={styles.portfolio_link}
          href={"https://pottmayer.dev"}
          target={"_blank"}
        >
          <h1 className={"animate__animated animate__fadeInUp"}>
            pottmayer.dev
          </h1>
        </Link>
      </div>
    </div>
  );
}
