"use client"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"
import { useState } from "react"

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  
  const blogPosts = [
    {
      id: 1,
      title: "The Transformative Power of AI in the IT Industry",
      date: "September 1, 2025",
      image: "/images/trans.jpg",
      category: "Artificial Intelligence / IT Industry",
      excerpt: "Artificial Intelligence (AI) is revolutionizing the IT landscape by enhancing efficiency, security, and innovation...",
      content: `Artificial Intelligence (AI) is revolutionizing the IT landscape by enhancing efficiency, security, and innovation. From automating mundane tasks to predicting system failures, AI is redefining how businesses manage infrastructure, cybersecurity, software development, and customer support.

Key Applications of AI in IT:

- AI for IT Operations (AIOps): AIOps platforms analyze vast amounts of IT data to detect anomalies, predict potential system failures, and automate incident resolution, minimizing downtime and enhancing system performance.
- AI-Powered Cybersecurity: AI-driven security systems detect and mitigate threats in real-time, analyzing behavioral patterns and identifying anomalies to prevent cyberattacks.
- Intelligent Automation in IT Service Management (ITSM): AI-powered automation tools take over repetitive tasks, improving efficiency and reducing human errors.
- AI in Software Development: AI accelerates software development by assisting in code generation, bug detection, and automated testing, enhancing developer productivity and code quality.
- AI for Cloud Optimization: AI optimizes cloud usage by predicting workload demands, automatically adjusting resource allocation, and reducing unnecessary cloud expenses.

Benefits of AI in IT:

- Predictive Maintenance: AI-driven predictive maintenance tools analyze system health, detect early signs of failures, and alert IT teams before issues occur.
- Enhanced Cybersecurity: AI-powered security systems detect and prevent cyber threats in real-time, protecting sensitive data and preventing financial losses.
- Improved Efficiency: AI automates routine tasks, freeing up IT teams to focus on strategic projects and complex problem-solving.
- Personalized User Experiences: AI analyzes user behavior and preferences, providing tailored content recommendations and improving user satisfaction.

Real-World Examples:

- Chatbots in Customer Support: AI-powered chatbots provide instant responses to common IT issues, reducing response time and improving user experience.
- AI in Healthcare: AI is improving patient care through medical imaging analysis, predictive analytics, and personalized treatment plans.
- AI in Finance: AI is used in algorithmic trading, fraud detection, and credit scoring, enhancing financial decision-making and risk management.

The Future of AI in IT:

As AI continues to evolve, its impact on the IT industry will become even more significant. With advancements in machine learning, deep learning, and natural language processing, AI will drive innovation, automation, and intelligence across IT operations. To stay ahead, businesses must adopt AI-driven solutions, upskill their IT teams, and leverage AI's full potential.`
    },
    {
      id: 2,
      title: "The World of Web Development: Trends, Tools, and Best Practices",
      date: "September 5, 2025",
      image: "/images/2.jpg",
      category: "Web Development / Technology",
      excerpt: "Web development is a dynamic and ever-evolving field that requires a combination of technical skills, creativity, and problem-solving abilities...",
      content: `Web development is a dynamic and ever-evolving field that requires a combination of technical skills, creativity, and problem-solving abilities. From building simple websites to complex web applications, web developers play a crucial role in shaping the digital landscape.

Key Aspects of Web Development:

- Front-end Development: Focuses on creating the user interface and user experience (UI/UX) using HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js.
- Back-end Development: Concerned with server-side logic, database integration, and API connectivity using languages like Java, Python, Ruby, and PHP.
- Full-stack Development: Combines front-end and back-end development, requiring a broad range of skills and knowledge.

Trends in Web Development:

- Responsive Web Design: Ensures websites adapt to different screen sizes and devices, providing a seamless user experience.
- Progressive Web Apps (PWAs): Combines the best of web and mobile apps, offering offline capabilities, push notifications, and fast loading times.
- Artificial Intelligence (AI) and Machine Learning (ML): Integrating AI and ML into web development to enhance user experience, improve performance, and automate tasks.
- WebAssembly: A binary instruction format that allows developers to build high-performance web applications using languages like C, C++, and Rust.

Tools and Technologies:

- Version Control Systems: Git, SVN, and Mercurial help developers manage code changes and collaborate on projects.
- Front-end Frameworks: React, Angular, and Vue.js provide pre-built components and tools for building complex UI/UX.
- Back-end Frameworks: Express.js, Django, and Ruby on Rails offer a structured approach to building server-side applications.
- Databases: Relational databases like MySQL and PostgreSQL, and NoSQL databases like MongoDB and Cassandra, store and manage data for web applications.

Best Practices:

- Code Quality: Write clean, readable, and maintainable code using best practices like modularization, commenting, and testing.
- Security: Implement security measures like input validation, authentication, and authorization to protect against common web vulnerabilities.
- Performance Optimization: Optimize website performance using techniques like caching, minification, and compression.
- User Experience: Prioritize user experience by designing intuitive interfaces, providing clear navigation, and ensuring accessibility.`
    },
    {
      id: 3,
      title: "The World of App Development: Trends, Tools, and Best Practices",
      date: "September 7, 2025",
      image: "/images/3.jpg",
      category: "App Development / Mobile",
      excerpt: "Mobile app development has become a crucial aspect of modern business, with millions of apps available across various platforms...",
      content: `Mobile app development has become a crucial aspect of modern business, with millions of apps available across various platforms. From simple utility apps to complex enterprise solutions, app development requires a combination of technical expertise, creativity, and problem-solving skills.

Key Aspects of App Development:

- Native App Development: Building apps specifically for a particular platform (e.g., iOS or Android) using platform-specific programming languages and tools.
- Cross-Platform App Development: Creating apps that can run on multiple platforms using frameworks like React Native, Flutter, or Xamarin.
- Hybrid App Development: Combining elements of native and web app development to create apps that use web technologies like HTML, CSS, and JavaScript.

Trends in App Development:

- Artificial Intelligence (AI) and Machine Learning (ML): Integrating AI and ML into apps to enhance user experience, improve performance, and automate tasks.
- Internet of Things (IoT): Developing apps that interact with IoT devices, enabling users to control and monitor their smart devices.
- Augmented Reality (AR) and Virtual Reality (VR): Creating immersive experiences using AR and VR technologies.
- Cloud-Based Apps: Building apps that leverage cloud computing for scalability, flexibility, and cost-effectiveness.

Tools and Technologies:

- Integrated Development Environments (IDEs): Android Studio, Xcode, and Visual Studio provide comprehensive development environments for building apps.
- App Development Frameworks: React Native, Flutter, and Xamarin enable cross-platform app development.
- Backend Services: Firebase, AWS Amplify, and Google Cloud Platform provide backend services for app development.
- Testing and Debugging Tools: Appium, Espresso, and Xcode's built-in testing tools help ensure app quality and stability.

Best Practices:

- User Experience (UX) Design: Prioritize UX design to create intuitive and engaging app experiences.
- Security: Implement security measures like data encryption, authentication, and authorization to protect user data.
- Performance Optimization: Optimize app performance using techniques like caching, lazy loading, and code optimization.
- Testing and Quality Assurance: Thoroughly test apps to ensure quality, stability, and compatibility.

Conclusion:

App development is a rapidly evolving field that requires a deep understanding of technical skills, design principles, and user experience. By staying up-to-date with the latest trends, tools, and best practices, developers can build high-quality, user-friendly apps that meet the needs of modern users.`
    }
  ];

  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #3db1a2 0%, #2e8f7f 100%)",
          color: "white",
          paddingTop: 150,
          paddingBottom: 80,
        }}
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg opacity-90">
            Explore our latest articles, updates, and insights on technology, business,
            and innovation.
          </p>
        </div>
      </section>

      {selectedPost ? (
        /* Single Post View */
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <button 
              onClick={handleBackToBlog}
              className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Blog
            </button>
            
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Fixed image container with proper sizing */}
              <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden p-4">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="p-8">
                <span className="text-sm text-gray-500">{selectedPost.date}</span>
                <div className="text-xs text-blue-600 font-medium mb-2">{selectedPost.category}</div>
                <h2 className="text-2xl font-bold mt-2 mb-6" style={{ color: '#2e8f7f' }}>
                  {selectedPost.title}
                </h2>
                
                <div className="prose max-w-none">
                  {selectedPost.content
                    .split('\n\n')
                    .filter(Boolean)
                    .map((paragraph, index) => (
                      <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        /* Blog Posts List View - Side by Side Layout */
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-8 text-center">Latest Articles</h2>
            
            <div className="grid gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer grid grid-cols-1 md:grid-cols-2"
                  onClick={() => handlePostClick(post)}
                >
                  {/* Image on left side - Properly sized */}
                  <div className="h-56 md:h-full bg-gray-100 flex items-center justify-center overflow-hidden p-4">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  
                  {/* Content on right side */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <div className="text-xs text-blue-600 font-medium mb-2">{post.category}</div>
                      <h3 
                        className="text-xl font-bold mt-2 mb-4 transition-colors hover:text-blue-600"
                        style={{ color: '#2e8f7f' }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    </div>
                    <button className="text-gray-600 font-medium hover:underline self-start">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}