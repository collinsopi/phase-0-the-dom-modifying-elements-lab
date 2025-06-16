const mainElement = document.getElementById("main")
mainElement.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = "Collins is the champion"
document.body.appendChild(newHeader)