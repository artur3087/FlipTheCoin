console.log("Hello dude!") // Confirming everything works...  (test1)

// !!! DECLARATION OF VARIABLES BELOW !!! //

const coin = document.getElementById("coin");
const button = document.getElementById("flip");
const status = document.getElementById("status");

// !!! MAIN FUNCTIONS BELOW !!! //

function deferFn(callback, ms) {
    setTimeout(callback, ms);
}

function processResult(result) {
    status.innerText = result.toUpperCase();

}

function flipCoin() {
    coin.setAttribute('class', '');
    const random = Math.random();
    const result = random < 0.5 ? 'reszka' : 'orzeł';
    deferFn(function(){
        coin.setAttribute('class', 'animate-' + result);
        deferFn(processResult.bind(null, result), 2900);
    }, 100);
}

button.addEventListener('click', flipCoin);