export default function Toast({ message, onClose }) {
	console.log("Toast message:", message);

	return (
		<div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow">
			{message || "Sample Toast"}
			<button
				onClick={onClose}
				className="ml-2 text-red-400 hover:text-red-600"
			>
				×
			</button>
		</div>
	);
}
