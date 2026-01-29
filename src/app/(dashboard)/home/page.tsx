import { RevenueChart } from "@/components/revenue-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Briefcase, Clock, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 p-2">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Bem-vindo, Dev!</h2>
        <p className="text-muted-foreground">Aqui está o resumo dos seus projetos e finanças.</p>
      </div>

      {/* Grid de Cards de Métricas: Auto-ajustável */}
      {/* Aqui ele tenta colocar cards de no mínimo 250px. Se não couber, ele quebra a linha sozinho. */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="min-w-[240px] flex-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Recebido</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ 12.450,00</div>
            <p className="text-xs text-muted-foreground">+15% vs mês anterior</p>
          </CardContent>
        </Card>
      </div>

      {/* Área Principal: Gráfico e Projetos lateralmente ou empilhados */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* O Gráfico ocupa o máximo de espaço (flex-grow) */}
        <div className="flex-[2] min-w-[300px]">
          <RevenueChart />
        </div>

        {/* A área lateral ocupa menos espaço (flex-1) */}
        <div className="flex-1 min-w-[300px] flex flex-col gap-4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Projetos Recentes</CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-sm text-muted-foreground italic">Listagem simplificada aqui...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}