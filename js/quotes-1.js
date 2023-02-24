// /*-------------- step-1:- loadQoute Arrow Function------------------*/ 
// const loadQoute = () => {
//     // console.log('Check qoutes loading!!!!!')
//     fetch('https://api.kanye.rest/')
//         .then(res => res.json())
//         .then(data => console.log(data))
// }
// // call function
// loadQoute();


// /*-------------- step-2:- -----------------*/ 
// const loadQoute = () => {
//     // console.log('Check qu0tes loading!!!!!')
//     fetch('https://api.kanye.rest/')
//         .then(res => res.json())
//         // call displayQuote
//         .then(data => displayQuote(data))
// }

// const displayQuote = quote => {
//     console.log(quote)
// }

// // call function
// loadQoute();


// ///*-------------- step-3:- -----------------*/ 
// const loadQoute = () => {
//     // console.log('Check qu0tes loading!!!!!')
//     fetch('https://api.kanye.rest/')
//         .then(res => res.json())
//         // call displayQuote
//         .then(data => displayQuote(data))
// }

// const displayQuote = quote => {
//     // console.log(quote)
//     // get id
//     const blockQoute = document.getElementById('qoute')
//     // set innerHtml
//     blockQoute.innerHTML = quote.quote;
// }

// // call function
// loadQoute();



///*-------------- step-4:- -----------------*/ 
const loadQoute = () => {
    // console.log('Check qu0tes loading!!!!!')
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        // call displayQuote
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
    // console.log(quote)
    // get id
    const blockQoute = document.getElementById('qoute')
    // set innerHtml
    blockQoute.innerHTML = quote.quote;
}

// call function
loadQoute();