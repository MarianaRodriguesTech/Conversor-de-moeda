function Converter() {
    const taxaDeCambio = 5.05;    
    const valorReal = parseFloat(document.getElementById('real').value);
    const valorDolar = valorReal/ taxaDeCambio;
    document.getElementById('dolar').value = valorDolar.toFixed(2);
  }
  


const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
    //body.classlist é para criar uma classe no corpo
} )