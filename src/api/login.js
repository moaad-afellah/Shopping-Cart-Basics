export const logInApi = () => {

    console.log('Login ...')
    return new Promise((resolve) => {

        setTimeout(() => { resolve({ "status": "OK", "message": "Login with succes" }) }, 3000)
    })
}