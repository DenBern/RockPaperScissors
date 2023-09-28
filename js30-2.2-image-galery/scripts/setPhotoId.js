import { getImageById, photoById, error, setError, setLoadingData, loadingData } from "./service.js";
import { loadingState } from "./loadingState.js";
import { errorState } from "./errorState.js";
import { renderPhotoId } from "./renderPhotoId.js";

export const setPhotoId = async (id) => {
  setError(false);
  errorState(error);
  setLoadingData(true);
  loadingState(loadingData);

  await getImageById(id);

  if (error) {
    setLoadingData(false)
    loadingState(loadingData);
    errorState(error);
  } else {
    loadingState(loadingData);
    errorState(error);
    renderPhotoId(photoById);
  };
};