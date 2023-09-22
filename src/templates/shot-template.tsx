import React from 'react'
import Layout from 'components/layout'
import Image from 'next/image'
import {CloudinaryAsset} from 'types'
import Head from 'next/head'

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
        title: 'screenshot',
        description: ' ',
        hasOgImage: false,
        // ogImage: {
        //   url: shot.secure_url,
        // },
        titleAppendSiteName: false,
      }}
    >
      <main className="flex items-center justify-center flex-col w-full h-screen p-16">
        {shot.resource_type === 'video' ? (
          <>
            <video
              src={shot.secure_url}
              controls
              className={`aspect-[${calculateAspectRatio(
                shot.width,
                shot.height,
              )}] h-full w-full`}
            />
            <Head>
              <meta
                property="og:video"
                content={shot.secure_url.replace('.mov', '.mp4')}
              />
              <meta property="og:type" content="video.movie" />
              <meta property="og:video:type" content="video/mp4" />
            </Head>
          </>
        ) : (
          <>
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
            <Head>
              <meta property="og:image" content={shot.secure_url} />
              <meta property="twitter:image" content={shot.secure_url} />
            </Head>
          </>
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
