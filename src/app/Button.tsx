'use client'
import { renderClients } from './server-functions'

export function Button() {
  return (
    <button
      onClick={() => renderClients()}
      className="active:border-gray-200 hover:bg-gray-100 shadow-sm border border-gray-500 rounded-md cursor-pointer px-2 py-1"
    >
      Render Clients
    </button>
  )
}
