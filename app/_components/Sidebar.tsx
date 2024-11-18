const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* IMAGEM */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">STOCKLY</h1>
      </div>
      {/* BUTTOM */}
      <div className="flex flex-col gap-2 p-2">
        <button className="px-6 py-3">Deshboard</button>
        <button className="px-6 py-3">Profuctos</button>
        <button className="px-6 py-3">Vendas</button>
      </div>
    </div>
  );
};

export default Sidebar;
