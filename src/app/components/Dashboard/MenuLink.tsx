import React from 'react';
import Link from 'next/link';
import { RxComponentPlaceholder } from 'react-icons/rx';
import { isMobile } from '@/src/hooks/useWindowDimensions';

interface MenuLinkProps {
	href: string;
	isActive: boolean;
	title: string;
	isSidebarOpen: boolean;
	icon?: any;
}

const MenuLink = ({ href, isActive, title, icon, isSidebarOpen }: MenuLinkProps) => {
	const Icon = icon || RxComponentPlaceholder;
	// const IconSize = isSidebarOpen ? '20px' : '22px';
	const IconSize = '22px';
	const IconStyle = isActive ? 'text-blue-800 font-extrabold' : '';

	return (
		<li className='group text-sm my-1'>
			<Link href={href} className={`${isActive ? 'bg-blue-200 font-semibold text-blue-800' : 'hover:bg-slate-100 text-blue-900'} flex gap-4 items-center py-2 pr-2 pl-3 rounded`}>
				<Icon size={IconSize} className={`${IconStyle} flex-shrink-0`} />

				<span className={`${isActive ? 'pl-1' : 'group-hover:pl-1'} transition-all ease-in-out`}>{title}</span>
			</Link>
		</li>
	);
};

export default MenuLink;
