import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

import ContactForm from '@/components/contact-form';
import ProjectCard from '@/components/Project-Card';
import TechStack from '@/components/tech-stack';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Ofer.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline">Resume</Button>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Hi, I&apos;m Ofer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I Am A Software Engineer And I Love To Build Things For The Web
                  <br />
                  Building Digital Experiences With Modern Technologies, Focused On Creating Elegant Solutions To
                  Complex Problems
                </p>
              </div>
              {/* Centered download button with proper spacing */}
              <div className="flex justify-center w-full mt-8">
                <Button className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
              {/* Social links centered with proper spacing */}
              <div className="flex justify-center w-full mt-6 gap-4">
                <Link href="https://github.com/oferdebug" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/ofer-cohen-51254614a" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com/ofercohen834" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:hello@example.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Some Of My Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce"
                description="A full-stack e-commerce application built with Next.js, Tailwind CSS, and MongoDB. It features a user-friendly interface, product catalog, shopping cart, and secure payment processing."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/oferdebug/ecommerce"
                tags={["Next.js", "Tailwind CSS", "MongoDB"]}
              />
              <ProjectCard
                title="Portfolio"
                description="My personal portfolio website built with Next.js and Tailwind CSS. It showcases my skills, projects, and experience in a clean and modern design."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/oferdebug/portfolio"
                tags={["Next.js", "Tailwind CSS"]}
              />
              <ProjectCard
                title="Blog"
                description="A blogging platform built with Next.js and Markdown. It allows users to create, edit, and publish blog posts with a simple and intuitive interface."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/oferdebug/blog"
                tags={["Next.js", "Markdown"]}
              />
              <ProjectCard
                title="Chatbot"
                description="A chatbot application built with React and Node.js. It uses natural language processing to understand user queries and provide relevant responses."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/oferdebug/chatbot"
                tags={["React", "Node.js"]}
              />
            </div>
            {/* Centered "View All Projects" button with proper spacing */}
            <div className="flex justify-center w-full mt-12">
              <Button variant="outline" className="flex items-center">
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Ofer.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

