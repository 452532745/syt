import axios from 'axios'

export function getData (url, params, option) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const baseUrl = "https://api.myjson.com/bins/zngib"
export const messageUrl = "https://api.myjson.com/bins/n37n7"
