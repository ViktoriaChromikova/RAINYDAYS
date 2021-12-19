const jacketForm = document.querySelector("#jacketForm");
function validateForm(){
    event.preventDefault();
    const blueColor= document.querySelector('#blue').checked;
    const greenColor= document.querySelector('#green').checked;
    const sizeSmall = document.querySelector('#small').checked;
    const sizeLarge = document.querySelector('#large').checked;
    if (blueColor || greenColor){ 
    } else{
        jacketForm.innerHTML += `<p>select color</p>`
    }
    if (sizeSmall || sizeLarge){ 
    } else{
        jacketForm.innerHTML += `<p>select size</p>`
    }
    if (blueColor || greenColor);(sizeSmall || sizeLarge)
        jacketForm.innerHTML += `<a href="viewcart.html" class="added">Item added in your shopping bag</a>`
 

}
jacketForm.addEventListener("submit", validateForm);


