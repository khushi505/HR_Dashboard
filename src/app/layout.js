import "./globals.css";
import Navbar from "@/components/Layout/Navbar";

export const metadata = {
  title: "HR Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
