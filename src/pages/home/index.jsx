import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HorizontalDivider from "../../components/horizontal-divider";
import Banners from "./banners";
import SearchBar from "../../components/search-bar";
import CategoryTabs from "../../components/category-tabs";
import Category from "./category";
import FlashSales from "./flash-sales";

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("zapps")) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <>
   <div className="min-h-full bg-section">
      <div className="bg-background pt-2">
        <SearchBar onClick={() => navigate("/search")} />
        <Banners />
      </div>
      <div className="bg-background space-y-2 mt-2">
        <CategoryTabs />
        <Category />
      </div>
      <HorizontalDivider />
      <FlashSales />
    </div>
    </>
  );
}
