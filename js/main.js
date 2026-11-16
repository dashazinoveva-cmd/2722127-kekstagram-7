import { createPhotos } from './data.js';
import { renderPictures } from './render-thumbnails.js';

const photosCount = 25;

renderPictures(createPhotos(photosCount));
