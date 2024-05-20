import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/images/logo-white.svg';

export default function Footer() {
  return (
    <>
      <div className="bg-[#180D5B] mt-14 scroll-smooth" id="contacts">
        <div className="w-[1305px] mx-auto mt-3 py-8">
          <div className="flex items-start justify-between">
            <Image src={logo} />
            <nav>
              <p className="text-xl font-bold text-white">Menu</p>
              <ul className="flex flex-col mt-3">
                <li className="font-normal text-base text-white">
                  <Link href="#about">About us</Link>
                </li>
                <li className="font-normal text-base text-white">
                  <Link href="#info">Get started</Link>
                </li>
                <li className="font-normal text-base text-white">
                  <Link href="#whychoose">Why SecureCL</Link>
                </li>
                <li className="font-normal text-base text-white">
                  <Link href="#contacts">Contacts</Link>
                </li>
              </ul>
            </nav>

            <div className="flex flex-col">
              <p className="text-xl font-bold text-white">Contacts</p>
              <div className="flex items-center mt-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_73_152)">
                    <path
                      d="M17.5101 13.2102L14.9981 10.6982C14.101 9.80111 12.5759 10.16 12.217 11.3262C11.9479 12.1337 11.0508 12.5822 10.2434 12.4028C8.44911 11.9542 6.02687 9.62168 5.57831 7.73772C5.30917 6.93027 5.84744 6.03314 6.65486 5.76404C7.82112 5.40519 8.17997 3.88007 7.28285 2.98295L4.77089 0.470991C4.05319 -0.156997 2.97664 -0.156997 2.34865 0.470991L0.644112 2.17553C-1.06043 3.96978 0.823537 8.72455 5.04003 12.941C9.25653 17.1575 14.0113 19.1313 15.8055 17.337L17.5101 15.6324C18.1381 14.9147 18.1381 13.8382 17.5101 13.2102Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_73_152">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Link href="tel:7777777777" className="text-white ml-3">
                  + 7 777 777 7777
                </Link>
              </div>

              <div className="flex items-center mt-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.4857 1.6543C17.7686 1.6543 18 1.8857 18 2.16856V2.23364C18 2.51649 17.8087 2.87806 17.5748 3.03716L9.42072 9.09763C9.18683 9.25672 8.80408 9.25672 8.57019 9.09773L0.425312 3.04625C0.191427 2.88716 0 2.52569 0 2.24283V2.16866C0 1.88581 0.231406 1.6544 0.514259 1.6544H17.4857V1.6543Z"
                    fill="white"
                  />
                  <path
                    d="M8.58052 10.8016C8.80873 10.9687 9.18218 10.9688 9.41049 10.8018L17.585 4.81982C17.8133 4.65277 18 4.74751 18 5.03036V15.8318C18 16.1146 17.7686 16.346 17.4857 16.346H0.514259C0.231406 16.346 0 16.1146 0 15.8318V5.03036C0 4.74751 0.186675 4.65288 0.414878 4.82003L8.58052 10.8016Z"
                    fill="white"
                  />
                </svg>

                <Link
                  href="mailto:securecl@gmail.com"
                  className="text-white ml-3">
                  securecl@gmail.com
                </Link>
              </div>

              <div className="flex items-center mt-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_73_179)">
                    <path
                      d="M9 0C5.29879 0 2.2877 3.0123 2.2877 6.71497C2.2877 12.2317 8.33188 17.6183 8.58927 17.845C8.70661 17.9483 8.85327 18.0001 9 18.0001C9.14673 18.0001 9.29339 17.9484 9.41079 17.845C9.66806 17.6184 15.7123 12.2318 15.7123 6.71497C15.7123 3.0123 12.7012 0 9 0ZM9 4.82988C10.0281 4.82988 10.8645 5.67552 10.8645 6.71497C10.8645 7.75442 10.0281 8.60006 9 8.60006C7.97188 8.60006 7.13545 7.75442 7.13545 6.71497C7.13545 5.67552 7.97188 4.82988 9 4.82988Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_73_179">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <Link
                  href="https://go.2gis.com/9d4ho9"
                  className="text-white ml-3">
                  Astana, Mangilik El, 65 C1
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <input
                placeholder="Subscribe to our updates"
                className="p-3 rounded-xl w-80"
              />
              <button className="bg-[#79A0FF] p-3 text-white rounded-xl mt-3">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
