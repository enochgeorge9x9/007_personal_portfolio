'use client';
import React, { useEffect, useState } from 'react';
import { RiMenu4Fill, RiSettings4Fill, RiSearch2Line } from 'react-icons/ri';
import Sidebar from './Sidebar';
import MenuDropdown from '@components/MenuDropdown';
import { isMobile } from '@src/hooks/useWindowDimensions';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const hoverStateStyle = 'h-8 w-8 rounded-full hover:bg-blue-300/[0.3]';

const links = {
	Home: { href: '#', active: false },
	Profile: { href: '#', active: false },
	Settings: { href: '#', active: false },
};

interface NavbarProps {
	isSidebarOpen: boolean;
	setIsSidebarOpen: any;
}

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: NavbarProps) => {
	const onNavbarClick = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<div className=''>
			<nav className='flex flex-row justify-between items-center h-16 bg-blue-400/[0.3] p-4 relative z-50'>
				<div className='flex flex-row items-center gap-2'>
					<button className={`flex items-center justify-center ${hoverStateStyle} ${isMobile ? 'block' : 'hidden'}`} onClick={onNavbarClick}>
						<RiMenu4Fill size='1.3em' className='text-blue-800 font-extrabold' />
					</button>

					{/* <BsArrowLeftShort className={`bg-white text-3xl rounded-full absolute -left-3 top-20 cursor-pointer z-[999] border-2 border-[#ededee] duration-400 z-10 ${!isSidebarOpen ? 'rotate-360' : 'rotate-180'}`} onClick={onNavbarClick} />  */}

					<div>
						<RiSearch2Line size='1.3em' className='text-slate-600' />
					</div>
				</div>
				<div className='flex flex-row-reverse items-center gap-2'>
					<MenuDropdown links={links} name='Enoch George' email='enochgeorge1999@gmail.com'>
						<div className='w-8 h-8 flex items-center justify-center text-lg bg-slate-50 hover:bg-slate-200 rounded-full'>{'enoch'[0].toUpperCase()}</div>
					</MenuDropdown>
					<div className={`w-8 h-8 flex items-center justify-center ${hoverStateStyle}`}>
						<RiSettings4Fill className='text-blue-800 hover:text-blue-900 animate-spin-slow' size='1.4em' />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
