const divSkinTag = document.querySelector('.my-skin')
const skinUrl = 'http://localhost:3000/api/v1/skin'
fetch(skinUrl)
.then( res => res.json() )
.then( skin => {
divSkinTag.innerHTML += `<img src=${skin[0].skin_url}>` 
} )

