import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-blue-600 sticky top-0 z-10">
      <nav className="container mx-auto py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/aboutus" className="text-white hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="text-white hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
