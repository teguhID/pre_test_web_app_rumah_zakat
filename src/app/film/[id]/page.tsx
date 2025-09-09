/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useFilmStore } from "@/store/filmStore";

import DetailList from '../../../components/templates/DetailList';

export default function FilmDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { filmDetail, loading, fetchFilmDetail } = useFilmStore();

  useEffect(() => {
    if (id) fetchFilmDetail(id);
  }, [id, fetchFilmDetail]);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (!filmDetail) return <p className="text-red-500">Film not found.</p>;

  return (
    <DetailList
      src={filmDetail.Poster !== "N/A" ? filmDetail.Poster : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}
      alt={filmDetail.Title}
      title={filmDetail.Title}
      additionalTitle={filmDetail.Year}
      desc={filmDetail.Plot}
      additionalDesc={[
        { label: "Released:", value: filmDetail.Released },
        { label: "Runtime:", value: filmDetail.Runtime },
        { label: "Genre:", value: filmDetail.Genre },
        { label: "Director:", value: filmDetail.Director },
        { label: "Actors:", value: filmDetail.Actors },
        { label: "IMDB Rating:", value: filmDetail.imdbRating },
      ]}
      onClickBack={() => router.push("/film")}
      onClickDetail={`https://www.imdb.com/title/${filmDetail.imdbID}/`}
    />
  );
}
