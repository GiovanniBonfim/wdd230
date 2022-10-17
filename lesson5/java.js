const input = document.getElementById("favchap")
const button = document.querySelector("button")
const list = document.getElementsByClassName("list")

button.addEventListener('click', function() {
    if (input.value !== ""){
        
        const ListItem = document.createElement("li");
        const ItemText = document.createElement("h2");
        const ItemBtn = document.createElement("button");

        ListItem.appendChild(ItemText);
        ItemText.textContent = input.value;
        ListItem.appendChild(ItemBtn);
        ItemBtn.textContent = "❌";
        list.appendChild(ListItem);
    }
    })
    input.value = "";

    ItemBtn.addEventListener('click', function () {
        
    })
