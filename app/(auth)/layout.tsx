'use client';
import Sidebar from './_components/Sidebar';
import Header from './_components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className=" flex flex-row">
        {/* <SidebarNav items={sidebarNavItems} /> */}
        <Sidebar />
        <div className="w-4/5 relative dark:bg-gradient-to-l from-slate-900  ">
          {children}
        </div>
      </div>
    </>
  );
}
