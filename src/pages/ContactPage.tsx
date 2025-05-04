import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-charcoal-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 full-height-section bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="heading-3 mb-6">{t("contact.title")}</h2>

              <div className="space-y-8 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin
                      size={20}
                      className="text-avocado-700 dark:text-avocado-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t("contact.info.address")}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {t("contact.info.addressLine1")}
                    </p>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {t("contact.info.addressLine2")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone
                      size={20}
                      className="text-avocado-700 dark:text-avocado-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t("contact.info.phone")}
                    </h3>

                    <a
                      href="tel:+212 661 725 581"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal-600 dark:text-cream-300"
                    >
                      +212 661 725 581
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail
                      size={20}
                      className="text-avocado-700 dark:text-avocado-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t("contact.info.email")}
                    </h3>

                    <a
                      href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info@domainesmajd.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal-600 dark:text-cream-300"
                    >
                      info@domainesmajd.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Chat Options */}
              <div className="bg-cream-50 dark:bg-charcoal-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-avocado-600 dark:text-avocado-400"
                  >
                    <path
                      fill="currentColor"
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    />
                  </svg>
                  <h3 className="font-semibold text-charcoal-800 dark:text-cream-50">
                    {t("cta.chat")}
                  </h3>
                </div>
                <p className="text-charcoal-600 dark:text-cream-300 mb-4">
                  {t("contact.chat.description")}
                </p>
                <a
                  href="https://wa.me/212661725581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white dark:bg-charcoal-800 rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="heading-3 mb-6">{t("contact.form.submit")}</h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 full-height-section bg-cream-50 dark:bg-charcoal-950">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">
            {t("contact.map.title")}
          </h2>

          <div className="bg-white dark:bg-charcoal-800 rounded-lg shadow-lg overflow-hidden h-96">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-7.602117484759247%2C33.59206076370235%2C-7.597717484759247%2C33.59606076370235&amp;layer=mapnik&amp;marker=33.594060763702345%2C-7.599928815542162"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DomainesMajd Location"
              className="grayscale hover:grayscale-0 transition-all duration-300 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 full-height-section bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-8">
              {t("contact.hours.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream-50 dark:bg-charcoal-800 rounded-lg p-6">
                <h3 className="font-semibold text-xl text-charcoal-800 dark:text-cream-50 mb-4">
                  {t("contact.hours.office.title")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-cream-200 dark:border-charcoal-700 pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">
                      {t("contact.hours.weekdays")}
                    </span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">
                      {t("contact.hours.office.weekdays")}
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-cream-200 dark:border-charcoal-700 pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">
                      {t("contact.hours.saturday")}
                    </span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">
                      {t("contact.hours.office.saturday")}
                    </span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">
                      {t("contact.hours.sunday")}
                    </span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">
                      {t("contact.hours.closed")}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-cream-50 dark:bg-charcoal-800 rounded-lg p-6">
                <h3 className="font-semibold text-xl text-charcoal-800 dark:text-cream-50 mb-4">
                  {t("contact.hours.farm.title")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-cream-200 dark:border-charcoal-700 pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">
                      {t("contact.hours.weekdays")}
                    </span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">
                      {t("contact.hours.farm.weekdays")}
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-cream-200 dark:border-charcoal-700 pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">
                      {t("contact.hours.saturday")}
                    </span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">
                      {t("contact.hours.farm.saturday")}
                    </span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">
                      {t("contact.hours.note")}
                    </span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">
                      {t("contact.hours.appointment")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-avocado-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("cta.ready")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">{t("cta.join")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => window.openContactModal()}
              className="btn bg-white text-avocado-700 hover:bg-cream-100"
            >
              {t("cta.quote")}
            </button>
            <a
              href="https://wa.me/212661725581"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-avocado-700 hover:bg-avocado-800 text-white"
            >
              {t("cta.chat")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
