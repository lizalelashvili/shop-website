const countries = [
  { flag: "css/images/flags/AE.png", Text: "UAE" },
  { flag: "css/images/flags/AU.png", Text: "Aus" },
  { flag: "css/images/flags/CN.png", Text: "China" },
  { flag: "css/images/flags/DE.png", Text: "Germ" },
  { flag: "css/images/flags/DK.png", Text: "Den" },
  { flag: "css/images/flags/FR.png", Text: "Fra" },
  { flag: "css/images/flags/GB.png", Text: "GB" },
  { flag: "css/images/flags/IT.png", Text: "Ita" },
  { flag: "css/images/flags/Shit.png", Text: "Ruzzia" },
  { flag: "css/images/flags/US.png", Text: "USA" },
];

const countryList = document.getElementById("countryDropdown");

countries.forEach((country) => {
  const countryItem = `
    <li>
     <a href='#' class="countryLink" data-flags="${country.flag}" data-text"${country.Text}">
        <img src="${country.flag}" alt="${country.Text}">
            <span>${country.Text}</span>
     </a>
    </li>
    `;

  countryList.innerHTML += countryItem;
});

const flagsContainer = document.createElement("div");
flagsContainer.classList.add("flagsContainer");

const flagsImages = document.createElement("img");
flagsImages.src = "";
flagsImages.alt = "";
flagsImages.classList.add("flagsImages");

flagsContainer.appendChild(flagsImages);
const shippingElement = document.querySelector(".shipping");
shippingElement.insertBefore(
  flagsContainer,
  shippingElement.lastElementChild.previousElementSibling
);

document.addEventListener("click", (event) => {
  const flagsLink = event.target.closest(".countryLink");
  if (flagsLink) {
    const flagsImages = flagsLink.querySelector("img");
    flagsContainer.querySelector(".flagsImages").src = flagsImages.src;
    flagsContainer.querySelector(".flagsImages").alt = flagsImage.alt;
  }
});
