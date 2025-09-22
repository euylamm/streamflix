export default function MovieDetails() {
	console.log("MovieDetails page mounted - TODO: fetch movie by ID");

	return (
		<div className="p-4 bg-gray-900 min-h-screen text-white">
			<h1 className="text-2xl font-bold mb-4">Movie Details</h1>
			<div className="flex gap-4">
				<div className="w-48 h-72 bg-gray-700 rounded flex items-center justify-center">
					Poster
				</div>
				<div>
					<p>Title: Placeholder</p>
					<p>Description: Lorem ipsum...</p>
					<button className="mt-4 bg-green-600 px-4 py-2 rounded">
						Rent
					</button>
				</div>
			</div>
		</div>
	);
}
