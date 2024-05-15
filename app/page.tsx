import { Testimonials } from '@/components/ui/testimonial';
import Header from '../components/ui/header';
import Hero from '../components/ui/hero';
import { PrimaryFeatures } from '@/components/ui/primary-features';
import { Faqs } from '@/components/ui/faqs'
import { SecondaryFeatures } from '@/components/ui/secondary-features';
import { Footer } from '@/components/ui/footer'


export default function Home() {
    return (
            <>
              <Header />
              <main>
                <Hero />
                <SecondaryFeatures />
                <PrimaryFeatures />
                <Testimonials />
                <Faqs />
                </main>
                <Footer />
            </>
          )
}