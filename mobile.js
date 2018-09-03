var icon = document.querySelectorAll('.box-shadow-menu')[0];
var menu = document.getElementById('nav');
if(!icon.addEventListener){
  icon.attachEvent("onclick", function(e){
    menu.style.display == 'none' ? menu.style.display = 'block' : menu.style.display = 'none';
  })
} else {
  icon.addEventListener('click', function(){ 
    menu.style.display == 'none' ? menu.style.display = 'block' : menu.style.display = 'none';
  });
}
