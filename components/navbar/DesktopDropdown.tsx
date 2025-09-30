// "use client"
// import { ChevronDown } from "lucide-react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// interface DropdownProps {
//   title: string
//   items: { name: string; href: string }[]
//   basePath: string | string[]
// }

// export function DesktopDropdown({ title, items, basePath }: DropdownProps) {
//   const pathname = usePathname()

//   const isActive = (href: string) => {
//     if (href === "/" && pathname === "/") return true
//     if (href !== "/" && pathname.startsWith(href)) return true
//     return false
//   }

//   const matchPath = (paths: string | string[]) =>
//     typeof paths === "string"
//       ? pathname.startsWith(paths)
//       : paths.some((path) => pathname.startsWith(path))

//   return (
//     <div className="relative group">
//       <button
//         className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
//           matchPath(basePath)
//             ? "text-purple-400 bg-purple-900/20"
//             : "text-white hover:text-gray-300"
//         }`}
//       >
//         <span>{title}</span>
//         <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
//       </button>
//       <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//         <div className="py-2">
//           {items.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`block px-4 py-3 text-sm transition-colors ${
//                 isActive(item.href)
//                   ? "text-purple-600 bg-purple-50 border-r-2 border-purple-600"
//                   : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"
import { useState } from "react"
import Link from "next/link"

interface DesktopDropdownProps {
  title: string
  items: { name: string; href: string }[]
  basePath: string
}

export function DesktopDropdown({ title, items, basePath }: DesktopDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
      <button className="text-gray-800 hover:text-[#3db1a2] transition-colors text-base font-medium">
        {title}
      </button>

      {/* Dropdown Menu with connecting element to prevent gap issues */}
      {isOpen && (
        <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-lg border border-gray-100 z-50">
          {/* Invisible connector to prevent mouseleave during transition */}
          <div className="absolute bottom-full left-0 right-0 h-2" />
          <ul className="py-2">
            {items.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#3db1a2] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}