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

export type SearchAnimeByIdVariables = {
  mediaId: number;
};

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

export type Title = {
  english: string;
  romaji: string;
  native: string;
  userPreferred: string;
};

export type SearchAnimeTopChart = {
  trending: SearchResultAnime;
  popularSeason: SearchResultAnime;
  popularNextSeason: SearchResultAnime;
  allTimePopular: SearchResultAnime;
};

export type coverImage = {
  extraLarge: string;
  large: string;
  color: string;
};

export type SearchResultAnimeMedia = {
  id: number;
  title: Title;
  coverImage: coverImage;
  startDate: DateYMD;
  endDate: DateYMD;
  bannerImage: string;
  season: MediaSeason;
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
  studios: Studios;
};

export type Studios = {
  edges: {
    isMain: boolean;
    node: {
      id: number;
      name: string;
    };
  }[];
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

export type Character = {
  image: {
    medium: string;
  };
  name: {
    full: string;
  };
};

export type voiceActor = {
  image: {
    medium: string;
  };
  name: {
    full: string;
  };
  languageV2: string;
};

// export type AnimeInfo = {
//   id: string;
//   title: Title;
//   coverImage: coverImage;
//   bannerImage: string;
//   description: string;
//   genres: string[];
//   episodes: number;
//   status: MediaStatus;
//   averageScore: number;
//   studios: Studios;
//   characters: {
//     edges: {
//       voiceActors: voiceActor[];
//       role: string;
//       node: Character;
//     }[];
//   };
// };

export type AnimeInfo = {
  id: number;
  title: Title;
  coverImage: coverImage;
  bannerImage: string;
  startDate: DateYMD;
  endDate: DateYMD;
  description: string;
  season: MediaSeason;
  seasonYear: number;
  type: MediaType;
  format: MediaFormat;
  status: MediaStatus;
  episodes: number;
  duration: number;
  chapters: number;
  volumes: number;
  genres: string[];
  synonyms: string[];
  source: MediaSource;
  isAdult: boolean;
  isLocked: boolean;
  meanScore: number;
  averageScore: number;
  popularity: number;
  favourites: number;
  isFavouriteBlocked: boolean;
  hashtag: string;
  countryOfOrigin: string;
  isLicensed: boolean;
  isFavourite: boolean;
  isRecommendationBlocked: boolean;
  isReviewBlocked: boolean;
  nextAiringEpisode: NextAiringEpisode;
  relations: {
    edges: {
      id: number;
      relationType: string;
      node: {
        id: number;
        title: Title;
        format: MediaFormat;
        type: MediaType;
        status: MediaStatus;
        bannerImage: string;
        coverImage: coverImage;
      };
    }[];
  };
  characterPreview: {
    edges: {
      id: number;
      role: string;
      name: string;
      voiceActors: voiceActor[];
      node: Character;
    }[];
  };
  staffPreview: {
    edges: {
      id: number;
      role: string;
      node: {
        id: number;
        name: {
          full: string;
        };
        languageV2: string;
        image: {
          large: string;
        };
      };
    };
  };
  studios: Studios;
  reviewPreview: {
    pageInfo: {
      total: number;
    };
    nodes: {
      id: number;
      summary: string;
      rating: number;
      ratingAmount: number;
      user: User;
    };
  };
  recommendations: {
    pageInfo: {
      total: number;
    };
    nodes: {
      id: number;
      rating: number;
      userRating: number;
      mediaRecommendation: {
        id: number;
        title: Title;
        format: MediaFormat;
        type: MediaType;
        status: MediaStatus;
        bannerImage: string;
        coverImage: {
          medium: string;
        };
      };
      user: User;
    };
  };

  externalLinks: ExternalLink[];
  streamingEpisodes: {
    site: string;
    title: string;
    thumbnail: string;
    url: string;
  };
  trailer: {
    id: string;
    site: string;
  };
  rankings: Ranking[];
  tags: Tag[];
  mediaListEntry: {
    id: number;
    status: MediaStatus;
    score: number;
  };
  stats: {
    statusDistribution: {
      status: MediaStatus;
      amount: number;
    }[];
    scoreDistribution: {
      score: number;
      amount: number;
    }[];
  };
};

export type Tag = {
  id: number;
  name: string;
  description: string;
  rank: number;
  isMediaSpoiler: boolean;
  isGeneralSpoiler: boolean;
  userId: number;
};

export type Ranking = {
  id: number;
  rank: number;
  type: string;
  format: string;
  year: number;
  season: string;
  allTime: boolean;
  context: string;
};

export type ExternalLink = {
  id: number;
  site: string;
  url: string;
  type: string;
  language: string;
  color: string;
  icon: string;
  notes: string;
  isDisabled: boolean;
};

export type User = {
  id: number;
  name: string;
  avatar: {
    large: string;
  };
};
