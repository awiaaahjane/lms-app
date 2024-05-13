import { Testimonials } from '@/components/ui/testimonial';
import Header from '../components/ui/header';
import Hero from '../components/ui/hero';
import { PrimaryFeatures } from '@/components/ui/primary-features';
import { SecondaryFeatures } from '@/components/ui/secondary-features';
import { Footer } from '@/components/ui/footer'



export default function Home() {
    return (
            <>
              <Header />
              <main>
                <Hero />
                <PrimaryFeatures />
                {/* <SecondaryFeatures /> */}
                <Testimonials />
                </main>
                <Footer />
            </>
          )
}