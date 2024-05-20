import Link from 'next/link';

export default function UserHeader() {
  return (
    <>
      <div className="bg-white w-full py-3 relative h-20">
        <input
          placeholder="Search"
          className="bg-[rgba(234,234,234,0.5)] border border-[#ccc] outline-none  ml-5 p-3 rounded"
        />
        <div className="flex items-center absolute top-0 right-5 mt-3">
          <Link href="/messages">
            <svg
              className="relative"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22C13.1 22 14 21.1 14 20H10C10 20.5304 10.2107 21.0391 10.5858 21.4142C10.9609 21.7893 11.4696 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
                fill="black"
              />
            </svg>
            <div className="bg-red-700 rounded-full w-5 h-5 absolute top-0 left-3 flex items-center justify-center">
              <p className="text-white text-[12px]">12</p>
            </div>
          </Link>

          <div className="flex items-center ml-3">
            <div className="rounded-full h-14 w-14 bg-blue-700"></div>
            <div className="flex flex-col ml-3">
              <p className="uppercase text-lg font-bold">John Doe</p>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
