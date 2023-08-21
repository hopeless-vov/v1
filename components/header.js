import {creatorInfo} from '@/public/helpers'

export default function Header() {
  const {name, position, currentCompany, motto} = creatorInfo
  return (
    <header className='lg:w-6/12 lg:py-24 lg:max-h-screen flex flex-col justify-between lg:sticky top-0'>
      <div>
        <h1>
          <a href="/">{name}</a>
        </h1>
        <h2 className='mt-3'>{position} at {currentCompany}</h2>
        <p className='mt-4'>{motto}</p>
        navigation
      </div>
      <div>social</div>
    </header>
  );
}
