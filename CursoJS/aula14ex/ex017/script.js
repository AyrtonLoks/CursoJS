function gerar() {
    var numero = document.getElementById('numero')
    var tab = document.getElementById('tabuada')

    if (numero.value.length == 0) {
        window.alert('[ERRO] Insira um valor')

    } else {
        var num = Number(numero.value)
        tab.innerHTML = ''

        for (let c = 0; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    


}