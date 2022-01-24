const url = "https://www.viktoriachromikova.world/wp-json/wc/store/products";

const overView = document.querySelector(".overview");

async function getJackets(){
    //try {
        const response = await fetch(url);

        const data = await response.json();

        data.forEach(function(jacket){

          overView.innerHTML += `<a href="viewmenwinter.html?id=${jacket.id}">
                                    <image src=${jacket.images[0].src}></a>`
        
   // } catch (error) {
      // overView.innerHTML = displayError("Lost in a galaxy far far away");
    //}
})
}
getJackets(url);