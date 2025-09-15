// components/TechStackCarousel.tsx
import styles from "./TechStackCarousel.module.css"

const TechStackCarousel = () => {
const technologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }, 
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/canva.svg" },
  { name: "Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/postman.svg" },
  { name: "Play Store", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/googleplay.svg" },
  { name: "App Store", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/appstore.svg" }
]

  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Technologies We Master</h2>
          <p className={styles.subtitle}>
            Cutting-edge tools and frameworks we use to build exceptional software solutions
          </p>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            <div className={styles.logoTrack}>
              {technologies.map((tech, index) => (
                <div key={`first-${index}`} className={styles.logoItem}>
                  <img src={tech.logo} alt={tech.name} className={styles.logoImage} />
                  <span className={styles.logoName}>{tech.name}</span>
                </div>
              ))}
            </div>

            <div className={styles.logoTrack}>
              {technologies.map((tech, index) => (
                <div key={`second-${index}`} className={styles.logoItem}>
                  <img src={tech.logo} alt={tech.name} className={styles.logoImage} />
                  <span className={styles.logoName}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStackCarousel