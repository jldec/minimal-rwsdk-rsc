import type { RequestInfo } from 'rwsdk/worker'
import { Layout } from './Layout'
import { IS_DEV } from 'rwsdk/constants'

export function Page(r: RequestInfo) {
  return (
    <Layout>
      <div className="m-3">
        <h1 className="font-bold border-b border-gray-200 mb-2">
          {new URL(r.request.url).pathname}
        </h1>
        <p>This is a server component</p>
        <p>{new Date().toISOString()}</p>
        <p>
          <b>r.request.url</b>: {r.request.url}
        </p>
        <p>
          <b>IS_DEV</b>: {IS_DEV ? 'true' : 'false'}
        </p>
        <p className="whitespace-pre">
          <b>r.params</b>: {JSON.stringify(r.params, null, 2)}
        </p>
        <p className="whitespace-pre">
          <b>r.request.headers</b>: {JSON.stringify(Object.fromEntries(r.request.headers), null, 2)}
        </p>
      </div>
    </Layout>
  )
}
