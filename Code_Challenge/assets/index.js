const input = document.querySelector('input[type=number]');
const submit = document.querySelector('button');
const noti = document.querySelector('p');
let count = 0;
let code = Math.floor((Math.random() * 10) + 1);

submit.onclick = () => {
    if (0 < input.value && input.value <= 10) {
        count ++;
        if (input.value != code) {
            if (count < 3) {
                noti.innerText = 'Bạn đã sai. Lewlew';
            }

            if (count == 3) {
                noti.innerText = 'Bạn đã sai 3 lần. Kết quả là: ' + code;
                code = Math.floor((Math.random() * 10) + 1);
                count = 0;
            }
        }

        else {
            noti.innerText = 'Bạn đã trúng thưởng';
            count = 0;
            code = Math.floor((Math.random() * 10) + 1);
        }
    }

    else {
        noti.innerText = 'Nhập một số trong khoảng 1-10'
    }
}