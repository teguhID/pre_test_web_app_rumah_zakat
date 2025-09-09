/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useAnimeStore } from "@/store/animeStore";
import Link from "next/link";

import CardList from '../../components/templates/CardList'

export default function AnimePage() {
  const {
    animes,
    genres,
    loading,
    page,
    lastPage,
    selectedGenre,
    searchQuery,
    fetchAnimes,
    fetchGenres,
  } = useAnimeStore();

  const [query, setQuery] = useState(searchQuery);
  const [genre, setGenre] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchGenres();
    fetchAnimes(1);
  }, [fetchAnimes, fetchGenres]);

  const handleFilter = (e) => {
    e.preventDefault();
    fetchAnimes(1, genre, query);
    setShowModal(false)
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    let start = Math.max(1, page - 2);
    let end = Math.min(lastPage, page + 2);

    if (page <= 3) end = Math.min(lastPage, maxPagesToShow);
    if (page >= lastPage - 2)
      start = Math.max(1, lastPage - (maxPagesToShow - 1));

    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-zinc-600">Anime List</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Filter
        </button>
      </div>

      {/* Anime List */}
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : animes.length === 0 ? (
        <p className="text-red-500">Film not found.</p>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {animes.map((anime, index) => (
              <CardList 
                key={index} 
                href={`/anime/${anime.mal_id}`} 
                src={anime.images.jpg.image_url !== "N/A" ? anime.images.jpg.image_url : "https://mining.itb.ac.id/wp-content/themes/consultix/images/no-image-found-360x260.png"} 
                alt={anime.title} 
                title={anime.title} 
                additionalData={[
                  { value: `Genres: <b>${anime.genres.map((g) => g.name).join(", ")}</b>` },
                  { value: `Type: <b>${anime.type}</b>` },
                  { value: `Source: <b>${anime.source}</b>` },
                  { value: `Episodes: <b>${anime.episodes}</b>` },
                  { value: `Status: <b>${anime.status}</b>` },
                ]}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => fetchAnimes(1, selectedGenre, searchQuery)}
              disabled={page === 1}
              className={`px-3 py-1 rounded-lg ${
                page === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              First
            </button>

            <button
              onClick={() => fetchAnimes(page - 1, selectedGenre, searchQuery)}
              disabled={page <= 1}
              className={`px-3 py-1 rounded-lg ${
                page <= 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Prev
            </button>

            {getPageNumbers().map((p) => (
              <button
                key={p}
                onClick={() => fetchAnimes(p, selectedGenre, searchQuery)}
                className={`px-3 py-1 rounded-lg ${
                  page === p
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => fetchAnimes(page + 1, selectedGenre, searchQuery)}
              disabled={page >= lastPage}
              className={`px-3 py-1 rounded-lg ${
                page >= lastPage
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Next
            </button>

            <button
              onClick={() => fetchAnimes(lastPage, selectedGenre, searchQuery)}
              disabled={page === lastPage}
              className={`px-3 py-1 rounded-lg ${
                page === lastPage
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Last
            </button>
          </div>
        </>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-zinc-700">Filter Films</h2>
            <form onSubmit={handleFilter} className="space-y-4">
              {/* Search */}
              <div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter anime name..."
                  className="border rounded-lg px-3 py-2 w-full text-zinc-400"
                />
              </div>

              <select
                value={genre || ""}
                onChange={(e) => {
                  const genreId = e.target.value || null;
                  setGenre(genreId);
                }}
                className="border rounded-lg px-3 py-2 w-full text-zinc-400"
              >
                <option value="">All Genres</option>
                {genres.map((genre) => (
                  <option key={genre.mal_id} value={genre.mal_id}>
                    {genre.name}
                  </option>
                ))}
              </select>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
