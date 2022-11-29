// TODO: add code here

// window.addEventListener("load", function() {
//     fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
//         return response.json()
//     }).then(function(data) {
//         console.log(data);
//     })
// })

window.addEventListener("load", function() {
    const fetchData = async () => {
        const response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
        const data = await response.json();
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
        for (i =0; i<data.length; i++) {
            container.innerHTML += `
            <div class="astronaut">
            <div class="bio">
               <h3>${data[i].firstName} ${data[i].lastName}</h3>
               <ul>
                  <li>Hours in space: ${data[i].hoursInSpace}</li>
                  <li>Active: ${data[i].active}</li>
                  <li>Skills: ${formatString(data[i].skills)}</li>
               </ul>
            </div>
            <img class="avatar" src="${data[i].picture}">
         </div>`
        }
    }
    fetchData();
});