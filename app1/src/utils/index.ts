export const setLocalStorage = (k: string, v: any) => {
  localStorage.setItem(k, v)
}

export const cleanLocalStorage = (k: string) => {
  localStorage.clear()
}