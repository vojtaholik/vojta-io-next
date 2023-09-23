import React from 'react'
import Layout from 'components/layout'
import Image from 'next/image'
import {CloudinaryAsset} from 'types'
import Head from 'next/head'
// import {mailjet} from 'utils/mailjet'

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
    incrementPageVisits(shot.public_id) // Assuming post.id identifies the post.
    if (visitCount === 2) {
      //   console.log('send email')
      //   sendEmail()
    }
  }, [])

  return (
    <Layout
      className="bg-black"
      noIndex
      meta={{
        title: 'screenshot',
        description: ' ',
        type: shot.resource_type === 'video' ? 'video.movie' : 'website',
        hasOgImage: false,
        // ogImage: {
        //   url: shot.secure_url,
        // },
        titleAppendSiteName: false,
      }}
    >
      <main className="flex items-center justify-center flex-col w-full h-screen p-16">
        <div className="absolute bottom-5 right-5 text-sm">{visitCount}</div>
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
              {/* <meta
                property="og:url"
                content={shot.secure_url.replace('.mov', '.mp4')}
              /> */}
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

// Function to increment page visits via the serverless function.
const incrementPageVisits = async (publicId: string) => {
  try {
    const response = await fetch('/api/shot-visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({publicId}),
    })

    if (response.ok) {
      // Page visit incremented successfully.
      console.log('Page visit incremented')
    } else {
      // Handle error cases here.
      console.error('Error incrementing page visit')
    }
  } catch (error) {
    // Handle network or other errors.
    console.error(error)
  }
}

const sendEmail = async () => {
  // send email to me using mailjet

  const request = mailjet.post('send', {version: 'v3.1'}).request({
    Messages: [
      {
        From: {
          Email: 'vojta@8am.design',
        },
        To: [
          {
            Email: 'vojta@egghead.io',
          },
        ],
        Subject: 'screenshot viewed',
        TextPart: 'screenshot viewed',
        HTMLPart: '<h3>screenshot viewed</h3>',
      },
    ],
  })
}
