
// /*------------------ step-4 ------------------------*/ 
// const loadMeals= () =>{
//     fetch('https://themealdb.com/api/json/v1/1/search.php?s=fish')
//     .then(res => res.json())
//     .then(data => displayMeals(data.meals))
// }

// const displayMeals= meals =>{
//     // step-1: get id container elements
//     const mealsContainer= document.getElementById('meals-container')
//     meals.forEach(meal =>{
//         // console.log(meal)
//         //  console.log(meal.strMeal)
//         console.log(meal.strMealThumb)
        
//         // step-2: crate child(Create div) for each elements
//         const mealDiv= document.createElement('div');
//         // // added class
//         // mealDiv.classList.add('col')
        
// // step-3: set contain of the elements
// mealDiv.innerHTML= `
//         <div class="card h-100">
//                     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title">${meal.strMeal}</h5>
//                       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                     </div>
//         `
//         // step-4: appendChild
// mealsContainer.appendChild(mealDiv);

//     })
// }
// // call function
// loadMeals ()



// /*------------------ step-5 ------------------------*/ 
// const loadMeals= () =>{
//     fetch('https://themealdb.com/api/json/v1/1/search.php?s=fish')
//     .then(res => res.json())
//     .then(data => displayMeals(data.meals))
// }

// const displayMeals= meals =>{
//     // step-1: get id container elements
//     const mealsContainer= document.getElementById('meals-container')
//     meals.forEach(meal =>{
//         // console.log(meal)
//         //  console.log(meal.strMeal)
//         console.log(meal.strMealThumb)
        
//         // step-2: crate child(Create div) for each elements
//         const mealDiv= document.createElement('div');
//         // // added class
//         // mealDiv.classList.add('col')
        
// // step-3: set contain of the elements
// mealDiv.innerHTML= `
//         <div class="card h-100">
//                     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title">${meal.strMeal}</h5>
//                       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                     </div>
//         `
//         // step-4: appendChild
// mealsContainer.appendChild(mealDiv);

//     })
// }


// // for search btn
// const searchMeals = () =>{
//     // console.log('btn-cliked')
//     // get id and set
//     const searchText= document.getElementById('search-field').value;
//     console.log(searchText)
// }
// // call function
// loadMeals ()





// /*------------------ step-6 ------------------------*/ 
// const loadMeals= (searchNow) =>{
//     const url= ` https://themealdb.com/api/json/v1/1/search.php?s=${searchNow} `
//     console.log(url)
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayMeals(data.meals))
// }

// const displayMeals= meals =>{
//     // step-1: get id container elements
//     const mealsContainer= document.getElementById('meals-container')
//     meals.forEach(meal =>{
//         // console.log(meal)
//         //  console.log(meal.strMeal)
//         console.log(meal.strMealThumb)
        
//         // step-2: crate child(Create div) for each elements
//         const mealDiv= document.createElement('div');
//         // // added class
//         // mealDiv.classList.add('col')
        
// // step-3: set contain of the elements
// mealDiv.innerHTML= `
//         <div class="card h-100">
//                     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title">${meal.strMeal}</h5>
//                       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                     </div>
//         `
//         // step-4: appendChild
// mealsContainer.appendChild(mealDiv);

//     })
// }


// // for search btn
// const searchMeals = () =>{
//     // console.log('btn-cliked')
//     // get id and set
//     const searchText= document.getElementById('search-field').value;
//     console.log(searchText)
//     // call loadMeals
//     loadMeals(searchText)
// }
// // call function
// loadMeals ('rice')



/*------------------ step-7 ------------------------*/ 
const loadMeals= (searchNow) =>{
    const url= ` https://themealdb.com/api/json/v1/1/search.php?s=${searchNow} `
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals= meals =>{
    // step-1: get id container elements
    const mealsContainer= document.getElementById('meals-container')
    /*------------------ for seaching -------------*/ 
    mealsContainer.innerText='';
    /*------------------ for seaching -------------*/ 
    meals.forEach(meal =>{
        // console.log(meal)
        //  console.log(meal.strMeal)
        console.log(meal.strMealThumb)
        
        // step-2: crate child(Create div) for each elements
        const mealDiv= document.createElement('div');
        // // added class
        // mealDiv.classList.add('col')
        
// step-3: set contain of the elements
mealDiv.innerHTML= `
        <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
        `
        // step-4: appendChild
mealsContainer.appendChild(mealDiv);

    })
}


// for search btn
const searchMeals = () =>{
    // console.log('btn-cliked')
    // get id and set
    const seachField= document.getElementById('search-field')
    const searchText= seachField.value;
    seachField.value='';
    
    console.log(searchText)
    // call loadMeals
    loadMeals(searchText)
}
// call function
loadMeals ('rice')