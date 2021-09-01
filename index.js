let allBox = document.querySelectorAll('.cards .card')

const currencyType = currency => {
    let value = currency.innerText
    console.log(value)
    return value
}

const render = () => {
    allBox.forEach(box => {
        box.addEventListener('click', event => {
            console.log(event.currentTarget)

            console.log(document.querySelector('.cards .card.active').classList.remove('active'))
            event.currentTarget.classList.add('active')
            currencyType(event.currentTarget)
        })
    })
}


render()