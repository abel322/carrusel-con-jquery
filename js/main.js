let contenedor_img = $('.contenedor-img');
let img = contenedor_img.find('img').length;
let valor = contenedor_img.css('width',img*100+'%');
$('img').css('width',100/img+'%');
let prev = $('.contenedor-btn__prev');
let next = $('.contenedor-btn__next');

    $('img:last').insertBefore('img:first');
    contenedor_img.css({left:'-'+100+'%'})

function siguiente() {
    contenedor_img.animate({left:'-'+200+'%'},900,function () {
        $('img:first').insertAfter('img:last');
        contenedor_img.css({left:'-'+100+'%'})
    })
}
function anterior() {
    contenedor_img.animate({left:0},900,function () {
        $('img:last').insertBefore('img:first');
        contenedor_img.css({left:'-'+100+'%'})
    })
}

let reset = 0;
next.on('click',function() {
    siguiente();
    reset = 0;
})
prev.on('click',function() {
    anterior();
    reset = 0;
})

setInterval(() => {
    reset++;
    if (reset > 1) {
       siguiente(); 
    }
}, 3000);

