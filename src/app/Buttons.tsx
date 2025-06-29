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
    <div className="flex flex-row items-end gap-2 mx-2 my-3">
      <button
        onClick={handleClick}
        className="bg-gray-200 rounded-md  hover:text-orange-500 active:shadow-sm active:shadow-gray-200 hover:bg-gray-100 cursor-pointer px-2 py-1"
      >
        Render Realtime Clients
      </button>
      <ClientOnly fallback="">
        <SpaMode />
      </ClientOnly>
    </div>
  )
}
