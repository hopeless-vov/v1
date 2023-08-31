import React from 'react';
import { navigation, getElementBounding } from '@/public/helpers';

const useNavigation = () => {
  const [navigationList, setNavigationList] = React.useState(null);
  const { navItems } = navigation;

  React.useEffect(() => {
    const handleScroll = () => {
      const newNavList = navItems.map((item, index) => {
        const currentElement = getElementBounding(item);
        const prevElPos = getElementBounding(navItems[index - 1])?.bottom || 0;
        return {
          name: item,
          url: '/#' + item,
          isActive: currentElement?.bottom > 0 && prevElPos <= 0,
        };
      });
      setNavigationList(newNavList);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return navigationList;
};
export default useNavigation;
