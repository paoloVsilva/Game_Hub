import axios, { type AxiosRequestConfig } from 'axios'
export interface FetchResponse<T> {
  count: number
  next: string | null
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '77083f746e2d4e36ad27ac00164603c4'
  }
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)

  get = (id: number | string) =>
    axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
}

export default APIClient
