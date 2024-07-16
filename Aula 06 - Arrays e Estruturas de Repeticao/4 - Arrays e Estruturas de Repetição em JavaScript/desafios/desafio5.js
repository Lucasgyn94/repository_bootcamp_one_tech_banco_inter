
function soma(numero) {
    if (numero === 0) {
        return 0;
    }
    else {
        return numero + soma(numero - 1);
    }
}

(function() {
    console.log(soma(10));
})();