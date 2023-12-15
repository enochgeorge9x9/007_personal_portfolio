import React, { useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Logo from '@images/logo/logo-icon.svg';
import Image from 'next/image';

import DisclosureMenuLink from '@components/Dashboard/DisclosureMenuLink';
import MenuLink from '@components/Dashboard/MenuLink';

import { IoSpeedometerOutline, IoBriefcaseOutline } from 'react-icons/io5';
import { HiOutlineUsers } from 'react-icons/hi2';
import { LuLightbulb } from 'react-icons/lu';
import { IconType } from 'react-icons';
import { FiUser } from 'react-icons/fi';
import { isMobile } from '@src/hooks/useWindowDimensions';

const drawerWidth = 250;

const PortfolioDropdownLinks = {
	Create: { href: '/admin/projects/create', active: true },
	Update: { href: '/admin/projects/create', active: false },
	Delete: { href: '/admin/projects/create', active: false },
	Read: { href: '/admin/projects/create', active: false },
};

interface MenuItemsProps {
	[key: string]: { [key: string]: { href: string; icon: IconType; active: boolean } };
}

const MenuItems: MenuItemsProps = {
	Overview: {
		Dashboard: { href: '/admin/dashboard', icon: IoSpeedometerOutline, active: true },
	},
	Management: {
		Users: { href: '/admin/users', icon: HiOutlineUsers, active: false },
		Projects: { href: '/admin/projects', icon: IoBriefcaseOutline, active: false },
		Skills: { href: '/admin/skills', icon: LuLightbulb, active: false },
	},
	Settings: {
		Profile: { href: '/admin/profile', icon: FiUser, active: false },
	},
};

const Sidebar2 = ({ isSidebarOpen, setIsSidebarOpen }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const drawer = (
		<div className='px-4 py-4'>
			<Toolbar className='mb-3' disableGutters>
				<Image src={Logo} alt='Logo' />
			</Toolbar>

			<Divider />

			{Object.keys(MenuItems).map((mainHeading, index) => {
				return (
					<>
						<h4 key={index} className={`${!sidebarOpen && 'scale-0 hidden'} font-bold text-xs text-slate-500 my-3`}>
							{mainHeading.toUpperCase()}
						</h4>
						<ul className='flex flex-col'>
							{Object.keys(MenuItems[mainHeading]).map((subHeading, index2) => {
								let href = MenuItems[mainHeading][subHeading].href;
								let isActive = MenuItems[mainHeading][subHeading].active;
								let Icon = MenuItems[mainHeading][subHeading].icon;
								return <MenuLink isSidebarOpen={sidebarOpen} key={index2} href={href} isActive={isActive} title={subHeading} icon={Icon} />;
							})}
						</ul>
						<Divider />
					</>
				);
			})}
			<DisclosureMenuLink heading='Menu Dropdown' isActive={false} items={PortfolioDropdownLinks} isSidebarOpen={sidebarOpen} />
		</div>
	);

	return !isMobile ? (
		<div className={`bg-gradient-to-r from-[#e1ebed] to-[#ededee] h-screen duration-300 flex-shrink-0 ${sidebarOpen ? `w-[${drawerWidth}px]` : 'w-20'} relative ${isMobile && 'hidden'}`}>
			<BsArrowLeftShort className={`bg-white text-3xl rounded-full  absolute -right-3 top-20 cursor-pointer border-2 border-[#ededee] duration-400 ${sidebarOpen ? 'rotate-360' : 'rotate-180'}`} onClick={() => setSidebarOpen(!sidebarOpen)} />
			{drawer}
		</div>
	) : (
		//TODO: Add a onClick event when clicking on the background the sidebar closes
		<>
			<div
				className='bg-slate-900/40  absolute inset-0 z-10'
				onClick={() => {
					console.log('clicking bg');
				}}
			></div>
			<div className={`bg-gradient-to-r from-[#e1ebed] to-[#ededee] h-screen duration-300 absolute z-20 w-[${drawerWidth}px]`}>{drawer}</div>
		</>
	);
};

export default Sidebar2;
