'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: any;
  }[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="w-1/5  bg-gray-50 dark:bg-slate-900  [&::-webkit-scrollbar]:hidden  top-6 left-0  overflow-scroll ">
      <div className="h-full flex flex-col py-3  border-r">
        <div className="flex flex-col w-full space-y-1.5 p-3">
          <nav className="flex flex-col p-4 h-full ">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'bg-gray-50 hover:bg-gray-50 text-white'
                    : 'bg-gray-50 text-gray-800'
                } flex items-center py-2 px-4 rounded-lg mb-2`}
              >
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
