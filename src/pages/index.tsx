import Head from 'next/head'
import {Sound} from 'components/icons'
import Image from 'next/image'
import Layout from 'components/layout'
import Me from '../../public/vojta-holik.jpg'
import {useAnalytics} from 'use-analytics'
import {links} from 'components/bio'
import {GetStaticPropsContext} from 'next'
import {getProjects, Project} from 'utils/get-projects'
// import {getGithubUser} from 'utils/get-github-user'

export default function Home({projects}: any) {
  const {track} = useAnalytics()

  return (
    <Layout>
      <Head>
        <title>Vojta — designer and front-end developer</title>
        <meta
          name="description"
          content="See projects I've collaborated on in past ~year."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full max-w-screen-md mx-auto">
        <header className="py-24">
          <div className="flex space-x-4 items-center">
            <div className="flex items-center justify-center flex-shrink-0 sm:w-auto w-16 rounded-full overflow-hidden">
              <Image
                src={Me}
                alt="Vojta Holik"
                width={80}
                height={80}
                placeholder="blur"
                className="rounded-full"
                priority
                loading="eager"
                quality={100}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Hey, I'm{' '}
                <button
                  type="button"
                  title="say out loud"
                  className="inline-flex font-bold items-center justify-center group transition-all ease-in-out duration-200"
                  onClick={() => {
                    let speech = new SpeechSynthesisUtterance()
                    speech.lang = 'cs'
                    speech.text = 'Vojta'
                    const voice = window.speechSynthesis
                      .getVoices()
                      .filter((voice) => voice.lang === 'cs-CZ')[0]
                    speech.voice = voice
                    window.speechSynthesis.speak(speech)
                  }}
                >
                  Vojta{' '}
                  <Sound
                    aria-hidden="true"
                    className="ml-1 w-3 text-gray-200 group-hover:opacity-100 opacity-60"
                  />
                </button>
                <span role="img" aria-label="waving hand" className="pl-2">
                  👋
                </span>
              </h1>
              <h2 className="opacity-90">
                I'm a web designer, creative helper, and front-end developer.
              </h2>
            </div>
          </div>
        </header>
        <h3 className="pb-4 font-medium">
          Projects I've collaborated on in past ~year
        </h3>
        <main className="grid sm:grid-cols-2 grid-cols-1 gap-5 w-full">
          {projects.map(({title, url, image}: Project) => {
            return (
              <a
                href={url}
                target="_blank"
                key={title}
                rel="noopener noreferrer"
                className="bg-black p-10 flex w-full items-center justify-center rounded-lg min-h-[200px] hover:scale-105 transition-all ease-in-out duration-200"
                onClick={() => {
                  track('clicked project url', {
                    action: 'clicked project url',
                    category: 'project',
                    label: title,
                  })
                }}
              >
                <img src={image} alt={title} />
                <span className="sr-only">{title}</span>
              </a>
            )
          })}
        </main>
        <footer className="py-24 sm:flex grid grid-cols-2 -m-1 items-center w-full justify-center ">
          {links.map(({href, icon, label}) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="m-1 flex items-center justify-center space-x-2 rounded-lg bg-gray-200 bg-opacity-5 px-3 py-2 text-sm hover:bg-opacity-10 transition-all ease-in-out duration-200"
              onClick={() => {
                track('clicked social link', {
                  action: 'clicked social link',
                  category: 'social',
                  label,
                })
              }}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </footer>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const projects = getProjects()
  // const user = await getGithubUser()

  return {
    props: {
      projects,
      // user,
    },
  }
}
