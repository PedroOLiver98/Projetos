/*
<h2>Cardapio do Dia</h2>
<h3>Segunda-feira</h3>
<section>
    <ul>
    <li>Arroz</li>
    <li>Feijão</li>
    <li>Salada</li>
    </ul>

    <figure>
        <img src="img/img_01.png" alt="feijoada">
    </figure>
</section>
*/

const main = document.querySelector('main'); //Selecionar a tag main
    main.innerHTML="<h2> Cardapio do dia </h2>";


const diaDaSemana = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sabado']

const hoje = new Date().getDay(); //Date: Informa a data e getDay(): Informa qual dos 7 (de 0 a 6)

const diaAtual = diaDaSemana[hoje]
    alert(diaAtual)