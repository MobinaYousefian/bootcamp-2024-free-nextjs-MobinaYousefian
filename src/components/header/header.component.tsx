"use client";
import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { clsx } from "clsx";

import ButtonComponent from "@/components/button/button.component";

import styles from "./header.module.css";

type NavMenu = {
  url: string;
  title: string;
};
const navMenu: NavMenu[] = [
  {
    url: "/",
    title: "خانه",
  },
  {
    url: "/search",
    title: "جستجو",
  },
];

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {navMenu.map(({ url, title }) => (
            <li key={title}>
              <Link
                href={url}
                className={clsx(pathname === url && styles.active)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.cta}>
        <ButtonComponent shape="outline" className={styles.login}>
          ثبت‌نام | ورود
        </ButtonComponent>
      </div>
    </header>
  );
}
