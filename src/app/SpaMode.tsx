'use client'

export function SpaMode() {
  // @ts-ignore
  if (typeof window !== 'undefined' && window.spaMode) {
    return <span className="text-sm bg-orange-200 rounded-full px-2 py-0.5">SPA mode</span>
  }
}
