import { useMounted } from '@/hooks/use-mounted'
import { useTheme } from '@/hooks/use-theme'
import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'

import Image from 'next/image'

const MotionImage = motion(Image)

const bigWidgetVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const smallWidgetVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const imageMap = {
  dark: {
    base: {
      webp: '/assets/hero-base-dark.webp',
      png: '/assets/hero-base-dark.png',
    },
    notification: {
      webp: '/assets/hero-notif-widget-dark.webp',
      png: '/assets/hero-notif-widget-dark.png',
    },
    heart: {
      webp: '/assets/hero-heart-widget-dark.webp',
      png: '/assets/hero-heart-widget-dark.png',
    },
    projectWidget: {
      webp: '/assets/hero-project-dark.webp',
      png: '/assets/hero-project-dark.png',
    },
    bigWidgetProfile: {
      webp: '/assets/hero-big-widget-dark-profile.webp',
      png: '/assets/hero-big-widget-dark-profile.png',
    },
  },
  light: {
    base: {
      webp: '/assets/hero-base-light.webp',
      png: '/assets/hero-base-light.png',
    },
    notification: {
      webp: '/assets/LarryCV.webp',
      png: '/assets/LarryCV.png',
    },
    heart: {
      webp: '/assets/hero-heart-widget-light.webp',
      png: '/assets/hero-heart-widget-light.png',
    },
    projectWidget: {
      webp: '/assets/hero-project-light.webp',
      png: '/assets/hero-project-light.png',
    },
    bigWidgetProfile: {
      webp: '/assets/hero-big-widget-light-profile.webp',
      png: '/assets/hero-big-widget-light-profile.png',
    },
  },
}

export const HeroIllustration = () => {
  const { resolvedTheme } = useTheme()
  const mounted = useMounted()
  const activeTheme = resolvedTheme === 'dark' ? 'dark' : 'light'

  const image = imageMap[activeTheme]

  if (!mounted) return null

  return (
    <section className='z-[-10] absolute scale-[0.6] -bottom-[38rem] right-[50%] translate-x-[50%] md:translate-x-0 md:scale-[0.8] md:bottom-auto md:top-52 md:-right-40 lg:-right-36 lg:top-16 xl:-top-24 xl:-right-20 2xl:-right-16 lg:scale-100'>
      <picture>
        <source type='image/webp' srcSet={image.base.webp} />
        <source type='image/png' srcSet={image.base.png} />
        <MotionImage
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial='hidden'
          animate='visible'
          exit='hidden'
          transition={{
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 1,
          }}
          priority
          src={image.base.png}
          width={693}
          height={706}
          alt='Hero illustration'
          className='object-cover w-full min-w-[693px] h-full min-h-[706px]'
        />
      </picture>
      {/* Top Left */}
      <picture>
        <source type='image/webp' srcSet={image.bigWidgetProfile.webp} />
        <source type='image/png' srcSet={image.bigWidgetProfile.png} />
        <MotionImage
          variants={smallWidgetVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          transition={{
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 8,
          }}
          priority
          src={image.notification.png}
          height={114}
          width={252}
          alt='Hero notification widget'
          className='absolute right-96 top-24'
        />
      </picture>
      {/* Bottom Left */}
      <picture>
        <source type='image/webp' srcSet={image.projectWidget.webp} />
        <source type='image/png' srcSet={image.projectWidget.png} />
        <MotionImage
          variants={bigWidgetVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          transition={{
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 8,
          }}
          src={image.projectWidget.png}
          loading='lazy'
          height={186}
          width={205}
          alt='Hero big widget'
          className='absolute left-[5rem] top-[19rem]'
        />
      </picture>
      {/* Top Right */}
      <picture>
        <source type='image/webp' srcSet={image.notification.webp} />
        <source type='image/png' srcSet={image.notification.png} />
        <MotionImage
          variants={bigWidgetVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          transition={{
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 8,
          }}
          src={image.bigWidgetProfile.png}
          loading='lazy'
          height={186}
          width={205}
          alt='Hero big widget'
          className='absolute right-[8rem] top-[8.25rem]'
        />
      </picture>
      {/* Bottom Right */}
      <picture>
        <source type='image/webp' srcSet={image.heart.webp} />
        <source type='image/png' srcSet={image.heart.png} />
        <MotionImage
          variants={smallWidgetVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          transition={{
            duration: 0.75,
            ease: [0.455, 0.03, 0.515, 0.955],
            delay: 14,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            repeatDelay: 8,
          }}
          src={image.heart.png}
          loading='lazy'
          height={113}
          width={255}
          alt='Hero like widget'
          className='absolute right-[5.5rem] top-[24.75rem]'
        />
      </picture>
    </section>
  )
}
