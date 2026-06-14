import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Bell, FileText, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: Shield },
    { id: 'information-collection', title: 'Information We Collect', icon: Database },
    { id: 'information-use', title: 'How We Use Your Information', icon: Eye },
    { id: 'data-protection', title: 'Data Protection & Security', icon: Lock },
    { id: 'cookies', title: 'Cookies & Tracking', icon: FileText },
    { id: 'third-party', title: 'Third-Party Services', icon: Bell },
    { id: 'your-rights', title: 'Your Rights', icon: Shield },
    { id: 'children', title: 'Children\'s Privacy', icon: Shield },
    { id: 'changes', title: 'Policy Changes', icon: Bell },
    { id: 'contact', title: 'Contact Us', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8 group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-100 border border-gray-200 mb-6">
              <Shield size={40} className="text-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how Plexura collects, uses, and protects your personal information.
            </p>
            <div className="mt-6 text-sm text-gray-700">
              <span className="font-semibold text-gray-900">Last Updated:</span> January 6, 2025
            </div>
          </motion.div>

          <div className="space-y-8">
              <section id="introduction" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="mr-3 text-gray-900" size={28} />
                  Introduction
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Welcome to Plexura. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p>
                    If you have any questions or concerns about this policy or our practices with regards to your personal information, please contact us at <a href="mailto:privacy@plexura.com" className="text-gray-900 underline underline-offset-2 hover:text-black">privacy@plexura.com</a>.
                  </p>
                  <p>
                    By using our services, you agree to the collection and use of information in accordance with this policy. This Privacy Policy applies to all information collected through our services and/or any related services, sales, marketing, or events.
                  </p>
                </div>
              </section>

              <section id="information-collection" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="mr-3 text-gray-900" size={28} />
                  Information We Collect
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information You Disclose to Us</h3>
                    <p className="mb-4">We collect personal information that you voluntarily provide to us when you:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Register for our services</li>
                      <li>Express interest in obtaining information about our products and services</li>
                      <li>Participate in activities on our website</li>
                      <li>Contact us via email, phone, or contact forms</li>
                      <li>Subscribe to our newsletter or marketing communications</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Personal Information We Collect:</h4>
                    <ul className="space-y-2">
                      <li><strong className="text-gray-900">Contact Data:</strong> Name, email address, phone number, mailing address</li>
                      <li><strong className="text-gray-900">Business Information:</strong> Company name, job title, business type</li>
                      <li><strong className="text-gray-900">Payment Information:</strong> Billing address, payment method details</li>
                      <li><strong className="text-gray-900">Project Data:</strong> Information you provide about your projects and requirements</li>
                      <li><strong className="text-gray-900">Communications:</strong> Messages, feedback, and correspondence with us</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Automatically Collected</h3>
                    <p className="mb-4">We automatically collect certain information when you visit, use, or navigate our services. This information includes:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Log and usage data (IP address, browser type, operating system)</li>
                      <li>Device information (device ID, type, and settings)</li>
                      <li>Location data (general geographic location based on IP address)</li>
                      <li>Website analytics (pages viewed, time spent, click patterns)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="information-use" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="mr-3 text-gray-900" size={28} />
                  How We Use Your Information
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>We use personal information collected via our services for a variety of business purposes described below:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Service Delivery', desc: 'To provide, operate, and maintain our services' },
                      { title: 'Communication', desc: 'To respond to your inquiries and provide customer support' },
                      { title: 'Marketing', desc: 'To send promotional communications and service updates' },
                      { title: 'Improvement', desc: 'To understand usage trends and improve our services' },
                      { title: 'Security', desc: 'To protect against fraud, abuse, and security risks' },
                      { title: 'Legal Compliance', desc: 'To comply with legal obligations and resolve disputes' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-100 border border-gray-200 rounded-xl p-5">
                        <h4 className="text-gray-900 font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Legal Basis for Processing (GDPR)</h4>
                    <p className="mb-3">If you are located in the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the data and context:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-gray-900">Consent:</strong> You have given explicit consent for specific purposes</li>
                      <li><strong className="text-gray-900">Contract:</strong> Processing is necessary to fulfill our contract with you</li>
                      <li><strong className="text-gray-900">Legal Obligation:</strong> We must process data to comply with legal requirements</li>
                      <li><strong className="text-gray-900">Legitimate Interests:</strong> Processing is in our legitimate business interests</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="data-protection" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="mr-3 text-gray-900" size={28} />
                  Data Protection & Security
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { title: 'Encryption', desc: 'SSL/TLS encryption for data in transit', icon: '🔒' },
                      { title: 'Access Control', desc: 'Strict access limitations and authentication', icon: '🔑' },
                      { title: 'Monitoring', desc: 'Continuous security monitoring and logging', icon: '👁️' },
                      { title: 'Backups', desc: 'Regular encrypted data backups', icon: '💾' },
                      { title: 'Compliance', desc: 'Industry-standard security protocols', icon: '✅' },
                      { title: 'Training', desc: 'Regular security training for staff', icon: '🎓' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-100 border border-gray-200 rounded-xl p-5 text-center">
                        <h4 className="text-gray-900 font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 border border-gray-300 rounded-xl p-6">
                    <p className="text-gray-900">
                      <strong>Please Note:</strong> While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Retention</h3>
                    <p>
                      We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                    </p>
                  </div>
                </div>
              </section>

              <section id="cookies" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="mr-3 text-gray-900" size={28} />
                  Cookies & Tracking Technologies
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    We use cookies and similar tracking technologies to track activity on our services and store certain information. These technologies help us provide, protect, and improve our services.
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-gray-900 pl-6 py-2">
                      <h4 className="text-gray-900 font-semibold mb-2">Essential Cookies</h4>
                      <p>Required for the website to function properly. These cannot be disabled.</p>
                    </div>
                    <div className="border-l-4 border-gray-900 pl-6 py-2">
                      <h4 className="text-gray-900 font-semibold mb-2">Analytics Cookies</h4>
                      <p>Help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                    </div>
                    <div className="border-l-4 border-gray-900 pl-6 py-2">
                      <h4 className="text-gray-900 font-semibold mb-2">Marketing Cookies</h4>
                      <p>Used to track visitors across websites to display relevant and engaging advertisements.</p>
                    </div>
                    <div className="border-l-4 border-gray-900 pl-6 py-2">
                      <h4 className="text-gray-900 font-semibold mb-2">Preference Cookies</h4>
                      <p>Enable the website to remember your preferences and provide enhanced, personalized features.</p>
                    </div>
                  </div>

                  <p>
                    You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our services.
                  </p>
                </div>
              </section>

              <section id="third-party" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Bell className="mr-3 text-gray-900" size={28} />
                  Third-Party Services
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    We may share your information with third-party service providers who perform services on our behalf. These providers are bound by contractual obligations to keep your information confidential and use it only for the purposes for which we disclose it to them.
                  </p>

                  <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Third-Party Categories:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <div>
                          <strong className="text-gray-900">Payment Processors:</strong> To process payments and prevent fraud
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <div>
                          <strong className="text-gray-900">Analytics Providers:</strong> To analyze website traffic and user behavior
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <div>
                          <strong className="text-gray-900">Marketing Platforms:</strong> To deliver targeted advertising and email campaigns
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <div>
                          <strong className="text-gray-900">Hosting Services:</strong> To host and maintain our website and services
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <div>
                          <strong className="text-gray-900">Communication Tools:</strong> To provide customer support and communications
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p>
                    We do not sell, rent, or trade your personal information to third parties for their marketing purposes without your explicit consent.
                  </p>
                </div>
              </section>

              <section id="your-rights" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="mr-3 text-gray-900" size={28} />
                  Your Privacy Rights
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Access', desc: 'Request copies of your personal information' },
                      { title: 'Correction', desc: 'Request correction of inaccurate data' },
                      { title: 'Deletion', desc: 'Request deletion of your personal information' },
                      { title: 'Restriction', desc: 'Request restriction of processing your data' },
                      { title: 'Portability', desc: 'Request transfer of your data to another service' },
                      { title: 'Objection', desc: 'Object to processing of your personal information' },
                      { title: 'Withdraw Consent', desc: 'Withdraw consent for data processing' },
                      { title: 'Opt-Out', desc: 'Opt out of marketing communications' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                        <h4 className="text-gray-900 font-semibold mb-2">✓ {item.title}</h4>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How to Exercise Your Rights</h4>
                    <p className="mb-4">To exercise any of these rights, please contact us at:</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        
                        <a href="mailto:privacy@plexura.com" className="text-gray-900 underline underline-offset-2 hover:text-black">privacy@plexura.com</a>
                      </div>
                      <div className="flex items-center space-x-3">
                        
                        <a href="tel:+18013478072" className="text-gray-900 underline underline-offset-2 hover:text-black">(801) 347-8072</a>
                      </div>
                    </div>
                    <p className="mt-4 text-sm">
                      We will respond to your request within 30 days. Please note that we may need to verify your identity before processing your request.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">California Privacy Rights (CCPA)</h3>
                    <p className="mb-3">
                      If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA):
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Right to know what personal information is collected, used, shared, or sold</li>
                      <li>Right to delete personal information held by businesses</li>
                      <li>Right to opt-out of the sale of personal information</li>
                      <li>Right to non-discrimination for exercising your privacy rights</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="children" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="mr-3 text-gray-900" size={28} />
                  Children's Privacy
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                  </p>
                  <p>
                    If we become aware that we have collected personal information from a child under 18 without verification of parental consent, we will take steps to remove that information from our servers.
                  </p>
                </div>
              </section>

              <section id="changes" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Bell className="mr-3 text-gray-900" size={28} />
                  Changes to This Policy
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                  <p>
                    We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our services after any changes indicates your acceptance of the updated policy.
                  </p>
                </div>
              </section>

              <section id="contact" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="mr-3 text-gray-900" size={28} />
                  Contact Us
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="text-gray-900 font-semibold mb-4">Email Us</h4>
                      <a href="mailto:privacy@plexura.com" className="text-gray-900 hover:text-gray-900 transition-colors text-lg">
                        privacy@plexura.com
                      </a>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="text-gray-900 font-semibold mb-4">Call Us</h4>
                      <a href="tel:+18013478072" className="text-gray-900 hover:text-gray-900 transition-colors text-lg">
                        (801) 347-8072
                      </a>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 md:col-span-2">
                      <h4 className="text-gray-900 font-semibold mb-4">Mail Us</h4>
                      <address className="text-gray-900 not-italic">
                        Plexura<br />
                        Attn: Privacy Department<br />
                        Las Vegas, Nevada<br />
                        United States
                      </address>
                    </div>
                  </div>

                  <p className="text-sm">
                    We are committed to resolving privacy concerns and will respond to your inquiry within a reasonable timeframe.
                  </p>
                </div>
              </section>
            </div>
        </div>
      </div>
    </div>
  );
}