import React from 'react'
import Layout from 'components/layout'
import Image from 'next/image'
import {CloudinaryAsset} from 'types'
import Head from 'next/head'
import toast from 'react-hot-toast'

type TemplateProps = {
  shot: CloudinaryAsset
  visitCount: number
}

const ShotTemplate: React.FC<React.PropsWithChildren<TemplateProps>> = ({
  shot,
  visitCount,
}) => {
  // When the component mounts, increment the visit count.
  React.useEffect(() => {
    fetch('/api/increment-shot-visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: shot.public_id.replace('screenshots/', '')}),
    })
  }, [])

  const originalUrl =
    shot.resource_type === 'video'
      ? shot.secure_url.replace('.mov', '.mp4')
      : shot.secure_url

  return (
    <Layout
      className="bg-black"
      noIndex
      meta={{
        title: 'screenshot',
        description: ' ',
        type: shot.resource_type === 'video' ? 'video.movie' : 'website',
        ogImage: {
          url: shot.secure_url,
        },
        titleAppendSiteName: false,
      }}
    >
      <main className="flex items-center justify-center flex-col w-full min-h-screen sm:p-16 p-1">
        <div className="fixed font-mono bottom-5 right-5 text-xs">
          {visitCount} |{' '}
          <button
            type="button"
            onClick={() => {
              return navigator.clipboard.writeText(originalUrl).then(() => {
                toast.success('Copied to clipboard')
              })
            }}
          >
            🔗
          </button>
        </div>
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

export function calculateAspectRatio(width: number, height: number) {
  const aspectRatio = width / height
  return aspectRatio.toFixed(1)
}
