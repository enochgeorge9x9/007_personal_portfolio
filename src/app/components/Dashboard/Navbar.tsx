'use client';
import React, { useState } from 'react';
import { RiMenu4Fill, RiSettings4Fill, RiSearch2Line } from 'react-icons/ri';
import Sidebar from './Sidebar';

const hoverStateStyle = 'h-8 w-8 rounded-full hover:bg-blue-300/[0.3]';

const Navbar = () => {
	const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
	console.log('🚀 ~ file: Navbar.tsx:9 ~ Navbar ~ isNavbarOpen:', isNavbarOpen);

	const onNavbarClick = () => {
		setIsNavbarOpen(!isNavbarOpen);
	};

	return (
		<>
			<nav className='flex flex-row justify-between items-center w-full h-16 bg-blue-400/[0.3] p-4'>
				<div className='flex flex-row items-center gap-2'>
					<button className={`flex items-center justify-center ${hoverStateStyle}`} onClick={onNavbarClick}>
						<RiMenu4Fill size='1.3em' className='text-blue-800 font-extrabold' />
					</button>
					<div>
						<RiSearch2Line size='1.3em' className='text-slate-600' />
					</div>
				</div>
				<div className='flex flex-row-reverse items-center gap-2'>
					<div className='w-8 h-8 flex items-center justify-center text-lg bg-slate-50 hover:bg-slate-200 rounded-full'>{'enoch'[0].toUpperCase()}</div>
					<div className={`w-8 h-8 flex items-center justify-center ${hoverStateStyle}`}>
						<RiSettings4Fill className='text-blue-800 hover:text-blue-900 animate-spin-slow' size='1.4em' />
					</div>
				</div>
			</nav>
			<Sidebar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
		</>
	);
};

export default Navbar;
