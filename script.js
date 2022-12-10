function zad(nr) {
    let butts = document.getElementById('butts'),
        frame = document.createElement("iframe"),
        butt = document.createElement("button")

    while (butts.hasChildNodes()) butts.removeChild(butts.firstChild)

    frame.setAttribute('src', `zad${nr}`)
    frame.style = "width:100%;height:500px"
    frame.setAttribute('id', 'frame')
    document.body.appendChild(frame)
    
    butt.innerHTML = "Powrót"
    butt.setAttribute('onclick', "back()")
    butts.appendChild(butt)
}
function back() {
    let butts = document.getElementById('butts'),
        frame = document.getElementById('frame'),
        butt1 = document.createElement("button"),
        butt2 = document.createElement("button")

    while (butts.hasChildNodes()) butts.removeChild(butts.firstChild)
    frame.remove()

    butt1.innerHTML = "Zadanie 1"
    butt1.setAttribute('onclick', "zad(1)")
    butt2.innerHTML = "Zadanie 2"
    butt2.setAttribute('onclick', "zad(2)")
    butts.appendChild(butt1)
    butts.appendChild(butt2)
}