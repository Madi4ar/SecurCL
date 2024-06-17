'use client';
import Image from 'next/image';
import banner from '../../../../public/images/registration-banner.png';
import logo from '../../../../public/images/logo.svg';
import Link from 'next/link';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting:', { username, email, password });
    try {
      const response = await fetch(
        'http://localhost:3000/api/user/registration',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }
      router.push('/registration');
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message);
    }
  };
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

            <div className="mt-20 ">
              <form className="flex flex-col w-96" onSubmit={handleSubmit}>
                <input
                  className="w-full border border-[#C8C8C8] bg-white py-1.5 px-2.5 rounded-lg"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <input
                  placeholder="Email address"
                  type="email"
                  className="w-full mt-3 border border-[#C8C8C8] bg-white py-1.5 px-2.5 rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  placeholder="Password"
                  type="password"
                  className="w-full mt-3 border border-[#C8C8C8] bg-white py-1.5 px-2.5 rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p>{error}</p>}
                <Button title="create account" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
