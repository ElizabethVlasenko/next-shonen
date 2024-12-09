import { type NextRequest, NextResponse } from "next/server";
import { fetchAnimeById } from "./app/_lib/graphql/fetchers/animeFetcherById";
import { generateSlug } from "./app/_lib/helpers/slugGenerator";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Check if the URL matches the anime page pattern
  const animeRegex = /^\/anime\/\d+\/.+$/;
  if (!animeRegex.test(pathname)) {
    return NextResponse.next(); // Allow other routes to pass through
  }

  // Simulate fetching user's language preference (e.g., from cookies)
  const userLanguage = request.cookies.get("user-language")?.value || "english"; // Default to English

  console.log("user language", userLanguage);

  // Parse the ID and slug from the URL
  const segments = pathname.split("/");
  const id = segments[2];
  const slug = segments[3];

  console.log("current title slug", slug);

  // Generate the appropriate slug for the language

  const titles = await fetchAnimeById({ mediaId: +id });

  let preferredTitle: string | undefined;

  switch (userLanguage) {
    case "english":
      preferredTitle = titles?.english;
      break;
    case "native":
    case "romaji":
      preferredTitle = titles?.romaji;
      break;

    case "userPreferred":
      preferredTitle = titles?.userPreferred;
      break;
    default: // Handle unsupported languages or fallback
      preferredTitle = titles?.english; // Or another default
      break;
  }

  const redirectSlug = generateSlug(preferredTitle || ""); // Handle potential undefined

  console.log("desired title slug", redirectSlug);

  // Redirect to the language-specific page if necessary
  if (slug !== redirectSlug) {
    url.pathname = `/anime/${id}/${redirectSlug}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Continue if no redirection is needed
}
