
export function saveUser(token : string){
    localStorage.setItem("token",token)
}

export function isTokenExist(){
    return localStorage.get("token")
}