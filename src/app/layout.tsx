"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { store } from "redux/store";
import { Provider as ReduxProvider } from "react-redux";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-navy min-h-screen">
        <ReduxProvider store={store}>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
