import { startRent, renewRent } from "../utils/rent";

export default function RentButton({ movieId, isExpired }) {
	const handleClick = () => {
		if (isExpired) {
			console.log("Renew rent for movie:", movieId);
			renewRent(movieId);
		} else {
			console.log("Start rent for movie:", movieId);
			startRent(movieId);
		}
	};

	return (
		<button
			onClick={handleClick}
			className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
		>
			{isExpired ? "Renew Rent" : "Rent"}
		</button>
	);
}
