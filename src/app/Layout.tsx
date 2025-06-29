export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-3">
      <div className="">{children}</div>
      <a
        href="https://github.com/jldec/minimal-rwsdk-rsc"
        className="text-blue-500 underline absolute top-3 right-3"
      >
        github
      </a>
    </div>
  )
}
