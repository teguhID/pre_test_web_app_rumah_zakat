/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useFilmStore } from "@/store/filmStore";

import CardList from '../../components/templates/CardList'

export default function FilmPage() {
  const { films, loading, page, totalResults, search, fetchFilms } = useFilmStore();
  const [query, setQuery] = useState(search);
  const [year, setYear] = useState("");
  const [showModal, setShowModal] = useState(false);

  const lastPage = Math.ceil(totalResults / 10);

  useEffect(() => {
    fetchFilms(query, 1, year);
  }, [fetchFilms]);

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    fetchFilms(query, 1, year);
    setShowModal(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-zinc-600">Film List</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Filter
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : films.length === 0 ? (
        <p className="text-red-500">Film not found.</p>
      ) : (
        <>
          {/* Film Cards */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {films.map((film, index) => (
              <CardList 
                key={index} 
                href={`/film/${film.imdbID}`} 
                src={film.Poster !== "N/A" ? film.Poster : "https://mining.itb.ac.id/wp-content/themes/consultix/images/no-image-found-360x260.png"} 
                alt={film.Title} 
                title={film.Title} 
                additionalData={[
                  { value: film.Year }
                ]}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => fetchFilms(query, 1)}
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
              onClick={() => fetchFilms(query, page - 1)}
              disabled={page <= 1}
              className={`px-3 py-1 rounded-lg ${
                page <= 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: 5 }, (_, i) => {
              let start = Math.max(1, page - 2);
              let pageNum = start + i;
              if (pageNum > lastPage) return null;

              return (
                <button
                  key={pageNum}
                  onClick={() => fetchFilms(query, pageNum)}
                  className={`px-3 py-1 rounded-lg ${
                    pageNum === page
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => fetchFilms(query, page + 1)}
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
              onClick={() => fetchFilms(query, lastPage)}
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-zinc-700">Filter Films</h2>
            <form onSubmit={handleFilter} className="space-y-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-800">Search</label>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter film name..."
                  className="border rounded-lg px-3 py-2 w-full text-zinc-400"
                />
              </div>

              {/* Year */}
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-800">Year</label>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="e.g. 2021"
                  className="border rounded-lg px-3 py-2 w-full text-zinc-400"
                />
              </div>

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
