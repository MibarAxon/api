// let placeholders = document.querySelectorAll('.placeholder')
document.querySelectorAll('.input').forEach(node => node.addEventListener('focus', (e) => {
    e.target.nextElementSibling.classList.add('focus')
}))
document.querySelectorAll('.input').forEach(node => node.addEventListener('blur', (e) => {
    e.target.value
        ? false
        : e.target.nextElementSibling.classList.remove('focus')
    
}))
document.querySelector("#reveal").addEventListener('click', (e) => {
    console.log("clickeado el ojo")
    let passwordInput = document.querySelector('#password')
    passwordInput.type === 'password'
        ? passwordInput.type = 'text'
        : passwordInput.type = 'password'
})

document.querySelector('.login-button').addEventListener('click', e => {
    console.log('seeee')
    document.querySelector('.login-button').classList.add('login-button--submitted')
    setTimeout(() => {document.querySelector('.login-button').classList.add('login-button--succeeded')}, 3000) //simulamos un chequeo de 3 segundos de usuario y contrasenia
})