import Image from 'next/image'

import { Container } from '@/components/ui/container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is Learnify and what does it offer?',
      answer:
        'Learnify is an innovative Learning Management System (LMS) designed to facilitate online learning. It provides a user-friendly platform for both administrators and users to manage and access educational content.',
    },
    {
      question: 'What are the main roles in Learnify?',
      answer: 'Learnify has two primary roles: administrators and users. Administrators have control over course management, while users can browse available courses and enroll in them.',
    },
    {
      question: 'How can users access courses on Learnify?',
      answer:
        'Users can easily browse through the available courses on Learnify and enroll in them using their credit cards. This streamlined process ensures quick and convenient access to educational content.',
    },
  ],
  [
    {
      question: 'What functionalities does the admin have on Learnify?',
      answer:
        'Admins in Learnify have comprehensive CRUD (Create, Read, Update, Delete) capabilities for course management. They can create new courses, update existing ones, delete courses, and publish them for user access.',
    },
    {
      question:
        'Is there a feature to track sales and revenue on Learnify?',
      answer:
        'Yes, Learnify provides robust analytics tools for admins to track total sales and revenue generated from course enrollments. This feature allows admins to monitor the financial performance of their online learning platform.',
    },
    {
      question:
        'Can users monitor their course progress on Learnify?',
      answer:
        'Absolutely, Learnify enables users to track their progress within enrolled courses. They can monitor completed modules, upcoming lessons, and assessment scores to stay informed about their learning journey.',
    },
  ],
  [
    {
      question: 'Can Learnify be customized to suit specific organizational needs?',
      answer:
        'Indeed, Learnify offers customization options to tailor the platform to the unique requirements of organizations. This includes branding customization, integration with other systems, and the addition of custom features to meet specific needs.',
    },
    {
      question: 'Is there a limit to the number of courses that an admin can create on Learnify?',
      answer:
        "No, there is no limit to the number of courses that an admin can create on Leanify. Admins have the flexibility to create and manage as many courses as needed to meet the organization's educational goals.",
    },
    {
      question: 'Can users access their course materials offline?',
      answer:
        "Unfortunately, Leanify does not currently support offline access to course materials. Users need an internet connection to access and interact with course content.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-backgound py-20 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-foreground sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-600">
          Get quick answers to common questions about Learnify.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-foreground">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-600">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
