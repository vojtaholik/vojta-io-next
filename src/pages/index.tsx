import Head from 'next/head'
import {Twitter, Dribbble, Email} from 'components/icons'
import Image from 'next/image'
import Layout from 'components/layout'
import Me from '../../public/vojta-holik.jpg'

export default function Home() {
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
      <div className="flex flex-col  w-full max-w-screen-md mx-auto">
        <header className="pb-24">
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
                Hey, I'm Vojta{' '}
                <span role="img" aria-label="wave">
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
          {projects.map(({title, url, image}) => {
            return (
              <a
                href={url}
                target="_blank"
                key={title}
                rel="noopener noreferrer"
                className="bg-black p-10 flex w-full items-center justify-center rounded-lg min-h-[200px] hover:scale-105 transition-all ease-in-out duration-200"
              >
                <Image src={image} alt={title} quality={100} />
                <span className="sr-only">{title}</span>
              </a>
            )
          })}
        </main>
        <footer className="pt-24 pb-16 flex -m-1 items-center w-full justify-center">
          <a
            href="https://twitter.com/vjthlk"
            target="_blank"
            rel="noopener noreferrer"
            className="m-1 flex items-center justify-center space-x-2 rounded-lg bg-gray-200 bg-opacity-5 px-3 py-2 text-sm hover:bg-opacity-10 transition-all ease-in-out duration-200"
          >
            <Twitter />
            <span>Twitter</span>
          </a>
          <a
            href="https://dribbble.com/vjthlk"
            target="_blank"
            rel="noopener noreferrer"
            className="m-1 flex items-center justify-center space-x-2 rounded-lg bg-gray-200 bg-opacity-5 px-3 py-2 text-sm hover:bg-opacity-10 transition-all ease-in-out duration-200"
          >
            <Dribbble />
            <span>Dribbble</span>
          </a>
          <a
            href="mailto:vojta@holik.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="m-1 flex items-center justify-center space-x-2 rounded-lg bg-gray-200 bg-opacity-5 px-3 py-2 text-sm hover:bg-opacity-10 transition-all ease-in-out duration-200"
          >
            <Email />
            <span>Email</span>
          </a>
        </footer>
      </div>
    </Layout>
  )
}

const projects = [
  {
    title: 'JustJavaScript.com',
    url: 'https://justjavascript.com',
    image: require('../../public/projects/just-javascript/logo.svg'),
  },
  {
    title: 'EpicReact.dev',
    url: 'https://epicreact.dev',
    image: require('../../public/projects/epic-react/logo.svg'),
  },
  {
    title: 'KeyboardLegend.dev',
    url: 'https://keyboardlegend.dev',
    image: require('../../public/projects/keyboard-legend/logo.svg'),
  },
  {
    title: 'ScriptKit.com',
    url: 'https://scriptkit.com',
    image: require('../../public/projects/script-kit/logo.svg'),
  },
  {
    title: 'EngManagement.dev',
    url: 'https://engmanagement.dev',
    image: require('../../public/projects/eng-management/logo.svg'),
  },
  {
    title: 'egghead.io',
    url: 'https://egghead.io',
    image: require('../../public/projects/egghead/logo.svg'),
  },
  {
    title: 'TestingAccessibility.com',
    url: 'https://testingaccessibility.com',
    image: require('../../public/projects/testing-accessibility/logo.svg'),
  },
  {
    title: 'TechnicalInterviews.dev',
    url: 'https://technicalinterviews.dev',
    image: require('../../public/projects/technical-interviews/logo.svg'),
  },
  {
    title: 'EnterpriseJamstack.com',
    url: 'https://enterprisejamstack.com',
    image: require('../../public/projects/enterprise-jamstack/logo.svg'),
  },
  {
    title: 'GraphQLWorkshop.com',
    url: 'https://graphqlworkshop.com',
    image: require('../../public/projects/graphql-workshop/logo.svg'),
  },
]
