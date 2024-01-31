'use client';
import {
  Box,
  ChevronRight,
  Diameter,
  Layers,
  Palette,
  Ruler,
  Settings,
  ShoppingBasket,
  SprayCan,
  StoreIcon,
  Truck,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Item } from './item';
import { useParams, usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();
  const params = useParams();
  return (
    <div className="w-1/5 h-screen bg-gray-50 dark:bg-slate-900  [&::-webkit-scrollbar]:hidden  top-6 left-0  overflow-scroll ">
      <div className=" h-full flex flex-col py-3  border-r">
        <div className="flex h-full flex-col w-full space-y-1.5 p-3">
          <Item
            icon={StoreIcon}
            url="/dashboard"
            active={true}
            label="Dashboard"
          />
          <Item
            icon={Layers}
            url="/categories"
            label="Category"
            active={false}
          />
          <Item icon={Ruler} url="/sizes" label="Size" active={false} />
          <Item icon={Palette} url="/colors" label="Color" active={false} />

          <Item
            icon={ShoppingBasket}
            url="/dashboard"
            label="Product"
            active={false}
          />
          <Item icon={Box} url="/dashboard" label="Order" active={false} />
          <Item
            icon={Settings}
            url="/dashboard"
            label="Settings"
            active={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
