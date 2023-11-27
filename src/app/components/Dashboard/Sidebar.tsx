import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { MdAllInbox } from 'react-icons/md';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MdMarkEmailUnread } from 'react-icons/md';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Logo from '@images/logo/logo-icon.svg';
import Image from 'next/image';
import { RxComponentPlaceholder } from 'react-icons/rx';

const drawerWidth = 240;

interface Props {
	isNavbarOpen: boolean;
	setIsNavbarOpen: any;
	window?: () => Window;
}

const MenuItems = {
	Overview: {
		Dashboard: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: true },
		Projects: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: false },
		Blogs: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: false },
		Analytics: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: false },
	},
	Management: {
		Users: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: false },
		Projects: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: false },
		Blogs: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: false },
		Skills: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: false },
		File: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: false },
	},
	Settings: {
		Profile: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: false },
		Settings: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: false },
		Theme: { href: '/admin/dashboard', icon: <RxComponentPlaceholder />, active: false },
	},
};

const active = true;

const drawer = (
	<div className='px-4 py-4'>
		<Toolbar className='mb-3'>
			<Image src={Logo} alt='Logo' />
		</Toolbar>

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
							let isActive = MenuItems[mainHeading][subHeading].active;
							return (
								<li key={index2} className='group text-sm mb-1'>
									<Link href='#' className={`${isActive ? 'bg-blue-200 font-semibold' : 'hover:bg-slate-100'} flex gap-4 items-center py-2 pr-2 pl-3 rounded `}>
										<RxComponentPlaceholder size='1.3em' className={isActive ? 'text-blue-800 font-extrabold' : ''} />
										<span className={`${isActive ? 'pl-1' : 'group-hover:pl-1'} transition-all ease-in-out font-semibold text-blue-800`}>{subHeading}</span>
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
