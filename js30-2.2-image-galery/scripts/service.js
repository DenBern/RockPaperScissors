const _base = 'https://api.unsplash.com/';
const _search = 'search/photos?query=';
const _id = 'photos/';
const _clientId = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
const _perPage = 'per_page=11';

// myKey = 'XMkSjtWOrppQpVs1-aBriPPkhcqLcns0s1R_XDqZbp8';
// secondKey = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

let previewImagesId = [];
let photoById = {};
let loading = false;

const getData = async (url) => {
  let res = await fetch(url);
  if(!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`)
  }
  return await res.json();
};

const getPreviewImages = async (search) => {
  previewImagesId = [];
  loading = true;
  await getData(`${_base}${_search}${search}&${_perPage}&client_id=${_clientId}`)
  .then(images => {
      images.results.forEach((res, index) => {
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
  })
};

const getImageById = async (id) => {
  await getData(`${_base}${_id}${id}?client_id=${_clientId}`)
    .then((res) => {
      photoById = {
        description: `${res.description ?? 'Not found'}`,
        mediumSize: res.urls.regular,
        originSize: res.urls.raw,
      };
    })
    .catch((err) => {
      console.log(err);
    })
}

export {previewImagesId, getPreviewImages, getImageById, photoById}
