import Image from 'next/image';
import banner from '../../../../public/images/registration-banner.png';
import logo from '../../../../public/images/logo.svg';
import Link from 'next/link';
import Button from '@/components/Button';
export default function Register() {
  return (
    <>
      <div className="w-[1305px] mx-auto">
        <div className="flex items-center h-screen">
          <div className="h-full flex items-center justify-center">
            <Image
              src={banner}
              className="rounded-xl h-[90%] object-cover relative"
            />
            <div className="bg-[rgba(72,139,215,0.5)]    py-5 rounded-xl absolute bottom-20 flex items-center justify-center border border-[#ccc] w-96">
              <h1 className="text-left w-64 text-3xl text-white font-bold opacity-100">
                SecureCL: Ultimate Data Security, Uncompromising Reliability.
              </h1>
            </div>
          </div>

          <div className="flex flex-col ml-28">
            <Link href="/">
              <Image src={logo} />
            </Link>
            <h1 className="mt-20 text-[#180D5B] text-2xl font-bold">
              Log in to your account
            </h1>

            <div className="mt-20 flex flex-col w-96">
              <div className="flex">
                <input
                  className="w-44 border border-[#C8C8C8] bg-white py-1.5 px-2.5 rounded-lg"
                  placeholder="Name"
                />

                <input
                  className="w-44 ml-8 border border-[#C8C8C8] bg-white py-1.5 px-2.5 rounded-lg"
                  placeholder="Last Name"
                />
              </div>
              <input
                placeholder="Email address"
                type="email"
                className="w-full mt-3 border border-[#C8C8C8] bg-white py-1.5 px-2.5 rounded-lg"
                required
              />

              <input
                placeholder="Password"
                type="password"
                className="w-full mt-3 border border-[#C8C8C8] bg-white py-1.5 px-2.5 rounded-lg"
              />

              <input
                placeholder="Confirm password"
                type="password"
                className="w-full mt-3 border border-[#C8C8C8] bg-white py-1.5 px-2.5 rounded-lg"
              />

              <Link
                href="/registration/register"
                className="bg-[#488BD7] text-center rounded text-white py-2 mt-5 uppercase font-bold">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
