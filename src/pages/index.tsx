import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import {getProjects, Project} from 'lib/projects'
import {GetStaticPropsContext} from 'next'
import {Sound} from 'components/icons'
import {links} from 'components/bio'
import Me from '../../public/vojta-holik-06-23.jpg'
import Layout from 'components/layout'
import Image from 'next/image'
import find from 'lodash/find'
import Link from 'next/link'
import {Markdown} from 'utils/markdown'
import {cn} from 'utils/cn'

const H2 = ({className}: {className?: string}) => {
  return (
    <h2 className={cn('text-balance text-xl mt-8 opacity-90', className)}>
      Since 2020, his primary focus has been collaborating with expert
      developers to create professional training products that{' '}
      <Link
        href="https://x.com/mattpocockuk/status/1812771775928734134"
        target="_blank"
        rel="noopener noreferrer"
      >
        transform their lives
      </Link>
      .
    </h2>
  )
}

export default function Home({projects}: {projects: Project[]}) {
  return (
    <Layout
      className="flex flex-col max-w-screen-lg overflow-hidden mx-auto w-full pb-24"
      meta={{titleAppendSiteName: false}}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-full sm:py-24 py-5 flex md:flex-row flex-col items-start justify-between">
        <div className="max-w-lg flex flex-col h-full justify-between">
          <div>
            <svg
              className="sm:mb-20 mb-8"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="19"
              fill="none"
              viewBox="0 0 23 19"
            >
              <path
                fill="currentColor"
                d="M0 0h3.8v3.8H0zm3.8 3.8h3.8v3.8H3.8zm0 3.8h3.8v3.8H3.8zm7.6 3.8h3.8v3.8h-3.8zM3.8 0h3.8v3.8H3.8zm3.8 0h3.8v3.8H7.6zm0 7.6h3.8v3.8H7.6zm0-3.8h3.8v3.8H7.6zm0 7.6h3.8v3.8H7.6zM15.2 0H19v3.8h-3.8zM19 0h3.8v3.8H19zM7.6 15.2h3.8V19H7.6z"
              />
            </svg>
            <h1 className="text-balance sm:text-4xl text-2xl sm:mb-0 mb-10 leading-tight">
              <button
                type="button"
                title="say out loud"
                className="inline-flex group relative"
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
                  className="transition absolute right-0 top-0 ease-in-out w-2 h-2 text-gray-200 group-hover:opacity-100 opacity-0"
                />
              </button>{' '}
              is a Design Engineer and Co-Founder of{' '}
              <Link
                href="https://badass.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Badass.dev
              </Link>
            </h1>
            <H2 className="sm:inline-block hidden" />
          </div>
        </div>
        <div className="sm:translate-x-0 translate-x-16 relative flex items-center justiy-center">
          <Image
            src={require('../../public/vojta-in-utah.jpg')}
            alt="Vojta Holik"
            quality={100}
            priority
            width={402}
            height={535}
            className="opacity-80"
          />
          <div className="absolute leading-none sm:right-4 sm:translate-x-0 -translate-x-16 sm:leading-none sm:text-lg text-sm sm:bottom-4 bottom-1 font-pixel flex flex-col">
            ░<br />▒<br />▓
          </div>
        </div>
        <H2 className="sm:hidden inline-block" />
      </header>
      <h2 className="mb-10 sm:-mt-28 mt-16 text-xs font-pixel uppercase">
        Selected Works ↓
      </h2>
      <section className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-16">
        {projects.slice(0, 4).map((project) => {
          return (
            <article className="" key={project.title}>
              {project.thumbnail && (
                <Link
                  className="flex items-center justify-center relative mb-5"
                  href={project.url}
                  target="_blank"
                  tabIndex={-1}
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.thumbnail}
                    width={513 * 2}
                    height={331 * 2}
                    alt={project.title}
                    className="aspect-[513/331] saturate-0 transition border border-white/5"
                    quality={100}
                    priority
                  />
                  <div
                    className="bg-white hover:opacity-15 opacity-0 duration-300 transition ease-in-out absolute inset-0 mix-blend-overlay"
                    aria-hidden="true"
                  />
                </Link>
              )}
              <h3 className="font-medium text-2xl">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline no-underline"
                >
                  {project.title}
                </Link>
              </h3>
              {project.description && (
                <Markdown className="prose mt-3 mb-5 prose-p:opacity-90 sm:prose-lg">
                  {project.description}
                </Markdown>
              )}
              {project.links && (
                <div className="flex items-center flex-wrap sm:gap-6 gap-5">
                  {project.links.map((link) => {
                    return (
                      <Link
                        href={link.url}
                        key={link.url}
                        className="inline-flex group sm:text-lg font-normal no-underline items-center gap-1.5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="font-pixel size-5 group-hover:bg-foreground/100 transition bg-foreground/20 text-background flex items-center justify-center">
                          <span className="relative translate-x-[1px]">↗︎</span>
                        </span>
                        <span className="underline decoration-white/20">
                          {link.label}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              )}
            </article>
          )
        })}
      </section>
      <section className="mt-20 relative pt-16 sm:border-t flex items-start justify-between w-full border-white/5">
        <div className="w-full">
          <Markdown className="sm:text-xl sm:max-w-xl text-base max-w-sm text-balance prose-p:leading-relaxed">
            {
              'Over the past decade I’ve been part of the [egghead.io](https://egghead.io) team ran by [Joel Hooks](https://x.com/jhooks). I also helped out [John Lindquist](https://x.com/johnlindquist) with [ScriptKit](https://scriptkit.com/).'
            }
          </Markdown>
          <Image
            src={require('../../public/commit-graph-24.png')}
            alt="Commit graph 2024"
            width={680}
            quality={100}
            priority
            className="mix-blend-lighten sm:static absolute -top-14 opacity-20 my-5"
          />
          <Markdown className="relative z-10 sm:text-xl sm:max-w-xl text-base max-w-sm text-balance prose-p:leading-relaxed sm:mt-0 mt-20">
            {
              'Majority of projects I work on have visible source, see [activity on my GitHub](https://github.com/vojtaholik).'
            }
          </Markdown>
          <div className="flex mt-28 w-full items-center gap-8 flex-row sm:static absolute -bottom-16 font-pixel sm:text-sm text-xs uppercase">
            <Link href="mailto:vojta@holik.dev" className="">
              @ e-mail
            </Link>
            <Link
              href="https://x.com/vojta_holik"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              X (Twitter)
            </Link>
            <Link
              href="https://github.com/vojtaholik"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              ► GitHub
            </Link>
            <Link
              href="https://dribbble.com/vjthlk"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              ▲ Dribbble
            </Link>
          </div>
        </div>
        <Image
          src={require('../../public/praise.png')}
          alt="Praise"
          className="mix-blend-lighten sm:static  sm:w-auto w-56 sm:mr-0 -mr-5"
          width={350}
          quality={100}
          priority
        />
      </section>
      <svg
        // generated on https://www.fffuel.co/nnnoise/
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 700 700"
        preserveAspectRatio="xMidYMid slice"
        className="fixed w-full h-full bg-cover left-0 select-none pointer-events-none z-0"
        opacity="0.5"
      >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="linearRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.102"
              numOctaves="10"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            />
            <feSpecularLighting
              surfaceScale="15"
              specularConstant="0.2"
              specularExponent="20"
              lightingColor="#ffffff"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="96"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </defs>
        <rect
          width="700"
          height="700"
          fill="#ffffff"
          filter="url(#nnnoise-filter)"
        ></rect>
      </svg>
    </Layout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const projects = getProjects()

  return {
    props: {
      projects,
    },
  }
}
