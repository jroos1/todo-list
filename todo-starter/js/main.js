$(document).ready(function(){

	var count = 0;

	$('#new').submit(addNewItem);

	$('#todos').on('click', '.remove', removeItem);

	$("#todos").on('click', '.edit', editItem);

	$('#todos').on('submit', '.editor', saveItem);

	function saveItem(event) {
		event.preventDefault();

		var itemText = $(this).children('input').val();

		var listItem = $(this).parent();

		newEditedHTML = '<span class="item">' + itemText + '</span><a class="edit">Edit</a><a class="remove">Remove</a>';

		listItem.html(newEditedHTML);
	}

	function editItem() {
		var itemText = $(this).siblings('.item').html();

		console.log(itemText);

		var listItem = $(this).parent();

		var newEditHTML = '<form class="editor"><input value="' + itemText + '"></form>';

		listItem.html(newEditHTML);

		listItem.find('input').focus();
	}

	function removeItem() {

		$(this).parent().remove();

		//update Count

	}

	function addNewItem(event) {
		event.preventDefault();
		
		var newItem = $('#newItem').val();

		var newHTML = '<li><span class="item">' + newItem + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>';
	
		$('#todos').append(newHTML);

		//update count

		$('#newItem').val('');
	}

});