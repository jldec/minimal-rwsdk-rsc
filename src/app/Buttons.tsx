'use client'
import { renderClients } from './server-functions'
import { ClientOnly } from './ClientOnly'
import { SpaMode } from './SpaMode'

async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  await renderClients()
}

export function Buttons() {
  return (
    <div className="flex flex-row items-end gap-2 m-3">
      <button
        onClick={handleClick}
        className="border border-gray-500 active:border-gray-200 rounded-md hover:bg-gray-100 hover:text-orange-500 shadow-sm cursor-pointer px-2 py-1"
      >
        Render Realtime Clients
      </button>
      <ClientOnly>

      <SpaMode /></ClientOnly>
    </div>
  )
}
