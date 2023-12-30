import React from 'react';
import { technologies as tech, technologies } from './technologies-list';
import './technologies.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export function Technologies() {
    return (
        <ImageGallery
            useTranslate3D={true}
            thumbnailPosition='left'
            items={technologies.map(t => {
                return {
                    original: t.thumbUrl,
                    thumbnail: t.thumbUrl,
                };
            })}
        />       
    );
}