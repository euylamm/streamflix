import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="bg-gray-800 text-white p-4">
			<div className="max-w-6xl mx-auto flex items-center justify-between">
				<div className="text-xl font-bold">StreamFlix</div>
				<div className="flex gap-4">
					<Link to="/movies" className="hover:underline">Movies</Link>
					<Link to="/rentals" className="hover:underline">My Rentals</Link>
				</div>
			</div>
		</nav>
	);
}
