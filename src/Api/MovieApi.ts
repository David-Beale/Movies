import { Movie } from "../redux/movies";

interface MovieResult {
  error?: boolean;
  movies?: Movie[];
}
export class MovieApi {
  static fetchMovies = async (page: number): Promise<MovieResult> => {
    const base = "https://api.themoviedb.org/3/movie/popular?";
    const parameters = {
      api_key: "36834fcb2d57a8929754cdf5e16e62b5",
      page,
    };
    const url =
      base +
      Object.entries(parameters)
        .map((entries) => entries.join("="))
        .join("&");
    try {
      const res = await fetch(url);
      if (res.status >= 400) return { error: true };
      const body = await res.json();
      return { movies: body.results };
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  };
}
