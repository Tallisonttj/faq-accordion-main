let currentFaq = 0;
let faqItems = document.querySelectorAll('.faq-area');

faqItems.forEach((el, index) => {
    el.querySelector('.question-area').addEventListener('click', () => setFaq(index));
});

const setFaq = (index) => {
    if (index === currentFaq && faqItems[index].classList.contains('opened')) {
        faqItems[index].classList.remove('opened');
        faqItems[index].querySelector('.question-icon img').src = "assets/images/icon-plus.svg"; // Troca para o ícone de "plus"
        currentFaq = -1;
    } else {
        for (let item of faqItems) {
            item.classList.remove('opened');
            item.querySelector('.question-icon img').src = "assets/images/icon-plus.svg"; // Troca todos os ícones para "plus"
        }
        faqItems[index].classList.add('opened');
        faqItems[index].querySelector('.question-icon img').src = "assets/images/icon-minus.svg"; // Troca o ícone do FAQ clicado para "minus"
        currentFaq = index;
    }
};

/*currentFaq: Armazena o índice do FAQ atualmente aberto.

faqItems: Seleciona todos os elementos com a classe .faq-area.

Um evento de clique é adicionado a cada área de pergunta (.question-area). Quando uma pergunta é clicada, a função setFaq(index) é chamada.

setFaq(index): Esta função recebe o índice do FAQ clicado. Ela verifica se o FAQ clicado já está aberto. Se estiver aberto, fecha o FAQ. Caso contrário, fecha todos os outros FAQs e abre o FAQ clicado. Ele também atualiza o ícone correspondente para refletir se o FAQ está aberto ou fechado.*/