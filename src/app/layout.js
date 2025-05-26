import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import SessionWrapper from "@/components/SessionWrapper";

export const metadata = {
  title: "HR Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <Navbar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
