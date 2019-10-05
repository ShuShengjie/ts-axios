import { AxioxRequestConfig } from './types/index'
export default function xhr(config: AxioxRequestConfig): void {
  const { data = null, url, method = 'get' } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url)
  request.send(data)
}
