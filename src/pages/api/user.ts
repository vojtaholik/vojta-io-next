import type {NextApiRequest, NextApiResponse} from 'next'
import {getSdk} from 'lib/prisma-api'

const test = async (req: NextApiRequest, res: NextApiResponse) => {
  const {findOrCreateUser} = getSdk()
  const {user, isNewUser} = await findOrCreateUser('vojta@egghead.io')
  res.status(200).json(user)
  return
}

export default test
