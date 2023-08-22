import { useMousePosition } from '@/hooks';

export default function Shining() {
  const { x, y } = useMousePosition();

  return (
    <div
      className='pointer-events-none fixed hidden lg:block inset-0 z-30 transition duration-300'
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
