import { Disclosure } from '@headlessui/react';
import { HiChevronRight } from 'react-icons/hi';
import { RxComponentPlaceholder } from 'react-icons/rx';
import { LuDot } from 'react-icons/lu';
import { FaRegCircleDot } from 'react-icons/fa6';
import Link from 'next/link';
import { isMobile } from '@/src/hooks/useWindowDimensions';

interface itemsProps {
	href: string;
	active: boolean;
}

interface DisclosureMenuLinkProps {
	isActive: boolean;
	heading: string;
	isSidebarOpen: boolean;
	items: { [key: string]: itemsProps };
	mainIcon?: any;
}

export default function DisclosureMenuLink({ isActive, heading, items, mainIcon, isSidebarOpen }: DisclosureMenuLinkProps) {
	const Icon = mainIcon || RxComponentPlaceholder;
	const IconSize = isSidebarOpen ? '20px' : '22px';
	const IconStyle = isActive ? 'text-blue-800 font-extrabold' : '';

	// isActive = true;

	return (
		<div className='text-sm my-1 w-full'>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className={`${isActive ? 'bg-blue-200 font-semibold text-blue-800' : 'hover:bg-slate-100 text-blue-900'} group flex items-center gap-4 w-full ${isSidebarOpen ? 'py-2' : 'py-1'} pr-2 pl-3 rounded `}>
							{<Icon size={IconSize} className={`${IconStyle} flex-shrink-0`} />}

							{!isMobile ? (
								<div className={`flex ${!isSidebarOpen && 'scale-0 hidden'}`}>
									<span className={`${isActive ? 'pl-1' : 'group-hover:pl-1'} whitespace-nowrap transition-all ease-in-out text-sm`}>{heading}</span>
									<HiChevronRight className={`${open ? 'rotate-90 transform' : ''} transition 1s  h-5 w-5 text-blue-800`} />
								</div>
							) : (
								<div className={`flex`}>
									<span className={`${isActive ? 'pl-1' : 'group-hover:pl-1'} whitespace-nowrap transition-all ease-in-out text-sm`}>{heading}</span>
									<HiChevronRight className={`${open ? 'rotate-90 transform' : ''} transition 1s  h-5 w-5 text-blue-800`} />
								</div>
							)}
						</Disclosure.Button>
						<Disclosure.Panel className='pb-2 ml-1'>
							<ul className='flex flex-col '>
								{Object.keys(items).map((value, index) => {
									const subLinkActive = items[value].active;
									const href = items[value].href;

									return (
										<li key={index} className='group text-sm mb-1'>
											<Link
												href={href}
												className={`${subLinkActive ? 'font-semibold' : ''} 
                                            group text-blue-900 flex gap-4 w-full items-center hover:bg-slate-100 py-2 pr-2 pl-3 rounded `}
											>
												{subLinkActive ? <FaRegCircleDot className='text-blue-500 text-sm' /> : <LuDot />}

												{!isMobile ? (
													<span className={`${subLinkActive ? 'pl-1' : 'group-hover:pl-1'} transition-all ease-in-out ${!isSidebarOpen && 'scale-0'}`}>{value}</span>
												) : (
													<span className={`${subLinkActive ? 'pl-1' : 'group-hover:pl-1'} transition-all ease-in-out`}>{value}</span>
												)}
											</Link>
										</li>
									);
								})}
							</ul>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
}
