import "./globals.css";

export const metadata = {
  title: "Hi, I'm Ciara Cade.",
  description: "Ciara Cade's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
