import type { Metadata } from "next";
import { SetupMfa } from "@/components/setup-mfa";

export const metadata: Metadata = {
  title: "Setup MFA | Lujo",
};

export default function Setup() {
  return <SetupMfa />;
}
