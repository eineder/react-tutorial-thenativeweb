import React from 'react'

const images = [
    {
        src: 'https://images.freeimages.com/images/large-previews/1d3/thanksgiving-table-1443940.jpg',
        alt: 'Thanksgiving table'
    },
    {
        src: 'https://images.freeimages.com/images/large-previews/e01/lrt-interior-1626389.jpg',
        alt: 'Interior of a train'
    },
    {
        src: 'https://images.freeimages.com/images/large-previews/867/volcanic-mt-ngauruhoe-1378772.jpg',
        alt: 'A mountain'
    }
]

function getNextIndex(images, currentIndex) {
    if (currentIndex === images.length - 1) {
        return 0;
    }
    return currentIndex + 1;
}

export class ImageChanger extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageIndex: 0 };
        setInterval(() => {
            this.setState((s, p) => { return { imageIndex: getNextIndex(images, this.state.imageIndex) } });
        }, 3000);
    }

    render() {
        const currentImage = images[this.state.imageIndex];
        return (
            <img src={currentImage.src} alt={currentImage.alt} />
        );
    }
}