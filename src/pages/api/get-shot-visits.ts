import {kv} from '@vercel/kv'
import {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const visits = await kv.hgetall('shot:visits')
  return response.status(200).json(visits)
}
