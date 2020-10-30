import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
import * as twilio from 'twilio'
import * as crypto from 'crypto'

if (
  !process.env.TWILIO_SID ||
  !process.env.TWILIO_AUTH_TOKEN ||
  !process.env.TWILIO_PHONE_NUMBER
) {
  throw Error('Missing Twilio properties in env')
}

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

const PHONE = '+17812960345'
const BELL = '\u0007'
const SECRET = 'verysecretsecret'

const ringBell = (): void => {
  // eslint-disable-next-line no-console
  console.log(BELL)
}

const hash = (str: string): string => {
  const key = crypto.createCipher('aes-128-cbc', SECRET)
  let hashed = key.update(str, 'utf8', 'hex')
  hashed += key.final('hex')
  return hashed
}

// const pages: string[] = [
//   'https://www.sundancelabradoodles.com/',
//   'https://www.sundancelabradoodles.com/puppies-available',
//   'https://www.sundancelabradoodles.com/available-now',
//   'https://www.sundancelabradoodles.com/puppy-application',
// ]

const pages: string[] = [
  'https://www.luxelabradoodles.com/available-puppies',
  'https://www.luxelabradoodles.com/',
  'https://www.luxelabradoodles.com/application',
  'https://www.luxelabradoodles.com/upcoming-litters',
  'https://www.luxelabradoodles.com/when-where',
  'https://www.luxelabradoodles.com/contact',
]

const store: Partial<Record<string, string>> = {}

const checkPageForUpdates = (page: string): void => {
  fetch(page)
    .then((res) => res.text())
    .then((data) => {
      const { document } = new JSDOM(data).window
      // const container = document.getElementById('PAGES_CONTAINER')
      const container = document.querySelector('.site-inner-wrapper')
      const text = container.textContent
      const hashedText = hash(text)
      const existing = store[page]

      if (existing && existing !== hashedText) {
        ringBell()

        const message = 'WEBSITE UPDATED AT ' + page
        console.log('\n\n' + message + '\n\n')
        console.log('GO TO https://www.luxelabradoodles.com/')

        client.messages.create({
          body: message,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: PHONE,
        })
      }

      store[page] = hashedText
    })
}

const checkAllPagesForUpdates = (): void => {
  pages.forEach(checkPageForUpdates)
}

const run = (): void => {
  console.log(`${Date.now()} Checking all pages for updates...`)
  checkAllPagesForUpdates()
  setTimeout(() => run(), 30 * 1000)
}

run()
