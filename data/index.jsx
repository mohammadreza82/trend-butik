export const navItems = [
  { id: 1, name: "CLOTHING", link: "#CLOTHING" },
  { id: 2, name: "DRESSES", link: "#DRESSES" },
  { id: 3, name: "TOPS", link: "#TOPS" },
  { id: 4, name: "KNITS", link: "#KNITS" },
  {
    id: 5,
    name: "NEW ARRIVALS",
    link: "#",
    dropdown: true,
    dropdownLinks: [
      { id: 1, name: "New Dresses", link: "#New-Dresses" },
      { id: 2, name: "New Tops", link: "#New-Tops" },
      { id: 3, name: "New Pants & Denim", link: "#New-Pants" },
      { id: 4, name: "New Skirts & Shorts", link: "#New-Skirts" },
      { id: 5, name: "New Knitwear", link: "#Knitwear" },
    ],
  },
  { id: 6, name: "BOTTOMS", link: "#BOTTOMS" },
];

// Hero Component
import ShopNow from "../public/Assets/Hero/ShopNow.webp"
import Warm from "../public/Assets/Hero/LetMe.webp"
import LetMe from "../public/Assets/Hero/Warm.webp"
export const headerSlider=[
  {imgSrc:Warm,alt:"Fall Into New"},
  {imgSrc:LetMe,alt:"LetMe"},
  {imgSrc:ShopNow,alt:"ShopNow"}
]

// Categories Component
import Dresses from "../public/Assets/Categories/Dresses.webp"
import Tops from "../public/Assets/Categories/Tops.webp"
import Denim from "../public/Assets/Categories/Denim.webp"
import Knitwear from "../public/Assets/Categories/Knitwear.webp"
export const categories=[
  {img:Dresses,title:"Shop Dresses", aosDelay: "0",},
  {img:Tops,title:"Shop Tops",aosDelay: "300",},
  {img:Denim,title:"Shop Denim",aosDelay: "600",},
  {img:Knitwear,title:"Shop Knitwear",aosDelay: "900",}
]

//New Arrivals
import Arrival_1 from "../public/Assets/Arrivals/Arrival1.webp"
import Arrival_2 from "../public/Assets/Arrivals/Arrival2.webp"
import Arrival_3 from "../public/Assets/Arrivals/Arrival3.webp"
import Arrival_4 from "../public/Assets/Arrivals/Arrival4.webp"
import Arrival_5 from "../public/Assets/Arrivals/Arrival5.webp"
import Arrival_6 from "../public/Assets/Arrivals/Arrival6.webp"
import Arrival_7 from "../public/Assets/Arrivals/Arrival7.webp"
import Arrival_8 from "../public/Assets/Arrivals/Arrival8.webp"
import Arrival_9p from "../public/Assets/Arrivals/Arrival9.webp"
import Arrival_10 from "../public/Assets/Arrivals/Arrival10.webp"
import Arrival_11 from "../public/Assets/Arrivals/Arrival11.webp"
import Arrival_12 from "../public/Assets/Arrivals/Arrival12.webp"
export const newArrivals=[
  {
    id:1,
    img:Arrival_1,
    title:"Enchanted Midi Knit Dress In Black With Mesh Flower Detail",
    price:"$99.90",
    sm: 8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
  },
  {
    id:2,
    img:Arrival_2,
    title:"Honey Midi Shirt Dress In Black Cotton",
    price:"$89.90",
    sm: "S",
    md:"M",
    lg:"L",
    xl:"XL",
  },
  {
    id:3,
    img:Arrival_3,
    title:"London Midi Smock Dress In Brown Print",
    price:"$79.90",
    sm:"S/M",
    md:"M/L",
  },
  {
    id:4,
    img:Arrival_4,
    title:"Barrymore Midi Dress In Purple Multi Floral",
    price:"$89.90",
    sm:"S/M",
    md:"M/L",
    lg:"L/XL",
  },
  {
    id:5,
    img:Arrival_5,
    title:"Love Song Maxi Dress In Navy With Multi Floral Print",
    price:"$89.90",
    sm:8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
    xxxl:18
  },
  {
    id:6,
    img:Arrival_6,
    title:"Geraldine Midi Shirt Dress In Black And White Geometric",
    price:"$79.90",
    sm:8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
    xxxl:18
  },
  {
    id:7,
    img:Arrival_7,
    title:"Carnation Maxi Dress In Teal Lurex",
    price:"$99.90",
    numberOfColors:3,
    sm:8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
    xxxl:18 
  },
  {
    id:8,
    img:Arrival_8,
    title:"Joletta Fluffy Knit In Navy With Brown Leopard",
    price:"$69.90",
    numberOfColors:1,
    sm:"S",
    md:"M",
    lg:"L",
    xl:"XL",
  },
  {
    id:9,
    img:Arrival_9p,
    title:"Amora Knit In Navy Wool Blend",
    price:"$69.90",
    numberOfColors:1,
    sm:"S/M" ,
    md:"M/L",
    lg:"L/XL",
  },
  {
    id:10,
    img:Arrival_10,
    title:"Bowie Knit In Beige With Rose Gold Sequin Detail",
    price:"$79.90",
    numberOfColors:1,
    sm:"S",
    md:"M",
    lg:"L",
    xl:"XL",
  },
  {
    id:11,
    img:Arrival_11,
    title:"Bowie Knit In Grey With Silver Sequin Detail",
    price:"$79.90",
    numberOfColors:1,
    sm:"S",
    md:"M",
    lg:"L",
    xl:"XL",
  },
  {
    id:12,
    img:Arrival_12,
    title:"Credenza Knit Dress In Grey",
    price:"$79.90",
    numberOfColors:1,
    sm:"S/M" ,
    md:"M/L",
    lg:"L/XL",
  },

]


// ShopTheLook
import imgLeft1 from "../public/Assets/ShopTheLook/ShopTheLook1.webp"
import imgRight1 from "../public/Assets/ShopTheLook/ShopTheLook1e1.webp"
import imgRight2 from "../public/Assets/ShopTheLook/ShopTheLook1e2.webp"

import imgLeft2 from "../public/Assets/ShopTheLook/ShopTheLook2.webp"
import imgRight2e1 from "../public/Assets/ShopTheLook/ShopTheLook2e1.webp"
import imgRight2e2 from "../public/Assets/ShopTheLook/ShopTheLook2e2.webp"

import imgLeft3 from "../public/Assets/ShopTheLook/ShopTheLook3.webp"
import imgRight3e1 from "../public/Assets/ShopTheLook/ShopTheLook3e1.webp"
import imgRight3e2 from "../public/Assets/ShopTheLook/ShopTheLook3e2.webp"
import imgRight3e3 from "../public/Assets/ShopTheLook/ShopTheLook3e3.webp"
export const shopTheLook=[
  {
    imgLeft:imgLeft1,
    imgRight:imgRight1 ,imgRight2,
    desc:"Gabi Maxi Shirt Dress In Cream With Navy Floral Satin",
price:"$48.32"
  },
  {
    imgLeft:imgLeft2,
    imgRight:[imgRight2e1,imgRight2e2],
    desc:"Lawrence Coat In Tan And Cream Check",
    price:"$75.20"
  },
  {
    imgLeft:imgLeft3,
    imgRight:[imgRight3e1,imgRight3e2,imgRight3e3],
    desc:"Livorno Midi Dress In Wine Sequin",
    price:"$37.59"
  },
]


//Winter Collection
import Winter_1 from "../public/Assets/WinterCollection/Winter1.webp"
import Winter_2 from "../public/Assets/WinterCollection/Winter2.webp"
import Winter_3 from "../public/Assets/WinterCollection/Winter3.webp"
import Winter_4 from "../public/Assets/WinterCollection/Winter4.webp"
import Winter_5 from "../public/Assets/WinterCollection/Winter5.webp"
import Winter_6 from "../public/Assets/WinterCollection/Winter6.webp"
import Winter_7 from "../public/Assets/WinterCollection/Winter7.webp"
import Winter_8 from "../public/Assets/WinterCollection/Winter8.webp"
import Winter_9 from "../public/Assets/WinterCollection/Winter9.webp"
import Winter_10 from "../public/Assets/WinterCollection/Winter10.webp"
import Winter_11 from "../public/Assets/WinterCollection/Winter11.webp"
export const winterCollection=[
  {
    id:1,
    img:Winter_1,
    title:"Gabi Maxi Shirt Dress In Green Multi Satin",
    numberOfColors:4,
    price:"$48.31",
    sm: 8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
    xxxl:18,
  },
  {
    id:2,
    img:Winter_2,
    title:"Melora Faux Fur Jacket In Khaki",
    numberOfColors:1,
    price:"$69.83",
    sm: 8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
  },
  {
    id:3,
    img:Winter_3,
    title:"Belvia Wide Leg Pant In Tan",
    numberOfColors:1,
    price:"$42.95",
    sm: 8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
    xxxl:18,
    xxxxl:20,
  },
  {
    id:4,
    img:Winter_4,
    title:"Seika Trench Coat In Navy",
    price:"$64.46",
    sm: 8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
    xxxl:18,
    xxxxl:20,
  },
  {
    id:5,
    img:Winter_5,
    title:"Vermont Scarf In Navy Print",
    price:"$16.07",
    sm:"O/S",
  },
  {
    id:6,
    img:Winter_6,
    title:"Brandsy Maxi Skirt In Cream With Black Geometric Print",
    numberOfColors:1,
    price:"$37.58",
    sm: 8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
    xxxl:18,
    xxxxl:20,
    xxxxxl:22,
  },
  {
    id:7,
    img:Winter_7,
    title:"Wannabe Tulle Skirt In Black",
    price:"$37.58",
    sm:8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
    xxxl:18,
    xxxxl:20,
    xxxxxl:22,
  },
  {
    id:8,
    img:Winter_8,
    title:"Amoretto Dress In Hot Pink Sequin",
    price:"$33.83",
    numberOfColors:4,
    sm:8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
    xxxl:18,
    xxxxl:20,
    xxxxxl:22,
  },
  {
    id:9,
    img:Winter_9,
    title:"Celebration Sequin Mock Wrap Top In Wine",
    price:"$30.07",
    numberOfColors:6,
    sm:8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
    xxxl:18,
    xxxxl:20,
    xxxxxl:22,
  },
  {
    id:10,
    img:Winter_10,
    title:"Bernadette One Shoulder Midi Dress In Cobalt Satin",
    price:"$37.59",
    numberOfColors:8,
    sm:8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
    xxxl:18,
    xxxxl:20,
    xxxxxl:22,
  },
  {
    id:11,
    img:Winter_11,
    title:"Anetta Midi Dress In Pleated Magenta Satin",
    price:"$37.59",
    numberOfColors:14,
    sm:8,
    md:10,
    lg:12,
    xl:14,
    xxl:16,
    xxxl:18,
    xxxxl:20,
  },
]




import Model_1 from "../public/Assets/Model/Model1.webp"
import Model_2 from "../public/Assets/Model/Model2.webp"
import Model_3 from "../public/Assets/Model/Model3.webp"
export const Models=[
  {
    img:Model_1,
    desc:"Party Ready"
  },
  {
    img:Model_2,
    desc:"Complete The Look"
  }, {
    img:Model_3,
    desc:"Desk To Dinner"
  },
]