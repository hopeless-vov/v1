import Image from 'next/image';
import { Blinker } from 'next/font/google';

const blinker = Blinker({
  weight: '300',
  subsets: ['latin']
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${blinker.className}`}
    >
      home
    </main>
  );
}
