import Link from "next/link";

interface NavItem {
  id: string;
  label: string;
  onClick?: () => void;
  href?: string;
}

interface TopNavProps {
  navItems: NavItem[];
  logoHref?: string;
}

export default function TopNav({ navItems, logoHref = "/" }: TopNavProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10 h-16 flex items-center">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 w-full h-full">
        <Link href={logoHref} className="flex items-center gap-4 hover:opacity-90 h-full">
          <img src="/R.png" alt="Reveniee logo" className="h-12 w-12" style={{ height: 48, width: 48 }} />
          <span className="text-lg font-black flex items-center h-full">Reveniee</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm uppercase">
          {navItems.map(item =>
            item.href ? (
              <Link key={item.id} href={item.href} className="relative group">
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 group-hover:w-full transition-all" />
              </Link>
            ) : (
              <button key={item.id} onClick={item.onClick} className="relative group">
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 group-hover:w-full transition-all" />
              </button>
            )
          )}
        </nav>
      </div>
    </header>
  );
} 