// /*--------------------- step-5: --------------------*/
// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         // call displayCountries
//         .then(data => displayCountries(data))
// }

// const displayCountries = countries => {
// const countriesContainer= document.getElementById('countries-container')

//     countries.forEach(country =>{
//         /*----------------------------*/
//         // console.log(country)
//         // // for countryName
//         // console.log(country.name.common) 
//         // for capital
//         console.log(country.capital)
//         /*----------------------------*/
//         // create countryDiv
//         const countryDiv= document.createElement('div');

        
//         countryDiv.innerHTML=  `

//         <h3>Name: ${country.name.common} </h3>
//         <p>Capital: ${country.capital ? country.capital[0] : 'No CAPITAL Bro!!'} </p>
//         `;
//         // appendChild on countriesContainer
//         countriesContainer.appendChild(countryDiv);

//     })
// }

// // call arrow function
// loadCountries()


// /*--------------------- step-6: --------------------*/
// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         // call displayCountries
//         .then(data => displayCountries(data))
// }

// const displayCountries = countries => {
// const countriesContainer= document.getElementById('countries-container')

//     countries.forEach(country =>{
//         /*----------------------------*/
//         // console.log(country)
//         // // for countryName
//         // console.log(country.name.common) 
//         // for capital
//         console.log(country.capital)
//         /*----------------------------*/
//         // create countryDiv
//         const countryDiv= document.createElement('div');
//         /*---------------------add classList for color and style---------------*/ 
//         countryDiv.classList.add('classListForColor')
//         /*---------------------add classList---------------*/
        
//         countryDiv.innerHTML=  `

//         <h3>Name: ${country.name.common} </h3>
//         <p>Capital: ${country.capital ? country.capital[0] : 'No CAPITAL Bro!!'} </p>
//         `;
//         // appendChild on countriesContainer
//         countriesContainer.appendChild(countryDiv);
//     })
// }

// // call arrow function
// loadCountries()




// /*--------------------- step-7: --------------------*/
// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         // call displayCountries
//         .then(data => displayCountries(data))
// }

// const displayCountries = countries => {
// const countriesContainer= document.getElementById('countries-container')

//     countries.forEach(country =>{
//         /*----------------------------*/
//         // console.log(country)
//         // // for countryName
//         // console.log(country.name.common) 
//         // // for capital
//         // console.log(country.capital)
//         /*----------------------------*/
//         // create countryDiv
//         const countryDiv= document.createElement('div');
//         /*---------------------add classList for color and style---------------*/ 
//         countryDiv.classList.add('classListForColor')
//         /*---------------------add classList---------------*/
        
//         countryDiv.innerHTML=  `

//         <h3>Name: ${country.name.common} </h3>
//         <p>Capital: ${country.capital ? country.capital[0] : 'No CAPITAL Bro!!'} </p>
//         <button onclick= "loadCountryDetails() "> Details </button>
//         `;
//         // appendChild on countriesContainer
//         countriesContainer.appendChild(countryDiv);
//     })
// }
// /*-----for button---------*/ 
// const loadCountryDetails= code => {
//     console.log('Display Country is coming')
// }

// // call arrow function
// loadCountries()



// /*--------------------- step-8: --------------------*/
// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         // call displayCountries
//         .then(data => displayCountries(data))
// }

// const displayCountries = countries => {
// const countriesContainer= document.getElementById('countries-container')

//     countries.forEach(country =>{
//         /*----------------------------*/
//         // console.log(country)
//         // // for countryName
//         // console.log(country.name.common) 
//         // // for capital
//         // console.log(country.capital)

// // for (step-7)specific country
// console.log(country.cca2)
//         /*----------------------------*/
//         // create countryDiv
//         const countryDiv= document.createElement('div');
//         /*---------------------add classList for color and style---------------*/ 
//         countryDiv.classList.add('classListForColor')
//         /*---------------------add classList---------------*/
        
//         countryDiv.innerHTML=  `

//         <h3>Name: ${country.name.common} </h3>
//         <p>Capital: ${country.capital ? country.capital[0] : 'No CAPITAL Bro!!'} </p>
//         <button onclick= "loadCountryDetails('${country.cca2}') "> Details </button>
//         `;
//         // appendChild on countriesContainer
//         countriesContainer.appendChild(countryDiv);
//     })
// }
// /*-----for button---------*/ 
// const loadCountryDetails= code => {
//     console.log('Display Country is coming', code)
// }

// // call arrow function
// loadCountries()


// /*--------------------- step-9: --------------------*/
// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         // call displayCountries
//         .then(data => displayCountries(data))
// }

// const displayCountries = countries => {
// const countriesContainer= document.getElementById('countries-container')

//     countries.forEach(country =>{
//         /*----------------------------*/
//         // console.log(country)
//         // // for countryName
//         // console.log(country.name.common) 
//         // // for capital
//         // console.log(country.capital)

// // for (step-7)specific country
// console.log(country.cca2)
//         /*----------------------------*/
//         // create countryDiv
//         const countryDiv= document.createElement('div');
//         /*---------------------add classList for color and style---------------*/ 
//         countryDiv.classList.add('classListForColor')
//         /*---------------------add classList---------------*/
        
//         countryDiv.innerHTML=  `

//         <h3>Name: ${country.name.common} </h3>
//         <p>Capital: ${country.capital ? country.capital[0] : 'No CAPITAL Bro!!'} </p>
//         <button onclick= "loadCountryDetails('${country.cca2}') "> Details </button>
//         `;
//         // appendChild on countriesContainer
//         countriesContainer.appendChild(countryDiv);
//     })
// }
// /*-----for button---------*/ 
// const loadCountryDetails= code => {
// // console.log('Display Country is coming', code)

//     // https://restcountries.com/v3.1/alpha/{code}
//     // make url with dynamic
//     const url= ` https://restcountries.com/v3.1/alpha/${code} `
//     console.log(url)
    
// }

// // call arrow function
// loadCountries()


/*--------------------- step-10: --------------------*/
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        // call displayCountries
        .then(data => displayCountries(data))
       
}



const displayCountries = countries => {
const countriesContainer= document.getElementById('countries-container')

    countries.forEach(country =>{
        /*----------------------------*/
        // console.log(country)
        // // for countryName
        // console.log(country.name.common) 
        // // for capital
        // console.log(country.capital)

// for (step-7)specific country
console.log(country.cca2)
        /*----------------------------*/
        // create countryDiv
        const countryDiv= document.createElement('div');
        /*---------------------add classList for color and style---------------*/ 
        countryDiv.classList.add('classListForColor')
        /*---------------------add classList---------------*/
        
        countryDiv.innerHTML=  `

        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No CAPITAL Bro!!'} </p>
        <button onclick= "loadCountryDetails('${country.cca2}') "> Details </button>
        `;
        // appendChild on countriesContainer
        countriesContainer.appendChild(countryDiv);
    })
}
/*-----for button---------*/ 
const loadCountryDetails= code => {
// console.log('Display Country is coming', code)

    // https://restcountries.com/v3.1/alpha/{code}
    // make url with dynamic
    const url= ` https://restcountries.com/v3.1/alpha/${code} `
    console.log(url)
    
    fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data)) 
    .then(data => showCountryDetails(data[0])) 
}
/*----------------------------*/ 
const showCountryDetails= country => {
    console.log(country)
    const detailsContainer= document.getElementById('country-detail')
    detailsContainer.innerHTML = `
    <h2>Country Datails</h2>
    <h3>Name:${country.name.common} </h3>
    <p>Capital:${country.capital ? country.capital[0] : 'No CAPITAL Bro!!'} </p>
    <img src = "${country.flags.png}">
    `
}
/*----------------------------*/ 

// call arrow function
loadCountries()