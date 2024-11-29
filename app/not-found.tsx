import Link from "next/link";
import notFoundImage from "../public/404-page.jpg";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-full items-center justify-center text-primary-700 dark:text-white">
      <div className="overflow-hidden rounded-lg bg-white text-center shadow-sm dark:bg-primary-900">
        <Image
          src={notFoundImage}
          width={500}
          height={320}
          alt="404 image of Gojo Satoru"
          className="h-auto w-full object-cover"
        />
        <h1 className="my-4 animate-pulse bg-gradient-to-r from-accent-500 via-primary-400 to-accent-700 bg-clip-text font-sans text-7xl font-bold leading-none text-transparent md:text-9xl dark:from-accent-400 dark:via-primary-300 dark:to-accent-600">
          404
        </h1>
        <p className="text-xl font-medium md:text-2xl">
          You&apos;re trapped in the{" "}
          <span className="text-accent-600">Prison Realm</span>.
        </p>
        <p className="mb-6 text-sm text-primary-600 md:text-base dark:text-primary-400">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mb-8">
          <Link
            href="/"
            className="mx-auto block w-fit rounded-md bg-accent-500 px-4 py-2 text-white transition hover:bg-accent-400 dark:bg-accent-700 dark:hover:bg-accent-600"
          >
            Return to Safety
          </Link>
        </div>
      </div>
    </div>
  );
}
