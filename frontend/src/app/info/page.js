import Image from 'next/image';
import infoBanner from '../../../public/images/info-banner.png';
import laptop from '../../../public/images/laptop.png';
import Title from '@/components/Title';
export default function Info() {
  return (
    <>
      <div className="w-[1305px] mx-auto mt-3" id="info">
        <Title title="Get started" />
      </div>

      <div className="relative h-auto">
        <Image src={infoBanner} className="mt-10 relative" />
        <div className="w-[1305px] mx-auto">
          <div className="absolute top-0 ">
            <div className="flex items-center">
              <div className="flex flex-col w-1/2">
                <h1 className="text-3xl text-[#180D5B] font-bold mt-5">
                  Get Started with SecureCL
                </h1>
                <p className="text-base font-normal mt-2">
                  Welcome to SecureCL, your trusted platform for secure data
                  storage and protection. Follow these simple steps to get
                  started: <br />
                  Sign Up: Create your SecureCL account by providing your basic
                  information. <br />
                  Set Up Your Profile: Complete your profile setup to customize
                  your security settings. <br />
                  Upload Your Data: Easily upload your personal or business data
                  to our secure servers. <br />
                  Configure Security Options: Use our multi-layered security
                  features and encryption to protect your data. <br />
                  Monitor Your Data: Keep an eye on your data with our real-time
                  monitoring and detailed reporting tools. Stay Informed:
                  Receive alerts and reports on any unauthorized access
                  attempts, and see how Snort is working to keep your data safe.
                </p>
              </div>

              <div className="w-[55%] absolute -top-5 right-0">
                <Image src={laptop} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
