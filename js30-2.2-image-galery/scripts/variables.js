export const preview = document.querySelector('.preview-photos');
export const keywordSearch = document.querySelector('.keyword');
export const fullSizePhoto = document.querySelector('.full-photo');
export const keywordDescription = document.querySelector('.description');
export const section = document.querySelector('section');
export const input = document.getElementById('search');
export const searchBtn = document.querySelector('.search');
export const clearBtn = document.querySelector('.clear');

export let defaultKeyword = ['travel', 'city', 'beautiful', 'summer', 'night', 'sea', 'ocean', 'heavens', 'sunset', 'space'];
export const randomNumber = Math.floor(Math.random() * (defaultKeyword.length));
export let notFound = document.createElement('div');

