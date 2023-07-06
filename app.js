// shipping
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

// countdown
function countDownTime() {
  const newDays = document.querySelector(".day");
  const newHours = document.querySelector(".hour");
  const newMinutes = document.querySelector(".min");
  const newSeconds = document.querySelector(".sec");
  let countDownDate = new Date("jun 17, 2024 07:00:00").getTime();
  let today = new Date().getTime();
  let difference = countDownDate - today;
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    
  const targetDay = Math.floor(difference / day);
  const hours = Math.floor((difference % day) / hour);
  const minutes = Math.floor((difference % hour) / minute);
  const seconds = Math.floor((difference % minute) / second);
  newDays.innerHTML = `${targetDay}`;
  newHours.innerHTML = `${hours}`;
  newMinutes.innerHTML = `${minutes}`;
  newSeconds.innerHTML = `${seconds}`;
}
setInterval(countDownTime, 1000);
