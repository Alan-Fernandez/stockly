import { Button } from "../_components/ui/button";
import { PlusIcon } from "lucide-react";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getPeoduct } from "../_data-access/product/get-product";

const ProductsPage = async () => {
  const products = await getPeoduct();

  return (
    <div className="w-full space-y-8">
      {/* ESQUERDA */}
      <div className="space-y-1">
        <h2
          className="text-2xl font-semibold text-gray-900"
        >
          Productos
        </h2>
        <span className="t">Gestão de Produtos</span>
        <p
          className="text-gray-500"
        >
          Lista de productos cadastrados
        </p>
      </div>
      <div>
        <Button className="gap-2">
            <PlusIcon size={20}/>
            Novo Produto
        </Button>
      </div>
      
      {/* DIREITA */}
      <DataTable 
        columns={productTableColumns} 
        data={JSON.parse(JSON.stringify(products))} />
    </div>
    
  );
};

export default ProductsPage;
