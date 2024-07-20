document.getElementById('calcularBoton').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoElemento = document.getElementById('resultado');
    const categoriaElemento = document.getElementById('categoria');
    
    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);  // Cálculo del IMC
        resultadoElemento.textContent = 'IMC: ' + imc;

        let categoria = '';
        if (imc < 18.5) {
            categoria = 'Bajo peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            categoria = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            categoria = 'Sobrepeso';
        } else if (imc >= 30) {
            categoria = 'Obesidad';
        }
        categoriaElemento.textContent = 'Categoría: ' + categoria;
    } else {
        resultadoElemento.textContent = 'Por favor ingresa valores válidos';
        categoriaElemento.textContent = '';
    }
});
