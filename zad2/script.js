var TIME = 60000

function start() {
    let butts = document.getElementById('butts'),
        butt = document.createElement('button'),
        end = new Date().getTime() + TIME,
        el = document.createElement('h1')

    while (butts.hasChildNodes()) butts.removeChild(butts.firstChild);

    butt.innerHTML = "Restart"
    butt.setAttribute('onclick', "start()")

    el.setAttribute('id', 'el')
    document.body.appendChild(el)

    let timer = setInterval(() => {
        let now = new Date().getTime(),
            diff = end - now,
            el = document.getElementById("el")

        let seconds = Math.floor((diff % (1000 * 60)) / 1000),
            miliseconds = Math.floor(diff % (1000))

        if (diff < TIME / 2) {
            let r = (255 / (TIME / 2)) * diff,
                g = 255
            el.style = `color: rgb(${r},${g},0);`
        } else {
            let r = 255,
                g = (255 / (TIME / 2)) * (TIME - diff)
            el.style = `color: rgb(${r},${g},0);`
        }

        el.innerHTML = `${seconds}s ${miliseconds}ms`

        if (diff < 0) {
            clearInterval(timer)
            el.innerHTML = "Odliczanie zakończone ..."
            butts.appendChild(butt)
        }
    }, 1);
}