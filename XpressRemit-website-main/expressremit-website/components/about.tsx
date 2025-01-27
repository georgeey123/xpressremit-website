import Image from "next/image"

export default function About() {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About XpressRemit</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="prose lg:prose-lg">
            <p className="text-gray-600 mb-6">
            Xpress Remit is a trusted and innovative remittance platform designed to connect Africans living abroad with their loved ones back home. 
            Our mission is to make cross-border payments seamless, affordable, and secure while ensuring every transaction creates real impact.
            </p>
            <p className="text-gray-600 mb-6">
            With Xpress Remit, you can transfer money directly to bank accounts, mobile wallets, or pay for critical services such as utility bills, school fees, and more. 
            We pride ourselves on offering competitive exchange rates, low fees, and a user-friendly experience that saves time and money. 
            </p>
            <p className="text-gray-600">
            Whether you’re sending money to support family, fund projects, or handle obligations back home, Xpress Remit is your reliable partner for every transaction. 
            Join our growing community today and experience the future of remittances—tailored for Africans by Africans
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/assets/about_us.svg"
              alt="About us logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-black">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and preferred platform for international money transfers, connecting people and
              enabling financial freedom across borders.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-black">Our Values</h3>
            <p className="text-gray-600">
              Trust, transparency, and customer satisfaction are at the heart of everything we do. We believe in making
              financial services accessible to all.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-black">Our Promise</h3>
            <p className="text-gray-600">
              We promise to provide secure, fast, and reliable money transfer services with competitive rates and
              exceptional customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

