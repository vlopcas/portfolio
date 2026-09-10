import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return <a className="whatsapp-float" href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar com Victor pelo WhatsApp">
    <WhatsAppIcon/>
    <span>Falar no WhatsApp</span>
  </a>;
}
