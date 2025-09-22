export default function Movies() {
	console.log("Movies page mounted - TODO: fetch categories");

	return (
		<div className="p-4 text-white bg-gray-900 min-h-screen">
			<h1 className="text-2xl font-bold mb-4">Movies</h1>
			<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
				{/* TODO: Replace with real movie list */}
				<div className="bg-gray-700 h-60 flex items-center justify-center rounded">
					Movie Placeholder
				</div>
				<div className="bg-gray-700 h-60 flex items-center justify-center rounded">
					Movie Placeholder
				</div>
			</div>
		</div>
	);
}
