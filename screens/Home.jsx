import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
const categories = [
  { category: "Shoes", _id: "qwerty" },
  { category: "Mobiles", _id: "qwerty2" },
  { category: "TV", _id: "qwerty3" },
  { category: "Clothes", _id: "qwerty4" },
  { category: "Accessories", _id: "qwerty5" },
  { category: "Misc", _id: "qwerty6" },
  { category: "Sunglasses", _id: "qwerty7" },
  { category: "Cricket", _id: "qwerty8" },
  { category: "Premium", _id: "qwerty9" },
  { category: "Gifts", _id: "qwerty10" },
];

const products = [
  {
    _id: "qwerty",
    name: "iPad Air 2",
    price: 80999,
    images: [
      {
        url: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/03/ipad-air-select-cell-spacegray-202203.png?q=50&fit=crop&w=320&dpr=1.5",
      },
    ],
    stock: 17,
  },
  {
    _id: "qwerty2",
    name: "Macbook Air M2",
    price: 129999,
    images: [
      {
        url: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690293566/Croma%20Assets/Computers%20Peripherals/Laptop/Images/273869_pcdcp3.png?tr=w-480",
      },
    ],
    stock: 80,
  },
  {
    _id: "qwerty3",
    name: "Apple Airpods 2",
    price: 11500,
    images: [
      {
        url: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694672652/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/301165_xzuxl0.png?tr=w-480",
      },
    ],
    stock: 80,
  },
  {
    _id: "qwerty4",
    name: "Apple Vison Pro",
    price: 289999,
    images: [
      {
        url: "https://www.apple.com/v/apple-vision-pro/c/images/overview/design/portrait_right_base__cd0c4xdglcs2_large_2x.jpg",
      },
    ],
    stock: 80,
  },
  {
    _id: "qwerty5",
    name: "Apple iPhone 15",
    price: 81990,
    images: [
      {
        url: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708678805/Croma%20Assets/Communication/Mobiles/Images/300700_0_hv1idk.png?tr=w-480",
      },
    ],
    stock: 17,
  },
  {
    _id: "qwerty6",
    name: "Apple Watch Series 6",
    price: 41999,
    images: [
      {
        url: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694713212/Croma%20Assets/Communication/Wearable%20Devices/Images/300965_0_bask7w.png?tr=w-480",
      },
    ],
    stock: 17,
  }
];
const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const categoryButtonHandler = (id) => {
    setCategory(id);
  };
  const addToCardHandler = (id) => {
    console.log(id);
  };
  const navigate = useNavigation();
  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

      <View style={defaultStyle}>
        {/* header */}
        <Header />

        {/* Heading row */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Product</Text>
          </View>
          {/* Search bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                color={"gray"}
                style={{
                  backgroundColor: colors.color2,
                  elevation: 12,
                  top: 20,
                  shadowOffset: 10,
                  shadowOpacity: 0.2,
                }}
                size={50}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Categories */}
        <View style={{ flexDirection: "row", height: 80 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            {categories.map((item, i) => (
              <Button
                onPress={() => categoryButtonHandler(item._id)}
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
        {/* Products */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                key={item._id}
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
