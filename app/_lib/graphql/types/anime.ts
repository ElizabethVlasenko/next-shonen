export type MediaFormat =
  | "TV"
  | "TV_SHORT"
  | "MOVIE"
  | "SPECIAL"
  | "OVA"
  | "ONA"
  | "MUSIC"
  | "MANGA"
  | "NOVEL"
  | "ONE_SHOT";

export type MediaStatus =
  | "FINISHED"
  | "RELEASING"
  | "NOT_YET_RELEASED"
  | "CANCELLED"
  | "HIATUS";

export type MediaSource =
  | "ORIGINAL"
  | "MANGA"
  | "LIGHT_NOVEL"
  | "VISUAL_NOVEL"
  | "VIDEO_GAME"
  | "OTHER"
  | "NOVEL"
  | "DOUJINSHI"
  | "ANIME"
  | "WEB_NOVEL"
  | "LIVE_ACTION"
  | "GAME"
  | "COMIC"
  | "MULTIMEDIA_PROJECT"
  | "PICTURE_BOOK";

export type MediaSeason = "WINTER" | "SPRING" | "SUMMER" | "FALL";

export type MediaType = "ANIME" | "MANGA";

export type SearchAnimeVariables = {
  page?: number;
  perPage?: number;
  id?: number;
  type?: MediaType;
  isAdult: boolean;
  search?: string;
  format?: MediaFormat;
  status?: MediaStatus;
  countryOfOrigin?: string;
  source?: string;
  season?: string;
  seasonYear?: number;
  year?: string;
  yearLesser?: number;
  yearGreater?: number;
  episodeLesser?: number;
  episodeGreater?: number;
  durationLesser?: number;
  durationGreater?: number;
  chapterLesser?: number;
  chapterGreater?: number;
  volumeLesser?: number;
  volumeGreater?: number;
  licensedBy?: number[];
  isLicensed?: boolean;
  genres?: string[];
  excludedGenres?: string[];
  tags?: string[];
  excludedTags?: string[];
  minimumTagRank?: number;
  sort?: string[];
};

export type NextAiringEpisode = {
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
};

export type DateYMD = {
  year: number;
  month: number;
  day: number;
};

export type SearchResultAnimeMedia = {
  id: number;
  title: {
    userPreferred: string;
  };
  coverImage: {
    extraLarge: string;
    large: string;
    color: string;
  };
  startDate: DateYMD;
  endDate: DateYMD;
  bannerImage: string;
  season: string;
  seasonYear: number;
  description: string;
  type: MediaType;
  format: MediaFormat;
  status: MediaStatus;
  episodes: number;
  duration: number;
  chapters: number;
  volumes: number;
  genres: string[];
  isAdult: boolean;
  averageScore: number;
  popularity: number;
  nextAiringEpisode: NextAiringEpisode;
  mediaListEntry: {
    id: number;
    status: MediaStatus;
  };
  studios: {
    edges: {
      isMain: boolean;
      node: {
        id: number;
        name: string;
      };
    }[];
  };
};

export type SearchResultAnime = {
  pageInfo: {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
  };
  media: SearchResultAnimeMedia[];
};
