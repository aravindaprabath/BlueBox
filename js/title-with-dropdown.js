// 02 Tile with dropdown

var DropdownIcon = document.querySelector(".lunu-title-dropdown-wrapper__dropdown");
var menuContainer = document.querySelector(".lunu-title-dropdown-wrapper__dropdown__container");
var dropdownTogFunc = function () {
    menuContainer.classList.toggle("lunu-title-dropdown-wrapper__dropdown__container--tog")
}
DropdownIcon.addEventListener("click", dropdownTogFunc);
// Tile with dropdown


// image card with a drop down
var imageCardDropIcons = document.querySelectorAll(".drop-menu-card-rapper__dropdown-container");
imageCardDropmenuContainers = document.querySelectorAll(".drop-menu-card-rapper__dropdown-container__link-wrapper");

var imageCardDropFunc = function (e) {
    if (e.target.tagName == "I") {
        for (var n = 0; n < imageCardDropmenuContainers.length; n++) {
            console.log(imageCardDropmenuContainers[n]);

            if (imageCardDropmenuContainers[n].classList.contains("drop-menu-card-rapper__dropdown-container__link-wrapper") && imageCardDropmenuContainers[n] == imageCardDropmenuContainers[1]) {
                imageCardDropmenuContainers[n].classList.toggle("drop-menu-card-rapper__dropdown-container__link-wrapper--tog");
                break;
            };
        }
    }
}

for (var i = 0; i < imageCardDropIcons.length; i++) {
    imageCardDropIcons[i].addEventListener("click", imageCardDropFunc, false);
}