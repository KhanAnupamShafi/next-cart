import Image from 'next/image';
import Logo from '../../assets/logo.webp';
const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <div className="loader animate-bounce ease-linear rounded-full h-16 mb-4">
        <Image
          src={Logo}
          alt="Ghorer Bazar Logo"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'fit' }}
        />
      </div>

      <p className="w-1/3 text-center text-white">
        This may take a few seconds, please dont close this page.
      </p>
    </div>
  );
};

export default Loader;
