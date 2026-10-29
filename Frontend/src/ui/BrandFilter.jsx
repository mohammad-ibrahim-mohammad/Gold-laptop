import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldLegend,
  FieldDescription,
} from "@/components/ui/field";
import useBrands from "@/features/Brands/useBrands";
import { useSearchParams } from "react-router-dom";

function BrandFilter() {
  const { brands = [] } = useBrands();
  console.log("brands", brands);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedFields = searchParams.getAll("brand");

  function handleAddBrandFilter(value, checked) {
    if (checked) searchParams.append("brand", value);
    else {
      const brands = searchParams.getAll("brand").filter((brand) => {
        return brand !== value;
      });

      searchParams.delete("brand");

      brands.forEach((brand) => {
        searchParams.append("brand", brand);
      });
    }
    setSearchParams(searchParams);
  }
  return (
    <FieldSet>
      <FieldLegend variant="label">Brands</FieldLegend>

      <FieldGroup className="gap-3">
        <FieldSet>
          <FieldGroup className="gap-3">
            {brands.map((brand) => (
              <Field key={brand.id} orientation="horizontal">
                <Checkbox
                  id={brand.id}
                  name="brand"
                  checked={selectedFields.includes(brand.name)}
                  onCheckedChange={(checked) => {
                    handleAddBrandFilter(brand.name, checked);
                  }}
                />
                <FieldLabel htmlFor={brand.id} className="font-normal">
                  {brand.name}
                </FieldLabel>
              </Field>
            ))}
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </FieldSet>
  );
}

export default BrandFilter;
