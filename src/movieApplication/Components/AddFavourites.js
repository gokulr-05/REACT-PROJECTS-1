import "./AddFavourites.css";

let AddFavourites = ({ fav_icon, setFav_Icon }) => {
  return (
    <span className="d-flex gap-4 overlayy bg-black p-2 opacityy-0">
      <h5 className="text-capitalize text-white">favourites</h5>
      {!fav_icon && (
        <i
          class="fa-solid fa-heart text-white fs-4"
          onClick={(e) => {
            setFav_Icon(1);
          }}
        ></i>
      )}
      {fav_icon && (
        <i
          class="fa-solid fa-heart text-danger fs-4"
          onClick={(e) => {
            setFav_Icon(0);
          }}
        ></i>
      )}
    </span>
  );
};

export default AddFavourites;
