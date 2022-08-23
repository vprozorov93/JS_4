const rl = require('readline').createInterface(process.stdin, process.stdout)

function askUser(){
    return new Promise((resolve, reject) => {
        rl.question('Введите число: ', (data) => {
            resolve(data)
        })
    })
}

async function guessNumber(num = undefined, attempt = 0) {
    if (isNaN(num)) {
        num = Math.floor(Math.random() * 10);
        log_data = `Программа загадала число ${num}\n`
        console.log(log_data)
    }

    while (true) {
        attempt++
        user_input = await askUser()

        if (user_input==num) {
            console.log(`Вы угадали за ${attempt} попыток!`)
            rl.close()
            break
        }

        if (user_input > num) {
            console.log('Загаданное число меньше того, что вы ввели!')
        } else if(user_input < num) {
            console.log('Загаданное число больше того, что вы ввели!')
        }


        guessNumber(num, attempt)
    }
}

guessNumber()