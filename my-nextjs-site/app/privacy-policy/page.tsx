"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md mt-24">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-lg text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p>
            When you create an account and use the chatbot on{" "}
            <strong>gregdavistech</strong>, we collect the following
            information:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>Name</li>
            <li>Email address (encrypted)</li>
            <li>Profile image</li>
            <li>Conversation history with the chatbot</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <p>
            We use your information to provide and improve the chatbot service.
            Your email address is encrypted and shared with OpenAI to facilitate
            chatbot functionality. Additionally, we may use the data to enhance
            your user experience and for service improvements.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Data Sharing</h2>
          <p>
            We share your email address with OpenAI, as part of chatbot
            operations. <strong>gregdavistech</strong> does not sell or
            otherwise distribute your information to third parties beyond this
            usage.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            4. Analytics and Tracking
          </h2>
          <p>
            We use Google Analytics to gather anonymized usage data for the
            purpose of understanding user behavior and improving the website.{" "}
            <strong>gregdavistech</strong> does not use cookies to track user
            data.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">5. User Rights</h2>
          <div>
            <p>
              Users have the right to request the deletion of their account and
              all associated data. If you would like to delete your account or
              exercise any of your data rights, please contact us via{" "}
              <Link
                className="text-blue-600 underline hover:text-blue-800 font-bold transition-colors duration-300"
                href="/contact">
                contact form.
              </Link>
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            6. GDPR and CCPA Compliance
          </h2>
          <p>
            For users from the European Union and California, we comply with the
            General Data Protection Regulation (GDPR) and the California
            Consumer Privacy Act (CCPA). You have the right to access, delete,
            or be informed about how your data is used.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Data Security</h2>
          <p>
            We use industry-standard encryption techniques to protect your email
            and personal information. However, no method of transmission over
            the internet is 100% secure.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Data Retention</h2>
          <p>
            We retain your data only as long as necessary to provide you with
            our services or comply with legal obligations. You may request to
            delete your account, and your data will be permanently removed.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
