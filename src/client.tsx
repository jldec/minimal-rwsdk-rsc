import { initClient, initClientNavigation } from 'rwsdk/client'
import { initRealtimeClient } from 'rwsdk/realtime/client'

const url = new URL(window.location.href)

if (url.searchParams.get('spa') !== null) {
  initClient()
  initClientNavigation()
  console.log('spa mode')
  // @ts-ignore
  window.spaMode = true
} else {
  initRealtimeClient({ key: 'rwsdk-realtime' })
  console.log('realtime mode')
  // @ts-ignore
  window.realtimeMode = true
}