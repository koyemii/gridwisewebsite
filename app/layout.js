import "./globals.css";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata = {
  title: "Gridwise | AI-Native Energy Orchestration",
  description:
    "AI-native orchestration and digital twin platform for distributed industrial and infrastructure energy systems in renewable-dominant grids."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
