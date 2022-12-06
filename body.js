const height = document.getElementById("height")
const width = document.getElementById("width")
const heightAvail = document.getElementById("heightavail");
const pixel = document.getElementById("pixel")
const yourHeight = (screen.height)
const yourWidth = (screen.height)
const availHeight = (screen.availHeight)
const pixelDepth = (screen.pixelDepth)

function getInfo() {
    height.innerText = yourHeight
    width.innerText = yourWidth
    heightAvail.innerText = availHeight
    pixel.innerText = pixelDepth
}