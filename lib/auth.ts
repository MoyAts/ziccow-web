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

export function calculateTimeDifference(timestamp: string): string {
    const currentDate = new Date();
    const targetDate = new Date(timestamp);
  
    const timeDiff = Math.abs(currentDate.getTime() - targetDate.getTime());
  
    const secondsDiff = Math.floor(timeDiff / 1000);
    const minutesDiff = Math.floor(timeDiff / (1000 * 60));
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const monthsDiff = Math.floor(daysDiff / 30);
    const yearsDiff = Math.floor(daysDiff / 365);
  
    if (yearsDiff > 0) {
      return `${yearsDiff} year${yearsDiff > 1 ? 's' : ''}`;
    } else if (monthsDiff > 0) {
      return `${monthsDiff} month${monthsDiff > 1 ? 's' : ''}`;
    } else if (daysDiff > 0) {
      return `${daysDiff} day${daysDiff > 1 ? 's' : ''}`;
    } else if (hoursDiff > 0) {
      return `${hoursDiff} hour${hoursDiff > 1 ? 's' : ''}`;
    } else if (minutesDiff > 0) {
      return `${minutesDiff} minute${minutesDiff > 1 ? 's' : ''}`;
    } else {
      return `${secondsDiff} second${secondsDiff !== 1 ? 's' : ''}`;
    }
  }