import { getAge } from '@/utils/get-age'
import { Metadata } from 'next'
import { SideProjectsShell } from './side-project-shell'

export const metadata: Metadata = {
  title: 'Side Projects - Larry Ly',
  description: `I make things on the web and solve problems.`,
}

export default function SideProjectLayout({ children }: { children: React.ReactNode }) {
  return <SideProjectsShell>{children}</SideProjectsShell>
}
