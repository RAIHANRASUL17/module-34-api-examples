// /*--------------------- step-1: --------------*/ 
// const  loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     }
//     // call arrow function
//     loadCountries ()


//     /*--------------------- step-2: --------------*/ 
// const  loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     // call displayCountries
//     .then(data => displayCountries(data))
//     }

// const displayCountries = counrities =>{
//     console.log(counrities);
// }

//     // call arrow function
//     loadCountries ()


// /*--------------------- step-3: --------------*/
// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         // call displayCountries
//         .then(data => displayCountries(data))
// }

// const displayCountries = countries => {
// const countriesContainer= document.getElementById('countries-container')
//     // console.log(counrities);
//     for( const country of countries){
//         console.log(country)
//     }
// }

// // call arrow function
// loadCountries()


// /*--------------------- step-4: for samethines 0f step 3 to use forEach--------------*/
// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         // call displayCountries
//         .then(data => displayCountries(data))
// }

// const displayCountries = countries => {
// const countriesContainer= document.getElementById('countries-container')
//     // console.log(counrities);
//     // for( const country of countries){
//     //     console.log(country)
//     // }
    
//     countries.forEach(country =>{
//         console.log(country)
//     })
// }

// // call arrow function
// loadCountries()


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
//         console.log(country)
//         // create countryDiv
//         const countryDiv= document.createElement('div');
//         countryDiv.innerHTML=  `
//         <h3>Name: </h3>
//         `;
//         // appendChild on countriesContainer
//         countriesContainer.appendChild(countryDiv);

//     })
// }

// // call arrow function
// loadCountries()



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
//         // create countryDiv and set innerHTML
//         const countryDiv= document.createElement('div');       
//         countryDiv.innerHTML=  `

//         <h3>Name: ${country.name.common} </h3>
//         <p>Capital: ${country.capital} </p>
//         `;
//         // appendChild on countriesContainer
//         countriesContainer.appendChild(countryDiv);

//     })
// }

// // call arrow function
// loadCountries()


/*--------------------- step-5: --------------------*/
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
        // for capital
        console.log(country.capital)
        /*----------------------------*/
        // create countryDiv and set innerHTML
        const countryDiv= document.createElement('div');
        countryDiv.innerHTML=  `

        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No CAPITAL Bro!!'} </p>
        `;
        // appendChild on countriesContainer
        countriesContainer.appendChild(countryDiv);

    })
}

// call arrow function
loadCountries()
