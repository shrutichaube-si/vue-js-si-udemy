document.addEventListener("DOMContentLoaded",function(){
    fetch("players.json")
    .then(response => response.json())
    .then(data =>{
        const jsonContainer = document.getElementById("json-container");
            jsonContainer.textContent = JSON.stringify(data, null, 2);

    })
    .catch(error =>{
        console.error("Error fetching JSON:",error);
    });
});