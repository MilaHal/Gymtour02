import SimpleHero from '@/components/SimpleHero'
import SimpleFeatures from '@/components/SimpleFeatures'
import ProcessTimeline from '@/components/ProcessTimeline'
import SimpleGallery from '@/components/SimpleGallery'
import MobileMockup from '@/components/MobileMockup'
import Results from '@/components/Results'
import SimpleContact from '@/components/SimpleContact'
import FAQ from '@/components/FAQ'

export default function Home() {
  console.log("Simple Home page rendering")
  
  return (
    <main className="min-h-screen bg-gymtour-black">
      <SimpleHero />
      <SimpleFeatures />
      <MobileMockup />
      <SimpleGallery />
      <ProcessTimeline />
      <Results />
      <FAQ />
      <SimpleContact />
    </main>
  );
}