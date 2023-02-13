//............SIDEBAR..........
//............SIDEBAR..........
const menuItem = document.querySelectorAll('.menu-item');


// remove active classlist.....
const removeActive = ()=>{
    menuItem.forEach(item => {
        item.classList.remove('active')        
    });
 }

// add active classlist.....
menuItem.forEach(item => {
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');

        if(item.id != 'notifice'){
            document.querySelector('.notification').style.display ='none'
        }else{
            document.querySelector('.notification').style.display ='block' 
            document.querySelector('#notifice .count').style.display='none'
        }
    })
})


//....................MESSAGE................
//....................MESSAGE................
const message = document.querySelector('#message');
const messageBox = document.querySelector('#message-box');
const messagetext = messageBox.querySelectorAll('.messagetext'); 
const messageSearch = document.querySelector('#message-search');

//searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    messagetext.forEach(user => {
        let name = user.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }else{
            user.style.display = 'none';
        }
    })
}
//search chat
messageSearch.addEventListener('keyup',searchMessage);
//hilight
message.addEventListener('click',()=>{

    messageBox.classList.add('box-sh');
    message.querySelector('.count').style.display='none'


    setTimeout(() => {
        messageBox.classList.remove('box-sh');
    }, 2000);

})


// ...................THEME CUSTOMIZTION......
// ............THEME CUSTOMIZTION......

const themeMenu = document.querySelector('#themeMenu');
const themBOx = document.querySelector('.theme')
const fontSizes = document.querySelectorAll('.choose-font-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg1');
const Bg2 = document.querySelector('.bg2');
const Bg3 = document.querySelector('.bg3');

//openmenu
const openThemeMenu = () => {
    themBOx.style.display =  'grid';
}

//closemenu
const closeThemeMenu = (e) => {
    if(e.target.classList.contains('theme')){
        themBOx.style.display = 'none';
    }
}
themBOx.addEventListener('click',closeThemeMenu);
themeMenu.addEventListener('click',openThemeMenu);

//remove active front
const removeSizeSelect = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

//change fonts
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelect();
        let fontSizes;
        size.classList.toggle('active');

        if(size.classList.contains('font1')){
            fontSizes = '10px';
            root.style.setProperty('--stk-top-left','5.4rem');
            root.style.setProperty('--stk-top-right','5.4rem');
        }else if(size.classList.contains('font2')){
            fontSizes = '13px';
            root.style.setProperty('--stk-top-left','5.4rem');
            root.style.setProperty('--stk-top-right','-7rem');
        }else if(size.classList.contains('font3')){
            fontSizes = '16px';
            root.style.setProperty('--stk-top-left','-2rem');
            root.style.setProperty('--stk-top-right','-17rem');
        }else if(size.classList.contains('font4')){
            fontSizes = '19px';
            root.style.setProperty('--stk-top-left','-5rem');
            root.style.setProperty('--stk-top-right','-25rem');
        }else if(size.classList.contains('font5')){
            fontSizes = '22px';
            root.style.setProperty('--stk-top-left','-10rem');
            root.style.setProperty('--stk-top-right','-33rem');
        }
        
    document.querySelector('html').style.fontSize = fontSizes;
    })

    document.querySelector('html').style.fontSize = fontSizes;
})

//remove active colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPalette => {
        colorPalette.classList.remove('active');
    })
}
//change colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();
        if(color.classList.contains('color1')){
            primaryHue = 252;
        }else if(color.classList.contains('color2')){
            primaryHue = 52;
        }else if(color.classList.contains('color3')){
            primaryHue = 352;
        }else if(color.classList.contains('color4')){
            primaryHue = 152;
        }else if(color.classList.contains('color5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})

//theme background
let lightColorLightnees;
let whiteColorLightnees;
let darkColorLightnees;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightnees);
    root.style.setProperty('--white-color-lightness',whiteColorLightnees);
    root.style.setProperty('--dark-color-lightness',darkColorLightnees);
}

Bg1.addEventListener('click', () => {
    //add active class
    Bg1.classList.add('active');
    //remove active
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightnees = '95%';
    whiteColorLightnees = '20%';
    lightColorLightnees = '15%';

    //add active class
    Bg2.classList.add('active');
    //remove active
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightnees = '95%';
    whiteColorLightnees = '10%';
    lightColorLightnees = '0%';

    //add active class
    Bg3.classList.add('active');
    //remove active
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});

// ................FIREND RQUEST BUTTON..............
const addBtn = document.querySelectorAll('#add');
const delbtn = document.querySelectorAll('#del');
 

addBtn.forEach(element => {
    element.addEventListener('click',()=>{
        element.parentElement.style.display='none' 
    })    
});

delbtn.forEach(element => {
    element.addEventListener('click',()=>{
        element.parentElement.parentElement.style.display='none'
    })
});


// WINDOW EVENT.....
window.addEventListener('scroll',()=>{
    themBOx.style.display= 'none'
    document.querySelector('.notification').style.display ='none'
})


//POPUP
// Get the modal
var modal = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("view-comment");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}