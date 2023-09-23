import {kv} from '@vercel/kv'
import {NextApiRequest, NextApiResponse} from 'next'
import {parse} from 'cookie'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const {id} = request.body
  const allVisits = await kv.hgetall('shot:visits')
  const cookies = parse(request.headers.cookie || '')
  const itsMeCookie = cookies[`itsme`]

  const count = (allVisits && allVisits[id as string]) || 0

  if (!itsMeCookie) {
    await kv.hset('shot:visits', {
      [id as string]: Number(count) + 1,
    })
  }
  return response.status(200).json(count)
}
