import { ComponentProps, ReactElement } from "react";
import Link from "next/link";

import { clsx } from "clsx";

import HugeiconsLinkedin02 from "@/icons/socials/HugeiconsLinkedin02";
import HugeiconsYoutube from "@/icons/socials/HugeiconsYoutube";
import HugeiconsTelegram from "@/icons/socials/HugeiconsTelegram";
import HugeiconsInstagram from "@/icons/socials/HugeiconsInstagram";
import TamashachiLogo from "@/logo/t-colored-logo";

import ENamad from "@/logo/e-namad";
import Senf from "@/logo/senf";
import SabtMeli from "@/logo/sabt-meli";

import styles from "./footer.module.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/mobina-yousefian/";

type SocialIcons = {
  key: number;
  alt: string;
  icon: ReactElement;
};
const socialIcons: SocialIcons[] = [
  {
    key: 1,
    alt: "linkedin",
    icon: <HugeiconsLinkedin02 />,
  },
  {
    key: 2,
    alt: "youtube",
    icon: <HugeiconsYoutube />,
  },
  {
    key: 3,
    alt: "telegram",
    icon: <HugeiconsTelegram />,
  },
  {
    key: 4,
    alt: "instagram",
    icon: <HugeiconsInstagram />,
  },
];

type Certificate = {
  key: number;
  alt: string;
  logo: ReactElement;
};
const certificates: Certificate[] = [
  {
    key: 1,
    alt: "نظام صنفی",
    logo: <Senf />,
  },
  {
    key: 2,
    alt: "نشان ملی ثبت",
    logo: <SabtMeli />,
  },
  {
    key: 3,
    alt: "اینماد",
    logo: <ENamad />,
  },
];

type Props = ComponentProps<"footer">;

export default function FooterComponent({ className }: Props): ReactElement {
  return (
    <footer className={clsx(styles.footer, className)}>
      <div className={styles.branding}>
        <div className={styles.logo}>
          <Link href="/">
            <TamashachiLogo />
          </Link>
          <div>تماشاچی</div>
        </div>
        <p className={styles.description}>
          پلتفرم خرید بلیت کنسرت‌ها و تئاترهای سراسر کشور
        </p>
      </div>
      <div className={styles.socials}>
        <ul className={styles.certificate}>
          {certificates.map(({ logo, key }) => (
            <li key={key}>
              <Link href="/">{logo}</Link>
            </li>
          ))}
        </ul>
        <ul className={styles.icons}>
          {socialIcons.map(({ icon, key }) => (
            <li key={key}>
              <Link href={LINKEDIN_URL} target="_blank">
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وب‌سایت متعلق به‌
        <a href={LINKEDIN_URL} target="_blank">
          مبینا یوسفیان‌
        </a>
        می‌باشد.
      </p>
    </footer>
  );
}
