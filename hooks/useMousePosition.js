import React from 'react';
const useMousePosition = () => {
  const breakpoint = 1024
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  React.useEffect(() => {
    const updateMousePosition = ({clientX, clientY}) => {
      const {innerWidth} = window
      const lessThanBrealpoint = innerWidth < breakpoint
      setMousePosition({ x: lessThanBrealpoint ? 0 : clientX, y: lessThanBrealpoint ? 0 : clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;
