let button = document.querySelector('.random')
let background = document.querySelector('.background')
function random() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
button.addEventListener('click', function(){
    document.body.style.backgroundColor = random();
    console.log(random())
})