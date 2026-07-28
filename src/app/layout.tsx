import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Custom Websites for Gift & Toy Shops | Free Demo",
  description:
    "Fully custom, mobile-responsive websites for gift shops and toy stores. WhatsApp integration, fast loading, SEO friendly. Starting from ₹9,999. Request a free demo today.",
  keywords: [
    "gift shop website",
    "toy shop website design",
    "custom website design India",
    "WhatsApp integrated website",
  ],
  openGraph: {
    title: "Custom Websites for Gift & Toy Shops",
    description:
      "Explore three professional website concepts and get a fully customized website for your Gift Shop or Toy Store.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-white text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
