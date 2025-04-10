import './global.css';
import Header from './Header';

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}
//Master layout for gobal page
export default function RootLayout({ children, }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
    
  )
}

