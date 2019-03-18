function clickEvent(){
    alert('Aduh!')
}

$('#add').on('click', function(e) {
    $('body').append('<button class="test"> Dengan jQuery </button>')
})

$('body').on('click', '.test', function(e){
alert('Aduh!');
})