'use client'

export function SpaModeToggle({ isSpaMode }: { isSpaMode: boolean }) {
  // always navigates
  function handleChange() {
    const url = new URL(window.location.href)
    if (isSpaMode) {
      url.searchParams.delete('spa')
    } else {
      url.searchParams.set('spa', '')
    }
    window.location.href = url.toString()
  }

  // https://daisyui.com/components/toggle/
  return (
    <span className={`${isSpaMode ? 'text-orange-500' : 'text-gray-400'} flex items-center`}>
      <input
        type="checkbox"
        checked={isSpaMode}
        onChange={handleChange}
        className="toggle toggle-secondary mr-1"
      />
      SPA
    </span>
  )
}
