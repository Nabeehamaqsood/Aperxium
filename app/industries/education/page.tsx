"use client"

import { useState } from "react"
import styles from "@/components/IndustryPage.module.css"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"

const EducationPage = () => {
  const [activeTab, setActiveTab] = useState("overview")

  const services = [
    {
      icon: "🎓",
      title: "E-Learning Platforms",
      description:
        "Custom learning management systems (LMS) and digital classrooms for schools, universities, and training organizations.",
      features: ["Video lectures", "Quizzes & assignments", "Student dashboards", "Progress tracking"],
    },
    {
      icon: "💻",
      title: "Virtual Classrooms",
      description:
        "Interactive virtual classrooms with real-time video, whiteboards, and student engagement features.",
      features: ["Live classes", "Breakout rooms", "Digital whiteboards", "Chat & Q&A"],
    },
    {
      icon: "📊",
      title: "Education Analytics",
      description:
        "Track student performance with AI-driven insights and predictive analytics for personalized learning.",
      features: ["Performance reports", "AI recommendations", "Custom dashboards", "Early alerts"],
    },
  ]

  return (
    <>
      <Navbar />
      <div className={styles.industryPage}>
        {/* Hero Section */}
        <section
          style={{
            background: "linear-gradient(135deg, #3db1a2 0%, #2e8f7f 100%)",
            color: "white",
            paddingTop: 150,
            paddingBottom: 64,
          }}
        >
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>Transforming Education with Technology</h1>
                <p className={styles.heroSubtitle}>
                  Build scalable, digital-first education solutions—LMS platforms, virtual classrooms, and
                  student-centered apps that redefine learning experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Content (Overview + Services) */}
        <section className={styles.tabContent}>
          <div className={styles.container}>
            {activeTab === "overview" && (
              <div className={styles.overview}>
                <h2>Education Industry Expertise</h2>
                <div className={styles.overviewGrid}>
                  <div className={styles.overviewItem}>
                    <h3>📚 Modern Learning</h3>
                    <p>
                      We build innovative e-learning platforms that engage students and make knowledge
                      accessible globally.
                    </p>
                  </div>
                  <div className={styles.overviewItem}>
                    <h3>⚡ Scalable Solutions</h3>
                    <p>
                      Our solutions are designed to grow with institutions, supporting millions of students
                      seamlessly.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "services" && (
              <div className={styles.services}>
                <h2>Our Education Services</h2>
                <div className={styles.servicesGrid}>
                  {services.map((service, index) => (
                    <div key={index} className={styles.serviceCard}>
                      <div className={styles.serviceIcon}>{service.icon}</div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <ul className={styles.featureList}>
                        {service.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default EducationPage
