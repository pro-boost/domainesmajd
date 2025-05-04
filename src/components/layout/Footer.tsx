import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Image imports
import organicImg from "../../assets/images/organic.png";
import globalGapImg from "../../assets/images/GLOBALGAP-Logo.png";
import brcImg from "../../assets/images/BRC certification.png";
import isoImg from "../../assets/images/iso.png";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const certifications = [
    { src: organicImg, alt: "Organic", label: "Organic" },
    { src: globalGapImg, alt: "GlobalG.A.P.", label: "GlobalG.A.P." },
    { src: brcImg, alt: "BRC Food", label: "BRC Food" },
    { src: isoImg, alt: "ISO 22000", label: "ISO 22000" },
  ];

  return (
    <footer className="bg-charcoal-900 text-cream-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-avocado-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-lg text-white">DomainesMajd</span>
            </div>
            <p className="text-cream-300 mb-4">{t("footer.description")}</p>
            <div className="flex gap-4">
              {[
                {
                  Icon: Facebook,
                  url: "https://facebook.com",
                  label: "Facebook",
                },
                {
                  Icon: Instagram,
                  url: "https://instagram.com",
                  label: "Instagram",
                },
                {
                  Icon: Linkedin,
                  url: "https://linkedin.com",
                  label: "LinkedIn",
                },
                { Icon: Twitter, url: "https://twitter.com", label: "Twitter" },
              ].map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("footer.links")}
            </h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: t("navigation.home") },
                { path: "/about", label: t("navigation.about") },
                { path: "/products", label: t("navigation.products") },
                {
                  path: "/sustainability",
                  label: t("navigation.sustainability"),
                },
                { path: "/contact", label: t("navigation.contact") },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("contact.title")}
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin size={20} className="text-avocado-400 flex-shrink-0" />
                <div>
                  <a
                    href="https://www.google.com/maps?q=33.594060763702345,-7.599928815542162"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-300 hover:text-white"
                  >
                    <p>{t("contact.info.addressLine1")}</p>
                    <p>{t("contact.info.addressLine2")}</p>
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <a
                  href="tel:+212661725581"
                  className="flex gap-3 text-cream-300 hover:text-white"
                >
                  <Phone size={20} className="text-avocado-400 flex-shrink-0" />
                  +212 661 725 581
                </a>
              </li>
              <li className="flex gap-3">
                <a
                  href="mailto:info@domainesmajd.com"
                  className="flex gap-3 text-cream-300 hover:text-white"
                >
                  <Mail size={20} className="text-avocado-400 flex-shrink-0" />
                  info@domainesmajd.com
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("footer.certifications")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-3 flex md:justify-star  justify-center items-center gap-2"
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="h-8 w-8 object-contain shrink-0"
                  />
                  <span className="text-white text-sm font-medium truncate">
                    {cert.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-charcoal-700 text-center text-cream-400">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
