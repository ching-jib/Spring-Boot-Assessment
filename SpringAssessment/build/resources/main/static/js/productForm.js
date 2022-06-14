const productsControl = new ProductsController();

newItemForm.addEventListener("submit", (event) => {
  event.preventDefault();

  //Select the inputs
  const newItemNameInput = document.querySelector("#newItemNameInput");
  const newItemDescription = document.querySelector("#newItemDescription");
  const newStartDate = document.querySelector("#newStartDate");
  const newEndDate = document.querySelector("#newEndDate");

  // Get the values of the inputs - variable names to be same as MySQL columns
  const task = newItemNameInput.value;
  const description = newItemDescription.value;
  const startDate = newStartDate.value;
  const endDate = newEndDate.value;

  // Clear the form
  newItemNameInput.value = "";
  newItemDescription.value = "";
  newStartDate.value = "";
  newEndDate.value = "";

  // Add the task to the task manager
  //After we get all the values and object from the form, we will call the addItem method in the ProductsController class to perform the POST HTTP Request by calling the REST API provided by the backend
  productsControl.addItem(task, description, startDate, endDate);
});
