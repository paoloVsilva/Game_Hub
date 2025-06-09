import axios from 'axios'
export interface FetchResponse<T> {
  count: number
  results: T[]
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '77083f746e2d4e36ad27ac00164603c4'
  }
})
