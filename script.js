// TODO: add code here

// window.addEventListener("load", function() {
//     fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
//         return response.json()
//     }).then(function(data) {
//         console.log(data);
//     })
// })

window.addEventListener("load", function() {
    let data;
    const fetchData = async () => {
        const response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
        data = await response.json();
        console.log(data);

        const container = document.getElementById("container");
        function formatString(array) {
            result = "";
            for (let i = 0; i <array.length; i++) {
                if (i < array.length-1) {
                    result+=`${array[i]}, `
                } else {
                    result+= `${array[i]}`
                }
            }
            return result
        }
        for (element of data) {
            container.innerHTML += `
            <div class="astronaut">
            <div class="bio">
               <h3>${element.firstName} ${element.lastName}</h3>
               <ul>
                  <li>Hours in space: ${element.hoursInSpace}</li>
                  <li>Active: ${element.active}</li>
                  <li>Skills: ${formatString(element.skills)}</li>
               </ul>
            </div>
            <img class="avatar" src="${element.picture}">
         </div>`
        }
    }
    fetchData();
});