import { useState } from 'react';
import { nanoid } from 'nanoid';

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const images = [
        { id: nanoid(), src: "https://i.ibb.co/R43vqzM/coal-banner.jpg", tags: ['coal'] },
        { id: nanoid(), src: "https://i.ibb.co/fdjw6pD/coal1.jpg", tags: ['coal'] },
        { id: nanoid(), src: "https://i.ibb.co/m8P4VH9/coal-banner1.jpg", tags: ['coal'] },
        { id: nanoid(), src: "https://i.ibb.co/6wBRZsv/stone-31-min-min.png", tags: ['stone'] },
        { id: nanoid(), src: "https://i.ibb.co/FwBq7fy/large-min.jpg", tags: ['stone'] },
        { id: nanoid(), src: 'https://i.ibb.co/Y8gbwtW/onion.jpg', tags: ['onion'] },
    ];

    const filteredImages = filter === 'all' ? images : images.filter(image => image.tags.includes(filter));

    return (
        <div className="container mx-auto my-32">
            <h2 className='text-center font-teko font-semibold text-6xl text-primary mb-6'>Our Gallery</h2>
            <hr className='text-center w-64 mx-auto mb-12' />
            <div className="flex justify-center mb-8 gap-8 font-semibold text-2xl font-barlow">
                <button className={`mr-2 px-4 py-2 rounded-md  ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`} onClick={() => setFilter('all')}>All</button>
                <button className={`mr-2 px-4 py-2 rounded-md ${filter === 'coal' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`} onClick={() => setFilter('coal')}>Coal</button>
                <button className={`mr-2 px-4 py-2 rounded-md ${filter === 'stone' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`} onClick={() => setFilter('stone')}>Stone</button>
                <button className={`mr-2 px-4 py-2 rounded-md ${filter === 'onion' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`} onClick={() => setFilter('onion')}>Onion</button>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredImages.map(image => (
                    <div key={image.id} className="flex flex-col rounded-lg overflow-hidden">
                        <img className="object-cover w-full h-96" src={image.src} alt="Gallery" />
                        <div className="px-4 py-2 bg-gray-100">
                            <p className="text-gray-800 text-lg font-medium">{image.tags.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Gallery;