import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Logo from '@images/logo/logo-icon.svg';
import Image from 'next/image';
import { RxComponentPlaceholder } from 'react-icons/rx';
import Disclosure from '@components/Disclosure';

const drawerWidth = 280;

interface Props {
	isNavbarOpen: boolean;
	setIsNavbarOpen: any;
	window?: () => Window;
}

/*
# TODO: Add these pages in the future
Overview
Analytics: { href: '/admin/analytics', icon: <RxComponentPlaceholder />, active: false },

Management Section
Blogs: { href: '/admin/blogs', icon: <RxComponentPlaceholder />, active: false },
File: { href: '/admin/file', icon: <RxComponentPlaceholder />, active: false },
*/

const MenuItems: any = {
	Overview: {
		Dashboard: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: true },
	},
	Management: {
		Users: { href: '/admin/users', icon: <RxComponentPlaceholder />, active: false },
		Projects: { href: '/admin/projects', icon: <RxComponentPlaceholder />, active: false },
		Skills: { href: '/admin/skills', icon: <RxComponentPlaceholder />, active: false },
	},
	Settings: {
		Profile: { href: '/admin/profile', icon: <RxComponentPlaceholder />, active: false },
	},
};

const drawer = (
	<div className='px-4 py-4'>
		<Toolbar className='mb-3' disableGutters>
			<Image src={Logo} alt='Logo' />
		</Toolbar>
		<Disclosure />
		<Divider />

		{Object.keys(MenuItems).map((mainHeading, index) => {
			return (
				<>
					<h4 key={index} className='font-bold text-xs text-slate-500 my-3'>
						{mainHeading.toUpperCase()}
					</h4>
					<ul className='flex flex-col'>
						{Object.keys(MenuItems[mainHeading]).map((subHeading, index2) => {
							let icon = MenuItems[mainHeading][subHeading].icon;
							let href = MenuItems[mainHeading][subHeading].href;
							let isActive = MenuItems[mainHeading][subHeading].active;
							return (
								<li key={index2} className='group text-sm mb-1'>
									<Link href={href} className={`${isActive ? 'bg-blue-200 font-semibold text-blue-800' : 'hover:bg-slate-100 text-blue-900'} flex gap-4 items-center py-2 pr-2 pl-3 rounded `}>
										<RxComponentPlaceholder size='1.3em' className={isActive ? 'text-blue-800 font-extrabold' : ''} />
										<span className={`${isActive ? 'pl-1' : 'group-hover:pl-1'} transition-all ease-in-out `}>{subHeading}</span>
									</Link>
								</li>
							);
						})}
					</ul>
					<Divider />
				</>
			);
		})}
	</div>
);

const Sidebar = ({ isNavbarOpen, setIsNavbarOpen }: Props) => {
	// const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	// Remove this const when copying and pasting into your project.
	const container = window !== undefined ? () => window.document.body : undefined;

	const handleDrawerToggle = () => {
		setIsNavbarOpen(!isNavbarOpen);
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
					open={isNavbarOpen}
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
