import { ItemInterface } from "../../../Interfaces/ItemInterface/ItemInterface";

import "./Item.scss";

const Item = ({ imageSrc, imageAlt, className }: ItemInterface) => {
  return (
    <div className={`item-container ${className}`}>
      <div className="item-container__layer">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

export default Item;
