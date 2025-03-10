const ProductCards = () => {
  // const options = {
  //     method: 'GET',
  //     headers: {
  //         'x-rapidapi-key': '12fee16464msh33a39209bcda457p1682a6jsnc9113466d09f',
  //         'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
  //     }
  // }

  // useEffect(() => {
  //     fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=91&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`)
  //     .then(res => res.json())
  //     .then(res => setApiData(res.results))
  //     .catch(err => console.error(err));

  return (
    <div className="w-screen h-screen flex  justify-center items-center">
      <div className="h-screen  grid grid-cols-2 sm:grid sm:grid-cols-2 md:max-sm:grid-cols-3 lg:grid-cols-4  gap-4  justify-between items-center">
        <div className="w-[300px] h-[400px] flex flex-col justify-center gap-4 bg-white items-center ">
          <div className="w-full ml-4 ">
            <h1 className="text-xl font-semibold ">Continue shopping deals</h1>
          </div>
          <div className="w-full h-[250px]  grid grid-cols-2 gap-4  p-2">
            <div className=" flex justify-center items-center ">
              <img
                src="https://m.media-amazon.com/images/I/81OmhFfS-hL._AC_SY145_.jpg"
                alt=""
              />
            </div>
            <div className=" flex justify-center items-center">
              <img
                src="https://m.media-amazon.com/images/I/81OJwQNgnaL._AC_SY145_.jpg"
                alt=""
              />
            </div>
            <div className=" flex justify-center items-center">
              <img
                src="https://m.media-amazon.com/images/I/81SrLvDbbNL._AC_SY145_.jpg"
                alt=""
              />
            </div>
            <div className=" flex justify-center items-center">
              <img
                src="https://m.media-amazon.com/images/I/71ydzmWXW0L._AC_SY145_.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full ml-4 ">
            <span className="text-sm text-blue-400 cursor-pointer">
              See all deals
            </span>
          </div>
        </div>
        <div className="w-[300px] h-[400px] flex flex-col justify-center gap-4 bg-white items-center ">
          <div className="w-full ml-4 text-wrap ">
            <h1 className="text-xl font-semibold ">
              Appliances for your home | Up to 55% off
            </h1>
          </div>
          <div className="w-full h-[250px]  grid grid-cols-2 gap-4  p-2">
            <div className=" flex justify-center flex-col items-center ">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Air conditioners
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Refrigerators
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Microwaves
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Washing machines
              </span>
            </div>
          </div>
          <div className="w-full ml-4 ">
            <span className="text-sm text-blue-400 cursor-pointer">
              See all deals
            </span>
          </div>
        </div>
        <div className="w-[300px] h-[400px] flex flex-col justify-center gap-4 bg-white items-center ">
          <div className="w-full ml-4 text-wrap ">
            <h1 className="text-xl font-semibold ">
              Revamp your home in style
            </h1>
          </div>
          <div className="w-full h-[250px]  grid grid-cols-2 gap-4  p-2">
            <div className=" flex justify-center flex-col items-center ">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Cushion covers, bedsheets & more
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Figurines,vases & more
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Home storage
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Lighting solutions
              </span>
            </div>
          </div>
          <div className="w-full ml-4 ">
            <span className="text-sm text-blue-400 cursor-pointer">
              Explore all
            </span>
          </div>
        </div>
        <div className="w-[300px] h-[400px] flex flex-col justify-center gap-4 bg-white items-center ">
          <div className="w-full ml-4 text-wrap ">
            <h1 className="text-xl font-semibold ">
              Starting ₹ 149 | Headphones
            </h1>
          </div>
          <div className="w-full h-[250px]  grid grid-cols-2 gap-4  p-2">
            <div className=" flex justify-center flex-col items-center ">
              <img
                className="w-full h-full object-cover"
                src="src/assets/assets/asset 19.jpeg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Starting ₹249 | boAt
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="src/assets/assets/asset 20.jpeg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Starting ₹349 | boult
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                alt=""
                src="src/assets/assets/asset 21.jpeg"
              />
              <span className="text-sm justify-start flex w-full ">
                Starting ₹649 | Noise
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="src/assets/assets/asset 22.jpeg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Starting ₹249 | Zebronics
              </span>
            </div>
          </div>
          <div className="w-full ml-4 ">
            <span className="text-sm text-blue-400 cursor-pointer">
              See all offers
            </span>
          </div>
        </div>
        <div className="w-[300px] h-[400px] flex flex-col justify-center gap-4 bg-white items-center ">
          <div className="w-full ml-4 text-wrap ">
            <h1 className="text-xl font-semibold ">
              Automotive essentials | Up to 60%
            </h1>
          </div>
          <div className="w-full h-[250px]  grid grid-cols-2 gap-4  p-2">
            <div className=" flex justify-center flex-col items-center ">
              <img
                className="w-full h-full object-cover"
                src=""
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Air conditioners
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Refrigerators
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Microwaves
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Washing machines
              </span>
            </div>
          </div>
          <div className="w-full ml-4 ">
            <span className="text-sm text-blue-400 cursor-pointer">
              See all deals
            </span>
          </div>
        </div>
        <div className="w-[300px] h-[400px] flex flex-col justify-center gap-4 bg-white items-center ">
          <div className="w-full ml-4 text-wrap ">
            <h1 className="text-xl font-semibold ">
              Appliances for your home | Up to 55% off
            </h1>
          </div>
          <div className="w-full h-[250px]  grid grid-cols-2 gap-4  p-2">
            <div className=" flex justify-center flex-col items-center ">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Air conditioners
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Refrigerators
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Microwaves
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Washing machines
              </span>
            </div>
          </div>
          <div className="w-full ml-4 ">
            <span className="text-sm text-blue-400 cursor-pointer">
              See all deals
            </span>
          </div>
        </div>
        <div className="w-[300px] h-[400px] flex flex-col justify-center gap-4 bg-white items-center ">
          <div className="w-full ml-4 text-wrap ">
            <h1 className="text-xl font-semibold ">
              Appliances for your home | Up to 55% off
            </h1>
          </div>
          <div className="w-full h-[250px]  grid grid-cols-2 gap-4  p-2">
            <div className=" flex justify-center flex-col items-center ">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Air conditioners
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Refrigerators
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Microwaves
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Washing machines
              </span>
            </div>
          </div>
          <div className="w-full ml-4 ">
            <span className="text-sm text-blue-400 cursor-pointer">
              See all deals
            </span>
          </div>
        </div>
        <div className="w-[300px] h-[400px] flex flex-col justify-center gap-4 bg-white items-center ">
          <div className="w-full ml-4 text-wrap ">
            <h1 className="text-xl font-semibold ">
              Appliances for your home | Up to 55% off
            </h1>
          </div>
          <div className="w-full h-[250px]  grid grid-cols-2 gap-4  p-2">
            <div className=" flex justify-center flex-col items-center ">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Air conditioners
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Refrigerators
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Microwaves
              </span>
            </div>
            <div className=" flex justify-center flex-col items-center">
              <img
                className="w-full h-full object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                alt=""
              />
              <span className="text-sm justify-start flex w-full ">
                Washing machines
              </span>
            </div>
          </div>
          <div className="w-full ml-4 ">
            <span className="text-sm text-blue-400 cursor-pointer">
              See all deals
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
