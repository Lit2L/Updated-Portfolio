export type Project = {
  id: number
  name: string
  area: string
  link: string
  image: string
  imageAlt: string
  color?: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Louvair Store',
    area: 'E-commerce',
    image:
      'https://cdn.dribbble.com/users/1858541/screenshots/15209401/media/5781bdac4f41c65f58ea597cad62c2ce.png',
    imageAlt: 'Ecommerce site selling aromatic experiences. App by Lit2l',
    link: '/project/tsks',
    color: '#1D1D26',
  },
  {
    id: 0,
    name: 'Hippo Docs',
    area: 'Forms and Documents',
    image:
      'https://cdn.dribbble.com/users/1858541/screenshots/17394216/media/113b3233d9f61e804377a2aa2488d613.png',
    imageAlt: 'HippoDocs by Lit2l',
    link: '/project/miinto',
  },
  {
    id: 2,
    name: 'Pro Swim App',
    area: 'Payments, Class Management, Booking & Scheduling',
    image:
      'https://cdn.dribbble.com/users/1858541/screenshots/15230513/media/7397c1314ebf5d5090efa3c2af032deb.png',
    imageAlt: '100 days of UI by Lit2l',
    link: '/project/100-days-of-ui',
    color: '#E3E3E3',
  },
]
