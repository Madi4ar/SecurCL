import Image from "next/image";
import logo from "../../public/images/logo.svg";
import Link from "next/link";
function Header() {
  return (
    <>
      <div className="w-[1305px] mx-auto">
        <div className="mt-3 flex items-center justify-between">
          <Link href="/">
            <Image src={logo} />
          </Link>

          <nav>
            <ul className="flex items-center justify-between w-96 ">
              <li className="font-semibold text-base">
                <Link href="#about">About us</Link>
              </li>
              <li className="font-semibold text-base">
                <Link href="/getstarted">Get started</Link>
              </li>
              <li className="font-semibold text-base">
                <Link href="/whysecurecl">Why SecureCL</Link>
              </li>
              <li className="font-semibold text-base">
                <Link href="/contacts">Contacts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
