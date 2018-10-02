console.log('loaded favorites.js');
//adding a simple comment so I can create the PR
let fav = $('.far.fa-heart');
for (let i = 0; i < fav.length; i++){
    fav[i].addEventListener('click', function () {
        if(fav[i].style.color === '' || fav[i].style.color === 'black'){
            fav[i].style.color = 'red';
        }else {
            fav[i].style.color = 'black';
        }
        console.log(fav[i].style.color);
    })
}
