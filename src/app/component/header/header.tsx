import Image from "next/image";
import logo1 from "../../../../public/logo/logo1.png";
import Link from "next/link";



export default function Header() {
  return (
   
     <>
     <div className="bg-slate-100 text-white py-2 px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-sm mb-2 md:mb-0">
        <Image src={logo1} alt="logo1" className="w-auto h-8 md:h-10" />
      </div>
      <nav className="text-sm flex flex-wrap justify-center md:justify-end gap-2 md:gap-4 text-black">
        <Link href="#" className="hover:underline">
          Find a Store |
        </Link>
        <Link href="#" className="hover:underline">
          Help |
        </Link>
        <Link href="#" className="hover:underline">
          Join Us |
        </Link>
        <Link href="#" className="hover:underline">
          Sign In
        </Link>
      </nav>
    </div>
      
     </>
  );
}
