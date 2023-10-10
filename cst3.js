var res=fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((value)=>bar(value))
var container=document.createElement("div");
container.className="container"
var row=document.createElement("div");
row.className="row"
container.append(row);

function bar(value){
    console.log(value);
    for(var i=0;i<value.length;i++){
        row.innerHTML+=`<div class="card border-primary mb" style="max-width: 22rem;">
        <h1 class="card-header">${value[i].subregion}</h1>
        <div class="card-body">
        <img src=${value[i].flags.png} alt="https://flagcdn.com/w320/pf.png">
          <h5 class="card-title">Capital:${value[i].capital}</h5>
          <h5 class="card-text">Region:${value[i].region}</h5>
        </div>
      </div>`
    }
    document.body.append(container)
}