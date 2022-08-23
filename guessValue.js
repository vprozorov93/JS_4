const rl = require('readline').createInterface(process.stdin, process.stdout)
const fs = require('fs')
function guessNumber(num = undefined, attempt = 0) {
    if (isNaN(num)) {
        num = Math.floor(Math.random() * 10);
        log_data = `Программа загадала число ${num}\n`
        fs.appendFile('log.txt', log_data, (err) => {})
    }
    attempt++
    rl.question(`Попытка ${attempt}. Введите число: `, (cmd) => {
        log_data = `Попытка ${attempt} - Пользователь ввел ${cmd}`
        if (cmd == num) {
            console.log(`Вы угадали за ${attempt} попыток!`)
            log_data+= ' и угадал!\n'
            fs.appendFile('log.txt', log_data, (err) => {})
            rl.close()
            return
        }

        if (cmd > num) {
            console.log('Загаданное число меньше того, что вы ввели!')
        } else if(cmd < num) {
            console.log('Загаданное число больше того, что вы ввели!')
        }

        log_data += '.\n'
        fs.appendFile('log.txt', log_data, (err) => {})
        guessNumber(num, attempt)
    })
}

guessNumber()