import React from 'react';

const StylesPage = () => {
	return (
		<div className='m-4'>
			The Themes: myLight and myDark are below. I used
			<a className='link' href='https://javisperez.github.io/tailwindcolorshades/' target='_blank'>
				Shades Generator
			</a>
			to generate the color shades for Primary and Secondary colors.
			<section className='container mx-auto p-4'>
				<div className='grid grid-cols-4' data-theme='myLight'>
					<div className='base-content col-span-full bg-base-100 text-center'>myLight</div>
					<div className='col-start-1 bg-base-100 p-2'>B-100</div>
					<div className='bg-primary p-2 text-center text-primary-content hover:bg-primary-focus'>P</div>
					<div className='bg-secondary p-2 text-center text-secondary-content hover:bg-secondary-focus'>S</div>
					<div className='bg-accent p-2 text-center text-accent-content hover:bg-accent-focus'>A</div>
					<div className='col-start-1 bg-base-200 p-2'>B-200</div>
					<div className='hover:bg-info-focus bg-info p-2 text-center text-info-content'>Info</div>
					<div className='hover:bg-success-focus bg-success p-2 text-center text-success-content'>Success</div>
					<div className='hover:bg-warning-focus bg-warning p-2 text-center text-warning-content'>Warning</div>
					<div className='col-start-1 bg-base-300 p-2'>B-300</div>
					<div className='hover:bg-error-focus bg-error p-2 text-center text-error-content'>Error</div>
					<div className='bg-neutral p-2 text-center text-neutral-content hover:bg-neutral-focus'>Neutral</div>
				</div>
			</section>
			<section className='container mx-auto p-4'>
				<div className='grid grid-cols-4' data-theme='myDark'>
					<div className='base-content col-span-full bg-base-100 text-center'>myDark</div>
					<div className='col-start-1 bg-base-100 p-2'>B-100</div>
					<div className='bg-primary p-2 text-center text-primary-content hover:bg-primary-focus'>P</div>
					<div className='bg-secondary p-2 text-center text-secondary-content hover:bg-secondary-focus'>S</div>
					<div className='bg-accent p-2 text-center text-accent-content hover:bg-accent-focus'>A</div>
					<div className='col-start-1 bg-base-200 p-2'>B-200</div>
					<div className='hover:bg-info-focus bg-info p-2 text-center text-info-content'>Info</div>
					<div className='hover:bg-success-focus bg-success p-2 text-center text-success-content'>Success</div>
					<div className='hover:bg-warning-focus bg-warning p-2 text-center text-warning-content'>Warning</div>
					<div className='col-start-1 bg-base-300 p-2'>B-300</div>
					<div className='hover:bg-error-focus bg-error p-2 text-center text-error-content'>Error</div>
					<div className='bg-neutral p-2 text-center text-neutral-content hover:bg-neutral-focus'>Neutral</div>
				</div>
			</section>
		</div>
	);
};

export default StylesPage;
