import { requestInfo as r } from 'rwsdk/worker'
import { Layout } from './Layout'
import { Url } from './Url'
import { Headers } from './Headers'
import { Params } from './Params'
import { IsDev } from './IsDev'
import { Sleep } from './Sleep'

const pages: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/test': 'Test'
}

export async function Page() {
  const url = new URL(r.request.url)
  const title = pages[url.pathname] || url.pathname

  return (
    <Layout>
      <title>{title + ' minimal-rwsdk-rsc'}</title>
      <div className="m-3">
        <h1 className="text-center text-2xl font-bold border-b border-gray-200 mb-2">{title}</h1>
        This is a server component
        <Sleep />
        <p>{new Date().toISOString()}</p>
        <Url />
        <IsDev />
        <Params />
        <Headers />
      </div>
    </Layout>
  )
}
