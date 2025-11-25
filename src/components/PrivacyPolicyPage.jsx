import { motion } from "framer-motion";

function PrivacyPolicyPage() {
  const EMAIL = import.meta.env.VITE_CONTACT_EMAIL;
  const PHONE = import.meta.env.VITE_CONTACT_PHONE;

  return (
    <main className="bg-[#0b0b0e] min-h-screen text-gray-200 py-10 mt-10">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-center text-yellow-400 mb-8 text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Privacy Policy
          </h1>

          <p className="text-gray-400 text-center mb-10">
            <strong>Last Updated:</strong> November 25, 2025
          </p>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-yellow-400 text-2xl mb-3 font-semibold">1. Introduction</h2>
            <p>
              Welcome to Home2Heaven ("we," "our," or "us"). This Privacy Policy explains our practices regarding visitor privacy. We do <strong>not</strong> collect or store any personal information on this website.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-8">
            <h2 className="text-yellow-400 text-2xl mb-3 font-semibold">2. Information Collection</h2>
            <p>
              Home2Heaven is a static informational website. We do <strong>not</strong> collect, store, or process any personal information. Specifically, we do not:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Collect names, email addresses, or contact information via forms</li>
              <li>Track user behavior or analytics</li>
              <li>Use cookies or any tracking technologies</li>
              <li>Store IP addresses or device information</li>
            </ul>
          </section>

          {/* Communication */}
          <section className="mb-8">
            <h2 className="text-yellow-400 text-2xl mb-3 font-semibold">3. Communication</h2>
            <p>If you wish to contact Home2Heaven, you can do so via:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Email: <a href={`mailto:${EMAIL}`} className="text-yellow-400 underline">{EMAIL}</a></li>
              <li>Phone: <a href={`tel:${PHONE}`} className="text-yellow-400 underline">{PHONE}</a></li>
            </ul>
            <p className="mt-2">
              Any communication is initiated by you. We do not store emails, call records, or any personal information on our website.
            </p>
          </section>

          {/* Website Functionality & Security */}
          <section className="mb-8">
            <h2 className="text-yellow-400 text-2xl mb-3 font-semibold">4. Website Functionality & Security</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Our website is informational and showcases services and projects.</li>
              <li>We do not collect personal data, so there is no risk of data breaches from our site.</li>
              <li>All website traffic is encrypted via HTTPS for security.</li>
              <li>The website is hosted on secure servers with standard security measures.</li>
            </ul>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-yellow-400 text-2xl mb-3 font-semibold">5. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the privacy practices of these sites. Please review their privacy policies if you visit them.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-yellow-400 text-2xl mb-3 font-semibold">6. Children's Privacy</h2>
            <p>
              Our website is suitable for all ages and does not collect any information from children or adults.
            </p>
          </section>

          {/* Updates */}
          <section className="mb-8">
            <h2 className="text-yellow-400 text-2xl mb-3 font-semibold">7. Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be reflected on this page with the updated "Last Updated" date. Since we do not collect any data, there is no direct notification of changes.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-yellow-400 text-2xl mb-3 font-semibold">8. Contact Information</h2>
            <p>For questions about this Privacy Policy or our services, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong>Email:</strong> <a href={`mailto:${EMAIL}`} className="text-yellow-400 underline">{EMAIL}</a></p>
              <p><strong>Phone:</strong> <a href={`tel:${PHONE}`} className="text-yellow-400 underline">{PHONE}</a></p>
              <p><strong>Location:</strong> India</p>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              <strong>Summary:</strong> Home2Heaven does not collect, store, or process any personal information. Communication is only possible via email or phone initiated by the user.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default PrivacyPolicyPage;
