
function item(){

    const val = document.getElementById("search-filed");
    server(val.value)
    document.getElementById("search-filed").value = "";
    // console.log(val.value)
}



function server(data) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
        .then(res => res.json())
        .then(data => display(data)).catch((er) => {
            console.log("Network Error")

            const dorlam = document.getElementById("error")
            
            const div = document.createElement("div");
            div.innerHTML = `
            
                <h1> Not found your items </h1>
            `
            dorlam.appendChild(div)
        })
}


function display(info) {

    const main_container = document.getElementById("main-container")
    

    info['meals'].forEach(item => {
        
        console.log(item)
        const main_div = document.createElement("div")
        main_div.classList.add("main_div")
        main_div.classList.add("col-sm-12")
        main_div.classList.add('col-lg-4')




        const div1 = document.createElement("div")
  

        div1.innerHTML = `
        
            <img class="pic" src="${item.strMealThumb}"/>
        `

        const div2 = document.createElement('div')


        div2.innerHTML = `
            <p><b>Id:</b>${item.idMeal} </p>
            <p><b>Cetagory:</b> <br>${item.strCategory}</p>
            <p><b>Area:</b> <br>${item.strArea}</p>
            <p><b>Des:</b><br>${item. strInstructions.slice(0,40)}</p>
        
        `

        main_div.appendChild(div1)
        main_div.appendChild(div2)
        main_container.append(main_div)
   
    });
}

function single(pic,id,cetagory,description,area,meal){
    
    console.log(id,cetagory)
    const contaner = document.getElementById("products");

    const div = document.createElement("div");
    div.classList.add('box')
    div.innerHTML = `

        <img class="picture" src="${pic}"/>
        <P>Id      : ${id}</p>
        <p>Cetagory: ${cetagory}</p>
        <p>Description:${description}</p>
        <p>Area:${area}</p>
        <p>Meal:${meal}</p>
    
    `
    contaner.appendChild(div)

}