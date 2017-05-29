var mass={};
var mass2 = {};

$.getJSON("package.json",function(data){
    mass = data;
})
$(document).ready(function() {
 $('#task1').change( function() {
     $("li.lilili").remove();
     if (+$('#task1').val()== 0) {
         var listEl = document.createElement('li');
         listEl.className='lilili';
         listEl.innerHTML = ('No elements for "'+$('#task1').val()+'"');
         $('ol').append(listEl);
     }
     for (key in mass) {
             if (+key <=  +$('#task1').val()) {
              var listEl = document.createElement('li');
                  listEl.className='lilili';
                  listEl.innerHTML = mass[key];
                  $('ol').append(listEl);
            }

        }
    })
});


$('#btn1').on('click', function() {
    $.ajax({
        type: "GET",
        url: '1.php',
        data: { num: $('#num').val()},
        success: function(data){
            alert( "Прибыли данные: " + data );
        }
    });
})
$('#btn2').on('click', function() {
    $.ajax({
        type: "POST",
        url: '2.php',
        data: {
            name: $('#name').val(),
            pass: $('#pass').val()
        },
        success: function(data){
            alert( "Прибыли данные: " + data );
        }
    });
})
$('#btn3').on('click', function() {
    if ($('#first').is(':checked')) {
    $.ajax({
        type: "POST",
        url: 'ajax/3.php',
        data: {},
        success: function(data){
            alert( "Прибыли данные: " + data );
        }
    });
}
else if ($('#second').is(':checked')) {
        $.ajax({
            type: "POST",
            url: 'ajax/4.php',
            data: {},
            success: function(data){
                alert( "Прибыли данные: " + data );
            }
        });
    }
})
$.getJSON("ajax/5.json",function(data){
    mass2 = data;
    console.log('shopperName: '+mass2.shopperName, 'shopperEmail: '+mass2.shopperEmail);
    for (var i=0; i<mass2.contents.length; i++) {
        console.log('productName: '+mass2.contents[i].productName)
    }

});
$.ajax({
    url: 'ajax/6.txt',
    success: function(data){
        $('#task6').append('<p><b>TASK 6.</b><br>'+data+'</p><br>');
    }
});