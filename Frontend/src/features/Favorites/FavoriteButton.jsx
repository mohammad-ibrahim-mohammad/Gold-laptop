import { Button } from "../../components/ui/button.jsx";
import { HiOutlineHeart } from "react-icons/hi";
import useCreateFavorite from "./useCreateFavorite.js";

function FavoriteButton({ className, productId }) {
  const { createFavorite } = useCreateFavorite();
  
  return (
    <div>
      <Button
        size="icon"
        variant="outline"
        className={className}
        onClick={() => createFavorite({ product: productId })}
      >
        <HiOutlineHeart />
      </Button>
    </div>
  );
}

export default FavoriteButton;
