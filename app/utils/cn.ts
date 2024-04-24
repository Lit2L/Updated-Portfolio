import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}

export function cna(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
