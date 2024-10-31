import { useCurrentLesson } from '../store/slices/player'

export function Header() {
  const { currentLesson, currentModule } = useCurrentLesson()

  if (!currentModule || !currentLesson) {
    return null
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-bold text-2xl"> {currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo: {currentModule.title}
      </span>
    </div>
  )
}