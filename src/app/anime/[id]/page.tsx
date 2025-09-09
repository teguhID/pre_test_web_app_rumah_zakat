/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAnimeStore } from "@/store/animeStore";

import DetailList from '../../../components/templates/DetailList';

export default function AnimeDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { animeDetail, loading, fetchAnimeDetail } = useAnimeStore();

  useEffect(() => {
    if (id) fetchAnimeDetail(id);
  }, [id, fetchAnimeDetail]);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (!animeDetail) return <p className="text-red-500">Anime not found.</p>;

  return (
    <DetailList
      src={animeDetail.images.jpg.large_image_url}
      alt={animeDetail.title}
      title={animeDetail.title}
      additionalTitle={animeDetail.title_japanese}
      desc={animeDetail.synopsis}
      additionalDesc={[
        { label: "Episodes:", value: animeDetail.episodes || "N/A" },
        { label: "Status:", value: animeDetail.status },
        { label: "Score:", value: animeDetail.score || "N/A" },
        {
          label: "Genres:",
          value: animeDetail.genres.map((g) => g.name).join(", ") || "N/A",
        },
      ]}
      onClickBack={() => router.back()}
      onClickDetail={animeDetail.url}
    />
  );
}
