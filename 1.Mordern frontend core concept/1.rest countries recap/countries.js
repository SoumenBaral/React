const loadCountries =  ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayData(data))
}
const displayData = countries => {
    console.log(countries[0]);
    const allCountryHtml = countries.map(country =>getCountryHtml(country))
    // console.log(allCountryHtml);
    const container = document.getElementById('countries');
    
    container.innerHTML = allCountryHtml.join(' ');
}
const getCountryHtml = ({name,flags,area,region})=>{
    return `
       <div class ='country'>
           <h1>${name.common}</h1>
           <p>Area: ${area}</p>
           <p>Region: ${region}</p>
           <img src="${flags.png}">
       </div>
    `
   }
// Option 1;
// const getCountryHtml = country=>{
//     //Option  1;
//     const {name, flags} = country;
//  return `
//     <div class ='country'>
//         <h1>${name.common}</h1>
//         <img src="${flags.png}">
//     </div>
//  `
// }


// original
// const getCountryHtml = country=>{
//     return `
//        <div class ='country'>
//            <h1>${country.name.common}</h1>
//            <img src="${country.flags.png}">
//        </div>
//     `
//    }
loadCountries();