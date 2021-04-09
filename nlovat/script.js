$('.jogos').click(function(){
    $('.menuLateral ul .itensjogos').toggleClass('mostra');
});
$('.produtos').click(function(){
    $('.menuLateral ul .itensprodutos').toggleClass('mostra');
});
$('.perfil').click(function(){
    $('.menuLateral ul .itensperfil').toggleClass('mostra');
});
$('.btnabre').click(function(){
    $('.menuLateral').toggleClass('mostra');
});
$('.btnfecha').click(function(){
    $('.menuLateral').toggleClass('mostra');
});
$('.jogos').click(function(){
    $('.menuLateral ul .seta1').toggleClass('gira');
});
$('.jogos').clickout(function(){
    $('.menuLateral ul .seta1').toggleClass('gira');
});
$('.produtos').click(function(){
    $('.menuLateral ul .seta2').toggleClass('gira');
});
$('.produtos').clickout(function(){
    $('.menuLateral ul .seta2').toggleClass('gira');
});
$('.perfil').click(function(){
    $('.menuLateral ul .seta3').toggleClass('gira');
});
$('.perfil').clickout(function(){
    $('.menuLateral ul .seta3').toggleClass('gira');
});

const $menuLateral = $('.menuLateral');
$(document).mouseup(e => {
    if(!$menuLateral.is(e.target)
        && $menuLateral.has(e.target).length === 0)
    {
        $menuLateral.removeclass('mostra');

    }
});
