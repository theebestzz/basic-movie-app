const MovieCard = (movie) => {
  const TMDB_API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <>
      <div>
        <div className="m-10 cursor-pointer hover:scale-105 transition-all duration-500">
          <img
            src={TMDB_API_IMG + movie.poster_path}
            alt={movie.title}
            className="rounded-xl"
            title={movie.title}
          />
        </div>

        <div className="text-center">
          <h1
            className="text-white cursor-pointer font-semibold text-xl hover:text-gray-400 duration-500"
            title={movie.title}
          >
            {movie.title}
          </h1>
          <span className="text-yellow-500 font-extralight">
            {movie.vote_average}
          </span>
          {/* <div>
            <h1 className="text-white text-">
              {movie.overview}
            </h1>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default MovieCard;
