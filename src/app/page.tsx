import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import DataStats from '@/components/data-stats';
import ProductCards from '@/components/product-cards';
import IndustrySolutions from '@/components/industry-solutions';
import CaseCarousel from '@/components/case-carousel';
import EcosystemPartners from '@/components/ecosystem-partners';
import NewsUpdates from '@/components/news-updates';
import FinalCTA from '@/components/final-cta';
import Footer from '@/components/footer';
import ChatBot from '@/components/chatbot';
import AIPanorama from '@/components/ai-panorama';
import AIPhilosophy from '@/components/ai-philosophy';

export const metadata: Metadata = {
  title: '神州数码 - AI for Process',
  description: '神州数码，让AI成为业务流程原生能力，驱动企业数智化深水区变革',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 导航栏 */}
      <Navbar />

      {/* Hero 区域 */}
      <Hero />

      {/* 数据展示 */}
      <DataStats />

      {/* AI核心理念专区 */}
      <AIPhilosophy />

      {/* AI能力全景图 */}
      <AIPanorama />

      {/* 产品卡片展示 */}
      <ProductCards />

      {/* 行业方案展示 */}
      <IndustrySolutions />

      {/* 客户案例轮播 */}
      <CaseCarousel />

      {/* 生态合作伙伴 */}
      <EcosystemPartners />

      {/* 资讯动态 */}
      <NewsUpdates />

      {/* 最终转化区 */}
      <FinalCTA />

      {/* 页脚 */}
      <Footer />

      {/* 聊天机器人 */}
      <ChatBot />
    </div>
  );
}
