// getServerSidProps

import {getShot} from 'lib/get-shots'
import {GetServerSideProps} from 'next'
import path from 'path'
import ShotTemplate from 'templates/shot-template'
import {CloudinaryAsset} from 'types'
import fs from 'fs'
import {kv} from '@vercel/kv'

type Props = {
  shot: CloudinaryAsset
  visitCount: number
}

export default function ShotPageContainer({shot, visitCount}: Props) {
  return <ShotTemplate visitCount={visitCount} shot={shot} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {public_id} = context.query

  const shot = await getShot(public_id as string)
  const visits = await fetchVisits()
  const visitCount = (visits && visits[public_id as string]) || 0

  return {
    props: {
      shot: {
        ...shot,
        rate_limit_reset_at: shot.rate_limit_reset_at.toISOString(),
      },
      visitCount,
    },
  }
}

const fetchVisits = async () => {
  const visits = await kv.hgetall('shot:visits')
  return visits
}
