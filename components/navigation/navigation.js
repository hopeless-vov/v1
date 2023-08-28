import NavigationItem from './navigationItem';
import { useNavigation } from '@/hooks';

export default function Navigation() {
  const navigation = useNavigation();
  return (
    <nav className='hidden lg:block'>
      <ul className='mt-16 text-blueGray-500 font-medium text-xs'>
        {navigation &&
          navigation.map((nav, index) => (
            <li key={index} className='flex'>
              <NavigationItem
                nav={nav}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
}
