import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldLegend,
  FieldDescription,
} from "@/components/ui/field";
import useCategories from "@/features/Categories/useCategories";
import { useSearchParams } from "react-router-dom";

function CategoryFilter() {
  const { categories = [] } = useCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedFields = searchParams.getAll("category");

function handleAddCategoryFilter(value, checked) {
  const newSearchParams = new URLSearchParams(searchParams);

  if (checked) {
    newSearchParams.append("category", value);
  } else {
    const categories = newSearchParams
      .getAll("category")
      .filter((category) => category !== value);

    newSearchParams.delete("category");

    categories.forEach((category) => {
      newSearchParams.append("category", category);
    });
  }

  setSearchParams(newSearchParams);
}

  return (
    <FieldSet>
      <FieldLegend variant="label">Categories</FieldLegend>

      <FieldGroup className="gap-3">
        <FieldSet>
          <FieldGroup className="gap-3">
            {categories.map((category) => (
              <Field key={category.id} orientation="horizontal">
                <Checkbox
                  id={category.id}
                  name="category"
                  checked={selectedFields.includes(category.name)}
                  onCheckedChange={(checked) =>
                    handleAddCategoryFilter(category.name, checked)
                  }
                />
                <FieldLabel htmlFor={category.id} className="font-normal">
                  {category.name}
                </FieldLabel>
              </Field>
            ))}
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </FieldSet>
  );
}

export default CategoryFilter;
