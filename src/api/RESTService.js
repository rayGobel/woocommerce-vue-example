const crypto = require('crypto')
const Axios = require('axios')

const consumerKey = process.env.CONSUMER_KEY
const consumerSecret = process.env.CONSUMER_SECRET + '&'
const date = Date.now() / 1000 | 0

const RESTService = {
  get (endpoint, config) {
    const oauthParams = [
      [ 'oauth_consumer_key', consumerKey ],
      [ 'oauth_nonce', crypto.randomBytes(12).toString('hex') ],
      [ 'oauth_signature_method', 'HMAC-SHA1' ],
      [ 'oauth_timestamp', date ]
    ]

    if (config) {
      let params = config.params
      let paramsArray = Object.keys(params).map(key => [key, params[key]])
      oauthParams.push.apply(oauthParams, paramsArray)
    }

    const secret = generateSecretParams(oauthParams)

    const signatureBaseString = generateSignatureBaseString('GET', endpoint, secret)
    const signature = generateSignature(consumerSecret, signatureBaseString)
    const requestParams = secret + `&oauth_signature=${signature}`

    return Axios.get(endpoint + '?' + requestParams)
      .then(res => res.data)
  },
  post (endpoint, data, config) {}
}

function generateSignatureBaseString () {
  const args = Array.from(arguments)
  const decoded = args.map(arg => encodeURIComponent(arg))
  return decoded.join('&')
}

function generateSignature (consumerSecret, signatureBaseString) {
  const HASH = 'sha1'
  const DIGEST = 'base64'
  return crypto.createHmac(HASH, consumerSecret)
    .update(signatureBaseString)
    .digest(DIGEST)
}

function generateSecretParams (secretArray) {
  const result = secretArray.map((item) => item.join('='))
  return result.join('&')
}

export default RESTService
