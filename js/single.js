const singleData = {
  name: {
    common: "Germany",
    official: "Federal Republic of Germany",
    nativeName: {
      deu: {
        official: "Bundesrepublik Deutschland",
        common: "Deutschland",
      },
    },
  },
  tld: [".de"],
  cca2: "DE",
  ccn3: "276",
  cca3: "DEU",
  cioc: "GER",
  independent: true,
  status: "officially-assigned",
  unMember: true,
  currencies: {
    EUR: {
      name: "Euro",
      symbol: "€",
    },
  },
  idd: {
    root: "+4",
    suffixes: ["9"],
  },
  capital: ["Berlin"],
  altSpellings: [
    "DE",
    "Federal Republic of Germany",
    "Bundesrepublik Deutschland",
  ],
  region: "Europe",
  subregion: "Western Europe",
  languages: {
    deu: "German",
  },
  translations: {
    ara: {
      official: "جمهورية ألمانيا الاتحادية",
      common: "ألمانيا",
    },
    ces: {
      official: "Spolková republika Německo",
      common: "Německo",
    },
    cym: {
      official: "Federal Republic of Germany",
      common: "Germany",
    },
    deu: {
      official: "Bundesrepublik Deutschland",
      common: "Deutschland",
    },
    est: {
      official: "Saksamaa Liitvabariik",
      common: "Saksamaa",
    },
    fin: {
      official: "Saksan liittotasavalta",
      common: "Saksa",
    },
    fra: {
      official: "République fédérale d'Allemagne",
      common: "Allemagne",
    },
    hrv: {
      official: "Njemačka Federativna Republika",
      common: "Njemačka",
    },
    hun: {
      official: "Német Szövetségi Köztársaság",
      common: "Németország",
    },
    ita: {
      official: "Repubblica federale di Germania",
      common: "Germania",
    },
    jpn: {
      official: "ドイツ連邦共和国",
      common: "ドイツ",
    },
    kor: {
      official: "독일 연방 공화국",
      common: "독일",
    },
    nld: {
      official: "Bondsrepubliek Duitsland",
      common: "Duitsland",
    },
    per: {
      official: "جمهوری فدرال آلمان",
      common: "آلمان",
    },
    pol: {
      official: "Republika Federalna Niemiec",
      common: "Niemcy",
    },
    por: {
      official: "República Federal da Alemanha",
      common: "Alemanha",
    },
    rus: {
      official: "Федеративная Республика Германия",
      common: "Германия",
    },
    slk: {
      official: "Nemecká spolková republika",
      common: "Nemecko",
    },
    spa: {
      official: "República Federal de Alemania",
      common: "Alemania",
    },
    swe: {
      official: "Förbundsrepubliken Tyskland",
      common: "Tyskland",
    },
    urd: {
      official: "وفاقی جمہوریہ جرمنی",
      common: "جرمنی",
    },
    zho: {
      official: "德意志联邦共和国",
      common: "德国",
    },
  },
  latlng: [51, 9],
  landlocked: false,
  borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
  area: 357114,
  demonyms: {
    eng: {
      f: "German",
      m: "German",
    },
    fra: {
      f: "Allemande",
      m: "Allemand",
    },
  },
  flag: "🇩🇪",
  maps: {
    googleMaps: "https://goo.gl/maps/mD9FBMq1nvXUBrkv6",
    openStreetMaps: "https://www.openstreetmap.org/relation/51477",
  },
  population: 83240525,
  gini: {
    2016: 31.9,
  },
  fifa: "GER",
  car: {
    signs: ["DY"],
    side: "right",
  },
  timezones: ["UTC+01:00"],
  continents: ["Europe"],
  flags: {
    png: "https://flagcdn.com/w320/de.png",
    svg: "https://flagcdn.com/de.svg",
  },
  coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/de.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/de.svg",
  },
  startOfWeek: "monday",
  capitalInfo: {
    latlng: [52.52, 13.4],
  },
  postalCode: {
    format: "#####",
    regex: "^(\\d{5})$",
  },
};


// SINGLE COUNTRY
const singleCountryTemp = document.getElementById(
  "single-country-temp"
).content;
const elSingleCountryContainer = document.querySelector(
  ".country-single__container"
);

const renderSingleCountry = (country) => {
  const countryWrapper = singleCountryTemp.cloneNode(true);
  countryWrapper.querySelector(".country-single__flag").src = country.flags.png;
  countryWrapper.querySelector(".country-single__content-heading").textContent =
    country.name.common;
  countryWrapper.querySelector(
    ".country-single__data-native-name"
  ).textContent = country.name.nativeName.deu.common;
  countryWrapper.querySelector(".country-single__data-population").textContent =
    country.population;
  countryWrapper.querySelector(".country-single__data-region").textContent =
    country.region;
  countryWrapper.querySelector(".country-single__data-subregion").textContent =
    country.subregion;
  countryWrapper.querySelector(".country-single__data-capital").textContent =
    country.capital[0];
  countryWrapper.querySelector(".country-single__data-tld").textContent =
    country.tld[0];
  countryWrapper.querySelector(".country-single__data-currencies").textContent =
    Object.keys(country.currencies)[0];

  const languages = [];
  for (const key in country.languages) {
    languages.push(country.languages[key]);
  }
  countryWrapper.querySelector(".country-single__data-langs").textContent =
    languages.join("");
  const countryBorderList = countryWrapper.querySelector(
    ".country-single__borders-list"
  );

  const elBorderFragment = document.createDocumentFragment();
  country.borders?.forEach((border) => {
    const li = document.createElement("li");
    li.className = 'country-single__borders-item'
    const span = document.createElement("span");
    span.className = 'country-single__borders-text'
    span.textContent = border;
    li.append(span);
    elBorderFragment.append(li);
  });
  countryBorderList.append(elBorderFragment);

  elSingleCountryContainer.append(countryWrapper);
};


renderSingleCountry(singleData);