var pokemonImg = document.querySelector('img');

var leftArrow = document.querySelector('[data-slide="prev"]');

var rightArrow = document.querySelector('[data-slide="next"]');

var $indicator = document.getElementsByClassName('indicator-list')[0];

var imgArray = ['images/025.png', 'images/001.png', 'images/004.png', 'images/007.png', 'images/039.png'];
rightArrow.addEventListener('click', function () {
  for (var i = 0; i < imgArray.length - 1; i++) {
    if (pokemonImg.getAttribute('src') === imgArray[i]) {
      return pokemonImg.setAttribute('src', imgArray[i + 1]);
    } else if (pokemonImg.getAttribute('src') === imgArray[imgArray.length - 1]) {
      return;
    }
  }
}
);

leftArrow.addEventListener('click', function () {
  for (var i = 1; i < imgArray.length; i++) {
    if (pokemonImg.getAttribute('src') === imgArray[i]) {
      return pokemonImg.setAttribute('src', imgArray[i - 1]);
    } else if (pokemonImg.getAttribute('src') === imgArray[0]) {
      return;
    }
  }
}
);

$indicator.addEventListener('click', function (event) {
  var indicatorNumber = event.target.closest('li').getAttribute('id');
  return pokemonImg.setAttribute('src', imgArray[indicatorNumber - 1]);
});
