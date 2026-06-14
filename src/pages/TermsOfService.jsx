import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, CreditCard, Shield, Users, Ban, RefreshCw, Mail, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms', icon: FileText },
    { id: 'services', title: 'Services Overview', icon: Users },
    { id: 'user-obligations', title: 'User Obligations', icon: AlertCircle },
    { id: 'payment', title: 'Payment & Billing', icon: CreditCard },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: Shield },
    { id: 'warranties', title: 'Warranties & Disclaimers', icon: Scale },
    { id: 'limitation', title: 'Limitation of Liability', icon: Ban },
    { id: 'termination', title: 'Termination', icon: RefreshCw },
    { id: 'governing-law', title: 'Governing Law', icon: Scale },
    { id: 'changes', title: 'Changes to Terms', icon: RefreshCw },
    { id: 'contact', title: 'Contact Information', icon: Mail }
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
              <Scale size={40} className="text-gray-900" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Please read these terms carefully before using Plexura's services. By accessing or using our services, you agree to be bound by these terms.
            </p>
            <div className="mt-6 text-sm text-gray-700">
              <span className="font-semibold text-gray-900">Last Updated:</span> January 6, 2025
            </div>
          </motion.div>

          <div className="space-y-8">
              <section id="acceptance" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="mr-3 text-gray-900" size={28} />
                  Acceptance of Terms
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Welcome to Plexura. These Terms of Service ("Terms") govern your access to and use of Plexura's website, services, and products (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
                  </p>
                  <p>
                    If you do not agree to these Terms, you may not access or use our Services. These Terms apply to all visitors, users, and others who access or use the Services.
                  </p>
                  <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
                    <p className="text-gray-900 font-semibold mb-2">Important:</p>
                    <p>
                      These Terms contain provisions that limit our liability to you and require you to resolve disputes with us through binding arbitration on an individual basis, not as part of any class or representative action.
                    </p>
                  </div>
                </div>
              </section>

              <section id="services" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="mr-3 text-gray-900" size={28} />
                  Services Overview
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Plexura provides professional web development, digital marketing, and related technology services to businesses and organizations. Our Services include, but are not limited to:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Custom Web Development', desc: 'Full-stack development, custom applications, and enterprise solutions' },
                      { title: 'WordPress Solutions', desc: 'Custom themes, plugins, and WordPress website development' },
                      { title: 'SEO & Marketing', desc: 'Search engine optimization, digital marketing, and analytics' },
                      { title: 'Brand Design', desc: 'Logo design, brand identity, and visual communication' },
                      { title: 'Maintenance & Support', desc: 'Ongoing website maintenance, updates, and technical support' },
                      { title: 'Consulting Services', desc: 'Technology consulting, strategy, and implementation guidance' }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-100 border border-gray-200 rounded-xl p-5">
                        <h4 className="text-gray-900 font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Services are provided on a project basis or through ongoing subscription/retainer agreements</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Specific deliverables, timelines, and pricing are detailed in individual service agreements or proposals</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="user-obligations" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="mr-3 text-gray-900" size={28} />
                  User Obligations & Acceptable Use
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">You agree to:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">✓</span>
                        <span>Provide accurate, current, and complete information when requested</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">✓</span>
                        <span>Maintain the security of your account credentials and accept responsibility for all activities under your account</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">✓</span>
                        <span>Comply with all applicable laws and regulations in your use of our Services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">✓</span>
                        <span>Provide timely feedback, approvals, and materials necessary for project completion</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">✓</span>
                        <span>Use our Services only for lawful purposes and in accordance with these Terms</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-300 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">You agree NOT to:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">✗</span>
                        <span>Use our Services for any illegal or unauthorized purpose</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">✗</span>
                        <span>Violate any laws in your jurisdiction, including intellectual property laws</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">✗</span>
                        <span>Transmit any viruses, malware, or other malicious code</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">✗</span>
                        <span>Attempt to gain unauthorized access to our systems or other users' accounts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">✗</span>
                        <span>Interfere with or disrupt the integrity or performance of our Services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">✗</span>
                        <span>Collect or harvest any personally identifiable information from our Services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">✗</span>
                        <span>Use our Services to create products or services that compete with Plexura</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="payment" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <CreditCard className="mr-3 text-gray-900" size={28} />
                  Payment & Billing Terms
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing & Fees</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>All prices are quoted in U.S. Dollars (USD) unless otherwise specified</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Custom project pricing is provided in detailed proposals or service agreements</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Subscription/retainer fees are billed monthly or as specified in your agreement</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Prices do not include applicable taxes, which will be added to invoices as required by law</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <h4 className="text-gray-900 font-semibold mb-3">Payment Terms</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Initial deposit required to commence work</li>
                        <li>• Progress payments based on milestones</li>
                        <li>• Final payment due upon project completion</li>
                        <li>• Net 15 days for invoiced amounts</li>
                        <li>• Late fees apply after grace period</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <h4 className="text-gray-900 font-semibold mb-3">Payment Methods</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Credit/Debit Cards (Visa, Mastercard, Amex)</li>
                        <li>• ACH/Bank Transfer</li>
                        <li>• Wire Transfer (for large amounts)</li>
                        <li>• PayPal/Venmo (select services)</li>
                        <li>• Cryptocurrency (by arrangement)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-300 rounded-xl p-6">
                    <h4 className="text-gray-900 font-semibold mb-3">Important Payment Information</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Work may be suspended if payment is not received according to agreed terms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Overdue accounts may be subject to late fees of 1.5% per month (18% annually) or the maximum rate permitted by law</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>You are responsible for all costs of collection, including reasonable attorney's fees</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Completed work may not be delivered until all payments are received in full</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Refund Policy</h3>
                    <p className="mb-3">
                      Due to the nature of custom development work, refunds are generally not available once work has commenced. However:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Deposits for projects that have not yet begun may be refunded minus any administrative fees</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Subscription services may be cancelled with notice, with refunds prorated for unused time</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Refund requests are evaluated on a case-by-case basis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="intellectual-property" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="mr-3 text-gray-900" size={28} />
                  Intellectual Property Rights
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Ownership of Deliverables</h3>
                    <p className="mb-4">
                      Upon full payment of all fees and satisfaction of all obligations under the applicable service agreement:
                    </p>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-gray-900 mr-3 mt-1">✓</span>
                          <span><strong className="text-gray-900">Client Ownership:</strong> You own all custom-developed content, designs, and code specifically created for your project</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-900 mr-3 mt-1">✓</span>
                          <span><strong className="text-gray-900">Plexura Retention:</strong> We retain ownership of our proprietary methodologies, tools, frameworks, and reusable components</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-900 mr-3 mt-1">✓</span>
                          <span><strong className="text-gray-900">Third-Party:</strong> Third-party software, plugins, and services are subject to their respective licenses</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-900 mr-3 mt-1">✓</span>
                          <span><strong className="text-gray-900">Portfolio Rights:</strong> Plexura may use completed work in portfolios, case studies, and marketing materials unless otherwise agreed</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Client-Provided Materials</h3>
                    <p className="mb-3">
                      You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions for all materials you provide to us, including:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Text content, images, logos, and branding materials</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Photographs, videos, and multimedia content</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Existing code, designs, and technical specifications</span>
                      </li>
                    </ul>
                    <p className="mt-4">
                      You grant Plexura a non-exclusive license to use these materials for the purpose of providing Services to you.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Plexura Trademarks</h3>
                    <p>
                      "Plexura," our logo, and any other marks used in connection with our Services are trademarks or registered trademarks of Plexura. You may not use these marks without our prior written permission.
                    </p>
                  </div>
                </div>
              </section>

              <section id="warranties" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Scale className="mr-3 text-gray-900" size={28} />
                  Warranties & Disclaimers
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="text-gray-900 font-semibold mb-3">Our Warranties</h4>
                    <p className="mb-3">We warrant that:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Services will be performed in a professional and workmanlike manner</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>We have the necessary skills, experience, and resources to perform the Services</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Deliverables will substantially conform to specifications in the applicable agreement</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>We will correct defects in workmanship within 30 days of project delivery at no additional charge</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-300 rounded-xl p-6">
                    <h4 className="text-gray-900 font-semibold mb-3">DISCLAIMER OF WARRANTIES</h4>
                    <p className="mb-3 uppercase text-sm font-bold">
                      EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                    </p>
                    <p className="text-sm">
                      TO THE FULLEST EXTENT PERMITTED BY LAW, PLEXURA DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Services</h3>
                    <p>
                      Our Services may integrate with or rely on third-party services, platforms, or software. We are not responsible for the availability, performance, or functionality of these third-party services. Your use of third-party services is subject to their respective terms and conditions.
                    </p>
                  </div>
                </div>
              </section>

              <section id="limitation" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Ban className="mr-3 text-gray-900" size={28} />
                  Limitation of Liability
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="bg-gray-50 border border-gray-300 rounded-xl p-6">
                    <p className="mb-4 uppercase text-sm font-bold text-gray-900">
                      TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">1.</span>
                        <span>IN NO EVENT SHALL PLEXURA BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">2.</span>
                        <span>OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT YOU HAVE PAID TO PLEXURA IN THE SIX (6) MONTHS PRECEDING THE CLAIM.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-900 mr-3 mt-1">3.</span>
                        <span>THESE LIMITATIONS APPLY REGARDLESS OF THE LEGAL THEORY ON WHICH THE CLAIM IS BASED, INCLUDING CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER BASIS.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Indemnification</h3>
                    <p className="mb-3">
                      You agree to indemnify, defend, and hold harmless Plexura, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Your use of our Services</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Your violation of these Terms</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Your violation of any third-party rights, including intellectual property rights</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Materials you provide to us that infringe on third-party rights</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="termination" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <RefreshCw className="mr-3 text-gray-900" size={28} />
                  Termination
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Termination by You</h3>
                    <p className="mb-3">
                      You may terminate your use of our Services at any time. For active projects or subscriptions:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Provide written notice according to your service agreement</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Pay for all work completed up to the termination date</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Early termination may result in forfeiture of deposits and pre-paid amounts</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Termination by Plexura</h3>
                    <p className="mb-3">
                      We may suspend or terminate your access to our Services immediately, without prior notice or liability, for any reason, including:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Breach of these Terms</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Non-payment of fees</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>Illegal or harmful conduct</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                        <span>At our discretion for any or no reason</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="text-gray-900 font-semibold mb-3">Effect of Termination</h4>
                    <p className="mb-3">Upon termination:</p>
                    <ul className="space-y-2">
                      <li>• Your right to access and use our Services immediately ceases</li>
                      <li>• All outstanding fees become immediately due and payable</li>
                      <li>• We may delete your account and associated data</li>
                      <li>• Provisions that by their nature should survive termination will remain in effect</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="governing-law" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Scale className="mr-3 text-gray-900" size={28} />
                  Governing Law & Dispute Resolution
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Governing Law</h3>
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of the State of Nevada, United States, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the state and federal courts located in Clark County, Nevada.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Dispute Resolution</h3>
                    <p className="mb-4">
                      In the event of any dispute arising from or relating to these Terms or our Services, the parties agree to:
                    </p>
                    <div className="space-y-3">
                      <div className="border-l-4 border-gray-900 pl-6 py-2">
                        <h4 className="text-gray-900 font-semibold mb-2">1. Informal Resolution</h4>
                        <p>First attempt to resolve the dispute informally by contacting us at <a href="mailto:legal@plexura.com" className="text-gray-900 underline underline-offset-2 hover:text-black">legal@plexura.com</a></p>
                      </div>
                      <div className="border-l-4 border-gray-900 pl-6 py-2">
                        <h4 className="text-gray-900 font-semibold mb-2">2. Mediation</h4>
                        <p>If informal resolution fails, engage in mediation before a mutually agreed mediator</p>
                      </div>
                      <div className="border-l-4 border-gray-900 pl-6 py-2">
                        <h4 className="text-gray-900 font-semibold mb-2">3. Binding Arbitration</h4>
                        <p>If mediation fails, submit to binding arbitration under the rules of the American Arbitration Association</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-300 rounded-xl p-6">
                    <h4 className="text-gray-900 font-semibold mb-3">Class Action Waiver</h4>
                    <p>
                      You agree that any arbitration or proceeding shall be limited to the dispute between you and Plexura individually. To the fullest extent permitted by law, you waive any right to bring claims on a class action, consolidated, or representative basis.
                    </p>
                  </div>
                </div>
              </section>

              <section id="changes" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <RefreshCw className="mr-3 text-gray-900" size={28} />
                  Changes to Terms
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of material changes by:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                      <span>Posting the updated Terms on this page</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                      <span>Updating the "Last Updated" date at the top of this page</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 mt-1 text-gray-900 flex-shrink-0" size={16} />
                      <span>Sending an email notification to your registered email address (for material changes)</span>
                    </li>
                  </ul>
                  <p className="mt-4">
                    Your continued use of our Services after any changes constitutes acceptance of the new Terms. If you do not agree to the modified Terms, you must discontinue use of our Services.
                  </p>
                </div>
              </section>

              <section id="contact" className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Mail className="mr-3 text-gray-900" size={28} />
                  Contact Information
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="text-gray-900 font-semibold mb-4">General Inquiries</h4>
                      <a href="mailto:legal@plexura.com" className="text-gray-900 hover:text-gray-900 transition-colors text-lg">
                        legal@plexura.com
                      </a>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="text-gray-900 font-semibold mb-4">Phone Support</h4>
                      <a href="tel:+18013478072" className="text-gray-900 hover:text-gray-900 transition-colors text-lg">
                        (801) 347-8072
                      </a>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 md:col-span-2">
                      <h4 className="text-gray-900 font-semibold mb-4">Mailing Address</h4>
                      <address className="text-gray-900 not-italic">
                        Plexura<br />
                        Attn: Legal Department<br />
                        Las Vegas, Nevada<br />
                        United States
                      </address>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8 text-center">
                <p className="text-gray-700 text-sm leading-relaxed">
                  These Terms of Service constitute the entire agreement between you and Plexura regarding your use of our Services and supersede all prior agreements and understandings. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
                <p className="text-gray-900 font-semibold mt-6">
                  © 2026 Plexura. All rights reserved.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}