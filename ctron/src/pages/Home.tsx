import { DesktopLayout } from '../components/Layout/DesktopLayout'
import { MobileLayout } from '../components/Layout/MobileLayout'

export function Home() {
  return (
    <main className="flex-1 relative px-4 sm:px-8 pt-[72px] lg:pt-[96px]">
      <DesktopLayout />
      <MobileLayout />
    </main>
  )
} 