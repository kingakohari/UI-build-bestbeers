function loadEvent() {


    fetch("./public/data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data)

      document.getElementById("root").insertAdjacentHTML('beforeend', `
        <header>
            <p id="title">Best Beers</p>
            <span class="material-icons">menu</span>
        </header>
      `)

      data.cards.map(({title, sub, text}, i ) => document.getElementById('root').insertAdjacentHTML('beforeend', `
        <div class="beercard">
            <p class="number">${i+1}</p>
            <p class="name">${title}</p>
            <div class="basic-info">
                <p>${sub}</p>
                <p class="description">${text}</p>
            </div>   
            <button class="details-button">details <span class="material-icons arrow">arrow_forward</span></button>         
        </div>
        `))
      
    }).catch(function(err) {
        console.log('Fetch problem show: ' + err.message);
      });
}

window.addEventListener("load", loadEvent);