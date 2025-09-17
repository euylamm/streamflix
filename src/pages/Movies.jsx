import React, { useEffect, useState } from 'react';
import { fetchPopularMovies, posterUrl } from '../utils/tmdb';

const STORAGE_KEY = 'streamflix_rentals_v1';

export default function Movies() {
	const [movies, setMovies] = useState([]);
	const [rentals, setRentals] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
		} catch {
			return [];
		}
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let mounted = true;
		fetchPopularMovies()
			.then((results) => { if (mounted) setMovies(results); })
			.catch((e) => console.error(e))
			.finally(() => { if (mounted) setLoading(false); });
		return () => { mounted = false; };
	}, []);

	function saveRentals(next) {
		setRentals(next);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
	}

	function rentMovie(movie) {
		const price = Math.floor(Math.random() * 5) + 1; // credits
		const rentedAt = Date.now();
		const expiresAt = Date.now() + 48 * 60 * 60 * 1000; // 48h

		const rental = { id: movie.id, title: movie.title, price, rentedAt, expiresAt };
		saveRentals([rental, ...rentals]);
		alert(`Rented "${movie.title}" — ${price} credits — expires in 48h`);
	}

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
			{loading && <div>Loading movies…</div>}

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{movies.map((m) => (
					<div key={m.id} className="bg-white rounded shadow p-3 flex flex-col">
						{m.poster_path ? (
							<img src={posterUrl(m.poster_path)} alt={m.title} className="w-full h-64 object-cover rounded" />
						) : (
							<div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">No image</div>
						)}
						<div className="mt-3 flex-1">
							<h2 className="font-semibold text-sm">{m.title}</h2>
							<p className="text-xs text-gray-500 mt-1 line-clamp-3">{m.overview}</p>
						</div>
						<div className="mt-3 flex items-center justify-between">
							<div className="text-sm font-medium">Rent: dynamic</div>
							<button
								onClick={() => rentMovie(m)}
								className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
							>
								Rent
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
