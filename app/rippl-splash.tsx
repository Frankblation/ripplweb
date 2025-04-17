"use client"

import Image from "next/image"

export default function RipplSplash() {
  return (
    <div className="relative flex flex-col h-screen bg-black text-white">
      {/* Photo Grid */}
      <div className="flex-1 grid grid-cols-3 gap-1 pb-32">
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
          <Image src="/images/basketball.jpg" alt="People playing basketball at sunset" fill className="object-cover" />
        </div>
        <div className="col-span-1 row-span-1 aspect-square relative">
          <Image src="/images/fashion.jpg" alt="People at a fashion workshop" fill className="object-cover" />
        </div>

        {/* Row 2 */}
        <div className="col-span-1 row-span-1 aspect-square relative">
          <Image src="/images/meditating.jpg" alt="People meditating in an office" fill className="object-cover" />
        </div>
        <div className="col-span-1 row-span-2 aspect-[1/2] relative">
          <Image src="/images/fishing.jpg" alt="People fishing at sunset" fill className="object-cover" />
        </div>

        {/* Row 3 */}
        <div className="col-span-1 row-span-2 aspect-[1/2] relative">
          <Image src="/images/laying.jpg" alt="Friends relaxing on a blanket" fill className="object-cover" />
        </div>
        <div className="col-span-1 row-span-2 aspect-[1/2] relative">
          <Image src="/images/hiking.jpg" alt="People hiking on a mountain trail" fill className="object-cover" />
        </div>

        {/* Row 4 */}
        <div className="col-span-1 row-span-1 aspect-square relative">
          <Image src="/images/museum.jpg" alt="People viewing art in a museum" fill className="object-cover" />
        </div>
        <div className="col-span-1 row-span-1 aspect-square relative">
          <Image src="/images/gaming.jpg" alt="People playing video games" fill className="object-cover" />
        </div>
        <div className="col-span-1 row-span-1 aspect-square relative">
          <Image src="/images/painting.jpg" alt="People painting in an art studio" fill className="object-cover" />
        </div>

        {/* Row 5 */}
        <div className="col-span-1 row-span-1 aspect-square relative">
          <Image
            src="/images/skateboarding.jpg"
            alt="People skateboarding on a rooftop"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 aspect-square relative">
          <Image src="/images/meditating.jpg" alt="People meditating in an office" fill className="object-cover" />
        </div>
      </div>

      {/* Logo and Text */}
      <div className="absolute bottom-32 left-0 right-0 px-4">
        <div className="text-[#00BFA5] text-8xl font-bold mb-2">rippl.</div>
        <h2 className="text-white text-2xl font-bold mb-8">Where Small Connections Make Big Waves.</h2>

        {/* Buttons */}
        <div className="flex gap-4 mb-8">
          <button className="flex-1 bg-[#00BFA5] text-white py-3 px-6 rounded-full text-xl font-medium">Login</button>
          <button className="flex-1 bg-[#00BFA5] text-white py-3 px-6 rounded-full text-xl font-medium">Sign Up</button>
        </div>
      </div>
    </div>
  )
}
