import { creatorInfo, social } from '@/public/helpers';
import { Navigation, Social } from '@/components';

export default function Header() {
  const { firstName, secondName, position, currentCompany, motto } = creatorInfo;
  const { socialMedia } = social;
  return (
    <header className='lg:w-6/12 lg:py-24 lg:max-h-screen flex flex-col justify-between lg:sticky top-0'>
      <div>
        <h1>
          <a href='/'>
            {firstName} {' '}
            <span className='gradient-text'>
              {secondName}
            </span>
          </a>
        </h1>
        <h2 className='mt-3'>
          {position} at {currentCompany}
        </h2>
        <p className='mt-4 max-w-sm'>{motto}</p>
        <Navigation />
      </div>
      <Social socialList={socialMedia} />
    </header>
  );
}
