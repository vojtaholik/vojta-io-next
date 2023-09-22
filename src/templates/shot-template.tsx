import React from 'react'
import Layout from 'components/layout'
import Image from 'next/image'
import {CloudinaryAsset} from 'types'

type TemplateProps = {
  shot: CloudinaryAsset
}

const ShotTemplate: React.FC<React.PropsWithChildren<TemplateProps>> = ({
  shot,
}) => {
  return (
    <Layout
      className="bg-black"
      noIndex
      meta={{
        title: shot.public_id,
      }}
    >
      <main className="flex items-center justify-center flex-col w-full h-screen p-16">
        {shot && (
          <Image
            className={`aspect-[${calculateAspectRatio(
              shot.width,
              shot.height,
            )}] max-w-[70vw] w-full`}
            src={shot.secure_url}
            width={shot.width}
            height={shot.height}
            alt="screenshot"
          />
        )}
      </main>
    </Layout>
  )
}

export default ShotTemplate

function calculateAspectRatio(width: number, height: number) {
  const aspectRatio = width / height
  return aspectRatio.toFixed(1)
}