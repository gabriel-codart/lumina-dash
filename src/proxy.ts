import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Simulamos a busca de um token nos cookies
  const token = request.cookies.get('auth_token')?.value;

  const isAuthPage = request.nextUrl.pathname.startsWith('/login');

  // Se o usuário NÃO tem token e tenta acessar o dashboard
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Se o usuário JÁ tem token e tenta ir para o login
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

// Configura em quais rotas o proxy deve agir
export const config = {
  // Isso vai capturar a raiz (/) e a rota /home
  matcher: ['/', '/home/:path*'],
};