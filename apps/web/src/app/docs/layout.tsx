import type { ReactNode } from "react";
import { Suspense } from "react";
import { DocsChatProvider } from "@/components/docs/docs-chat-provider";
import { appConfig } from "@/config/app";

export const metadata = {
  title: "Documentation",
  description: `Learn how to use ${appConfig.name} to run your business finances`,
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={children}>
      <DocsChatProvider>{children}</DocsChatProvider>
    </Suspense>
  );
}
