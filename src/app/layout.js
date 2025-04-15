import Navbar from '@/components/Navbar'
import { AuthProvider } from '@/context/auth'

export const metadata = {
  title: "Simple Chat App",
  description: "A chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
