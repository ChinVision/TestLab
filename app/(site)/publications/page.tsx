import Publications from "@/components/Publications";
import BreadHero from "@/components/BreadHero";

const PublicationPage = () => {
  return (
    <section className="overflow-hidden pb-25" style={{ paddingTop: 120 }}>
      <BreadHero imgSrc={'/images/hero/01.jpg'} links={'publications'} title={'研究成果'} />
      <Publications />
    </section>
  );
};

export default PublicationPage;