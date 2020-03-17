
export const reducer = (state, action) => {
    if (state===undefined) {
        return {
            username:null
        }
    }
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                username:action.payload
            }
        case 'USER_LOGOUT':
            return {
                username:null
            }
        default:
            return state;
    }
}