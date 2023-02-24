// /*--------------------- step-1 ----------------------*/ 
// const loadUser = () => {
//     fetch('https://randomuser.me/api/?gender=female')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// // call function
// loadUser()


// /*--------------------- step-2 ----------------------*/ 
// const loadUser = () => {
//     fetch('https://randomuser.me/api/?gender=female')
//     .then(res => res.json())
//     // call displayUser
//     .then(data => displayUser(data))
// }


// const displayUser = user => {
// console.log(user)
// }

// // call function
// loadUser()


// /*--------------------- step-3 ----------------------*/ 
// const loadUser = () => {
//     fetch('https://randomuser.me/api/?gender=female')
//     .then(res => res.json())
//     // call displayUser
//     .then(data => displayUser(data))
// }


// const displayUser = user => {
// console.log(user.results[0].gender)
// }

// // call function
// loadUser()


// /*--------------------- step-4 ----------------------*/ 
// const loadUser = () => {
//     fetch('https://randomuser.me/api/?gender=female')
//     .then(res => res.json())
//     // call displayUser
//     .then(data => displayUser(data))
// }


// const displayUser = user => {
//     /*---gender part */ 
//     //3. get id
//     const genderTag= document.getElementById('gender')
//     genderTag.innerHTML= user.results[0].gender;
//      //1. console.log(user)
// //2. console.log(user.results[0].gender)

//  /*--- name part  --- */
//  const isName= user.results[0].name.first
//  document.getElementById('name').innerHTML= isName;
// console.log(user.results[0].name.first)
// }

// // call function
// loadUser()


// /*--------------------- step-5 ----------------------*/ 
// const loadUser = () => {
//     fetch('https://randomuser.me/api/?gender=female')
//     .then(res => res.json())
//     // call displayUser
//     .then(data => displayUser(data))
// }


// const displayUser = user => {
//     /*---gender part */ 
//     //3. get id
//     const genderTag= document.getElementById('gender')
//     genderTag.innerHTML= user.results[0].gender;
//      //1. console.log(user)
// //2. console.log(user.results[0].gender)

//  /*--- Full name part  --- */
//  const isName= user.results[0].name.first + ' ' + user.results[0].name.last;
//  document.getElementById('name').innerHTML= isName;
// console.log(user.results[0].name.first)
// }

// // call function
// loadUser()


// /*--------------------- step-6 ----------------------*/ 
// const loadUser = () => {
//     fetch('https://randomuser.me/api/?gender=female')
//     .then(res => res.json())
//     // call displayUser
//     .then(data => displayUser(data))
// }


// const displayUser = user => {
//     /*---gender part */ 
    
//     //3. get id
//     const genderTag= document.getElementById('gender')
//     genderTag.innerHTML= user.results[0].gender;
//     // //  1.
//     // console.log(user)
// // //2. 
// // console.log(user.results[0].gender)

//  /*---Title and Full name part  --- */
//  const isName=user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
//  document.getElementById('name').innerHTML= isName;
// console.log(user.results[0].name.first)
// }

// // call function
// loadUser()


/*--------------------- step-7 ----------------------*/ 
const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    // call displayUser
    .then(data => displayUser(data))
}


const displayUser = user => {
    /*---gender part */ 
    
    //3. get id
    const genderTag= document.getElementById('gender')
    genderTag.innerHTML= user.results[0].gender;
    // //  1.
    // console.log(user)
// //2. 
// console.log(user.results[0].gender)

 /*---Title and Full name part  --- */
 const isName=user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
 document.getElementById('name').innerHTML= isName;
console.log(user.results[0].name.first)

/*---profile picture part  --- */
console.log(user.results[0].picture.large)
const ImagesTag= document.getElementById('image')
ImagesTag.innerHTML= user.results[0].picture.large;

}

// call function
loadUser()