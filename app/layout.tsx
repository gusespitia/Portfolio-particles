import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gus Portfolio - Full Stack Developer 👨‍💻",
  description:
    "Explore the portfolio of Gus, a passionate Full Stack Developer specializing in building modern, scalable web applications using technologies like React, Next.js, Node.js, and Tailwind CSS.",
  keywords: [
    "Full Stack Developer",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Projects",
    "Node.js Backend",
    "Frontend Development",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Modern Web Applications",
  ],
  authors: [
    { name: "Gus", url: "https://github.com/gusespitia" },
  ],
  openGraph: {
    title: "Gus Portfolio - Full Stack Developer",
    description:
      "Showcasing projects and skills in frontend and backend development, including technologies like Next.js, React, Node.js, and Tailwind CSS.",
    url: "https://your-portfolio-site.com",
    siteName: "Gus Portfolio",
    images: [
      {
        url: "https://gusdev.surge.sh/home-4.png", // Cambia por un enlace a una imagen representativa de tu portafolio.
        width: 1200,
        height: 630,
        alt: "Gus Portfolio - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gus Portfolio - Full Stack Developer 👨‍💻",
    description:
      "Explore projects and skills of Gus, a Full Stack Developer experienced in React, Next.js, Node.js, and modern web development.",
    site: "@gusspitya", // Cambia por tu nombre de usuario de Twitter.
    creator: "@gusspitya",
    images: ["https://gusdev.surge.sh/home-4.png"], // Imagen optimizada para compartir en Twitter.
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://gusdev.surge.sh",
    languages: {
      "en-US": "https://gusdev.surge.sh",
 
    },
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
