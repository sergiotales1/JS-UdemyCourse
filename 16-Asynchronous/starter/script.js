'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('brazil');
// getCountryData('usa');

/*
const getCountryAndNeighborhood = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    const [neighbor] = data.borders;

    if (!neighbor) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighborhood('brazil');
getCountryAndNeighborhood('spain');


// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // fetch(`https://restcountries.com/v2/name/${country}`)
  //   .then(response => {
  //     console.log(response);
  //     if (!response.ok)
  //       throw new Error(`Country not found (${response.status})`);
  //     return response.json();
  //   })
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) throw new Error('No neighbor found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => renderError('Something went wrong ' + err.message))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('brasil');
});

getCountryData('germany');



const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => response.json())
    .then(data => {
      if (data.city === undefined) throw new Error('Place not found');
      if (data.country === undefined)
        throw new Error('You exceed the api limit');
      console.log(`You are in ${data.city}, ${data.country}`);
      fetch(`https://restcountries.com/v2/name/${data.country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);


const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening!');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('i waited 2 seconds');
    return new wait(1);
  })
  .then(() => {
    console.log('i waited 1 second');
  });


const getPos = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPos()
  .then(res => console.log(res))
  .catch(err => console.log(err));

const whereAmI = function () {
  getPos()
    .then(res => {
      const { latitude: lat, longitude: lng } = res.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => response.json())
    .then(data => {
      if (data.city === undefined) throw new Error('Place not found');
      if (data.country === undefined)
        throw new Error('You exceed the api limit');
      console.log(`You are in ${data.city}, ${data.country}`);
      fetch(`https://restcountries.com/v2/name/${data.country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
whereAmI();

*/
let currentImg;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement('img');
    imgEl.src = imgPath;
    imgEl.addEventListener('load', () => {
      document.body.insertAdjacentElement('afterbegin', imgEl);
      resolve(imgEl);
    });
    imgEl.addEventListener('error', () => {
      reject(new Error(`image not found`));
    });
  });
};

// createImage('img/img-1.jpg')
//   .then(res => {
//     wait(2).then(() => {
//       res.style.display = 'none';
//       createImage('img/img-2.jpg').then(res => {
//         wait(2).then(() => {
//           res.style.display = 'none';
//         });
//       });
//     });
//   })
//   .catch(err => console.log(err));

let currImg;
createImage('img/img-1.jpg')
  .then(res => {
    console.log('img 1 loaded');
    currImg = res;
    return wait(2);
  })
  .then(() => {
    currImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(res => {
    currImg = res;
    return wait(2);
  })
  .then(() => {
    currImg.style.display = 'none';
  })
  .catch(err => console.log(err));
