let profileName = document.querySelector(".profile__name");
let profileSubtitle = document.querySelector(".profile__subtitle");
let popupInfo = document.querySelector(".popup__info");
let nameInput = document.querySelector(".popup__name_element_input");
let subtitleWork = document.querySelector(".popup__subtitle");
const buttonEdd = document.querySelector(".profile__edit");
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");
const popupClose = document.querySelector(".popup__close");

buttonEdd.addEventListener("click", () => {
  popup.classList.add("popup_opened");

  nameInput.value = profileName.textContent;
  subtitleWork.value = profileSubtitle.textContent;
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});

function formSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileSubtitle.textContent = subtitleWork.value;
  closeSubmit();
}

function closeSubmit() {
  popup.classList.remove('popup_opened');
}
popupInfo.addEventListener("submit", formSubmit);