import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="footer" className=" dark:bg-gray-900 w-full absolute bottom-0 ">
      <div className="py-16 flex flex-col justify-center items-center ">
        <Link href="javascript:void(0)">
          <Image src="/logo/fintLogo.svg" alt="" width={80} height={80} />
        </Link>
        <p className="mt-3 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
          ⓒ December and Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;
