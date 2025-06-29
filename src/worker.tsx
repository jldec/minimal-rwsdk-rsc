import { defineApp } from 'rwsdk/worker'
import { env } from 'cloudflare:workers'
import { realtimeRoute } from 'rwsdk/realtime/worker'
import { render, route } from 'rwsdk/router'
import { Document } from './app/Document'
import { Page } from './app/Page'

export { RealtimeDurableObject } from 'rwsdk/realtime/durableObject'

export type AppContext = {}

const app = defineApp([
  realtimeRoute(() => env.REALTIME_DURABLE_OBJECT),
  render(Document, [route('*', Page)], { ssr: false })
])

export default {
  fetch: app.fetch
}
