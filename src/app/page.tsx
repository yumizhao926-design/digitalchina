import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import DataStats from '@/components/data-stats';
import ProductCards from '@/components/product-cards';
import AIPanorama from '@/components/ai-panorama';

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

      {/* 产品卡片展示 */}
      <ProductCards />

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

      {/* CTA 区域 */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8 py-16 sm:py-24">
        <div className="border border-border bg-card rounded-lg p-8 sm:p-12 md:p-16 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            准备好开始了吗？
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            加入扣子开发者社区，体验AI驱动的开发新模式
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors rounded">
            立即注册
          </button>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">产品</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">功能介绍</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">定价方案</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">更新日志</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">资源</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">文档中心</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API 参考</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">社区论坛</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">公司</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">关于我们</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">加入我们</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">联系方式</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">法律</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">隐私政策</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">服务条款</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie 政策</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 扣子. 保留所有权利.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                隐私
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                条款
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
