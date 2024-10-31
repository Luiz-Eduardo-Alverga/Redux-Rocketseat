import { MessageCircle } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Header } from '../components/header'
import { Module } from '../components/Module'
import { Video } from '../components/Video'
import { api } from '../lib/axios'
import { useAppSelector } from '../store'
import { start } from '../store/slices/player'

export function Player() {
  const dispatch = useDispatch()
  const modules = useAppSelector((state) => state.player.course?.modules)

  useEffect(() => {
    api.get('/courses/1').then((response) => {
      console.log(response.data)
      dispatch(start(response.data))
    })
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
            {modules &&
              modules.map((module, index) => (
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
