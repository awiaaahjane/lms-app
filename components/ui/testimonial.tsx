import Image from 'next/image'

import { Container } from '@/components/ui/container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        "As an English literature professor, I'm passionate about helping my students connect with classic literature. This LMS system has allowed me to create dynamic discussions and provide in-depth analysis, enriching my students' understanding of literary works.",
      author: {
        name: 'Professor Emily Carter',
        role: ' Inspiring English Literature Professor',
        image: avatarImage1,
      },
    },
    {
      content:
        "Studying English literature with Professor Carter and using this LMS system has opened my eyes to the beauty of storytelling. The platform's resources have helped me explore diverse narratives and develop my analytical skills.",
      author: {
        name: 'Maria Rodriguez',
        role: 'Dedicated Middle School Student',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        "As an educator, my goal is to instill a love for mathematics in my students. With this LMS system, I've been able to create interactive lessons and provide personalized feedback, empowering my students to excel in the subject.",
      author: {
        name: 'Professor David Matthews',
        role: 'Inspirational Mathematics Professor',
        image: avatarImage5,
      },
    },
    {
      content:
        "Mathematics used to intimidate me, but with the help of Professor Matthews and this LMS system, I've gained confidence in my abilities. The platform's resources and support have helped me overcome challenges and achieve success in math.",
      author: {
        name: 'Alice Turner',
        role: ' Motivated High School Student',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        "Dr. Watson's history class, supported by this LMS system, has been one of the highlights of my college experience. The platform's interactive features and engaging content have made learning history enjoyable and rewarding.",
      author: {
        name: 'Jake Thompson',
        role: 'Enthusiastic College Student',
        image: avatarImage3,
      },
    },
    {
      content:
        "Teaching history isn't just about memorizing dates; it's about understanding the impact of past events on the present. This LMS system has allowed me to create immersive learning experiences that challenge my students to think critically and develop a deeper appreciation for history.",
      author: {
        name: 'Dr. Karen Watson',
        role: 'Respected History Professor',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden='true'
      width={105}
      height={78}
      {...props}>
      <path d='M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z' />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id='testimonials'
      aria-label='What our customers are saying'
      className='bg-slate-50 py-20 sm:py-32'>
      <Container>
        <div className='mx-auto max-w-2xl md:text-center'>
          <h2 className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'>
            Embraced by educational institutions globally.
          </h2>
          <p className='mt-4 text-lg tracking-tight text-slate-700'>
          Our LMS prioritizes simplicity, making learning intuitive without overwhelming users with unnecessary features.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3'>
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul
                role='list'
                className='flex flex-col gap-y-6 sm:gap-y-8'>
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className='relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10'>
                      <QuoteIcon className='absolute left-6 top-6 fill-slate-100' />
                      <blockquote className='relative'>
                        <p className='text-lg tracking-tight text-slate-900'>
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className='relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6'>
                        <div>
                          <div className='font-display text-base text-slate-900'>
                            {testimonial.author.name}
                          </div>
                          <div className='mt-1 text-sm text-slate-500'>
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className='overflow-hidden rounded-full bg-slate-50'>
                          <Image
                            className='h-14 w-14 object-cover'
                            src={testimonial.author.image}
                            alt=''
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
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
