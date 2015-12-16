var counter = 0;


$(document).ready(function() {
	$('#container').append('<button class="generate">Generate</button>');

	$('#container').on('click', '.generate', generateClick);
	$('#container').on('click', '.delete', deleteClick);
	$('#container').on('click', '.change', changeClick);

});

function generateClick() {
	counter++;
	$('#container').append('<p>' + counter + '</p>');
	appendDom();
}

function changeClick() {
	$(this).parent().toggleClass('active');

}

function deleteClick() {
	$(this).parent().remove();
}

function appendDom() {
	$('#container').append('<div class="normal""></div>');
	var $el = $('#container').children().last();
	$el.append('<button class="delete">Delete</button>');
	$el.append('<button class="change">Change</button>');
}

