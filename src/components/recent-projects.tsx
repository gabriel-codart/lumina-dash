import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: "1",
    name: "E-commerce Landing Page",
    client: "Loja Tech",
    value: "R$ 2.500,00",
    status: "Concluído",
  },
  {
    id: "2",
    name: "Dashboard Financeiro",
    client: "Finanças Pro",
    value: "R$ 4.800,00",
    status: "Em andamento",
  },
  {
    id: "3",
    name: "App de Delivery",
    client: "Lanches Express",
    value: "R$ 7.200,00",
    status: "Pendente",
  },
]

export function RecentProjects() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Projeto</TableHead>
            <TableHead className="hidden md:table-cell">Cliente</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell className="hidden md:table-cell">{project.client}</TableCell>
              <TableCell>{project.value}</TableCell>
              <TableCell className="text-right">
                <Badge 
                  variant="outline"
									className={
										project.status === "Concluído" 
											? "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800" 
											: project.status === "Em andamento" 
											? "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800" 
											: "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800"
									}
                >
                  {project.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}