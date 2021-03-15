axios.get("https://api.hnpwa.com/v0/newest/1.json")
    .then(function (response) {
        createListItem(response);
    })
    .catch(function (error) {
        console.log(error);
    });

//Create List Item
//Add  to DOM
function createListItem(response) {
    response.data.forEach(listItem => {

        //Create List Item
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item")
        li.style.padding = "20px"
        // li.innerHTML = listItem.title;

        //Create Badge & anchor;
        var span = document.createElement("span");
        span.setAttribute("class", "badge bg-danger")
        span.innerHTML = listItem.points;
        span.style.marginRight = "15px"

        var anchor = document.createElement("a");
        anchor.setAttribute("href", listItem.url);
        anchor.setAttribute("target", "__blank");
        anchor.innerHTML = listItem.title;
        anchor.style.color = "#000"
        anchor.style.fontSize = "18px"

        anchor.prepend(span)
        li.appendChild(anchor)


        document.querySelector(".list-group").appendChild(li);
    });
}