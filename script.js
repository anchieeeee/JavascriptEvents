const div = document.getElementById('kontener')
const fullName = document.getElementById('kontenerparagraph')
const fontSize = parseInt(getComputedStyle(fullName).fontSize);


const specialParagraph = document.getElementsByClassName('wyroznione')[0]

const article = document.getElementById('artykul');
const number = document.getElementById('liczba');

const randomizeBg = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const rgb = `rgb(${r}, ${g}, ${b})`
    div.style.backgroundColor = rgb
}

const numberInput = (e) => {
    article.style.width = (article.offsetWidth + 1) + 'px';
    if (e.key >= '0' && e.key <= '9') {
        number.textContent += e.key;
    }
}


div.addEventListener('mouseover', () => div.style.fontSize = fontSize * 2 + 'px')
div.addEventListener('mouseout', () => div.style.fontSize = fontSize + 'px')
div.addEventListener('click', randomizeBg)


specialParagraph.addEventListener('dblclick', () => specialParagraph.textContent = "Powiat Radomski")
specialParagraph.addEventListener('mouseover', () => console.log(specialParagraph.textContent))

article.addEventListener('keydown', numberInput)