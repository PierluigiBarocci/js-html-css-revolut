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
