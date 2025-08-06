import About from "@/components/About";
import BreadHero from "@/components/BreadHero";
import Ps from "@/components/PostdoctoralScholars";
import GraduateCards from "@/components/GraduateCards";
import Alumni from "@/components/Alumni";

const PiPage = () => {
  return (
    <section className="overflow-hidden pb-25" style={{ paddingTop: 120 }}>
      <BreadHero imgSrc={'/images/hero/03.jpg'} links={'people'} title={'研究团队'} />
      <About/>
      <Ps/>
      <GraduateCards/>
      <Alumni/>
      {/*<Feature/>*/}
    </section>
  );
};

export default PiPage;
