// getServerSidProps

import {getShot} from 'lib/get-shots'
import {GetServerSideProps} from 'next'
import ShotTemplate from 'templates/shot-template'
import {CloudinaryAsset} from 'types'

type Props = {
  shot: CloudinaryAsset
}

export default function ShotPageContainer({shot}: Props) {
  return <ShotTemplate shot={shot} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {public_id} = context.query

  const shot = await getShot(public_id as string)

  return {
    props: {
      shot: {
        ...shot,
        rate_limit_reset_at: shot.rate_limit_reset_at.toISOString(),
      },
    },
  }
}

function serializeData(data: any) {
  return JSON.stringify(data, (key, value) => {
    if (value instanceof Date) {
      return {_type: 'date', _value: value.toISOString()}
    }
    // Handle other complex data types here if needed
    return value
  })
}
