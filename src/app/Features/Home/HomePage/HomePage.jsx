import CategoryNavbar from "@/app/Components/Navbar/DepartmentNavbar/CategoryNav/CategoryNav";
import Header from "@/app/Components/Navbar/MainNavbar/Header";
import SocialNavbar from "@/app/Components/Navbar/SocialNavbar/SocialNav";
import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import BestDeals from "../BestDeals/BestDeals";
import SpecialOfferCard from "../SpecialOffer/SpecialOffer";

import ProductTabs from "@/app/Features/Products/ProductTabs/ProductTabs";

export default function HomePage() {
  return (
    <div>
      <SocialNavbar></SocialNavbar>
      <Header></Header>
      <CategoryNavbar></CategoryNavbar>
      <HeroBanner></HeroBanner>
      <BestDeals></BestDeals>
      <div className="flex gap-9 container mx-auto">
        <SpecialOfferCard></SpecialOfferCard>
        <ProductTabs></ProductTabs>
      </div>
    </div>
  );
}
