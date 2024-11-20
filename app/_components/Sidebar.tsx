import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import SidebarButton from "./Sidebar-button";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* IMAGEM */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">STOCKLY</h1>
      </div>
      {/* BUTTOM */}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutGridIcon size={24} />
          Dashboard
        </SidebarButton>
        <SidebarButton href="/products">
          <PackageIcon size={24} />
          Produtos
        </SidebarButton>
        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={24} />
          Vendas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
