import { HeroSection } from '@/components/hero-section'
import { EditorialStatement } from '@/components/editorial-statement'
import { ParfumsPreview } from '@/components/parfums-preview'
import { JewelleryPreview } from '@/components/jewellery-preview'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EditorialStatement />
      <ParfumsPreview />
      <JewelleryPreview />
    </>
  )
}
