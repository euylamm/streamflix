export default function Navbar() {
	console.log("Navbar mounted - TODO: implement links");

	return (
		<nav className="bg-gray-900 text-white p-4 flex gap-4">
			<a href="/" className="hover:underline">Home</a>
			<a href="/rentals" className="hover:underline">My Rentals</a>
		</nav>
	);
}
