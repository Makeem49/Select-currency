let allBox = document.querySelectorAll('.cards .card')

const currencyType = currency => {
    let value = currency.innerText
    console.log(value)
    return value
}

const render = () => {
    allBox.forEach(box => {
        // For single selection of currency
        /*
        box.addEventListener('click', event => {
            let query = document.querySelector('.cards .card.active').classList.remove('active') ?? document.querySelector('.cards .card')
            console.log(query)

            // console.log(query.classList)
            event.currentTarget.classList.add('active')
            currencyType(event.currentTarget)
        })
        */

        // For multiple selection of currency
        box.addEventListener('click', event => {

            // console.log(query.classList)
            event.currentTarget.classList.toggle('active')
            currencyType(event.currentTarget)
        })
    })
}


let sidebar = document.querySelector('.hamburger i')

sidebar.addEventListener('click', event => {
    let select = document.querySelector('#side-bar').classList.toggle('show')
})


render()

document.querySelector('#button').addEventListener('click', () => {
    // console.log(document.querySelector('button').setAttribute('disabled', 'disbaled'))
    // console.log(document.querySelector('button').getAttribute('disabled'))
    // console.log(document.querySelector('button').hasAttribute('disabled'))
    // console.log(document.querySelector('button').removeAttribute('disabled'))

    let changeElement = document.querySelector('body').classList.toggle('change-color');

    
    if(changeElement){
        document.querySelector('p').remove()
    } else {
        let child = document.createElement('p');
        child.textContent = 'I have ben added back but the start of the page';
        document.documentElement.insertAdjacentElement('afterbegin', child);
    };
});
