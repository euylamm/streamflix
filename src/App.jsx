import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import Rentals from './pages/Rentals';

export default function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="max-w-6xl mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Navigate to="/movies" replace />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/rentals" element={<Rentals />} />
                </Routes>
            </main>
        </div>
    );
}
