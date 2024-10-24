import { useState } from "react";
import "./App.css";
import Creatprodect from "./component/creatprodect";
import { productlist } from "./data";
import Dealog from "./UI/Modaldialog";

function App() {

  // dialog state //
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const productRender = productlist.map((product) => (
    <Creatprodect key={product.id} product={product} />
  ));

  return (
    <div className="">
       
      <div className="md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md">
        {productRender}
      </div> 
      <button onClick={open}>Add New Product</button>

      <Dealog title={"ADD NEW PRODUCT"} isOpen={isOpen} close={close}>
        <div className="flex items-center justify-between my-1 space-x-3 mt-5">
          <button className="bg-blue-500 border rounded-md  text-white w-full py-2 px-2">Submit</button>
         
          <button className="bg-gray-700 border rounded-md  text-white w-full py-2 px-2">Cancel</button>
        </div>
      </Dealog>
    </div>
  );
}

export default App;
