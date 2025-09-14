"use client"

import { useState } from "react"
import styles from "../../../components/IndustryPage.module.css"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"


const EcommercePage = () => {
  const [activeTab, setActiveTab] = useState("overview")

  const services = [
    {
      icon: "🛒",
      title: "Custom E-commerce Platforms",
      description:
        "Tailored online stores built with modern frameworks like Next.js, React, and Node.js for optimal performance and user experience.",
      features: [
        "Custom shopping cart",
        "Payment gateway integration",
        "Inventory management",
        "Mobile-responsive design",
      ],
    },
    {
      icon: "📱",
      title: "Mobile Commerce Apps",
      description:
        "Native and cross-platform mobile apps that provide seamless shopping experiences with push notifications and offline capabilities.",
      features: ["iOS & Android apps", "Push notifications", "Offline browsing", "Social login integration"],
    },
    {
      icon: "🔄",
      title: "ERP & CRM Integration",
      description:
        "Seamlessly connect your e-commerce platform with existing business systems for unified operations and customer management.",
      features: ["Real-time inventory sync", "Customer data integration", "Order management", "Analytics dashboard"],
    },
    {
      icon: "🤖",
      title: "AI-Powered Features",
      description:
        "Implement intelligent features like product recommendations, chatbots, and predictive analytics to boost sales and customer satisfaction.",
      features: ["Product recommendations", "AI chatbots", "Price optimization", "Demand forecasting"],
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      description:
        "Comprehensive analytics solutions to track performance, understand customer behavior, and make data-driven business decisions.",
      features: ["Sales analytics", "Customer insights", "Performance tracking", "Custom reports"],
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description:
        "Ensure your e-commerce platform meets industry security standards with PCI DSS compliance and advanced security measures.",
      features: ["PCI DSS compliance", "SSL certificates", "Fraud protection", "Data encryption"],
    },
  ]

  const solutions = [
    {
      problem: "Slow Loading Times",
      solution: "Optimize with CDN, lazy loading, and performance monitoring",
      impact: "40% improvement in page speed",
    },
    {
      problem: "High Cart Abandonment",
      solution: "Streamlined checkout process and recovery campaigns",
      impact: "25% reduction in abandonment",
    },
    {
      problem: "Poor Mobile Experience",
      solution: "Responsive design and progressive web app features",
      impact: "60% increase in mobile conversions",
    },
    {
      problem: "Inventory Management",
      solution: "Real-time inventory tracking and automated alerts",
      impact: "90% reduction in stockouts",
    },
  ]

  const caseStudy = {
    client: "FashionForward",
    challenge: "Outdated e-commerce platform with poor performance and limited scalability",
    solution: "Complete platform rebuild using Next.js with microservices architecture",
    results: [
      "150% increase in conversion rates",
      "60% faster page load times",
      "200% growth in mobile sales",
      "40% reduction in bounce rate",
    ],
  }

  const technologies = [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Stripe",
    "PayPal",
    "AWS",
    "Docker",
    "Redis",
    "Elasticsearch",
    "GraphQL",
  ]

  return (
    <>
    <Navbar/>
    <div className={styles.industryPage}>
      {/* Hero Section - Unified with landing page style */}
      <section style={{ background: 'linear-gradient(135deg, #3db1a2 0%, #3db1a2cc 60%, #2e8f7f 100%)', color: 'white', paddingTop: 150, paddingBottom: 64 }}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle} style={{ color: 'white' }}>E-commerce Solutions That Drive Sales</h1>
              <p className={styles.heroSubtitle} style={{ color: 'white', opacity: 0.9 }}>
                Build powerful, scalable e-commerce platforms that convert visitors into customers. From custom online
                stores to mobile commerce apps, we create digital shopping experiences that grow your business.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>150+</span>
                  <span className={styles.statLabel}>E-commerce Projects</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>$50M+</span>
                  <span className={styles.statLabel}>Revenue Generated</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>40%</span>
                  <span className={styles.statLabel}>Avg. Conversion Boost</span>
                </div>
              </div>
              <div className={styles.heroButtons} style={{ display: 'flex', gap: 16, marginTop: 32 }}>
                <button
                  style={{
                    background: '#3db1a2',
                    color: 'white',
                    padding: '0.75rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    boxShadow: '0 2px 8px 0 #3db1a233',
                    border: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = '#2e8f7f')}
                  onMouseOut={e => (e.currentTarget.style.background = '#3db1a2')}
                >
                  Get Free Consultation
                </button>
                <button
                  style={{
                    background: 'white',
                    color: '#3db1a2',
                    padding: '0.75rem 2rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    border: '2px solid #3db1a2',
                    boxShadow: '0 2px 8px 0 #3db1a233',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = '#3db1a2';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = '#3db1a2';
                  }}
                >
                  View Case Studies
                </button>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.heroImagePlaceholder}>
                <div className={styles.ecommerceIllustration}>
                  <div className={styles.shoppingCart}>🛒</div>
                  <div className={styles.products}>
                    <div className={styles.product}>📱</div>
                    <div className={styles.product}>👕</div>
                    <div className={styles.product}>👟</div>
                  </div>
                  <div className={styles.analytics}>📊</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      {/* <section className={styles.tabSection}>
        <div className={styles.container}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === "overview" ? styles.active : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`${styles.tab} ${activeTab === "services" ? styles.active : ""}`}
              onClick={() => setActiveTab("services")}
            >
              Our Services
            </button>
            <button
              className={`${styles.tab} ${activeTab === "solutions" ? styles.active : ""}`}
              onClick={() => setActiveTab("solutions")}
            >
              Solutions
            </button>
            <button
              className={`${styles.tab} ${activeTab === "case-study" ? styles.active : ""}`}
              onClick={() => setActiveTab("case-study")}
            >
              Case Study
            </button>
          </div>
        </div>
      </section> */}

      {/* Tab Content */}
      <section className={styles.tabContent}>
        <div className={styles.container}>
          {activeTab === "overview" && (
            <div className={styles.overview}>
              <h2>E-commerce Industry Expertise</h2>
              <div className={styles.overviewGrid}>
                <div className={styles.overviewItem}>
                  <h3>🎯 Strategic Approach</h3>
                  <p>
                    We understand that every e-commerce business is unique. Our strategic approach focuses on your
                    specific market, customer behavior, and business goals to create solutions that drive real results.
                  </p>
                </div>
                <div className={styles.overviewItem}>
                  <h3>⚡ Performance First</h3>
                  <p>
                    Speed matters in e-commerce. We build lightning-fast platforms optimized for conversions, with
                    advanced caching, CDN integration, and performance monitoring.
                  </p>
                </div>
                <div className={styles.overviewItem}>
                  <h3>📈 Scalable Architecture</h3>
                  <p>
                    From startup to enterprise, our solutions grow with your business. Microservices architecture and
                    cloud-native design ensure your platform can handle any traffic volume.
                  </p>
                </div>
                <div className={styles.overviewItem}>
                  <h3>🔐 Security & Compliance</h3>
                  <p>
                    Protect your customers and business with enterprise-grade security, PCI DSS compliance, and regular
                    security audits and updates.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className={styles.services}>
              <h2>Comprehensive E-commerce Services</h2>
              <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                  <div key={index} className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul className={styles.featureList}>
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "solutions" && (
            <div className={styles.solutions}>
              <h2>Common E-commerce Challenges We Solve</h2>
              <div className={styles.solutionsGrid}>
                {solutions.map((item, index) => (
                  <div key={index} className={styles.solutionCard}>
                    <div className={styles.problem}>
                      <h4>Problem</h4>
                      <p>{item.problem}</p>
                    </div>
                    <div className={styles.arrow}>→</div>
                    <div className={styles.solution}>
                      <h4>Our Solution</h4>
                      <p>{item.solution}</p>
                    </div>
                    <div className={styles.impact}>
                      <span className={styles.impactLabel}>Impact:</span>
                      <span className={styles.impactValue}>{item.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "case-study" && (
            <div className={styles.caseStudy}>
              <h2>Success Story: {caseStudy.client}</h2>
              <div className={styles.caseStudyContent}>
                <div className={styles.caseStudySection}>
                  <h3>Challenge</h3>
                  <p>{caseStudy.challenge}</p>
                </div>
                <div className={styles.caseStudySection}>
                  <h3>Solution</h3>
                  <p>{caseStudy.solution}</p>
                </div>
                <div className={styles.caseStudySection}>
                  <h3>Results</h3>
                  <div className={styles.resultsGrid}>
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className={styles.resultItem}>
                        <span className={styles.resultIcon}>✅</span>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technologies */}
      <section className={styles.technologies}>
        <div className={styles.container}>
          <h2>Technologies We Use</h2>
          <div className={styles.techGrid}>
            {technologies.map((tech, index) => (
              <div key={index} className={styles.techItem}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Unified with landing page style */}
      <section style={{ background: 'linear-gradient(90deg, #3db1a2 0%, #2e8f7f 100%)', color: 'white', padding: '5rem 0' }}>
        <div className={styles.container}>
          <div className={styles.ctaContent} style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16 }}>Ready to Transform Your E-commerce Business?</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: 32 }}>
              Let's discuss how we can help you build a powerful e-commerce platform that drives sales and grows your business.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
              <button
                style={{
                  background: 'white',
                  color: '#3db1a2',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  boxShadow: '0 2px 8px 0 #3db1a233',
                  border: 'none',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = '#3db1a2';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#3db1a2';
                }}
              >
                Start Your Project
              </button>
              <button
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  border: '2px solid white',
                  boxShadow: '0 2px 8px 0 #3db1a233',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#3db1a2';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default EcommercePage
