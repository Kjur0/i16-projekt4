const app = document.getElementById("app"),
    res = document.getElementById("res"),
    list = document.getElementById("list")

if (document.cookie !== []) {
    document.cookie.split(',').forEach((bisc) => {
        if (bisc == '') return

        let node = document.createElement("li"),
            textnode = document.createTextNode(bisc)

        node.appendChild(textnode)
        list.appendChild(node)
    })
}

app.onclick = () => {
    let str = document.getElementById("str"),
        bisc = document.cookie.split(',')

    if (str.value == '') return

    let node = document.createElement("li"),
        textnode = document.createTextNode(str.value)
    bisc.push(str.value)
    str.value = ''
    node.appendChild(textnode)
    list.appendChild(node)
    document.cookie = bisc
}

res.onclick = () => {
    let str = document.getElementById("str")

    while (list.hasChildNodes()) list.removeChild(list.firstChild)
    if (str.value !== '') str.value = ''
    document.cookie = '=[];Expires=Thu, 01 Jan 1970 00:00:00 UTC'
}