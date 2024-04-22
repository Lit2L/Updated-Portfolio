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
      'https://cdn.dribbble.com/userupload/12840703/file/original-d9f6767c563b14bca73ca6105eff8b89.png?resize=1024x666',
    imageAlt: 'Ecommerce site selling aromatic experiences. App by Lit2l',
    link: '/project/tsks',
    color: '#1D1D26',
  },
  {
    id: 0,
    name: 'Hippo Docs',
    area: 'Forms and Documents',
    image:
      'https://cdn.dribbble.com/userupload/12178406/file/original-5e332247bb89258ea8e13dd1d5fadb23.png?resize=752x',
    imageAlt: 'HippoDocs by Lit2l',
    link: '/project/miinto',
  },
  {
    id: 2,
    name: 'IyamSwimCoach App',
    area: 'Payments, Class Management, Booking & Scheduling',
    image:
      'https://cdn.dribbble.com/userupload/12841225/file/original-da64cc0cd6b9cdbed957b3d7efdf4046.png?resize=1024x666',
    imageAlt: 'IyamSwimCoach by Lit2l',
    link: '/project/IyamSwimCoach',
    color: '#E3E3E3',
  },
]
