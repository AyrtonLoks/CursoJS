function contar() {
    var inicio = document.getElementById('inicio')
    var num = Number(inicio.value)
    var fim = document.getElementById('fim')
    var num2 = Number(fim.value)
    var passo = document.getElementById('passo')
    var pas = Number(passo.value)
    var contagem = document.getElementById('contagem')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert ('[ERRO] Faltam dados!')
    } else {
        contagem.innerHTML = 'Contando: <br>'
        if(pas <= 0) {
            window.alert('Passo inválido! Considerando Passo = 1')
            pas = 1
        }
        if(num < num2) {
            while (num <= num2) {
                contagem.innerHTML += `${num} \u{1F449}`
                num += pas
            }
       } else {
            while (num >= num2) {
                contagem.innerHTML += `${num} \u{1F449}`
                num -= pas
        }   
       }
       contagem.innerHTML += `\u{1F64C}`
    }
}