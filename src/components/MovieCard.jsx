export default function MovieCard({ movie }) {
	console.log("Render MovieCard:", movie);

	return (
		<div className="w-40 bg-gray-800 text-white rounded-lg overflow-hidden shadow">
			<div className="h-60 bg-gray-700 flex items-center justify-center">
				Poster
			</div>
			<div className="p-2 text-sm">
				<p className="truncate">{movie?.title || "Movie Title"}</p>
				<button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-1 rounded">
					Details
				</button>
			</div>
		</div>
	);
}
