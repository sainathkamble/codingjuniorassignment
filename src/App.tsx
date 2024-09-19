import './global.css'
import { Background } from './component/background.tsx'
import { TopNav } from './component/topnav.tsx'

export default function App() {

  return (
    <main className="h-full w-full overflow-y-hidden overflow-x-hidden">
      <TopNav />
      <Background />
    </main>
  )
}
