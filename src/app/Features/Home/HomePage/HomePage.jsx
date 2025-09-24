import CategoryNavbar from "@/app/Components/Navbar/DepartmentNavbar/CategoryNav/CategoryNav";
import Header from "@/app/Components/Navbar/MainNavbar/Header";
import SocialNavbar from "@/app/Components/Navbar/SocialNavbar/SocialNav";
import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import BestDeals from "../BestDeals/BestDeals";
import SpecialOfferCard from "../SpecialOffer/SpecialOffer";
import ProductTabs from "@/app/Features/Products/ProductTabs/ProductTabs";
import CategoryProducts from "../../Products/CategoryProducts/CategoryProducts";
import MainFooter from "@/app/Components/Footer/MainFooter/MainFooter";
import TrendingProducts from "../TrendingProducts/TrendingProductsLargeDevice";
import ProductionBanner from "@/app/Components/Products/ProductionBanner/ProductionBanner";
import TrendingProductsRoot from "../TrendingProducts/TrendingProductsRoot";

export default function HomePage() {
  return (
    <div>
      <SocialNavbar></SocialNavbar>
      <Header></Header>
      <CategoryNavbar></CategoryNavbar>
      <HeroBanner></HeroBanner>
      <BestDeals></BestDeals>
      <div className="flex flex-col gap-20 lg:flex-row lg:gap-9 lg:flex container mx-auto">
        <SpecialOfferCard></SpecialOfferCard>
        <ProductTabs></ProductTabs>
      </div>
      <div className="bg-[#f9f9f9]">
        <CategoryProducts></CategoryProducts>
      </div>
      <ProductionBanner></ProductionBanner>
      <TrendingProductsRoot></TrendingProductsRoot>
      <MainFooter></MainFooter>
    </div>
  );
}
