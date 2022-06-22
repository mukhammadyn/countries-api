// dark mode
const elModeBtn = document.querySelector(".js-mode-toggler");
const elSiteHeader = document.querySelector(".site-header");
const elCountriesList = document.querySelector(".site-hero__list");

const elSiteForm = document.querySelector(".site-form");
const elSiteFormSearch = elSiteForm.querySelector(".js-country-search");
const elSiteFormFilterRegion = elSiteForm.querySelector(".js-search-by-region");

// global
const COUNTRIES_DATA = "https://restcountries.com/v3.1";

// FORM
const elSearchForm = document.querySelector(".js-site-form");
const elSearchFormInput = elSearchForm.querySelector(".js-country-search");
const elSearchFormSelect = elSearchForm.querySelector(".js-search-by-region");

// temp
const elCountryTemplate = document.querySelector("#country-template").content;

function getJson(url, successFn, errorFn) {
  fetch(url)
    .then((res) => {
      if (res.ok) return res.json();
      else {
        errorFn();
        throw new Error("Server Error");
      }
    })
    .then((data) => {
      successFn(data);
    });
}

function errorFn() {
  elCountriesList.innerHTML = `<span class="error-txt">Country not found</span>`;
}

function showCountries(data) {
  const elcountryFragment = document.createDocumentFragment();

  for (const country of data) {
    let elCountryTemplateClone = elCountryTemplate.cloneNode(true);

    elCountryTemplateClone.querySelector(".country__flag").src =
      country.flags.png;
    elCountryTemplateClone.querySelector(".country__heading-link").textContent =
      country.name.common;
    elCountryTemplateClone.querySelector(
      ".country__population-count"
    ).textContent = country.population;
    elCountryTemplateClone.querySelector(".country__region-place").textContent =
      country.region;
    elCountryTemplateClone.querySelector(".country__capital-name").textContent =
      country.capital;

    elcountryFragment.appendChild(elCountryTemplateClone);
  }

  elCountriesList.appendChild(elcountryFragment);
}

function showAllCountries() {
  getJson(COUNTRIES_DATA + "/all", showCountries, errorFn);
}

function showSearchedCountry(evt) {
  evt.preventDefault();
  if (elSiteFormSearch.value == "") {
    showAllCountries();
  } else {
    elCountriesList.innerHTML = "";
    getJson(
      COUNTRIES_DATA + "/name/" + elSiteFormSearch.value,
      showCountries,
      errorFn
    );
    elSearchFormSelect.value = "";
  }
}

function sortByRegion() {
  elCountriesList.innerHTML = "";
  console.log(elSearchFormSelect.value);
  getJson(
    COUNTRIES_DATA + "/region/" + elSearchFormSelect.value,
    showCountries,
    errorFn
  );
}

if (elModeBtn) {
  elModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    elSiteHeader.classList.toggle("site-header--dark-mode");
    elSiteForm.classList.toggle("site-form--dark-mode");
    elCountriesList.classList.toggle("site-hero__list--dark-mode");
  });
}

if (elSiteForm) {
  elSiteForm.addEventListener("submit", showSearchedCountry);
}

if (elSiteFormFilterRegion) {
  elSiteFormFilterRegion.addEventListener("change", sortByRegion);
}

showAllCountries();
