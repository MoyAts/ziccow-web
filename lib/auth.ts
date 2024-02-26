export const USER_KEY = "user"

export interface UserInf {
    token : string,
    userId : string,
}

export function saveUser({token , userId } : UserInf){
    const user = { token , userId }
    if (typeof window !== "undefined") {
        window.localStorage.setItem(USER_KEY,JSON.stringify(user))
    }
}

export function isTokenExist(){
    let data = null
    if (typeof window !== "undefined") {
       data = window.localStorage.getItem(USER_KEY)
    }
    if(data == null) return false
    const temp = JSON.parse(data)
    console.log(temp,"temp")
    if(temp == null || temp?.length < 10  || temp?.userId.length < 5){
        return false
    }
    return true
}

export function getUser() : UserInf | null {
    if(isTokenExist() == false) return null
    if (typeof window !== "undefined") {
        const user = JSON.parse(window.localStorage.getItem(USER_KEY)!)
        return user
    }
    return null
}

export function logout(){
    if (typeof window !== "undefined") {
        window.localStorage.removeItem(USER_KEY)
    }
}