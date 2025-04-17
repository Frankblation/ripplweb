"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, Users, MessageCircle, Share2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RipplLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Remove the status bar section from the photo grid in the hero section
  // Also remove the currentTime state since we won't need it anymore
  // Remove this from the component:
  // And remove the useEffect that updates the time:

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="h-10 w-auto">
            <Image src="/rippl-logo.svg" alt="rippl logo" width={100} height={40} className="h-full w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-white hover:text-[#00BFA5] transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-white hover:text-[#00BFA5] transition-colors">
              How It Works
            </Link>
            <Link href="#download" className="text-white hover:text-[#00BFA5] transition-colors">
              Download
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-[#00BFA5] text-[#00BFA5] hover:bg-[#00BFA5] hover:text-white">
              Login
            </Button>
            <Button className="bg-[#00BFA5] text-white hover:bg-[#00BFA5]/90">Sign Up</Button>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-20 px-4">
          <div className="flex flex-col gap-6 text-xl">
            <div className="w-24 mb-6 mx-auto">
              <Image src="/rippl-logo.svg" alt="rippl logo" width={100} height={40} className="w-full h-auto" />
            </div>
            <Link
              href="#features"
              className="text-white hover:text-[#00BFA5] transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-white hover:text-[#00BFA5] transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#download"
              className="text-white hover:text-[#00BFA5] transition-colors py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </Link>
            <div className="flex flex-col gap-4 mt-4">
              <Button variant="outline" className="border-[#00BFA5] text-[#00BFA5] hover:bg-[#00BFA5] hover:text-white">
                Login
              </Button>
              <Button className="bg-[#00BFA5] text-white hover:bg-[#00BFA5]/90">Sign Up</Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section (Based on the Splash Screen) */}
      <section className="relative pt-20 md:pt-24 lg:pt-28 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="w-full max-w-xs">
                <Image src="/logorippl.svg" alt="rippl logo" width={300} height={120} className="w-full h-auto" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Where Small Connections Make Big Waves.</h2>
              <p className="text-lg text-gray-300 max-w-xl">
                Connect with friends, family, and like-minded individuals through shared experiences and meaningful
                interactions. rippl helps you create lasting connections in an increasingly disconnected world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-[#00BFA5] text-white hover:bg-[#00BFA5]/90 text-lg">
                  Sign Up
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00BFA5] text-[#00BFA5] hover:bg-[#00BFA5] hover:text-white text-lg"
                >
                  Login
                </Button>
              </div>
            </div>

            {/* Photo Grid (Simplified from the splash screen) */}
            <div className="w-full lg:w-1/2 relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none">
              {/* Photo Grid */}
              <div className="grid grid-cols-3 gap-1 h-full w-full rounded-2xl overflow-hidden border border-gray-800">
                {/* Row 1 */}
                <div className="col-span-1 row-span-1 aspect-square relative">
                  <Image
                    src="/images/skateboarding.jpg"
                    alt="People skateboarding on a rooftop"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-1 row-span-2 aspect-[1/2] relative">
                  <Image
                    src="/images/basketball.jpg"
                    alt="People playing basketball at sunset"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-1 row-span-1 aspect-square relative">
                  <Image src="/images/fashion.jpg" alt="People at a fashion workshop" fill className="object-cover" />
                </div>

                {/* Row 2 */}
                <div className="col-span-1 row-span-1 aspect-square relative">
                  <Image
                    src="/images/meditating.jpg"
                    alt="People meditating in an office"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-1 row-span-2 aspect-[1/2] relative">
                  <Image src="/images/fishing.jpg" alt="People fishing at sunset" fill className="object-cover" />
                </div>

                {/* Row 3 */}
                <div className="col-span-1 row-span-2 aspect-[1/2] relative">
                  <Image src="/images/laying.jpg" alt="Friends relaxing on a blanket" fill className="object-cover" />
                </div>
                <div className="col-span-1 row-span-2 aspect-[1/2] relative">
                  <Image
                    src="/images/hiking.jpg"
                    alt="People hiking on a mountain trail"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Row 4 */}
                <div className="col-span-1 row-span-1 aspect-square relative">
                  <Image src="/images/museum.jpg" alt="People viewing art in a museum" fill className="object-cover" />
                </div>
                <div className="col-span-1 row-span-1 aspect-square relative">
                  <Image src="/images/gaming.jpg" alt="People playing video games" fill className="object-cover" />
                </div>
                <div className="col-span-1 row-span-1 aspect-square relative">
                  <Image
                    src="/images/painting.jpg"
                    alt="People painting in an art studio"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Meaningful Connections</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              rippl helps you build and maintain relationships that matter through innovative features designed for
              authentic interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-[#00BFA5]/20 rounded-full flex items-center justify-center mb-4">
                <Users className="text-[#00BFA5]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Building</h3>
              <p className="text-gray-300">
                Find and connect with people who share your interests, passions, and goals. Build communities around
                what matters to you.
              </p>
            </div>

            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-[#00BFA5]/20 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="text-[#00BFA5]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Meaningful Conversations</h3>
              <p className="text-gray-300">
                Our platform encourages deeper, more meaningful conversations beyond surface-level interactions.
              </p>
            </div>

            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-[#00BFA5]/20 rounded-full flex items-center justify-center mb-4">
                <Share2 className="text-[#00BFA5]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Experience Sharing</h3>
              <p className="text-gray-300">
                Share life moments and experiences in a more intimate setting than traditional social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How rippl Works</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform is designed to be intuitive and focused on what matters most - your connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#00BFA5] flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
                    <p className="text-gray-300">
                      Set up your profile with your interests, passions, and what you're looking to connect about.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#00BFA5] flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Discover Connections</h3>
                    <p className="text-gray-300">
                      Our algorithm helps you find people and communities that align with your interests and values.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#00BFA5] flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Engage Meaningfully</h3>
                    <p className="text-gray-300">
                      Share experiences, have conversations, and build relationships that go beyond the surface.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#00BFA5] flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Create Ripples</h3>
                    <p className="text-gray-300">
                      Watch as your connections create ripples of positive impact throughout your network and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA5] to-blue-600 rounded-full opacity-20 blur-3xl"></div>
                <div className="relative bg-black border-2 border-gray-800 rounded-3xl overflow-hidden aspect-[9/16] max-w-[250px] mx-auto">
                  <div className="grid grid-cols-2 gap-1 p-1">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="aspect-square relative">
                        <Image
                          src={`/placeholder.svg?height=100&width=100&text=${i + 1}`}
                          alt={`Connection ${i + 1}`}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-bold text-[#00BFA5]">Discover New Connections</h4>
                    <p className="text-xs text-gray-300 mt-1">People who share your interests</p>
                    <Button className="w-full mt-3 bg-[#00BFA5] text-white text-xs py-1 h-8">
                      Connect Now <ChevronRight size={14} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA5]/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Make Waves?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of others who are creating meaningful connections and making a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#00BFA5] text-white hover:bg-[#00BFA5]/90 text-lg">
                Download for iOS
              </Button>
              <Button size="lg" className="bg-[#00BFA5] text-white hover:bg-[#00BFA5]/90 text-lg">
                Download for Android
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">Available on all major platforms. Free to download.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00BFA5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="h-10 w-auto hidden md:block">
                <Image
                  src="/rippl-logo.svg"
                  alt="rippl logo"
                  width={100}
                  height={40}
                  className="h-full w-auto brightness-0"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Start Creating Connections Today</h2>
                <p className="text-black/80">Join our community and experience the rippl effect.</p>
              </div>
            </div>
            <Button size="lg" className="bg-black text-white hover:bg-black/90 text-lg">
              Sign Up Now <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="h-10 w-auto mb-4">
                <Image src="/rippl-logo.svg" alt="rippl logo" width={100} height={40} className="h-full w-auto" />
              </div>
              <p className="text-gray-400">Where Small Connections Make Big Waves.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00BFA5]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00BFA5]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00BFA5]">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00BFA5]">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00BFA5]">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00BFA5]">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00BFA5]">
                    Safety Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00BFA5]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00BFA5]">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00BFA5]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00BFA5]">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00BFA5]">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} rippl. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
