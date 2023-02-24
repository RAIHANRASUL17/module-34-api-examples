// /*------------------ step-1------------------------*/ 
// const loadMeals= () =>{
//     fetch('https://themealdb.com/api/json/v1/1/search.php?s=fish')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
// // call function
// loadMeals ()


// /*------------------ step-2 ------------------------*/ 
// const loadMeals= () =>{
//     fetch('https://themealdb.com/api/json/v1/1/search.php?s=fish')
//     .then(res => res.json())
//     .then(data => console.log(data.meals))
// }
// // call function
// loadMeals ()



// /*------------------ step-3 ------------------------*/ 
// const loadMeals= () =>{
//     fetch('https://themealdb.com/api/json/v1/1/search.php?s=fish')
//     .then(res => res.json())
//     .then(data => displayMeals(data.meals))
// }

// const displayMeals= meals =>{
//     // console.log(meals)
//     /*step-1: container elements*/ 
//     meals.forEach(meal =>{
//         console.log(meal)
//     })
// }
// // call function
// loadMeals ()



/*------------------ step-4 ------------------------*/ 
const loadMeals= () =>{
    fetch('https://themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals= meals =>{
    // console.log(meals)
    /*-------step-1: get id container elements-------------*/ 
    const mealsContainer= document.getElementById('meals-container')
    meals.forEach(meal =>{
        console.log(meal)
        /*--------step-2: crate child(Create div) for each elements-------*/
        const mealDiv= document.createElement('div');
        
/*-----------step-3: set contain of the elements ------------*/
mealDiv.innerHTML= `
        <div class="card h-100">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
        `
/*-----------step-4: appendChild------------*/
mealsContainer.appendChild(mealDiv);

    })
}
// call function
loadMeals ()