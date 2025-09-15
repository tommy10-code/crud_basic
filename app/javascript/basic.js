// {
//   let isDevMode = true;
//   const pElement = document.querySelector('p');
//   const buttonElement = document.querySelector('button');

//   buttonElement.addEventListener('click', () => {
//     if (!confirm('OK?')) {
//       return pElement.textContent ='is DevMode On'; 
//     }
//       if(isDevMode){
//       pElement.textContent = 'is DevMode Off'
//     } else {
//       pElement.textContent = 'is DevMode On'
//     }
//   });
// }

//!isDevMode !が否定なので、isDevModeが反対になるtrueだとfalseに

//confirmでOKでtrue キャンセルでfalse



//undefined 定義されていない値

// null

// typeof
console.log(typeof 5);               // number
console.log(typeof 'Hello');          // string
console.log(typeof [5, 8]);           // object
console.log(typeof {math: 80, english: 90}); // object
console.log(typeof true);             // boolean
console.log(typeof undefined);        // undefined
console.log(typeof null);             // object