const itemControl = new ItemController();

plannerListForm.addEventListener("submit", (event) => {
  event.preventDefault();

  //Select the inputs
  const newItemTask = document.querySelector("#newTask");
  const newItemDescription = document.querySelector("#newDescription");
  const newItemStartDate = document.querySelector("#startDate");
  const newItemEndDate = document.querySelector("#endDate");

  // Get the values of the inputs - variable names to be same as MySQL columns
  const task = newItemTask.value;
  const description = newItemDescription.value;
  const startDate = newItemStartDate.value;
  const endDate = newItemEndDate.value;

  // Clear the form
  newItemTask.value = "";
  newItemDescription.value = "";
  newItemStartDate.value = "";
  newItemEndDate.value = "";

  // Add the task to the task manager
  //After we get all the values and object from the form, we will call the addItem method in the ProductsController class to perform the POST HTTP Request by calling the REST API provided by the backend
  itemControl.addItem(task, description, startDate, endDate);
});