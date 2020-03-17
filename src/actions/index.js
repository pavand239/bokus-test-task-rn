const userLogin = (username) => ({
    type:'USER_LOGIN',
    payload:username
})

const userLogout = () => ({
    type:'USER_LOGOUT'
})

export {
    userLogin,
    userLogout
}