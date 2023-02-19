import Link from 'next/link';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`h-[10vh] bg-white fixed z-50 top-0 flex w-screen mx-auto flex-row items-center ${className}`}
    >
      <div className="w-4/5 flex mx-auto justify-between">
        <div className="space-x-5 m-5">
          <Link href="/">
            <a className="hover:underline text-3xl">Home</a>
          </Link>
        </div>

        <div className="space-x-5 m-5">
          <Link href="/">
            <a className="hover:underline hidden sm:inline text-3xl">Images</a>
          </Link>
          <button className="border-1 p-2 px-4 sm:px-6 text-3xl bg-blue-500 hover:bg-blue-700 transition-all duration-300 rounded text-white">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
