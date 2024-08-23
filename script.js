// script.js

const menuPratos = {
    segunda: [
        { image: 'segunda/frango.jpg', name: 'Frango' },
        { image: 'segunda/batatadoce', name: 'Batata Doce' },
        // Itens da segunda
        // Digitar entre os colchetes em todos os dias
        { image: 'diario/farofa.jpg', name: 'Farofa' },
        { image: 'diario/beterraba.jpg', name: 'Beterraba' },
        { image: 'diario/cenoura.jpg', name: 'Cenoura' },
        { image: 'diario/chuchu.jpg', name: 'Chuchu' },
        { image: 'diario/arroz.jpg', name: 'Arroz' },
        { image: 'diario/feijao.jpg', name: 'Feijão' },
        // Itens diários são servidos todos os dias no Self Service, por isto não são removidos
    ],
    terca: [
        { image: 'terca/petisco.jpg', name: 'Petisco de Carne' },
        { image: 'terca/pepino.jpg', name: 'Pepino' },
        // Itens da terca
        { image: 'diario/farofa.jpg', name: 'Farofa' },
        { image: 'diario/beterraba.jpg', name: 'Beterraba' },
        { image: 'diario/cenoura.jpg', name: 'Cenoura' },
        { image: 'diario/chuchu.jpg', name: 'Chuchu' },
        { image: 'diario/arroz.jpg', name: 'Arroz' },
        { image: 'diario/feijao.jpg', name: 'Feijão' },
    ],
    quarta: [
        { image: 'quarta/frango.jpg', name: 'Frango' },
        { image: 'quarta/batatadoce.jpg', name: 'Batata Doce' },
        // Itens da quarta
        { image: 'diario/farofa.jpg', name: 'Farofa' },
        { image: 'diario/beterraba.jpg', name: 'Beterraba' },
        { image: 'diario/cenoura.jpg', name: 'Cenoura' },
        { image: 'diario/chuchu.jpg', name: 'Chuchu' },
        { image: 'diario/arroz.jpg', name: 'Arroz' },
        { image: 'diario/feijao.jpg', name: 'Feijão' },
    ],
    quinta: [
        { image: 'quinta/petisco.jpg', name: 'Petisco de Carne' },
        { image: 'quinta/pepino.jpg', name: 'Pepino' },
        // Itens da quinta
        { image: 'diario/farofa.jpg', name: 'Farofa' },
        { image: 'diario/beterraba.jpg', name: 'Beterraba' },
        { image: 'diario/cenoura.jpg', name: 'Cenoura' },
        { image: 'diario/chuchu.jpg', name: 'Chuchu' },
        { image: 'diario/arroz.jpg', name: 'Arroz' },
        { image: 'diario/feijao.jpg', name: 'Feijão' },
    ],
    sexta: [
        { image: 'sexta/frango.jpg', name: 'Frango' },
        { image: 'sexta/batatadoce.jpg', name: 'Batata Doce' },
        // Itens da sexta
        { image: 'diario/farofa.jpg', name: 'Farofa' },
        { image: 'diario/beterraba.jpg', name: 'Beterraba' },
        { image: 'diario/cenoura.jpg', name: 'Cenoura' },
        { image: 'diario/chuchu.jpg', name: 'Chuchu' },
        { image: 'diario/arroz.jpg', name: 'Arroz' },
        { image: 'diario/feijao.jpg', name: 'Feijão' },
    ],
    sabado: [
        { image: 'sabado/frango', name: 'Frango' },
        { image: 'sabado/petisco.jpg', name: 'Petisco de Carne' },
        { image: 'sabado/batatadoce', name: 'Batata Doce' },
        { image: 'sabado/pepino.jpg', name: 'Pepino' },
        // Itens do sabado
        { image: 'diario/farofa.jpg', name: 'Farofa' },
        { image: 'diario/beterraba.jpg', name: 'Beterraba' },
        { image: 'diario/cenoura.jpg', name: 'Cenoura' },
        { image: 'diario/chuchu.jpg', name: 'Chuchu' },
        { image: 'diario/arroz.jpg', name: 'Arroz' },
        { image: 'diario/feijao.jpg', name: 'Feijão' },
    ],
    domingo: [
        { image: 'domingo/prato1.jpg', name: 'Prato 1' },
        { image: 'domingo/prato2.jpg', name: 'Prato 2' },
        // Itens do domingo
        { image: 'diario/farofa.jpg', name: 'Farofa' },
        { image: 'diario/beterraba.jpg', name: 'Beterraba' },
        { image: 'diario/cenoura.jpg', name: 'Cenoura' },
        { image: 'diario/chuchu.jpg', name: 'Chuchu' },
        { image: 'diario/arroz.jpg', name: 'Arroz' },
        { image: 'diario/feijao.jpg', name: 'Feijão' },
    ],
};

// Pegar o dia da semana
const diaAtual = new Date().getDay();
const diasDaSemana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
const today = diasDaSemana [diaAtual];

// Amostrar os itens do menu no dia
const menuContainer = document.getElementById('menu-container');
menuPratos[today].forEach((menuPrato) => {
    const menuPratoHTML = `
        <div class="menu-prato">
            <img src="imagens/${menuPrato.image}" alt="${menuPrato.name}">
            <h2>${menuPrato.name}</h2>
        </div>
    `;
    menuContainer.insertAdjacentHTML('beforeend', menuPratoHTML);
});