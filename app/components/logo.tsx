import LogoLight from '../../public/assets/LarryLogoLight.png'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className='hidden sm:block'>
      <Image src={LogoLight} alt='Larry Ly Logo' width={100} height={100} />
    </div>
  )
}
