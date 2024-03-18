import React from 'react'

const shades = {
    Primary: [
        'bg-pink-100',
        'bg-pink-200',
        'bg-pink-300',
        'bg-pink-400',
        'bg-pink-500',
        'bg-pink-600',
        'bg-pink-700',
        'bg-pink-800',
        'bg-pink-900',
    ],
    Secondary: [
        'bg-gray-100',
        'bg-gray-200',
        'bg-gray-300',
        'bg-gray-400',
        'bg-gray-500',
        'bg-gray-600',
        'bg-gray-700',
        'bg-gray-800',
        'bg-gray-900',
    ]
}

export default function designSystem() {
    return (
        <div className='max-w-7xl mx-auto px-4 mt-40'>

            <h1>Design Preview V0.2</h1>

            <div className='flex flex-col space-y-4 mt-10'>
                <h1 className='h1'>Heading 1</h1>
                <h2 className="h2">Heading 2</h2>
                <h3 className="h3">Heading 3</h3>
                <h4 className="h4">Heading 4</h4>
                <h5 className="h5">Heading 5</h5>
                <h6 className="h6">Heading 6</h6>
								<p className="p-large">
                    This is a large paragraph. Lorem ipsum <br />
                    dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </p>
                <p className="p">
                    This is a paragraph. Lorem ipsum <br />
                    dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </p>
                <p className="p-small">
                    This is a small paragraph. Lorem ipsum <br />
                    dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </p>


            </div>

            {/* Colors */}
            <div className='flex flex-col space-y-4 mt-10'>
                {Object.entries(shades).map(([type, val], index) => (
                    <div className="flex space-x-4 items-center">
                        {val.map((shade, index) => (
                            <div key={index} className={`${shade} group relative rounded-full h-10 w-10`}>
                                <div className="hidden group-hover:block absolute bg-white">{shade}</div>
                            </div>
                        ))}
                        <span>
                            {type}
                        </span>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className='flex flex-col items-start space-y-4 mt-10'>
                <button className='btn-primary'>Primary Button</button>
                <button className='btn-primary-outline'>Primary Button Outline</button>
                <div className="bg-gray-800 p-6">
                    <button className='btn-primary-outline-white'>Primary Button Outline White</button>
                </div>

                <button className='btn-secondary'>Secondary Button</button>
                <button className='btn-secondary-outline'>Secondary Button Outline</button>
                <div className="bg-gray-800 p-6">
                    <button className='btn-secondary-outline-white'>Secondary Button Outline White</button>
                </div>

                <button className='btn-tertiary group'>
                    <span className='btn-tertiary-decoration'>
                        Tertiary Button
                    </span>
                </button>
            </div>

            {/* Fonts */}

            <div className='flex flex-col space-y-4 mt-10'>
                <span>Normal Text</span>
                <span className='font-bold'>Bold Text</span>
                <span className='font-semibold'>Semi Bold Text</span>
                <span className='font-medium'>Medium Text</span>
                <span className='font-light'>Light Text</span>
                <span className='font-thin'>Thin Text</span>

                <span className='italic'>Italic Text</span>
                <span className='font-bold italic'>Bold Italic Text</span>
                <span className='font-semibold italic'>Semi Bold Italic Text</span>
                <span className='font-medium italic'>Medium Italic Text</span>
                <span className='font-light italic'>Light Italic Text</span>
                <span className='font-thin italic'>Thin Italic Text</span>

            </div>


            {/* Inputs */}

            <div className='py-12 max-w-lg'>
                <label htmlFor="email" className="input-label">
                    Email
                </label>
                <div className="mt-1">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="input"
                        placeholder="you@example.com"
                    />
                </div>
            </div>
        </div>
    )
}

export function getStaticProps() {
    return {
        props: {},
        // returns the default 404 page with a status code of 404 in production
        notFound: process.env.NEXT_PUBLIC_NEXT_ENV === 'production'
    }
}