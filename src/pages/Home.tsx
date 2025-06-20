import { ThemeToggle } from '@/components/ThemeToggle'
import { SpaceBackground } from '@/components/SpaceBackground'
import { Nav } from '@/components/Nav'
import { HeroSection } from '@/components/HeroSection'

export const HomePage = () => {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Theme Toggle */}
			<ThemeToggle />
			{/* Background Effects */}
			<SpaceBackground />
			{/* Nav */}
			<Nav />
			{/* Main Content */}
			<main>
				<HeroSection />
			</main>
			{/* Footer */}
		</div>
	)
}
