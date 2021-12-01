interface Result {
  error?: boolean;
  body?: any;
}

export class MovieApi {
  static get = async (path: string, parameters: {} = {}): Promise<Result> => {
    const url = this.buildUrl(path, parameters);

    try {
      const res = await fetch(url);
      if (res.status >= 400) return { error: true };
      const body = await res.json();
      return { body };
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  };
  static buildUrl(path: string, additionalParameters: {}) {
    const base = "https://api.themoviedb.org/3/";
    const parameters = {
      api_key: "36834fcb2d57a8929754cdf5e16e62b5",
      ...additionalParameters,
    };
    return (
      base +
      path +
      Object.entries(parameters)
        .map((entries) => entries.join("="))
        .join("&")
    );
  }
  static fetchMovies = (page: number) => {
    const path = "movie/popular?";
    const parameters = { page };
    return this.get(path, parameters);
  };

  static fetchGenreList = () => {
    const path = "genre/movie/list?";
    return this.get(path);
  };
}