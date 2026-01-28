import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Briefcase, Clock, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Bem-vindo, Dev!</h2>
        <p className="text-muted-foreground">Aqui está o resumo dos seus projetos e finanças.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Recebido</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ 12.450,00</div>
            <p className="text-xs text-muted-foreground">+15% em relação ao mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projetos Ativos</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">2 próximos do prazo final</p>
          </CardContent>
        </Card>

        {/* ... você pode replicar para Horas Mensais e Projetos Concluídos */}
      </div>

      {/* Espaço reservado para o Gráfico que faremos a seguir */}
      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4 h-[300px] flex items-center justify-center border-dashed border-2">
           <p className="text-muted-foreground italic">Gráfico de evolução financeira será aqui...</p>
        </Card>
        
        <Card className="col-span-3 h-[300px] flex items-center justify-center border-dashed border-2">
           <p className="text-muted-foreground italic">Projetos recentes...</p>
        </Card>
      </div>
    </div>
  )
}