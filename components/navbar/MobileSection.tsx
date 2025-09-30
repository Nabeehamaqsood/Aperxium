import Link from "next/link"
import { usePathname } from "next/navigation"

interface MobileSectionProps {
  title: string
  items: { name: string; href: string }[]
  onClick: () => void
}

export function MobileSection({ title, items, onClick }: MobileSectionProps) {
  const pathname = usePathname()

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <div>
      <h3 className="text-white font-semibold mb-3">{title}</h3>
      <div className="space-y-2 pl-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={`block py-2 text-sm transition-colors ${
              isActive(item.href)
                ? "text-purple-400"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}