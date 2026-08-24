import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Notq - Apprentissage Arabe", description: "Outil de suivi et d'activités en arabe pour orthophonistes et enfants." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
