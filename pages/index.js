import { Blinker } from 'next/font/google';
import { About, Experience, Projects } from '@/components';

const blinker = Blinker({
  weight: '300',
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
    </main>
  );
}
