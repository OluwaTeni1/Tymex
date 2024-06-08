// gallery
document.querySelectorAll('.gallery-box img').forEach (image => {
    image.onclick = () => {
        document.querySelector('.zoom-img').style.display = 'block';
        document.querySelector('.zoom-img img').src = image.getAttribute('src');
    }
});
document.querySelector('.zoom-img span').onclick = () => {
    document.querySelector('.zoom-img').style.display = 'none';
};

//menu
var menuItems = document.getElementById('menuItems');
menuItems.style.maxHeight = '0px';

function menutoggle(){
    if(menuItems.style.maxHeight == '0px')
        {
            menuItems.style.maxHeight = '100%';
        }
        else
        {
            menuItems.style.maxHeight = '0px';
        }
}


//scroll
