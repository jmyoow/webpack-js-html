import TextSign from './TextSign.js';

const textSign = new TextSign();

const condition = true;
// const condition = false;

const promise = new Promise((resolve, reject) => {
	if (condition) {
		resolve('성공!');
	} else {
		reject('실패!');
	}
});
promise
	.then(message => {
		console.log(message);
		textSign.elem.innerHTML = message;
		textSign.elem.dataset.state = 'success';
	})
	.catch(error => {
		console.log(error);
		textSign.elem.innerHTML = error;
		textSign.elem.dataset.state = 'failure';
	})
	.finally(() => {
		console.log('끝에 실행');
	});
