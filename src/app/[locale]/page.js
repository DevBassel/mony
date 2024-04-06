import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return <main>{t("login_title")}</main>;
}
