//alert('Hello, world!');
/*
export default say = function(name) {
    //return `Hello ${name}`;
    return 'Hello';
}
*/

const say = function(name) {
    window.addEventListener('load', function() {
        const message = document.createElement('div');
        message.innerHTML = `Hello, ${name}!`;
        message.className = 'Message';
        document.body.appendChild(message);
	});
}

export default say;