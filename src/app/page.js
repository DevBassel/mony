import { redirect } from "next/dist/server/api-utils";

function RootPage() {
  redirect("/en");
}

export default RootPage;
