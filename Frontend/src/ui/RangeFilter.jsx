import { Slider } from "@/components/ui/slider";

function RangeFilter() {
  return (
    <div className="space-y-5">
      <h3 className="text-base font-semibold text-black">Price Range</h3>

      <Slider
        min={200}
        max={10000}
        step={100}
        defaultValue={[200, 10000]}
        className="w-full"
      />

      <div className="flex items-center justify-between text-sm text-black">
        <span>200 د.إ</span>
        <span>10,000 د.إ</span>
      </div>
    </div>
  );
}

export default RangeFilter;
