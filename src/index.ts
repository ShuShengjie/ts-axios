import { AxioxRequestConfig } from './types/index'
import xhr from './xhr'
import { buildURL } from './helpers/url'
function axios(config: AxioxRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxioxRequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: AxioxRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
