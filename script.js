// section 2-8
// getElementById() – select an element by id.

// const judul = document.getElementById('judul');
// judul.style.color = 'brown';
// judul.style.backgroundColor = 'pink';
// judul.innerHTML = 'fadlyani pohan';

// getElementsByTagName() – select elements by name

const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'green';
  p[i].style.color = 'white';
}

var h1 = document.getElementsByTagName('h1')[0];
h1.style.fontWeight = 'bold';

// getElementsByClassName()  – select elements by a tag name.
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Saya suka Ngoding';
p1[0].style.fontStyle = 'italic';

// querySelector()  – select elements by CSS selectors.
const p4 = document.querySelector('#b p');
p4.style.color = 'red';
p4.style.fontSize = '20 px';

// TRAVERSING THE DOM
// const itemList = document.querySelector('#b');

// Parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '	#964B00';
// console.log(itemList.parentNode.parentNode);

// // Parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '	#964B00';
// console.log(itemList.parentElement.parentElement);

// childnode
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'orange';

// firstchild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild );
// itemList.firstElementChild.textContent = 'Programming';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);
// previousElementSiblig;
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'purple';

// const newDiv = document.createElement('div');

// // add Class
// newDiv.className = 'status';

// // add id
// newDiv.id = 'single';

// // add atribut
// newDiv.setAttribute('title', 'Hello world');

// // create text node
// const newDivText = document.createTextNode('Hello World');

// newDiv.appendChild(newDivText);

// const container = document.querySelector('header #container');

// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '20px'
// container.insertBefore(newDiv, h1);

// var button =document.getElementById('button').addEventListener('clik',buttonClik)

// function buttonClik(e){
//   console.log(e.target)
//   console.log(e.target.id)
//   console(e.target.className)
// console.log(e.target.classList)
// varoutput = document.getElementById('output')
// output.innerHTML = '<h3>'+e.target.id+s'</h3>';
// }

// const div = document.createElement('div');
// div.innerText = 'Hello Worl';
// div.textContent = 'Hello Word 2';
// body.append(div);

// const div = document.querySelector('div');

// console.log(div.textContent);
// console.log(div.innerText);

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Fadly Pohan</em>';

const judul = document.getElementsByTagName('h1')[0];

// setAtribute
judul.setAttribute('name', 'fadly pohan');
const a = document.querySelector('section#a a');
