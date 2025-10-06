"use client";
import { SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";
import { MdEmail } from "react-icons/md";

type Props = {
  className?: string;
  size?: number;
};

export default function SocialIcons({ className = "", size = 26 }: Props) {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/971528480244";
  const ig = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/";
  const fb = process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/";
  const email = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "hello@example.com";

  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="transition hover:text-[#25D366]"
        title="WhatsApp"
      >
        <SiWhatsapp size={size} />
      </a>

      <a
        href={ig}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="transition hover:text-[#E4405F]"
        title="Instagram"
      >
        <SiInstagram size={size} />
      </a>

      <a
        href={fb}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="transition hover:text-[#1877F2]"
        title="Facebook"
      >
        <SiFacebook size={size} />
      </a>

      <a
        href={`mailto:${email}`}
        aria-label="Email"
        className="transition hover:text-emerald-700"
        title={email}
      >
        <MdEmail size={size + 2} />
      </a>
    </div>
  );
}
