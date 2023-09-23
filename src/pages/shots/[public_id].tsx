// getServerSidProps

import {getShot} from 'lib/get-shots'
import {GetServerSideProps} from 'next'
import path from 'path'
import ShotTemplate from 'templates/shot-template'
import {CloudinaryAsset} from 'types'
import fs from 'fs'

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
  const visitCount = await fetchVisitCount(public_id as string)

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

const fetchVisitCount = async (publicId: string) => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'shotVisits.json')
    const rawData = fs.readFileSync(filePath, 'utf-8')
    const pageVisits = JSON.parse(rawData) || {} // Provide an empty object as a default if the JSON is empty.
    const visitCount = pageVisits[`screenshots/${publicId}`] || 0

    return visitCount
  } catch (error) {
    console.error(error)
    return 0 // Default to 0 visits on error.
  }
}
