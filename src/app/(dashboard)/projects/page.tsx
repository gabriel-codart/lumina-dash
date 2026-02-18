import { RecentProjects } from "@/components/recent-projects"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Projetos</h2>
          <p className="text-muted-foreground">Gerencie seus trabalhos e prazos ativos.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Novo Projeto
        </Button>
      </div>

      <div className="bg-white dark:bg-zinc-950 rounded-xl p-4 shadow-sm border">
        <RecentProjects />
      </div>
    </div>
  )
}