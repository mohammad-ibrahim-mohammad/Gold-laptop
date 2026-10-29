function ProductSpec({ product }) {
  const speces = [
    { label: "manufacturer", value: product.specifications?.manufacturer },
    { label: "partNumber", value: product.specifications?.partNumber },
    { label: "processor", value: product.specifications?.processor },
    { label: "ram", value: product.specifications?.ram },
    { label: "storage", value: product.specifications?.storage },
    { label: "graphicsCard", value: product.specifications?.graphicsCard },
    { label: "screen", value: product.specifications?.screen },
    { label: "battery", value: product.specifications?.battery },
    { label: "camera", value: product.specifications?.camera },
    { label: "keyboard", value: product.specifications?.keyboard },
    { label: "ports", value: product.specifications?.ports },
    { label: "connectivity", value: product.specifications?.connectivity },
    { label: "audio", value: product.specifications?.audio },
    {
      label: "operatingSystem",
      value: product.specifications?.operatingSystem,
    },
    { label: "weight", value: product.specifications?.weight },
    { label: "color", value: product.specifications?.color },
  ];
  return (
    <dl className="mt-4 flex flex-col divide-y divide-gray-100 text-sm">
      {speces
        .filter((s) => s.value)
        .map((s) => (
          <div key={s.label} className="flex justify-between gap-4 py-2">
            <dt className="font-medium text-gray-500 capitalize">{s.label}</dt>
            <dd className="text-right text-gray-800">{s.value}</dd>
          </div>
        ))}
    </dl>
  );
}

export default ProductSpec;
