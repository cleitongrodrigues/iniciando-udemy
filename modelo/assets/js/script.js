function escopo(){
    const form = document.querySelector('.form');

    function Calculaimc(imc){
        imc.preventDefault();
        const peso = form.querySelector('peso')
        const altura = form.querySelector('altura');
        const resultado = peso/(altura*altura);
    }
    console.log(resultado)
}