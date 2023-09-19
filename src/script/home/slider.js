
var buttonDom = document.querySelectorAll('#slider button');
        var slide = document.querySelector('#slider .list-item');
        var time = 4000;
        buttonDom[0].onclick = function () {
            let items = document.querySelectorAll('.item');
            slide.prepend(items[items.length - 1])
            time = 8000;
        }
        buttonDom[1].onclick = function () {
            let items = document.querySelectorAll('.item');
            slide.appendChild(items[0]);
            time = 8000;

        }
        
        setInterval(() => {
            let items = document.querySelectorAll('.item');
            slide.appendChild(items[0]);
            time = 4000;

        },time);