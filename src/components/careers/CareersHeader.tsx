import { Logo } from "@/components/Logo";
import { CtaLink } from "@/components/home/CtaLink";

/**
 * Careers chrome: lockup + Early access. The home nav's section hashes do not
 * exist on this route, so the full SiteHeader is not reused here.
 */
export function CareersHeader() {
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <a
          href="/TrainerTwin_home"
          aria-label="TrainerTwin — home"
          className="shrink-0"
        >
          <Logo size={22} />
        </a>
        <CtaLink size="sm" href="/TrainerTwin_home#early-access" className="hdr-cta">
          Early Access
        </CtaLink>
      </div>
    </header>
  );
}
