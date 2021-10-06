// global
const COUNTRIES_DATA = 'https://restcountries.com/v2'

// FORM
const elSearchForm = document.querySelector('.js-site-form')
const elSearchFormInput = elSearchForm.querySelector('.js-country-search')
const elSearchFormSelect = elSearchForm.querySelector('.js-search-by-region')

// countries list
const elCountriesList = document.querySelector('.site-hero__list')

const elCountryTemplate = document.querySelector('#country-template').content

function getJson(url, successFn, errorFn) {
  fetch(url)
  .then(respone => respone.json())
  .then(data => {
    if (data.length > 0) {
      successFn(data)
    } else if (data.status == 404) {
      errorFn()
    }
  })
}

function showCountries(data) {
  showCountries(data)
}

function errorFn() {
  elMoviesList.innerHTML = `<span class="error-txt">Country not found</span>`
}

function showCountries(data) {
  const elcountryFragment = document.createDocumentFragment()

  for (const country of data) {
    let elCountryTemplateClone = elCountryTemplate.cloneNode(true)

    elCountryTemplateClone.querySelector('.country__flag').src = country.flags.png
    elCountryTemplateClone.querySelector('.country__heading').textContent = country.name
    elCountryTemplateClone.querySelector('.country__population-count').textContent = country.population
    elCountryTemplateClone.querySelector('.country__region-place').textContent = country.region
    elCountryTemplateClone.querySelector('.country__capital-name').textContent = country.capital

    elcountryFragment.appendChild(elCountryTemplateClone)
  }

  elCountriesList.appendChild(elcountryFragment)

}

function showAllCountries() {
  getJson(COUNTRIES_DATA + '/all', showCountries, errorFn)
}

if (elSearchForm) {

}

showAllCountries()
