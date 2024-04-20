import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
  },
  en: {
    title: 'About us',
    button: 'Go to home page',
  },
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.es
}
export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
