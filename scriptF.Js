function Contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'impossivel contar!'
        //window.alert('[ERRO] falta dados!')
    } else {
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! considere Passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}