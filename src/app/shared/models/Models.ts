export class TvShow {
    id: number;
    original_name: string;
    genre_ids: number[];
    name: string;
    popularity: number;
    origin_country: string[];
    vote_count: number;
    first_air_date: string;
    backdrop_path: string;
    original_language: string;
    vote_average: number;
    overview: string;
    poster_path: string;
}

export class TvShowDetails {
    id: number;
    created_by: [];
    episode_run_time: number[];
    original_name: string;
    genre_ids: number[];
    name: string;
    popularity: number;
    origin_country: string[];
    vote_count: number;
    first_air_date: string;
    genres: Genres[];
    homepage: string;
    backdrop_path: string;
    original_language: string;
    vote_average: number;
    overview: string;
    poster_path: string;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: lastEpisodeToAir;
    next_episode_to_air: string;
    networks: Networks;
    number_of_episodes: number;
    number_of_seasons: number;
    production_companies: ProductionCompanies[];
    seasons: Seasons[];
    status: string;
    type: string;
}

export class Seasons {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

export class Genres {
    id: number;
    name: string;
}

export class lastEpisodeToAir {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

export class Networks {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}

export class ProductionCompanies {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}