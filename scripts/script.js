var txtnum = document.getElementById('numero');
var res = document.getElementById('res');

function verificar() {
    if (Number(txtnum.value) % 2 == 0) {
        res.innerHTML = `<p>O número é PAR!</p>`;
    } else {
        res.innerHTML = `<p>O número é IMPAR!</p>`;
    }
}