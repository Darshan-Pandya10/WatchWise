import React, { useCallback, useContext } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { WatchListContext } from "../App";
import { useToast } from "@chakra-ui/react";

function MovieCard({ movie }) {
  const { watchList, setWatchList } = useContext(WatchListContext);
  const { title, original_language: language, poster_path: poster, id } = movie;
  const toast = useToast();

  // Calculate isAlreadyAdded outside the callback
  const isAlreadyAdded = watchList.some((item) => item.id === id);

  const addToWatchList = useCallback(() => {
    if (!isAlreadyAdded) {
      // If not added, add it to the watchlist
      const updatedWatchList = [...watchList, { title, language, poster, id }];
      setWatchList(updatedWatchList);
      localStorage.setItem("movies", JSON.stringify(updatedWatchList));
      toast({
        title: "Movie added to your watchlist.",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      // If already added, show notification
      toast({
        title: "Movie already in your watchlist.",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  }, [
    watchList,
    setWatchList,
    title,
    language,
    poster,
    id,
    isAlreadyAdded,
    toast,
  ]);

  return (
    <div className="movie-card bg-white cursor-pointer relative min-w-[16rem] min-h-[24rem] mx-6 my-8 p-0 shadow-lg rounded-lg pb-2">
      <img
        src={
          poster
            ? `https://image.tmdb.org/t/p/w500/${poster}`
            : "../src/assets/PosterImage.jpg"
        }
        className="movie-poster border-none rounded-tl-lg rounded-tr-lg object-fill w-full h-full md:min-w-[12rem] md:h-[20rem]"
        alt="movie poster"
      />
      <NavLink to={`/movie/${id}`}>
        <h1 className="font-bold p-2 text-[1.15rem] leading-6 hover:text-[#6366F1]">
          {title}
        </h1>
      </NavLink>
      {isAlreadyAdded ? (
        <MdOutlineBookmarkAdded
          size={32}
          className="absolute top-2 left-2 rounded-[50%] bg-blue-300 p-[4px]"
          onClick={() => {
            toast({
              title: "This movie is already in your watchlist.",
              status: "info",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
          }}
        />
      ) : (
        <MdOutlineBookmarkAdd
          size={32}
          className="absolute top-2 left-2 rounded-[50%] bg-blue-300 p-[4px]"
          onClick={addToWatchList}
        />
      )}
      <p className="absolute font-bold text-base tracking-wider top-2 right-2 bg-blue-300 text-black p-1 rounded-tr-lg rounded-bl-lg">
        {language}
      </p>
    </div>
  );
}

export default MovieCard;
