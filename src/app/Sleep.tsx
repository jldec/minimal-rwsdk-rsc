import { requestInfo as r } from 'rwsdk/worker'

async function sleep(s: number) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000))
}

export async function Sleep() {
  const url = new URL(r.request.url)
  const sleepTime = Number(url.searchParams.get('sleep'))
  if (sleepTime > 0) {
    await sleep(sleepTime)
    return <i>{' '}(sleeps {sleepTime}s)</i>
  }
  return null
}
