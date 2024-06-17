import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function UserHeader() {
  const [loggedInUsername, setLoggedInUsername] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const { username } = JSON.parse(atob(token.split('.')[1]));
      setLoggedInUsername(username);
    }
  }, []);
  return (
    <>
      <div className="bg-white w-full py-3 relative h-20">
        <input
          placeholder="Search"
          className="bg-[rgba(234,234,234,0.5)] border border-[#ccc] outline-none  ml-5 p-3 rounded"
        />
        <div className="flex items-center absolute top-0 right-5 mt-3">
          <div className="flex items-center ml-3">
            <div className="rounded-full h-14 w-14 bg-blue-700"></div>
            <div className="flex flex-col ml-3">
              <p className="uppercase text-lg font-bold">{loggedInUsername}</p>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
