//  information Image
var avatar = document.getElementById('avatar');
var imagese = document.getElementsByClassName('img-infor');
for(let i=0; i<imagese.length; i++){
    imagese[i].onclick = () => {
        avatar.src = imagese[i].src;
    }
}