import {Client, SendEmailV3_1, LibraryResponse} from 'node-mailjet'

export const mailjet = new Client({
  //   apiToken: process.env.MJ_APIKEY_PUBLIC,
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
})
