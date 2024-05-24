let submit_btn = document.getElementById("submit_num");
let submit_count = 10;
let arr = [];
submit_btn.addEventListener("click", function() {
    // e.preventDefault(); // this will prevent the form or the button from submitting anything to the server
    let submitted_num = Number(document.querySelector('#num_input').value);
    let random_num = Math.random();
    let one_to_hundred_num = Number((random_num*100).toFixed(0));
    let trials_left = document.querySelector('#trials_count');
    let guess_arr = document.querySelector('#guess_arr');
    let result = document.querySelector('#result');
    arr.push(submitted_num);
    trials_left.style.color = "purple";
    submit_count--;
    if(submit_count === 0)
    {
        trials_left.innerText = 'You are out of trials!, Start again';
        trials_left.style.color = "red";
        submit_count = 10;
        arr = [];
    }
    else{
        trials_left.innerText = submit_count;
    }

    if (submitted_num === one_to_hundred_num)
    {
        result.innerText = 'CONGRATULATIONS!!! You guessed it right !!'
        submit_count = 10;
        arr = [];
    }
    else
    {
        guess_arr.innerText = arr;
        result.innerHTML = '';
    }
    console.log(one_to_hundred_num);
});


