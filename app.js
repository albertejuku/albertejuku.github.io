// $(document).ready(function(){
//     // .close, .open, .navigation
//     $('.open').click(function(){
//         $('.navigation').toggle();
//         $('.open').hide()
        
//     })

//     $('.close').click(function(){
//         $('.navigation').toggle();
//         $('.open').show()
//     })
// })


let open = document.getElementsByClassName('open')[0];
let close = document.getElementsByClassName('close')[0];
let nav = document.getElementsByClassName('navigation')[0];


open.addEventListener('click', function(){
        nav.style.left = '0'
        open.style.display = 'none'
        nav.style.boxShadow = '1px 5px 12px black, 0 5px 12px black'
})
close.addEventListener('click', function(){
    nav.style.left = '-85vw'
    open.style.display = 'block'
    nav.style.boxShadow = ''
})
n = document.getElementsByClassName('links')[0];
for(let i = 0; i < n.children.length; i++){
    elem = n.children[i];
    elem.addEventListener('click', function(){
        alert(this.children[0].innerHTML)
    })
}