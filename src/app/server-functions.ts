'use server'
import { renderRealtimeClients } from 'rwsdk/realtime/worker'
import { env } from 'cloudflare:workers'

export async function renderClients() {
  console.log('Render realtime clients on key "rwsdk-realtime"')
  await renderRealtimeClients({
    durableObjectNamespace: env.REALTIME_DURABLE_OBJECT,
    key: 'rwsdk-realtime'
  })
}
