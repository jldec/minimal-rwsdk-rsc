import { initClient, initClientNavigation } from 'rwsdk/client'
import { initRealtimeClient } from 'rwsdk/realtime/client'

const url = new URL(window.location.href)

if (url.searchParams.has('spa')) {
  initClient()
  initClientNavigation()
  console.log('spa mode')
} else {
  initRealtimeClient({ key: 'rwsdk-realtime' })
  console.log('realtime mode')
}