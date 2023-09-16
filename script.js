const dogImageDiv = document.getElementById('dogImage')
const dogbtn = document.getElementById('dogbtn')

const getNewDog = () => {
fetch('https://dog.ceo/api/breeds/image/random').then(Response => Response.json())
.then(json => {
    
    dogImageDiv.innerHTML = `<img src='${json.message}'  border-width: 20px
     height = 500 width = 500/>`

})
}
dogbtn.onclick =() => getNewDog()