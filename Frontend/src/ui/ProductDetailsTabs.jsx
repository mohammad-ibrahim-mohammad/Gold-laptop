import { NavLink } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProductDetailsTabs() {
  return (
    <div className="mt-8 flex items-center justify-center border-t border-gray-100 pt-4">
      <Tabs defaultValue="description" className="w-100">
        <TabsList variant="line">
          <TabsTrigger value="description">
            <NavLink to={""}>description</NavLink>
          </TabsTrigger>
          <TabsTrigger value="reviews">
            <NavLink to={`reviews`}>reviews</NavLink>
          </TabsTrigger>
          <TabsTrigger value="delivery">
            <NavLink to={`delivery`}>delivery</NavLink>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

export default ProductDetailsTabs;
