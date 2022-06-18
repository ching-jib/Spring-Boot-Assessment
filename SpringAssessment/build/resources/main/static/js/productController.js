//Doing a Product web app, in product page to
//display the name, description, imageUrl, style, price, ..., ...,.....,....

const createToDoItem = (task, description, startDate, endDate) =>
  `
<tr>
    <td>${task}</td>
    <td>${description}</td>
    <td>${startDate}</td>
    <td>${endDate}</td>
</tr>
`;

class ItemController {
  constructor() {
    this._items = []; //create an array to store the details of product items
  }

  //method to add the items into the array
  addItem(task, description, startDate, endDate) {
    let productController = this;
    const formData = new FormData();
    formData.append("task", task);
    formData.append("description", description);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);

    fetch("http://localhost:8080/item/add", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        console.log(response.status);
        if (response.ok) {
          alert("On man! Another task to do, want to faint!");
        } else {
          throw Error(response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Guess it's fate that you couldn't add the task!");
      });
  }

  displayItem() {
    let toDoItemController = this;
    toDoItemController._items = [];

    fetch("http://127.0.0.1:8080/item/all")
      .then((resp) => resp.json())
      .then(function (data) {
        console.log("2. receive data");
        console.log(data);
        data.forEach(function (item, index) {
          const itemObj = {
            id: item.id,
            task: item.task,
            description: item.description,
            startDate: item.startDate,
            endDate: item.endDate,
          };
          toDoItemController._items.push(itemObj);
        });
        toDoItemController.renderProductPage();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderProductPage() {
    let toDoItemsList = [];

    for (let i = 0; i < this._items.length; i++) {
      const item = this._items[i];

      const itemList = createToDoItem(
        item.task,
        item.description,
        item.startDate,
        item.endDate
      );

      toDoItemsList.push(itemList);
    }

    //Join all the elements/items in my productHTMLList array into one string, and seperate by a break
    const listing = toDoItemsList.join("\n");
    document.querySelector("#todolist").innerHTML = listing;
  }
} //End of ProductsController class
