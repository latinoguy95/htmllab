const currentYear = new Date().getFullYear();
document.getElementById("cyear").innerText = 2023;

const alertButton = document.getElementById('alertButton');
  alertButton.addEventListener('click', function() {
    alert('Welcome to my website!');
  });

document.getElementById("hoverAbout").onmouseover = () => {
    document.getElementById("hoverAbout").innerText = 'Click Me!';
};

document.getElementById("hoverAbout").onmouseleave = () => {
    document.getElementById("hoverAbout").innerText = 'About Me';
};

document.getElementById("hoverProjects").onmouseover = () => {
    document.getElementById("hoverProjects").innerText = 'Click Me!';
};

document.getElementById("hoverProjects").onmouseleave = () => {
    document.getElementById("hoverProjects").innerText = 'Projects';
};

document.getElementById("hoverContact") .onmouseover = () => {
    document.getElementById("hoverContact").innerText = 'Click Me!';
};

document.getElementById("hoverContact").onmouseleave = () => {
    document.getElementById("hoverContact").innerText = 'Contact';
};

document.getElementById('hoverService').onmouseover = () => {
    document.getElementById('hoverService').innerText = 'Click Me!';
};

document.getElementById('hoverService').onmouseleave = () => {
    document.getElementById('hoverService').innerText = 'Service Hours';
};

// Incrementing Button
let count = 0;
document.getElementById('btn-counter').onclick = () => {
    console.log(count);
    count = count + 1;
 
    document.getElementById('txt-counter').innerHTML = 'Number: ' + count
 
    //document.getElementById('txt-counter').className = '';
//If-else- Even/Odd
    if (count % 2 == 0) {
        document.getElementById('txt-counter').classList.add('even');
        document.getElementById('txt-counter').classList.remove('odd');
    } else {
        document.getElementById('txt-counter').classList.add('odd');
        document.getElementById('txt-counter').classList.remove('even');
    }
};


const orderedList = document.getElementById('numbers');

  for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    listItem.style.color = 'white';
    orderedList.appendChild(listItem);
  }