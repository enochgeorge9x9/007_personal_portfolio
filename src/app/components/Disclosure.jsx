import { Disclosure as Disclosure2 } from '@headlessui/react';
import { HiChevronRight } from 'react-icons/hi';
import { RxComponentPlaceholder } from 'react-icons/rx';
import { LuDot } from 'react-icons/lu';
import { FaRegCircleDot } from 'react-icons/fa6';
import Link from 'next/link';

export default function Disclosure() {
	const isActive = true;
	return (
		<div className='w-full'>
			<div className='w-full max-w-md'>
				<Disclosure2>
					{({ open }) => (
						<>
							<Disclosure2.Button className={`${isActive ? 'bg-blue-200 font-semibold text-blue-800' : 'hover:bg-slate-100 text-blue-900'} group flex gap-4 w-full items-center py-2 pr-2 pl-3 rounded `}>
								<RxComponentPlaceholder size='1.3em' className={isActive ? 'text-blue-800 font-extrabold' : ''} />
								<div className='flex justify-between items-center w-full'>
									<span className={`${isActive ? 'pl-1' : 'group-hover:pl-1'} transition-all ease-in-out text-sm `}>Dropdown</span>
									<HiChevronRight className={`${open ? 'transition 1s rotate-90 transform' : ''} h-5 w-5 text-blue-500`} />
								</div>
							</Disclosure2.Button>
							<Disclosure2.Panel className='pb-2 pt-1'>
								<ul className='flex flex-col '>
									{['create', 'update', 'read', 'delete'].map((value, index) => {
										return (
											<li key={index} className='group text-sm mb-1'>
												<Link
													href='#'
													className={`${isActive ? 'font-semibold' : 'hover:bg-slate-100'} 
                                            group text-blue-900 flex gap-4 w-full items-center py-2 pr-2 pl-3 rounded `}
												>
													{isActive ? <FaRegCircleDot className='text-blue-500 text-sm' /> : <LuDot />}
													<span className={`${isActive ? 'pl-1' : 'group-hover:pl-1'} transition-all ease-in-out `}>{value}</span>
												</Link>
											</li>
										);
									})}
								</ul>
							</Disclosure2.Panel>
						</>
					)}
				</Disclosure2>
				<Disclosure2 as='div' className='mt-2'>
					{({ open }) => (
						<>
							<Disclosure2.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75'>
								<span>Do you offer technical support?</span>
								<HiChevronRight className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`} />
							</Disclosure2.Button>
							<Disclosure2.Panel className='px-4 pb-2 pt-4 text-sm text-gray-500'>No.</Disclosure2.Panel>
						</>
					)}
				</Disclosure2>
			</div>
		</div>
	);
}
