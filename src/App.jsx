import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import Rentals from "./pages/Rentals";
import MovieDetails from "./pages/MovieDetails";
import Toast from "./components/Toast";

export default function App() {
	console.log("App mounted - TODO: add toast provider");

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Movies />} />
				<Route path="/rentals" element={<Rentals />} />
				<Route path="/movie/:id" element={<MovieDetails />} />
			</Routes>
			<Toast message="Welcome to StreamFlix MVP!" onClose={() => {}} />
		</BrowserRouter>
	);
}
