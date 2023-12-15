import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { RiSettings4Fill } from 'react-icons/ri';
import Link from 'next/link';

interface linksProps {
	href: string;
	active: boolean;
}

interface MenuDropdownProps {
	links: { [key: string]: linksProps };
	children: any;
	name?: string;
	email?: string;
}

export default function MenuDropdown({ links, children, name = '', email = '' }: MenuDropdownProps) {
	return (
		<div className=''>
			<Menu as='div' className='relative inline-block text-left'>
				<div>
					<Menu.Button>
						{children || (
							<div className='inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
								Options
								<HiChevronRight className='-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100' aria-hidden='true' />
							</div>
						)}
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'
				>
					<Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
						<div className='px-1 py-1 '>
							<div className='px-2 py-2 text-sm flex flex-col gap-1 max-w-[200px]'>
								<h5 className='font-medium text-blue-950'>{name}</h5>
								<p className='text-slate-500'>{email.length >= 22 ? email.slice(0, 22) + '...' : email}</p>
							</div>
						</div>
						<div className='px-1 py-1'>
							{links
								? Object.keys(links).map((value, index) => {
										let isActive = links[value].active;
										return (
											<Menu.Item key={index}>
												<Link href={links[value].href} className={`${isActive ? 'font-semibold text-blue-800' : 'hover:bg-slate-100 text-slate-800 font-medium'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
													{value}
												</Link>
											</Menu.Item>
										);
								  })
								: ''}
						</div>
						<div className='px-1 py-1'>
							<Menu.Item>
								<Link href='#' className={`${false ? 'text-red-800' : 'hover:bg-slate-100 text-rose-600'} group flex w-full font-semibold items-center rounded-md px-2 py-2 text-sm`}>
									Logout
								</Link>
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
