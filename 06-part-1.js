// const a = {
//  hello: "world",
//  num: 3
// }

// let newA = JSON.stringify(a);
// console.log(newA);
// JSON.parse(json: string);
// console.log(newA);

import camelCase from 'camelcase';
// console.log(camelCase('foo-bar'));


const result = document.querySelector('#result');
const input = document.querySelector('#input');

const onChange = (event) => {
	let inputValue = input.value;
	const newText = camelCase(inputValue);

	return result.innerHTML = newText;
}

input.addEventListener('blur', onChange);
