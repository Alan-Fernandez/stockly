interface Params {
  id: string;
}

const ProductDetailsPage = ({ params: { id } }: { params: Params }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id} </p>
    </div>
  );
};

export default ProductDetailsPage;
