import { Blinker } from 'next/font/google';
import { About, Experience, Projects, Footer } from '@/components';

const blinker = Blinker({
  weight: ['100', '200', '300', '400', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main
      className={`${blinker.className} py-12 lg:w-6/12 lg:py-24 md:py-20`}
      id='content'
    >
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
