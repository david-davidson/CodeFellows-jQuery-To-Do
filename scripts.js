$(document).ready(function($) {
    $('form').submit(function() {
        if ($('input').val() !== '') {
            var newTask = $('input').val();
            var newLi = $('<li>' + newTask + '</li>');
            newLi.on('click', function() {
                $(this).remove(); // Attach the event handler *before* adding the element
            });
            $('ul').append(newLi);
            $('input').val('');
            return false; // So the change persists
        }
    });
    $('ul').sortable(); // Because what good is a to-do list that you can't sort? :)
});