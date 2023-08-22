import React from 'react';
import { navigation, getElementBounding } from '@/public/helpers';

const useNavigation = () => {
  const [navigationList, setNavigationList] = React.useState(null);
  const { navItems } = navigation;

  React.useEffect(() => {
    const newNavList = navItems.map((item, index) => {
      const { bottom } = getElementBounding(item);
      const prevElPos = getElementBounding(navItems[index - 1]) || null;
      return {
        name: item,
        url: '/#' + item,
        top: index ? prevElPos?.bottom : 0,
        bottom,
      };
    });
    setNavigationList(newNavList);
  }, []);
  return navigationList;
};
export default useNavigation;
