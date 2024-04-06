import BestSelling from "./BestSelling";
import CustomerReview from "./CustomerReview";
import HeroView from "./HeroView";
import NaturalProducts from "./NaturalProducts";
import OfferView from "./OfferView";
import OurAssurence from "./OurAssurence";

const TheHeroContent = () => {
  return (
    <>
      <HeroView />
      <OurAssurence />
      <BestSelling />
      <NaturalProducts />
      <OfferView />
      <CustomerReview />
    </>
  );
};

export default TheHeroContent;
