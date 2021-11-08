const body = document.querySelector('body');
const ul = document.createElement('ul');
ul.setAttribute('class', 'list');
body.appendChild(ul);
document.body.style.textAlign = 'center'


for (let i = 1; i < 6; i++) {
    const li1 = document.createElement('li');
    ul.appendChild(li1);
    li1.innerText = `Rad ${i}`;
    const textStorlek = i * 10;
    li1.style.fontSize = `${textStorlek}px`
    let backHue = 25 * i + 100;
    li1.style.backgroundColor = `hsl(${backHue},95%, 85%)`;

}

document.querySelector('ul').style.listStyleType = 'none';
const ulCol = 'mediumslateblue';
const ulStil = 'bold';
ul.style.color = `${ulCol}`;
ul.style.fontWeight = `${ulStil}`;

document.querySelectorAll('li')[1].style.marginTop = "10px";
document.querySelectorAll('li')[2].style.marginTop = "18px";
document.querySelectorAll('li')[3].style.marginTop = "28px";
document.querySelectorAll('li')[4].style.marginTop = "38px";

const container = document.createElement('div')
document.body.appendChild(container)
container.style.display = 'flex';
// container.style.margin = 'auto';
container.style.border = '1px solid black';
container.style.justifyContent = "space-evenly"


for (let i = 1; i < 4; i++) {
    const ulArray = document.createElement('ul');
    ulArray.setAttribute('class', 'column' + i);
    container.appendChild(ulArray);

}

for (let i = 0; i < 10; i++) {
    const ul3 = document.querySelector('.column1')
    const liList = document.createElement('li');
    ul3.appendChild(liList)
    liList.innerText = i;
    ul3.style.backgroundColor = 'mediumslateblue';
    ul3.style.listStyleType = 'none';
    ul3.style.padding = '10px';
    ul3.style.width = '40px';
    ul3.style.textAlign = 'left';

    if (i % 2) {
        liList.style.backgroundColor = 'white';
    }

    else if (i === 4) {
        liList.style.backgroundColor = 'transparent';
        liList.style.color = 'white';
    }

    else {
        liList.style.backgroundColor = 'black';
        liList.style.color = 'white'
    }
}

for (let i = 9; i > -1; i--) {
    const ul4 = document.querySelector('.column2')
    const liList2 = document.createElement('li');
    ul4.appendChild(liList2)
    liList2.innerText = i;
    ul4.style.backgroundColor = 'mediumslateblue';
    ul4.style.listStyleType = 'none';
    ul4.style.padding = '10px';
    ul4.style.width = '40px';
    ul4.style.textAlign = 'center';

    if (i % 2 === 1) {
        liList2.style.backgroundColor = 'white';
        console.log(liList2)
    }

    else if (i === 8) {
        liList2.style.backgroundColor = 'transparent';
        liList2.style.color = 'white';
    }

    else {
        liList2.style.backgroundColor = 'black'
        liList2.style.color = 'white'
    }
}

let numbers = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

for (let i = 0; i < numbers.length; i++) {
    const ul5 = document.querySelector('.column3')
    const liList3 = document.createElement('li');
    ul5.appendChild(liList3);
    liList3.innerHTML = numbers[i]
    ul5.style.backgroundColor = 'mediumslateblue'
    ul5.style.listStyleType = 'none'
    ul5.style.padding = '10px'
    ul5.style.width = '40px'
    ul5.style.textAlign = 'right'

    if (i === 5) {
        liList3.style.backgroundColor = 'transparent';

    }
    else if (i % 2) {
        liList3.style.backgroundColor = 'white'
    }
    else {
        liList3.style.backgroundColor = "black";
        liList3.style.color = "white";
    }
}
