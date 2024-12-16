import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | NextShōnen",
  description:
    "Discover and track your favorite anime effortlessly with our sleek and modern platform. ",
};

export default function Home() {
  return (
    <div className="text-primary-700 dark:text-white">
      <h2 className="mb-2 text-lg font-semibold">Main page</h2>
      <div className="flex flex-wrap justify-between gap-8">
        <section className="mb-8 w-1/2 rounded-lg bg-white p-8 pt-5 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
          <h3>Activity</h3>
        </section>
        <div className="flex flex-col gap-4">
          <section className="mb-8 rounded-lg bg-white p-8 pt-5 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
            Anime in progress
          </section>
          <section className="mb-8 rounded-lg bg-white p-8 pt-5 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
            Manga in progress
          </section>
          <section className="mb-8 rounded-lg bg-white p-8 pt-5 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
            Forum activity
          </section>
          <section className="mb-8 rounded-lg bg-white p-8 pt-5 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
            Recent reviews
          </section>
          <section className="mb-8 rounded-lg bg-white p-8 pt-5 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
            Trending anime and manga
          </section>
          <section className="mb-8 rounded-lg bg-white p-8 pt-5 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
            Newly added Anime
          </section>
          <section className="mb-8 rounded-lg bg-white p-8 pt-5 text-primary-700 shadow-md dark:bg-primary-900 dark:text-primary-50">
            Newly added Manga
          </section>
        </div>
      </div>
    </div>
  );
}
