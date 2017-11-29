$(document).ready(function(){
$('#newquote').click(function(){
var color = ['#25282B','#363B3F','#E14D43','#69A8BB','#D7D7D8'];
var index = color[Math.floor(Math.random()*color.length)];
getRandomQuote();
});
});

function getRandomQuote(){
    var color = ['#25282B','#363B3F','#E14D43','#3456BC','#D7D7D8'];
    var index = color[Math.floor(Math.random()*color.length)];

    $.ajax({
        url: 'https://talaikis.com/api/quotes/random/' ,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            var quote=data.quote;
            var author = data.author;
            $('.quote #data').html(quote);
            $('.quote h4').html ("-" + author);
            $('body').css('background-color', index);
            $('.col').css('background-color', index);
            $('.socialmedia a').css('background-color', index);
            $('#newquote').css('color', '#fff');
            $('.color').css('color', index);
            $('#twitter').attr('href',"https://twitter.com/intent/tweet?text="+quote+" "+author);
        },
        error: function(err){
         $('.quote #data').html("Oops something went wrong");
        }
    });
}