"use client"

import { useRouter } from "next/navigation"
import { LayoutDashboard, Receipt, Briefcase, Settings, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

const items = [
  { title: "Dashboard", url: "/home", icon: LayoutDashboard },
  { title: "Projetos", url: "/projects", icon: Briefcase },
  { title: "Financeiro", url: "#", icon: Receipt },
  { title: "Configurações", url: "#", icon: Settings },
]

export function AppSidebar() {
  const router = useRouter()

  function handleLogout() {
    // 1. Deletamos o cookie definindo uma data de expiração no passado
    document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"

    // 2. Opcional: Se você estiver usando localStorage para algo, limpe aqui
    // localStorage.removeItem('user_data')

    // 3. Redirecionamos para o login
    router.push("/login")

    // 4. ESSENCIAL: O refresh limpa o cache do Client Router e força o Proxy a rodar
    router.refresh()
  }

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                  className="text-red-500 hover:text-red-600"
                  onClick={handleLogout}
                >
                    <LogOut />
                    <span>Sair</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}