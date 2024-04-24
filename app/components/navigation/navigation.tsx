'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import Logo from '@/components/logo'
import { linkVariants, navVariants } from '@/components/navigation'
import { ThemeToggleButton } from '@/components/theme-toggle-button'
import { HiDownload } from 'react-icons/hi'

const AnimatedLink = motion(Link)
AnimatedLink.defaultProps = { className: 'hover:text-primary-brand nav-link' }

export function Navigation() {
  return (
    <motion.header
      variants={navVariants}
      initial='hidden'
      animate='visible'
      className='container fixed inset-x-0 top-0 z-50 hidden h-32 w-full items-center justify-between md:flex'
    >
      <AnimatedLink href='/' variants={linkVariants} className=''>
        <Logo />
      </AnimatedLink>

      <nav className='flex items-center justify-center gap-x-14 text-lg'>
        <AnimatedLink href='/#intro' variants={linkVariants}>
          Introduction
        </AnimatedLink>
        <AnimatedLink href='/#projects' variants={linkVariants}>
          Projects
        </AnimatedLink>
        <AnimatedLink href='/#about' variants={linkVariants}>
          About
        </AnimatedLink>
        <AnimatedLink href='/#contact' variants={linkVariants}>
          Contact
        </AnimatedLink>
        <button className=''>
          <a
            className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-95 hover:scale-95 active:scale-90 transition cursor-pointer borderBlack text-xs dark:bg-green-500/80'
            href='/LarryLy-CV.pdf'
            download
          >
            Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
          </a>
        </button>

        <motion.div variants={linkVariants}>
          <ThemeToggleButton />
        </motion.div>
      </nav>
    </motion.header>
  )
}
