import DetailsCard from "@/components/ui/Cards/DetailsCard";
import heroImage from "@/public/images/plansImages/bg.jpg";

const PlansDetailsHero = () => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(84.26% 40.38% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(150deg, rgba(0, 0, 0, 0.38) 26.13%, rgba(0, 0, 0, 0.00) 80.99%), url(${heroImage.src})`,
      }}
      className="bg-cover bg-center min-h-[100vh] flex items-center justify-center from-[#000000] to-[#000000]"
    >
      <div className="max-w-[1320px] mx-auto px-4">
        <DetailsCard />
      </div>
    </div>
  );
};

export default PlansDetailsHero;
