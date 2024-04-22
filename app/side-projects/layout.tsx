import { getAge } from '@utils/get-age'
import { Metadata } from 'next'
import { SideProjectsShell } from './side-project-shell'

export const metadata: Metadata = {
  title: 'Side Projects - Larry Ly',
  description: `I'm a data analyst that found web development over a year ago.  Now I love displaying data with the challenges that front-end development brings.`,
}

export default function SideProjectLayout({ children }: { children: React.ReactNode }) {
  return <SideProjectsShell>{children}</SideProjectsShell>
}
