const _base = 'https://api.unsplash.com/';
const _search = 'search/photos?query=';
const _id = 'photos/';
const _clientId = 'XMkSjtWOrppQpVs1-aBriPPkhcqLcns0s1R_XDqZbp8';
const _perPage = 'per_page=10';

// myKey = 'XMkSjtWOrppQpVs1-aBriPPkhcqLcns0s1R_XDqZbp8';
// secondKey = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

let previewImagesId = [];
let photoById = {};
let totalPages = 0;
let error = false;
let totalResults = false;
let loadingData = false;

const setError = (value) => {
  error = value;
};

const setEmptyState = (value) => {
  totalResults = value;
};

const setLoadingData = (value) => {
  loadingData = value;
};

const getData = async (url) => {
  let res = await fetch(url);
  if(!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`)
  }
  return await res.json();
};

const getPreviewImages = async (search, page = 1) => {
  loadingData = false;
  error = false;
  previewImagesId = [];
  await getData(`${_base}${_search}${search}&${_perPage}&page=${page}&client_id=${_clientId}`)
  .then(data => {
    totalResults = Boolean(data.total);
    totalPages = data.total_pages;
    data.results.forEach((res, index) => {
      if (index) {
        previewImagesId = [
          ...previewImagesId,
          {
            imgId: res.id,
            thumbnail: res.urls.thumb,
          }
        ];
      } else {
        previewImagesId = [
          {
            description: res.description,
            originSize: res.urls.raw,
            imgId: res.id,
            thumbnail: res.urls.thumb,
            mediumSize: res.urls.regular,
          }
        ];
      }
    });
    loadingData = false;
    error = false;
  })
  .catch((err) => {
    loadingData = false;
    error = true;
  })
};

const getImageById = async (id) => {
  loadingData = true;
  error = false;
  await getData(`${_base}${_id}${id}?client_id=${_clientId}`)
    .then((res) => {
      photoById = {
        description: `${res.description ?? 'Not found'}`,
        mediumSize: res.urls.regular,
        originSize: res.urls.raw,
      };
      loadingData = false;
      error = false;
    })
    .catch((err) => {
      error = true;
    })
}
export {
  previewImagesId,
  photoById,
  totalPages,
  totalResults,
  error,
  loadingData,
  getPreviewImages,
  getImageById,
  setError,
  setEmptyState,
  setLoadingData,
}

