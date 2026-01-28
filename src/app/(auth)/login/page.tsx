"use client" // <--- Importante!

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // Mock de Login: Vamos criar um cookie manualmente para testar o Proxy
    // Em um app real, aqui você faria o fetch para sua API/Hono
    document.cookie = "auth_token=true; path=/; max-age=3600" // Expira em 1 hora

    // Simula um pequeno delay de rede para mostrar o loading
    setTimeout(() => {
      router.push("/home")
      router.refresh() // Força o Next a revalidar o Proxy
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Lumina Dash</CardTitle>
          <CardDescription className="text-center">
            Use qualquer e-mail e senha para entrar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input id="email" type="email" placeholder="nome@exemplo.com" required />
            </div>
            <div className="space-y-2">
              <Input id="password" type="password" placeholder="Sua senha" required />
            </div>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Acessar Sistema"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}