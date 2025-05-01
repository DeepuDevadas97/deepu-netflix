import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SliderMain from "@/components/Slider/SliderMain";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Banner />
      <div className="mt-[-5%] xl:mt-[-12.5%] flex flex-col gap-y-[3vw] pb-[60px] slider-main-wrapper">
        <div className="relative z-[10]">
          <SliderMain />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
