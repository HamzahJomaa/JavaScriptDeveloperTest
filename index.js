let categories = ["cat1","cat2","cat3"]



fetch(`https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=["cat1","cat2","cat3"]`)
    .then(response => response.json())
    .then(data => {
        const categoryElement = document.getElementById("categories")


        let users = data
        renderElements(users)


        categories.map(element=> {
            let tempDiv = document.createElement("div");
            tempDiv.classList.add("cat");
            tempDiv.innerText = element
            categoryElement.appendChild(tempDiv)
        })


        const cats = document.querySelectorAll(".cat")
        for (let i = 0; i < cats.length; i++) {
            cats[i].addEventListener('click', function (event) {
                if (document.getElementsByClassName("active").length > 0 ){
                    const active = document.querySelector(".active")
                    active.classList.remove("active")
                }
                cats[i].classList.add("active")
                const filtered = users.filter(e => e.category === event.target.innerText)
                renderElements(filtered)

            });
        }
    })



const renderElements = (users) => {
    const userElement = document.getElementById("users")
    userElement.innerHTML = ""
    users.map(element=>{
        let avatar = element.fname.charAt(0) + element.lname.charAt(0)
        let tempDiv = document.createElement("div");
        tempDiv.classList.add("user");
        tempDiv.innerHTML = `
            <div class="left">
            <h2 class="avatar">${avatar}</h2>
            <h1 class="name">${element.fname} ${element.lname}</h1>
            </div>
            <div class="right">
                <h3> ${element.category} </h3>
            </div>
        `
        userElement.appendChild(tempDiv)
    })
}