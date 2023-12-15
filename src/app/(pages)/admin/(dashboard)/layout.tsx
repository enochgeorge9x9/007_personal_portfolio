'use client';
import React, { useState } from 'react';
import Sidebar2 from '@components/Dashboard/Sidebar2';
import Sidebar from '@components/Dashboard/Sidebar'
import Navbar from '@components/Dashboard/Navbar';
import { isMobile } from '@/src/hooks/useWindowDimensions';

export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	return (
		<section className='flex'>
			{/* //Create a Grid layout to accommodated sidebar, navbar, and workspace */}
			{/* <Sidebar2 isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} /> */}
			<Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

			<div className='w-full'>
				<Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
				<div className='bg-yellow-400'>{children}</div>
			</div>
		</section>
	);
}
