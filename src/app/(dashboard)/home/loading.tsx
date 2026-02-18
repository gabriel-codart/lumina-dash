import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col gap-8 p-2">
      {/* Skeleton do Título */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
      
      {/* Skeleton dos 4 Cards de Métricas */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-[120px] w-full rounded-xl" />
        ))}
      </div>

      {/* Skeleton do Gráfico e Lista Lateral */}
      <div className="flex flex-col gap-6 lg:flex-row">
        <Skeleton className="flex-[2] h-[300px] rounded-xl" />
        <Skeleton className="flex-1 h-[300px] rounded-xl" />
      </div>
    </div>
  )
}