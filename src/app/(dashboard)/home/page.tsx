import { RecentProjects } from "@/components/recent-projects"
import { RevenueChart } from "@/components/revenue-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Briefcase, Clock, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 p-2">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Bem-vindo, Freela!</h2>
        <p className="text-muted-foreground">Ajudando você a organizar seus trabalhos e rendimentos.</p>
      </div>

      {/* Grid de Cards de Métricas: Auto-ajustável */}
      {/* Aqui ele tenta colocar cards de no mínimo 250px. Se não couber, ele quebra a linha sozinho. */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Recebido</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ 12.450,00</div>
            <p className="text-xs text-muted-foreground">+15% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Horas Mensais</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">164h</div>
            <p className="text-xs text-muted-foreground">Média de 38h por semana</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Concluídos</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">80% da meta mensal atingida</p>
          </CardContent>
        </Card>
      </div>

      {/* Área Principal: Gráfico e Projetos lateralmente ou empilhados */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* O Gráfico ocupa o máximo de espaço (flex-grow) */}
        <div className="flex-[2] min-w-[300px]">
          <RevenueChart />
        </div>
      </div>
    </div>
  )
}