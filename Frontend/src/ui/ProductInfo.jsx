function ProductInfo({ product }) {
  return (
    <div className="flex flex-col justify-start gap-4">
      <p className="text-sm font-semibold">{product.name}</p>
      <p className="text-3xl font-semibold">{product.description}</p>
      <p className="font-primary text-primary text-2xl font-bold">
        {product.price}
      </p>
      {/* <p>{product.category}</p> */}
      <p className="text-gray-400">{product.brand}</p>
    </div>
  );
}

export default ProductInfo;
