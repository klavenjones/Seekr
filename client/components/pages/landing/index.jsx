import HomeNavigation from './navigation'
import Hero from './hero'
import Features from './features'
import Testimonial from './testimonial'
import Blog from './blog'
import Footer from './footer'
import CTA from './cta'

export default function LandingPage() {
  return (
    <div className='bg-white'>
      <div className='relative overflow-hidden'>
        <HomeNavigation />
        <main>
          <Hero />
          <Features />
          <Testimonial />
          <Blog />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
