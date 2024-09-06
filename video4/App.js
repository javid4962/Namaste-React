import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    // <h1>Header Section</h1>
    <div id="nav-bar">
      <div id="logo">
      <a href="/">
        <img src="https://parceljs.org/parcel.fb905a63.png"  />
      </a>
        <h1>Mekkey</h1>
        </div>
      <ul id="nav-list">
        <li className="list-item">Home</li>
        <li className="list-item">About</li>
        <li className="list-item">Services</li>
        <li className="list-item">Contact US</li>
      </ul>
    </div>
  );
};

const restaurant = [
  {
    id: "362596",
    name: "Burger King",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_362596.JPG",
    locality: "M Cube Mall",
    areaName: "Attapur",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 4.1,
    parentId: "166",
    avgRatingString: "4.1",
    totalRatingsString: "20K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 1.4,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-07 03:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
          description: "Delivery!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Burger.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "9296",
    name: "Subway",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/36c15da5-700d-46e0-95dd-1414acb77a96_9296.JPG",
    locality: "Humayun Nagar",
    areaName: "Mehdipatnam",
    costForTwo: "₹350 for two",
    cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 3.9,
    parentId: "2",
    avgRatingString: "3.9",
    totalRatingsString: "28K+",
    sla: {
      deliveryTime: 51,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "50-55 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-07 00:45:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
          description: "Delivery!",
        },
      ],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "30% OFF",
      subHeader: "UPTO ₹75",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
  },
  {
    id: "612602",
    name: "Kwality Walls Ice Cream and More",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b3739937-c8ca-40ea-96cd-03b049b4600e_612602.JPG",
    locality: "Circle No 13",
    areaName: "Charminar",
    costForTwo: "₹200 for two",
    cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
    avgRating: 4.6,
    veg: true,
    parentId: "582",
    avgRatingString: "4.6",
    totalRatingsString: "1.7K+",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-07 05:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
      textExtendedBadges: [
        {
          iconId: "Ratnesh_Badges/test2.png",
          shortDescription: "Perfect ice cream delivery",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "Ratnesh_Badges/test2.png",
                shortDescription: "Perfect ice cream delivery",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹69",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
  },
  {
    id: "659668",
    name: "UBQ by Barbeque Nation",
    cloudinaryImageId: "ffe4084febdec52732dffd3624f4e6c1",
    locality: "COMMERCIAL CENTRE",
    areaName: "Attapur",
    costForTwo: "₹300 for two",
    cuisines: [
      "North Indian",
      "Barbecue",
      "Biryani",
      "Kebabs",
      "Mughlai",
      "Desserts",
    ],
    avgRating: 3.8,
    parentId: "10804",
    avgRatingString: "3.8",
    totalRatingsString: "300",
    sla: {
      deliveryTime: 48,
      lastMileTravel: 4.3,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "4.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-06 23:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹149",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
  },
];

const RestaurantCard = (props) => {
  return (
    <>
      <div className="container-item">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            props.restaurant.cloudinaryImageId
          }
        />
        <br/>
        <h1 className="item-name m-0 p-0">{props.restaurant.name}</h1>
        <h3 className="item-rating m-0 p-0">{props.restaurant.avgRating}</h3>
        <h5 className="item-name">{props.restaurant.cuisines.join(", ")}</h5>
        <button className="order-btn">Order Now</button>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div id="body">
      <div className="container">
        <RestaurantCard restaurant={restaurant[0]} />
        <RestaurantCard restaurant={restaurant[1]} />
        <RestaurantCard restaurant={restaurant[2]} />
        <RestaurantCard restaurant={restaurant[3]} />
      </div>
    </div>
  );
};
const Footer = () => {
  return <h1>Footer Section</h1>;
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const heading = React.createElement("h1", {}, "Heading One");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// console.log("React")
