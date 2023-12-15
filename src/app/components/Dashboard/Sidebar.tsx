import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
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
/*
# TODO: Add these pages in the future
Overview
Analytics: { href: '/admin/analytics', icon: <RxComponentPlaceholder />, active: false },

Management Section
Blogs: { href: '/admin/blogs', icon: <RxComponentPlaceholder />, active: false },
File: { href: '/admin/file', icon: <RxComponentPlaceholder />, active: false },
*/



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

interface SidebarProps {
	isSidebarOpen: boolean;
	setIsSidebarOpen: any;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
	const drawerWidth = 250;


	const container = window !== undefined ? () => window.document.body : undefined;

	const drawer = (
		<div className='px-4 py-4 duration-300'>
			<Toolbar className='mb-3' disableGutters>
				<Image src={Logo} alt='Logo' />
			</Toolbar>

			<Divider />

			{Object.keys(MenuItems).map((mainHeading, index) => {
				return (
					<div key={index}>
						<h4 className={`font-bold text-xs text-slate-500 my-3`}>{mainHeading.toUpperCase()}</h4>
						<ul className='flex flex-col'>
							{Object.keys(MenuItems[mainHeading]).map((subHeading, index2) => {
								let href = MenuItems[mainHeading][subHeading].href;
								let isActive = MenuItems[mainHeading][subHeading].active;
								let Icon = MenuItems[mainHeading][subHeading].icon;
								return <MenuLink key={index2} href={href} isActive={isActive} title={subHeading} icon={Icon} isSidebarOpen={isSidebarOpen} />;
							})}
						</ul>
						<Divider />
					</div>
				);
			})}
			<DisclosureMenuLink isSidebarOpen={isSidebarOpen} heading='Menu Dropdown' isActive={false} items={PortfolioDropdownLinks} />
		</div>
	);

	const handleDrawerToggle = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			></AppBar>
			<Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}

				<Drawer
					container={container}
					variant='temporary'
					open={isSidebarOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
};

export default Sidebar;
