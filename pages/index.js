import { Blinker } from 'next/font/google';

const blinker = Blinker({
  weight: '300',
  subsets: ['latin'],
});

export default function Home() {
  return <main className={`${blinker.className}`}>home</main>;
}
