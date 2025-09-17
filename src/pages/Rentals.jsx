import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'streamflix_rentals_v1';

function statusOf(r) {
	return Date.now() > r.expiresAt ? 'Expired' : 'Active';
}

export default function Rentals() {
	const [rentals, setRentals] = useState([]);

	useEffect(() => {
		const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
		const withStatus = stored.map((r) => ({ ...r, status: statusOf(r) }));
		setRentals(withStatus);
	}, []);

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">My Rentals</h1>
			{rentals.length === 0 ? (
				<div>No rentals yet. Go rent a movie!</div>
			) : (
				<table className="w-full bg-white shadow rounded overflow-hidden">
					<thead className="bg-gray-100">
					<tr>
						<th className="p-3 text-left">Title</th>
						<th className="p-3 text-left">Status</th>
						<th className="p-3 text-left">Expires</th>
						<th className="p-3 text-left">Price</th>
					</tr>
					</thead>
					<tbody>
					{rentals.map((r) => (
						<tr key={r.id} className="border-t">
							<td className="p-3">{r.title}</td>
							<td className="p-3">
                  <span className={r.status === 'Active' ? 'text-green-600' : 'text-red-600'}>
                    {r.status}
                  </span>
							</td>
							<td className="p-3">{new Date(r.expiresAt).toLocaleString()}</td>
							<td className="p-3">{r.price ?? '-'}</td>
						</tr>
					))}
					</tbody>
				</table>
			)}
		</div>
	);
}
