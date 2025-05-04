import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Droplets,
  Sprout,
  Heart,
  Recycle,
  Leaf,
  Sun,
  Wind,
  Users,
  Tractor,
} from "lucide-react";

const SustainabilityPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-avocado-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t("sustainability.title")}
          </h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            {t("sustainability.intro")}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 full-height-section bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-2 mb-6">{t("sustainability.title")}</h2>
              <p className="text-lg text-charcoal-600 dark:text-cream-300 mb-6">
                {t("sustainability.intro")}
              </p>
              <p className="text-charcoal-600 dark:text-cream-300 mb-6">
                {t("sustainability.waterManagement.content")}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block px-3 py-1 bg-avocado-100 dark:bg-avocado-900/50 text-avocado-700 dark:text-avocado-400 rounded-full text-sm">
                  {t("sustainability.waterManagement.title")}
                </span>
                <span className="inline-block px-3 py-1 bg-avocado-100 dark:bg-avocado-900/50 text-avocado-700 dark:text-avocado-400 rounded-full text-sm">
                  {t("sustainability.soilHealth.title")}
                </span>
                <span className="inline-block px-3 py-1 bg-avocado-100 dark:bg-avocado-900/50 text-avocado-700 dark:text-avocado-400 rounded-full text-sm">
                  {t("sustainability.biodiversity.title")}
                </span>
                <span className="inline-block px-3 py-1 bg-avocado-100 dark:bg-avocado-900/50 text-avocado-700 dark:text-avocado-400 rounded-full text-sm">
                  {t("sustainability.socialResponsibility.title")}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1664165050554-dbd73e278f87?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sustainable Farming"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-charcoal-800 p-4 rounded-lg shadow-lg w-40 h-40 flex flex-col items-center justify-center text-center">
                <Leaf size={32} className="text-avocado-600 mb-2" />
                <p className="text-charcoal-800 dark:text-cream-50 font-semibold">
                  60% Less Water Usage
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Sustainability Pillars */}
      <section className="py-16 bg-cream-50 dark:bg-charcoal-950">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-14">
            {t("sustainability.title")}
          </h2>

          <div className="space-y-48">
            {/* Water Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 bg-avocado-100 dark:bg-avocado-900/50 text-avocado-700 dark:text-avocado-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Droplets size={16} />
                  <span>{t("sustainability.waterManagement.title")}</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 dark:text-cream-50 mb-4">
                  {t("sustainability.waterManagement.title")}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-6">
                  {t("sustainability.waterManagement.content")}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                      <Droplets
                        size={16}
                        className="text-avocado-700 dark:text-avocado-400"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal-800 dark:text-cream-50">
                        {t("sustainability.waterManagement.title")}
                      </h4>
                      <p className="text-charcoal-600 dark:text-cream-300">
                        {t("sustainability.waterManagement.content")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1687507045805-d8b0003e00c0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Water Management"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>

            {/* Soil Health */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Soil Health"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 bg-avocado-100 dark:bg-avocado-900/50 text-avocado-700 dark:text-avocado-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Sprout size={16} />
                  <span>{t("sustainability.soilHealth.title")}</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 dark:text-cream-50 mb-4">
                  {t("sustainability.soilHealth.title")}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-6">
                  {t("sustainability.soilHealth.content")}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                      <Recycle
                        size={16}
                        className="text-avocado-700 dark:text-avocado-400"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal-800 dark:text-cream-50">
                        {t("sustainability.soilHealth.title")}
                      </h4>
                      <p className="text-charcoal-600 dark:text-cream-300">
                        {t("sustainability.soilHealth.content")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Biodiversity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 bg-avocado-100 dark:bg-avocado-900/50 text-avocado-700 dark:text-avocado-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Heart size={16} />
                  <span>{t("sustainability.biodiversity.title")}</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 dark:text-cream-50 mb-4">
                  {t("sustainability.biodiversity.title")}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-6">
                  {t("sustainability.biodiversity.content")}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart
                        size={16}
                        className="text-avocado-700 dark:text-avocado-400"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal-800 dark:text-cream-50">
                        {t("sustainability.biodiversity.title")}
                      </h4>
                      <p className="text-charcoal-600 dark:text-cream-300">
                        {t("sustainability.biodiversity.content")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1691998809902-262779df8904?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Biodiversity"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>

            {/* Social Responsibility */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.pexels.com/photos/5029919/pexels-photo-5029919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Community Support"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 bg-avocado-100 dark:bg-avocado-900/50 text-avocado-700 dark:text-avocado-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Users size={16} />
                  <span>{t("sustainability.socialResponsibility.title")}</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 dark:text-cream-50 mb-4">
                  {t("sustainability.socialResponsibility.title")}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-6">
                  {t("sustainability.socialResponsibility.content")}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users
                        size={16}
                        className="text-avocado-700 dark:text-avocado-400"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal-800 dark:text-cream-50">
                        {t("sustainability.socialResponsibility.title")}
                      </h4>
                      <p className="text-charcoal-600 dark:text-cream-300">
                        {t("sustainability.socialResponsibility.content")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-16 full-height-section bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-6">
            {t("sustainability.goals.title")}
          </h2>
          <p className="text-lg text-charcoal-600 dark:text-cream-300 text-center max-w-3xl mx-auto mb-12">
            {t("sustainability.goals.intro")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="card p-6 bg-white dark:bg-charcoal-800 border border-cream-200 dark:border-charcoal-700"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center mb-4">
                <Droplets
                  size={24}
                  className="text-avocado-700 dark:text-avocado-400"
                />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-800 dark:text-cream-50 mb-2">
                {t("sustainability.goals.waterNeutral.title")}
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                {t("sustainability.goals.waterNeutral.content")}
              </p>
            </motion.div>

            <motion.div
              className="card p-6 bg-white dark:bg-charcoal-800 border border-cream-200 dark:border-charcoal-700"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center mb-4">
                <Sun
                  size={24}
                  className="text-avocado-700 dark:text-avocado-400"
                />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-800 dark:text-cream-50 mb-2">
                {t("sustainability.goals.carbonNegative.title")}
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                {t("sustainability.goals.carbonNegative.content")}
              </p>
            </motion.div>

            <motion.div
              className="card p-6 bg-white dark:bg-charcoal-800 border border-cream-200 dark:border-charcoal-700"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center mb-4">
                <Recycle
                  size={24}
                  className="text-avocado-700 dark:text-avocado-400"
                />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-800 dark:text-cream-50 mb-2">
                {t("sustainability.goals.zeroWaste.title")}
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                {t("sustainability.goals.zeroWaste.content")}
              </p>
            </motion.div>

            <motion.div
              className="card p-6 bg-white dark:bg-charcoal-800 border border-cream-200 dark:border-charcoal-700"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center mb-4">
                <Users
                  size={24}
                  className="text-avocado-700 dark:text-avocado-400"
                />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-800 dark:text-cream-50 mb-2">
                {t("sustainability.goals.community.title")}
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                {t("sustainability.goals.community.content")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 full-height-section bg-cream-50 dark:bg-charcoal-950">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-6">
            {t("sustainability.certifications.title")}
          </h2>
          <p className="text-lg text-charcoal-600 dark:text-cream-300 text-center max-w-3xl mx-auto mb-12">
            {t("sustainability.certifications.intro")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-charcoal-800 p-6 rounded-lg text-center shadow-md border border-cream-200 dark:border-charcoal-700">
              <div className="h-16 flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center">
                  <span className="text-avocado-700 dark:text-avocado-400 font-bold">
                    O
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-charcoal-800 dark:text-cream-50 mb-1">
                {t("sustainability.certifications.organic.title")}
              </h3>
              <p className="text-sm text-charcoal-600 dark:text-cream-300">
                {t("sustainability.certifications.organic.content")}
              </p>
            </div>

            <div className="bg-white dark:bg-charcoal-800 p-6 rounded-lg text-center shadow-md border border-cream-200 dark:border-charcoal-700">
              <div className="h-16 flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center">
                  <span className="text-avocado-700 dark:text-avocado-400 font-bold">
                    G
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-charcoal-800 dark:text-cream-50 mb-1">
                {t("sustainability.certifications.globalGap.title")}
              </h3>
              <p className="text-sm text-charcoal-600 dark:text-cream-300">
                {t("sustainability.certifications.globalGap.content")}
              </p>
            </div>

            <div className="bg-white dark:bg-charcoal-800 p-6 rounded-lg text-center shadow-md border border-cream-200 dark:border-charcoal-700">
              <div className="h-16 flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center">
                  <span className="text-avocado-700 dark:text-avocado-400 font-bold">
                    R
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-charcoal-800 dark:text-cream-50 mb-1">
                {t("sustainability.certifications.rainforest.title")}
              </h3>
              <p className="text-sm text-charcoal-600 dark:text-cream-300">
                {t("sustainability.certifications.rainforest.content")}
              </p>
            </div>

            <div className="bg-white dark:bg-charcoal-800 p-6 rounded-lg text-center shadow-md border border-cream-200 dark:border-charcoal-700">
              <div className="h-16 flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center">
                  <span className="text-avocado-700 dark:text-avocado-400 font-bold">
                    F
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-charcoal-800 dark:text-cream-50 mb-1">
                {t("sustainability.certifications.fairTrade.title")}
              </h3>
              <p className="text-sm text-charcoal-600 dark:text-cream-300">
                {t("sustainability.certifications.fairTrade.content")}
              </p>
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
          <button
            onClick={() => window.openContactModal()}
            className="btn bg-white text-avocado-700 hover:bg-cream-100"
          >
            {t("cta.quote")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;
