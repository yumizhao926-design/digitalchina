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

      {/* AI能力全景图 */}
      <AIPanorama />

      {/* 产品特性 */}
      <section id="features" className="container mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            核心特性
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            为开发者量身打造的AI开发体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-border bg-card p-8 rounded-lg space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">智能代码生成</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              基于强大的AI模型，快速生成高质量代码，大幅提升开发效率
            </p>
          </div>

          <div className="border border-border bg-card p-8 rounded-lg space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">灵活布局</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              丰富的组件库和布局系统，轻松构建响应式、美观的界面
            </p>
          </div>

          <div className="border border-border bg-card p-8 rounded-lg space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground">安全可靠</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              企业级安全保障，数据隔离加密，让你的应用运行无忧
            </p>
          </div>
        </div>
      </section>

      {/* 数据展示 */}
      <section className="border-t border-border bg-card py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">100万+</div>
              <div className="text-sm text-muted-foreground">活跃开发者</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">500万+</div>
              <div className="text-sm text-muted-foreground">应用创建</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">服务可用性</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">技术支持</div>
            </div>
          </div>
        </div>
      </section>

      {/* 最终转化区 */}
      <FinalCTA />

      {/* 页脚 */}
      <Footer />

      {/* 聊天机器人 */}
      <ChatBot />
    </div>
  );
}
