// Write your code here!

main.remove(); 

// const main = document.getElementbyId('main')
// main.remove();

const newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.setAttribute('id','victory');
newHeader.innerHTML = 'Janhavi is the champion';
