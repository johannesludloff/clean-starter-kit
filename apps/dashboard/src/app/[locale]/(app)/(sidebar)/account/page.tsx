import type { Metadata } from "next";
import { AccountSettings } from "@/components/account-settings";

export const metadata: Metadata = {
  title: "Account Settings | Lujo",
};

export default async function Account() {
  return <AccountSettings />;
}
