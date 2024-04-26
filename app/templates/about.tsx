'use client'

import { motion } from 'framer-motion'
import { IoLogoFigma } from 'react-icons/io5'
import {
  SiMysql,
  SiNeovim,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { IoLogoFirebase } from 'react-icons/io5'
import { FcCommandLine } from 'react-icons/fc'
import { SiTrpc } from 'react-icons/si'

import Figma from '../../public/brands/figma.png'
import Git from '../../public/brands/git.png'
import Python from '../../public/brands/python.png'
import { AnimatedText } from '@/components/animated-text'
import { SectionHeader } from '@/components/section-header'
import { SectionShell } from '@/components/section-shell'
import { getAge } from '@/utils/get-age'
import Image from 'next/image'
import { useMounted } from '@/hooks/use-mounted'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/utils/cn'

const MotionImage = motion(Image)

export const About = () => {
  const { theme } = useTheme()
  const mounted = useMounted()

  if (!mounted) return null
  return (
    <SectionShell id='about'>
      <SectionHeader heading='About' />

      <motion.section
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: true }}
        className='relative mt-16 grid grid-cols-12 gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16'
      >
        <AnimatedText
          as='p'
          className='col-span-full text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8'
          text='Thanks for visiting.'
        />
        {/* <MotionLinkButton */}
        {/*   href='/about' */}
        {/*   motionProps={{ */}
        {/*     variants: { */}
        {/*       hidden: { opacity: 0, y: 50 }, */}
        {/*       visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } }, */}
        {/*     }, */}
        {/*   }} */}
        {/*   className='col-span-full md:col-start-7 xl:col-start-9' */}
        {/* > */}
        {/*   More about me */}
        {/* </MotionLinkButton> */}
      </motion.section>

      <section className='relative mt-24 flex grid-cols-12 flex-col-reverse gap-y-10 md:ml-24 md:grid md:gap-x-8 lg:gap-x-16'>
        <section className='col-span-full md:col-span-6 xl:col-span-8'>
          <motion.article
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
            }}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            viewport={{ once: true }}
          >
            <AnimatedText
              as='h3'
              text='Who am I'
              className='text-sm uppercase tracking-wider text-dark-600 dark:text-dark-400'
            />
            <AnimatedText
              as='p'
              text={`I'm Larry, a self-taught developer who transitioned as a data analyst. It's always been my dream to be in this space as it does not have any limitations and creates challenges that I love solving.`}
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            <AnimatedText
              as='p'
              text="I don't take anything for granted and I look forward to applying my combined my skills as a developer and my background as a data analyst to any future projects and challenges that come my way as I continue to learn and grow."
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            <AnimatedText
              as='p'
              text=''
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            />
            {/* <AnimatedText
              as='p'
              text='Spending time customizing, improving and tinkering with my work environment and tools is something I enjoy a lot, as it is something I use for many hours daily. It allows me to have it exactly as I desire. For instance, I use Neovim as my editor of choice, I have built multiple custom mechanical keyboards, and I use Colemak DHk as my keyboard layout.'
              className='mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200'
            /> */}
          </motion.article>

          <motion.section
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
            }}
            initial='hidden'
            whileInView='visible'
            exit='hidden'
            viewport={{ once: true }}
            className='col-span-full mt-14 overflow-hidden md:col-span-6 xl:col-span-8'
          >
            <AnimatedText
              as='h3'
              text='Tech I enjoy'
              className='text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400'
            />
            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: 'circOut' },
                },
              }}
              className='mt-6 flex flex-wrap gap-6 text-dark-200 text-sm'
            >
              <div className='bg-gradient-to-tr w-28 from-[#00273f]  to-[#3188c6] p-2 rounded-md'>
                <SiTypescript size={28} title='TypeScript' />
                <span className=''>Typescript</span>
              </div>
              <div className='bg-[#00d8ff] w-28 p-2 rounded-md'>
                <SiReact size={28} title='React.js' className='text-white' />
                <span className='text-dark-400'>ReactJs</span>
              </div>
              <div className='bg-[#3572a5] w-28 p-2 rounded-md'>
                <Image
                  src={Python}
                  alt='python icon'
                  height={28}
                  width={28}
                  className='text-white'
                />
                <span className=''>Python</span>
              </div>
              <div className='bg-gradient-to-bl from-[#f2f2f2] via-[#0a0a0a] to-[#000000] w-28 p-2 rounded-md'>
                <SiNextdotjs size={28} title='Next.js' className='text-white' />
                <span className=''>NextJs</span>
              </div>

              <div className='bg-[#000000] w-28 p-2 rounded-md'>
                <FcCommandLine size={28} title='CLI' className='text-white' />
                <span className=''>Command Line Interface</span>
              </div>

              <div className='bg-[#f34f29] w-28 p-2 rounded-md'>
                <Image src={Git} alt='git icon' height={28} width={28} className='text-white' />
                <span className=''>Git</span>
              </div>
              <div className='bg-gradient-to-bl from-[#38bdf8]  to-[#1e40af] w-28 p-2 rounded-md'>
                <SiTailwindcss size={28} title='TailwindCSS' className='text-[#38bdf8]' />
                <span className=''>Tailwindcss</span>
              </div>
              <div className='bg-[#172B4D] w-28 p-2 rounded-md'>
                <SiMysql size={36} />
                <span className=''>SQL</span>
              </div>
              <div className='bg-[#398CCB] w-28 p-2 rounded-md'>
                <SiTrpc size={28} title='trpc' className='text-[#f2f2f2]' />
                <span className=''>trpc</span>
              </div>

              <div className='bg-[#1e40af] w-28 p-2 rounded-md'>
                <SiPrisma size={28} title='Prisma' className='text-[#99efe8]' />
                <span className=''>Prisma</span>
              </div>
              <div className='bg-[#4B8BBE] w-28 p-2 rounded-md'>
                <IoLogoFirebase size={28} title='Firebase' className='text-[#FFCB2B]' />
                <span className=''>Firebase</span>
              </div>

              <div className='bg-[#2C2C2C] w-28 p-2 rounded-md'>
                <Image
                  src={Figma}
                  alt='figma icon'
                  height={28}
                  width={28}
                  className='text-[#99efe8]'
                />
                <span className=''>Figma</span>
              </div>
            </motion.div>
          </motion.section>
        </section>

        <motion.figure
          variants={{
            hidden: { scaleX: 0, originX: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 0.75,
                ease: [0.9, 0.1, 0.3, 0.96],
                when: 'beforeChildren',
                delayChildren: 0.15,
                delay: 0.25,
              },
            },
          }}
          initial='hidden'
          whileInView='visible'
          exit='hidden'
          viewport={{ once: true }}
          className={cn(
            'mb-6 w-2/3 self-start md:col-span-full md:col-start-7 md:mb-0 md:w-full xl:col-start-9 relative aspect-square',
            {
              'bg-dark-150': theme === 'light',
              'bg-dark-700': theme === 'dark',
            }
          )}
        >
          <MotionImage
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] },
              },
            }}
            fill
            quality={95}
            src='/assets/LarryProfileNobg.webp'
            alt='Portrait of Larry Ly'
            loading='lazy'
          />
        </motion.figure>
      </section>
    </SectionShell>
  )
}
