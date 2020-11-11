
var button = document.querySelector('#btn');
var display = document.querySelector('.display-div');
var seed = ['1', '2', '3', '4', '5', '6', '7','8','9','A', 'B', 'C', 'D','E','F'];
button.addEventListener('click', colorGen, false); 
function colorGen () {
    var hashy = '#';
    for (var i = 0; i < 6 ; i++) {
        var index = Math.floor(Math.random() * seed.length)
        hashy += seed[index]
    }
    document.body.style.backgroundColor = hashy;
    display.textContent = hashy;
}


