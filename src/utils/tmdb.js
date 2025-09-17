const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchPopularMovies(page = 1) {
	const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
	if (!res.ok) throw new Error('TMDB fetch failed: ' + res.status);
	const data = await res.json();
	return data.results || [];
}

export function posterUrl(path, size = 'w200') {
	if (!path) return '';
	return `https://image.tmdb.org/t/p/${size}${path}`;
}
