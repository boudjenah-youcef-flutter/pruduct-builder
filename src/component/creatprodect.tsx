import Imagcom from "./imagcom";
import { Iprodect } from "../intrfaces";
import Buttune from "../UI/Buttune";
import { textclise } from "../utils/texslice";

interface Iprops {
  product : Iprodect
}

const Creatprodect = ( {product} : Iprops ) => {
  return (
    <div className="md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
  <Imagcom
    src="https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"
    alt={product.title}
    classname="rounded-md mb-2 w-full"
  />
  <h3 className="text-left text-sm md:text-lg"> {product.title} </h3>
  <p className="text-xs md:text-base">
    {textclise(product.descreption, 200)}
  </p>

  <div className="flex flex-row my-4 space-x-2 cursor-pointer">
    <span className="w-5 h-5 bg-black border rounded-full"></span>
    <span className="w-5 h-5 bg-amber-300 border rounded-full"></span>
    <span className="w-5 h-5 bg-indigo-600 border rounded-full"></span>
  </div>

  <div className="flex items-center justify-between">
    <span>
      <h4 className="text-sm md:text-base">{product.price}$</h4>
    </span>
    <Imagcom
      src="https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"
      alt={product.title}
      classname="h-8 w-8 rounded-full"
    />
  </div>

  <div className="flex items-center justify-between my-1 space-x-1 mt-5">
    <Buttune className="bg-blue-500" onClick={() => alert("Edit button clicked")}>
      EDIT
    </Buttune>
    <Buttune className="bg-red-500">DELETE</Buttune>
  </div>
</div>

  );
};

export default Creatprodect;
