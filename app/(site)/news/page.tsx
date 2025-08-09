import { Metadata } from "next";
import News from '@/components/News'
import BreadHero from "@/components/BreadHero";

export const metadata: Metadata = {
  title: "Lab News",
  description: "This is HuangLab News page",
};

export default function NewsPage() {


  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <BreadHero imgSrc={'/images/hero/00.jpg'} links={'news'} title={'新闻动态'} />
      <News />
    </section>
  );
}
