'use client';
import React, { useState } from 'react';
import Sidebar from '@components/Dashboard/Sidebar';
import Navbar from '@components/Dashboard/Navbar';
export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	return (
		<section>
			{/* Include shared UI here e.g. a header or sidebar */}
			<Navbar/>
            <Sidebar />

			{children}
		</section>
	);
}
