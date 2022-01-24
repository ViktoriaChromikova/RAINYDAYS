const detailsJacket = document.querySelector(".API");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://www.viktoriachromikova.world/wp-json/wc/store/products/" + id;


async function getDetails(){
  //try {
      const response = await fetch(url);

      const data = await response.json();

    

        detailsJacket.innerHTML += `<image src=${data.images[0].src}>
                                    <h1>${data.name}</h1>
                                    <p>${data.short_description}</p>
                                    <div class="prices"${data.prices}</div>
                                    <div class="attribtes"${data.attributes}</div>
                                    `
      
 // } catch (error) {
    // overView.innerHTML = displayError("Lost in a galaxy far far away");
  //}

}
getDetails(url);