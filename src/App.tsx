import { useState, ChangeEvent } from "react";
import "./App.css";
import Creatprodect from "./component/creatprodect";
import { productlist, formlabel } from "./data";
import Dealog from "./UI/Modaldialog";
import Input from "./UI/input";
import { Iprodect } from "./intrfaces";

function App() {
  // state //
  const [product, setProduct] = useState<Iprodect>({
    title: "",
    descreption: "",
    price: "",
    imagUrl: "",
    color: [],
    catigury: {
      imag: "",
      name: "",
    },
  });

  // dialog state //
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const productRender = productlist.map((product) => (
    <Creatprodect key={product.id} product={product} />
  ));

  const formRender = formlabel.map((input) => (
    <div key={input.id}>
      <label htmlFor={input.id}> {input.label} </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
    </div>
  ));

  return (
    <div className="">
      <div className="md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md">
        {productRender}
      </div>
      <button onClick={open} className="bg-blue-500 text-white p-2 rounded-md">
        Add New Product
      </button>

      <Dealog title={"ADD NEW PRODUCT"} isOpen={isOpen} close={close}>
        {formRender}
        <div className="flex items-center justify-between my-1 space-x-3 mt-5">
          <button className="bg-blue-500 border rounded-md text-white w-full py-2 px-2">
            Submit
          </button>

          <button
            className="bg-gray-700 border rounded-md text-white w-full py-2 px-2"
            onClick={close}
          >
            Cancel
          </button>
        </div>
      </Dealog>
    </div>
  );
}

export default App;
