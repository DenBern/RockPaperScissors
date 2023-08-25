export const changeFavorite = () => {
  const inputsFavorites = [...document.getElementsByClassName('input-favorite')];
  const favoritesBooks = [...document.getElementsByClassName('favorite')];

  const defaultFavorite = 'winter';
  const animationTime = 500;

  const showDefaultFavorite = () => inputsFavorites.forEach(item => {
    favoritesBooks.forEach(item => {
      if(item.className.includes(defaultFavorite)) {
        item.style.display = 'flex';
        item.classList.add('active-season');
      }
    });

    if (item.id === defaultFavorite) {
      item.checked = true;
      item.labels[0].classList.add('active-input');
    }
  });

  showDefaultFavorite();

  const changeFavoriteSeason = (item) => {
    const season = item.target.defaultValue;
    item.target.checked = true;
    item.target.labels[0].classList.add('active-input');

    favoritesBooks.forEach(item => {
      if(item.className.includes(season)) {
        item.classList.remove('deactive-season');
        item.classList.add('active-season');
        setTimeout(() => {
          item.style.display = 'flex';
        }, 500);
      } else {
        item.classList.remove('active-season');
        item.classList.add('deactive-season');
        setTimeout(() => {
          item.style.display = 'none';
        }, animationTime);
      }
    });

    inputsFavorites.forEach(item => {
      if(item.id !== season) {
        item.checked = false;
        item.labels[0].classList.remove('active-input');
      }
    });
  }

  inputsFavorites.forEach(item => {
    item.addEventListener('click', (item) => {
      switch (item.target.id) {
        case 'winter':
          changeFavoriteSeason(item);
          break;
        case 'spring':
          changeFavoriteSeason(item);
          break;
        case 'summer':
          changeFavoriteSeason(item);
          break;
        case 'autumn':
          changeFavoriteSeason(item);
          break;
      }
    });
  });
}