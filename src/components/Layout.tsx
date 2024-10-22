
export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {children}
    </div>
  )
};