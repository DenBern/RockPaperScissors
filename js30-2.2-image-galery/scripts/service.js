const _base = 'https://api.unsplash.com/';
const _search = 'search/photos?query=';
const _id = 'photos/';
const _clientId = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
const _perPage = 'per_page=10';

// myKey = 'XMkSjtWOrppQpVs1-aBriPPkhcqLcns0s1R_XDqZbp8';
// secondKey = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

let previewImagesId = [];
let photoById = {};
let totalPages = 0;
let error = false;
let totalResults = 0;

const getData = async (url) => {
  let res = await fetch(url);
  if(!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`)
  }
  return await res.json();
};

const getPreviewImages = async (search, page = 1) => {
  error = false;
  previewImagesId = [];
  await getData(`${_base}${_search}${search}&${_perPage}&page=${page}&client_id=${_clientId}`)
  .then(data => {
    totalResults = data.total;
    totalPages = data.total_pages;
    data.results.forEach((res, index) => {
      if (index === 0) {
        previewImagesId = [
          {
            description: res.description,
            originSize: res.urls.raw,
            imgId: res.id,
            thumbnail: res.urls.thumb,
            mediumSize: res.urls.regular,
          }
        ];
      } else {
        previewImagesId = [
          ...previewImagesId,
          {
            imgId: res.id,
            thumbnail: res.urls.thumb,
          }
        ];
      }
    })
  })
  .catch((err) => {
    console.log(err);
    error = true;
  })
};

const getImageById = async (id) => {
  error = false;
  await getData(`${_base}${_id}${id}?client_id=${_clientId}`)
    .then((res) => {
      photoById = {
        description: `${res.description ?? 'Not found'}`,
        mediumSize: res.urls.regular,
        originSize: res.urls.raw,
      };
    })
    .catch((err) => {
      error = true;
      console.log(err);
    })
}
export {
  previewImagesId,
  getPreviewImages,
  getImageById,
  photoById,
  totalPages,
  totalResults,
  error
}

