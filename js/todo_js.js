window.onload = refresh;

function refresh() {
    var todoList={};
    var out='';
$.ajax({
    type: "POST",
    url: 'ajax/7/core/core.php',
    data: {'action' : 'init'},
    success: function(data) {
        todoList = JSON.parse(data);
        // console.log(todoList);
        for (key in todoList) {
            out += '<p><input type="checkbox" id="' + todoList[key].id + '" /><label for="' + todoList[key].id + '">' + todoList[key].head + '</label><p>' + todoList[key].body + '</p></p>'
        }
        $('#todo-list').append(out);
        $('#todo-btn').on('click',delF);
        $('#todo-btn-create').on('click',createF);
    }
});
}

function delF() {
    for (var i=0; i<$('#todo-list input').length;i++){
        if ($('#todo-list input').eq(i).is(':checked')) {
            console.log($('#todo-list input')[i].id);
            $.ajax({
                type: "POST",
                url: 'ajax/7/core/core.php',
                data: {
                    'action' : 'delete',
                    'id': $('#todo-list input')[i].id
                },
                success: function() {
                    alert('tcnm');
                }
            });
        }


    }
    $('#todo-list').empty();
    refresh()
}

function createF() {
    $.ajax({
        type: "POST",
        url: 'ajax/7/core/core.php',
        data: {
            'action': 'create',
            'head': $('#head').val(),
            'body': $('#body').val()
        },
        success: function () {
            $('#head').val('');
            $('#body').val('');
            $('#todo-list').empty();
            refresh();
        }
    });
}


