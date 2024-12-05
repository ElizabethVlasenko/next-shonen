import Image from "next/image";
import logo from "../../../public/icon.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <Image
          src={logo}
          width={60}
          height={60}
          priority
          alt="NextShōnen logo"
        />
        <span className="ml-2 text-lg font-bold">NextShōnen</span>
      </div>
    </Link>
  );
}
