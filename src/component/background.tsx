import { MainBody } from './mainbody.tsx'
import { SideNav } from './sidenav.tsx'

export const Background = () => {
  return (
    <section className="h-full w-full bg-black p-4 flex">
      <SideNav />
      <MainBody />
    </section>
  )
}
