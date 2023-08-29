import Link from 'next/link';
import { Icon } from '@/components/icons';

export default function Archive() {
  return (
    <div className={'py-12 lg:py-24 md:py-20'} id='archive'>
      <Link
        href='/'
        className='group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300'
      >
        <span className='mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2 flex items-center'>
          <Icon name='Link' />
        </span>
        Volodymyr Bondarenko
      </Link>
      <h1>All Projects</h1>
    </div>
  );
}
