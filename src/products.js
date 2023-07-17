const products = [
  {
    _id: "1",
    name: "Magic Bottle",
    image: "/images/bottle.png",
    price: 100,
    countInStock: 0,
    discount: 10,
    text:"Add to cart",
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'
  },
  {
    _id: "2",
    name: "Keep Loving Magic",
    image: "/images/tshirt1.png",
    price: 200,
    countInStock: 10,
    discount: 30,
    size:["Sm", "Md", "L", "XL", "2XL", "4XL" ],
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "3",
    name: "Magic For Smile",
    image: "/images/tshirt2.png",
    price: 200,
    countInStock: 10,
    discount: 10,
    size:["Sm", "Md", "L", "XL", "2XL", "4XL" ],
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "4",
    name: "Grateful Tshirt",
    image: "/images/tshirt3.png",
    price: 200,
    countInStock: 10,
    discount: 10,
    size:["Sm", "Md", "L", "XL", "2XL", "4XL" ],
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "5",
    name: "Sticker Pack",
    image: "/images/tshirt3.png",
    text:"Add to cart",
    price: 200,
    countInStock: 10,
    discount: 10,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "6",
    name: "Magic Bottle",
    image: "/images/bottle.png",
    price: 100,
    text:"Add to cart",
    countInStock: 0,
    discount: 10,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "7",
    name: "Keep Loving Magic",
    image: "/images/tshirt1.png",
    price: 200,
    countInStock: 10,
    size:["Sm", "Md", "L", "XL", "2XL", "4XL" ],
    discount: 30,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "8",
    name: "Magic For Smile",
    image: "/images/tshirt2.png",
    price: 200,
    countInStock: 10,
    size:["Sm", "Md", "L", "XL", "2XL", "4XL" ],
    discount: 10,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'
  },
  {
    _id: "9",
    name: "Grateful Tshirt",
    image: "/images/tshirt3.png",
    price: 200,
    size:["Sm", "Md", "L", "XL", "2XL", "4XL" ],
    countInStock: 10,
    discount: 10,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "10",
    name: "Sticker Pack",
    image: "/images/tshirt3.png",
    price: 200,
    text:"Add to cart",
    countInStock: 10,
    discount: 10,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "11",
    name: "Magic Bottle",
    image: "/images/bottle.png",
    price: 100,
    countInStock: 0,
    text:"Add to cart",
    discount: 10,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "12",
    name: "Keep Loving Magic",
    image: "/images/tshirt1.png",
    price: 200,
    size:["Sm", "Md", "L", "XL", "2XL", "4XL" ],
    countInStock: 10,
    discount: 30,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "13",
    name: "Magic For Smile",
    image: "/images/tshirt2.png",
    price: 200,
    countInStock: 10,
    size:["Sm", "Md", "L", "XL", "2XL", "4XL" ],
    discount: 10,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "14",
    name: "Grateful Tshirt",
    image: "/images/tshirt3.png",
    price: 200,
    size:["Sm", "Md", "L", "XL", "2XL", "4XL" ],
    countInStock: 10,
    discount: 10,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'
  },
  {
    _id: "15",
    name: "Sticker Pack",
    image: "/images/tshirt3.png",
    price: 200,
    text:"Add to cart",
    countInStock: 10,
    discount: 10,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'
  },
  {
    _id: "16",
    name: "Magic Bottle",
    image: "/images/bottle.png",
    price: 100,
    text:"Add to cart",
    countInStock: 0,
    discount: 10,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "17",
    name: "Keep Loving Magic",
    image: "/images/tshirt1.png",
    price: 200,
    size:["Sm", "Md", "L", "XL", "2XL", "4XL" ],
    countInStock: 10,
    discount: 30,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },
  {
    _id: "18",
    name: "Magic For Smile",
    image: "/images/tshirt2.png",
    price: 200,
    size:["Sm", "Md", "L", "XL", "2XL", "4XL" ],
    countInStock: 10,
    discount: 10,
    description:'The only thing that might be more powerful than Jimmy himsellf, lightnin Sizing Notes: Short sleeve features a regular sized fit. Artwork Method: - Screen printed front graphic- Front woven tag Fabric & Care: 100% Cotton, 270 GSM - Warm machine wash- Do not bleach- Low tumble dry- Warm iron- Dry cleanable with care'

  },

];

export default products;
