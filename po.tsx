'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, User, Code, Briefcase, Mail, Github, Linkedin, Twitter, Phone, MapPin } from 'lucide-react'

const tools = [
  { name: 'Figma', description: 'Design tool', icon: '/figma-icon.svg' },
  { name: 'CSS', description: 'User Interface', icon: '/css-icon.svg' },
  { name: 'JavaScript', description: 'Interaction', icon: '/javascript-icon.svg' },
  { name: 'NodeJS', description: 'Web Server', icon: '/nodejs-icon.svg' },
  { name: 'ExpressJS', description: 'Node Framework', icon: '/expressjs-icon.svg' },
  { name: 'MongoDB', description: 'Database', icon: '/mongodb-icon.svg' },
  { name: 'React', description: 'Framework', icon: '/react-icon.svg' },
  { name: 'TailwindCSS', description: 'User Interface', icon: '/tailwindcss-icon.svg' },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <h1 className="text-5xl font-bold mb-4">Rohith T</h1>
            <h2 className="text-2xl text-gray-400 mb-6">Software Development Engineer</h2>
            <p className="text-lg text-gray-300 mb-8">
              I'm on a mission to learn as many things as possible! Skilled in
              React, Next.js, and Tailwind, I focus on building scalable
              applications. In my free time, I share educational content and write
              blogs.
            </p>
          </>
        )
      case 'about':
        return (
          <section>
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-300">
              Experienced software development engineer with a strong background in designing and implementing robust, scalable, and efficient software solutions. Proficient in multiple programming languages and frameworks, with a keen eye for problem-solving and a passion for delivering high-quality code.
            </p>
          </section>
        )
      case 'skills':
        return (
          <section>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Proficient in Python, Java, and JavaScript</li>
              <li>Experienced with frameworks like React, Node.js, and Django</li>
              <li>Familiar with database technologies like SQL and MongoDB</li>
              <li>Strong problem-solving and analytical skills</li>
              <li>Excellent communication and teamwork abilities</li>
            </ul>
          </section>
        )
      case 'experience':
        return (
          <section>
            <h3 className="text-2xl font-semibold mb-4">Experience</h3>
            <div className="mb-4">
              <h4 className="text-xl font-semibold"> Software Engineer intern</h4>
              <p className="text-gray-400">Tecsis | June 2022 - Present</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Designed and implemented a scalable microservice architecture for a large-scale e-commerce platform</li>
                <li>Spearheaded the development of a data analytics platform using Python, Django, and React</li>
                <li>Collaborated with cross-functional teams to deliver features on time and within budget</li>
                <li>Mentored junior developers and contributed to the team's technical growth</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Software Engineer Intern</h4>
              <p className="text-gray-400">Exposys Data labs | May 2021 - August 2021</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Developed a mobile-responsive web application using React and Node.js</li>
                <li>Implemented RESTful APIs and integrated with a MongoDB database</li>
                <li>Participated in Agile development processes and code reviews</li>
              </ul>
            </div>
          </section>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Sidebar */}
      <nav className="flex flex-col items-center justify-between w-16 py-8 bg-gray-800">
        <div className="flex flex-col space-y-4">
          <Button variant="ghost" size="icon" onClick={() => setActiveSection('home')} className={`text-gray-400 hover:text-white ${activeSection === 'home' ? 'bg-gray-700' : ''}`}>
            <Home className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setActiveSection('about')} className={`text-gray-400 hover:text-white ${activeSection === 'about' ? 'bg-gray-700' : ''}`}>
            <User className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setActiveSection('skills')} className={`text-gray-400 hover:text-white ${activeSection === 'skills' ? 'bg-gray-700' : ''}`}>
            <Code className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setActiveSection('experience')} className={`text-gray-400 hover:text-white ${activeSection === 'experience' ? 'bg-gray-700' : ''}`}>
            <Briefcase className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex flex-col space-y-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://x.com/Tummalarohith15" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Twitter className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/tummala-rohith-04bb31276" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Github className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {renderSection()}

          <section className="mt-12">
            <h2 className="text-4xl font-bold mb-4">Essential Tools I Use</h2>
            <p className="text-xl text-gray-400 mb-8">
              Discover the powerful tools and technologies I use to create
              exceptional, high-performing websites & applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <Card key={tool.name} className="bg-gray-800 border-gray-700">
                  <CardContent className="flex flex-col items-center p-6">
                    <img src={tool.icon} alt={tool.name} className="w-16 h-16 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                    <p className="text-gray-400 text-center">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Nandyal, Andhra</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>9100173554</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>tummala.rohith8899@gmail.com</span>
              </div>
            </div>
          </section>

          <div className="flex space-x-4 mt-8">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/Tummalarohith15" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/tummala-rohith-04bb31276" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://x.com/Tummalarohith15" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
