import type { SVGProps } from "react";

function LogoPlaceholder({ label, ...props }: SVGProps<SVGSVGElement> & { label?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

export const ChatGPTMcpLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const ClaudeMcpLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const CopilotMcpLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const CursorMcpLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const DeelLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const DropboxLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const EInvoiceLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const FortnoxLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const GmailLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const GoogleDriveLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const MakeMcpLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const LujoDesktopLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const N8nMcpLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const OpenCodeMcpLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const OutlookLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const PerplexityMcpLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const PolarLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const QuickBooksLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const RaycastLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const RaycastMcpLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const SlackLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const StripeLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const StripePaymentsLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const WhatsAppLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const XeroLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
export const ZapierMcpLogo = (props: SVGProps<SVGSVGElement>) => <LogoPlaceholder {...props} />;
