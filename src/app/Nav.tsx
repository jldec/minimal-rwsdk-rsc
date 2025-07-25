import { RealtimeToggle } from './RealtimeToggle'
import { SpaModeToggle } from './SpaModeToggle'
import { requestInfo } from 'rwsdk/worker'

export function Nav() {
  const url = new URL(requestInfo.request.url)
  const isSpaMode = url.searchParams.has('spa')
  const isRealtimeMode = url.searchParams.has('realtime')
  let sleepTime = Number(url.searchParams.get('sleep'))
  sleepTime = sleepTime > 0 ? sleepTime : 0

  const href = (path: string) => {
    const params = new URLSearchParams()
    if (sleepTime) params.set('sleep', sleepTime.toString())
    if (isSpaMode) params.set('spa', '')
    if (isRealtimeMode) params.set('realtime', '')
    const search = params.toString()
    return path + (search ? '?' + search : '')
  }

  return (
    <nav
      className={
        'relative flex flex-row sm:justify-between gap-2 items-center p-2 ' +
        (sleepTime ? 'bg-yellow-100' : 'bg-gray-100')
      }
    >
      <div className="flex flex-row flex-grow gap-2">
        <SpaModeToggle isSpaMode={isSpaMode} />
        <RealtimeToggle isRealtimeMode={isRealtimeMode} />
      </div>
      <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 flex flex-row gap-2 sm:gap-4">
        <a href={href('/')} className="hover:underline hover:text-orange-500">
          Home
        </a>
        <a href={href('/about')} className="hover:underline hover:text-orange-500">
          About
        </a>
        <a href={href('/test')} className="hover:underline hover:text-orange-500">
          Test
        </a>
      </div>
      <a
        href="https://github.com/jldec/minimal-rwsdk-rsc"
        className="hover:underline hover:text-orange-500"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </nav>
  )
}
