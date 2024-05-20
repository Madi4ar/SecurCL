'use client';

import Header from '@/components/Header';
import About from './about/page';
import Info from './info/page';
import WhyChoose from './whysecure/page';
import Footer from '@/components/Footer';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const buttonHandler = (ref) => {
    ref.current.scrollIntoView();
  };
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <About />
        <Info />
        <WhyChoose />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
