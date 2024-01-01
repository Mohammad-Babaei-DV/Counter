



let button = document.querySelectorAll('.d2>button')
let _head = document.getElementById('result')
let flag = 0

button.forEach((val) => {
    val.addEventListener('click', () => {

        if ((val.getAttribute('data-sta')) == '+') {
            flag++

        } else if ((val.getAttribute('data-sta')) == '-') {
            flag--

        } else {
            flag = 0
        }
        _head.innerHTML = flag
        if (flag > 0) {
            _head.style.color = 'green'
        } else if (flag < 0) {
            _head.style.color = 'red'
        } else {
            _head.style.color = 'black'
        }
    })

});










