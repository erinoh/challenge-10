$(document).ready(function(){

var arrayOfTasks = [];  //creates the array

	$("#add_task").submit(function(event){ //on submit of the add task form, do this thing
		event.preventDefault(); //don't refresh
		var enteredTaskText = $("#task_name").val(); //grab the value of the task name text field and set it equal to enteredTaskText
		arrayOfTasks.push(enteredTaskText); //adds enteredTaskText to the end of the array
		$("#task_list").empty(); //empties the whatever is inside the html element with the id of task_list 
		this.reset();

		$.each(arrayOfTasks, function(index, task) { //for each item in the array, do this thing (# in the array, text of that item)
			$("#task_list").append("<li>" + (index + 1) + ". " + task + "</li>"); //build an html list item and append it to the task list
		 });

	})

	$("#remove_task").submit(function(event){  
		event.preventDefault();
		var enteredTaskNumber = $("#task_num").val();
		arrayOfTasks.splice(enteredTaskNumber - 1, 1);  //removes the entered number - 1 from the array
		$("#task_list").empty();
		this.reset();

		$.each(arrayOfTasks, function(index, task) { 
			$("#task_list").append("<li>" + (index + 1) + ". " + task + "</li>");
		 });
	})



	// 









	// var myArr = [],  //create array
	// 	taskname = $('#taskname').val(), //set taskname variable to equal whatever's put in #taskname and return the value?
	// 	number = $('#number').val();  //set number variable to equal whatever's put in #number and return the value?


	
	// myArr.push(taskname) //add taskname submission to the end of myArr

	// //print the value put into taskname on the page and add myArr number + 1 before it

	// myArr.splice(myArr[number -1], 1) //remove the number task from the array







	// $.each (myArr, function(index, task) {
	// 	console.log(index + 1, value)
	// })


	// $('form').submit(function(event) {
		
	// 	document.write(#task_list)  //tell it to print down below

	// 	event.preventDefault();  //stops form from submitting
	// }

	

});


