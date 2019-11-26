// Qui scrivo le condizioni per aprire e chiudere le due parti dell'esercizio

$('#closingButton').click(function(){
    if ($('#close:visible').length > 0) {
        $('#close').slideUp(2000);
        $('#esercizio').slideDown(2000);
        $('#closingButton').html('Torna alla pagina in Bootstrap');
    } else {
        $('#close').slideDown(2000);
        $('#esercizio').slideUp(2000);
        $('#closingButton').html('Vai all\'esercizio');
    }
});

// il ragionamento è simile a quello del sito a cui si riferisce:
// Passa sopra un link, apri la sua tendina e anche se te ne vai lascia la tendina aperta, si puó chiudere solo cliccando in qualsiasi altro posto; nel momento in cui invece passo poi sopra un altro link, la tendina precedente si chiude di botto e si apre quella nuova, e via dicendo...

$('.dropdown').mouseenter(function(){
    if(!$(this).children('.dropdown-list').is(':visible')) {
        $('.dropdown-list').hide();
        $(this).children('.dropdown-list').slideDown();
    }
});

$('body').click(function(){
    $('.dropdown-list').slideUp();
})
