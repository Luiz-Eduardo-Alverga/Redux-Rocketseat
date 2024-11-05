import { MessageCircle } from 'lucide-react'
import { useEffect } from 'react'

import { Header } from '../components/header'
import { Module } from '../components/Module'
import { Video } from '../components/Video'
import { useStore } from '../zustand-store'

export function Player() {
  const { course, load } = useStore((store) => {
    return {
      course: store.course,
      load: store.load,
    }
  })

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 font-medium rounded bg-violet-500 px-3 py-2 text-sm text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar Feedback
          </button>
        </div>

        <main className="relative flex pr-80 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="w-80 absolute top-0 divide-y-2 divide-zinc-900 bottom-0 right-0 overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {course?.modules &&
              course?.modules.map((module, index) => (
                <Module
                  key={module.id}
                  moduleIndex={index}
                  title={module.title}
                  amountOfLeassons={module.lessons.length}
                />
              ))}
          </aside>
        </main>
      </div>
    </div>
  )
}
