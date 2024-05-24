let get_num = document.getElementById('get_num');

get_num.addEventListener("click", function () {
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector("#num2").value);
    let diff = Number(num2 - num1);
    let random_num = Number(Math.random()*diff);
    let btw_num = Number(random_num.toFixed(0)) + num1;
    document.querySelector("#ranged_number").innerHTML = `<p>Your number between ${num1} and ${num2} is <span style = "color:green">${btw_num}</span></p>`
    console.log(btw_num);
})