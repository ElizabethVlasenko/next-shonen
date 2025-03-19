import Image from "next/image";

export default function SearchNoResultPreview() {
  return (
    <div className="flex items-center gap-8 rounded-lg bg-white p-8 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
      <p className="flex-1 text-center text-xl font-semibold">
        No results? Looks like even infinity can’t find what you’re looking for!
        <br />
        Try again, or maybe you just have bad taste. 😎
      </p>
      <Image
        src="/search-no-results.png"
        alt="404"
        width={200}
        height={300}
        className="object-cover"
      />
    </div>
  );
}
