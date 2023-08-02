import HeroDefault from '@/components/HeroSections/HeroDefault/HeroDefault'
import Header from '@/components/Headers/Header/Header'
import Logo from '@/components/Layout/Logo/Logo'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
export default function Home() {
  return (
    <HeroDefault
      header={<Header logo={<Logo />} navigation={navigation} fullwidth="no" />}
    />
  )
}
