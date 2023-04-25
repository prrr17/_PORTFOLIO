import Link from 'next/link';
import IgOn from '../public/IgOn.svg';
import IgOff from '../public/IgOff.svg';
import BeOn from '../public/BeOn.svg';
import BeOff from '../public/BeOff.svg';
import InOn from '../public/InOn.svg';
import InOff from '../public/InOff.svg';
import GhOn from '../public/GhOn.svg';
import GhOff from '../public/GhOff.svg';

const IgLogo = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div
      className='flex items-center flex-shrink-0 mr-6 cursor-pointer'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href='https://www.instagram.com/inpaulasmind/'>
        {isHovering ? (
          <IgOn width='10rem' height='inherit'></IgOn>
        ) : (
          <IgOff width='10rem' height='inherit'></IgOff>
        )}
      </Link>
      <IgLogo></IgLogo>
    </div>
  );
};

export default function Icons() {
  return (
    <div className='flex items-center justify-between flex-wrap bg-raisin-black p-6'>
      <IgLogo />
    </div>
  );
}
