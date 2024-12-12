import DarkThemeHandler from "../ui/DarkThemeHandler";

export default function MainFooter() {
  return (
    <footer className="bg-primary-500 p-4 text-slate-100 dark:bg-primary-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <DarkThemeHandler type="buttons" />

          <p>More links</p>
        </div>
        <p className="mt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} NextShonen by Yelyzaveta Vlasenko.
          All rights reserved.
        </p>
        <p className="text-center text-sm text-primary-200">
          This website is built for educational purposes using data from the{" "}
          <a
            href="https://docs.anilist.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-200 hover:text-accent-300"
          >
            AniList API
          </a>
          . All images and media belong to their respective copyright owners.
        </p>
      </div>
    </footer>
  );
}
