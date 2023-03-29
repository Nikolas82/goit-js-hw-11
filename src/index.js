import './css/styles.css';

import Notiflix from 'notiflix';


















// import { fetchCountries } from './fetchCountries';

// const DEBOUNCE_DELAY = 300;

// const inputEl = document.querySelector('#search-box');
// const listEl = document.querySelector('.country-list');
// const divEl = document.querySelector('.country-info');

// inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

// function onSearch() {
//   const searchCountry = inputEl.value.trim();

//   if(searchCountry === '' || searchCountry.includes(' ')){
//     listEl.innerHTML = '';
//     divEl.innerHTML = '';
// return;
//   }

//   fetchCountries(searchCountry)
//     .then(countries => renderMarkup(countries))
//     .catch(error => {
//       console.log(error);
//       listEl.innerHTML = '';
//     divEl.innerHTML = '';
//       Notiflix.Notify.failure('Oops, there is no country with that name');
//     });
// }

// function renderMarkup(countries) {
//   console.log(countries);

//   if (countries.length === 0) {
//     listEl.innerHTML = '';
//     divEl.innerHTML = '';
//   } else if (countries.length === 1) {
//     const {
//       name: { official },
//       flags: { svg },
//       capital,
//       population,
//       languages,
//     } = countries[0];

//     const countryLanguage = Object.values(languages).join(', ');

//     const markup = `
//       <h1><img src="${svg}"><span>${official}</span></h1>
//       <p><b>Capital</b>: ${capital}</p>
//       <p><b>Population</b>: ${population}</p>
//       <p><b>Languages</b>: ${countryLanguage}</p>
//     `;

//     listEl.innerHTML = '';
//     divEl.innerHTML = markup;
//   } else if (countries.length >= 2 && countries.length <= 10) {
//     const markup = countries
//       .map(({ name: { official }, flags: { svg } }) => {
//         return `
//           <li>
//             <img src="${svg}"  >
//             <p>${official}</p>
//           </li>
//         `;
//       })
//       .join('');

//     listEl.innerHTML = markup;
//     divEl.innerHTML = '';
//   } else {
//     listEl.innerHTML = '';
//     divEl.innerHTML = '';
//     Notiflix.Notify.info(
//       'Too many matches found. Please enter a more specific name.'
//     );
//   }
// }
