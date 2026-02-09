'use client';

import { Brain, Server, ArrowRight } from 'lucide-react';

export default function ProductCards() {
  return (
    <section className="py-24 px-4 sm:px-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto max-w-7xl">
        {/* 区域标题 */}
        <h2
          className="font-bold mb-16 text-center"
          style={{ color: '#333333', fontSize: '32px' }}
        >
          AI for Process 技术支撑
        </h2>

        {/* 双列网格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 左卡片 - 智能平台 */}
          <div className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:shadow-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50">
            {/* 流光效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/30 to-transparent -translate-x-full group-hover:animate-shimmer"></div>

            {/* 内容 */}
            <div className="relative">
            {/* 标题图标和标题 */}
            <div className="flex items-center gap-4 mb-3">
              <Brain className="w-10 h-10 flex-shrink-0" style={{ color: '#FF3B30' }} />
              <h3
                className="font-bold leading-tight"
                style={{ color: '#333333', fontSize: '24px', letterSpacing: '1px' }}
              >
                神州问学：企业级Agent中台
              </h3>
            </div>

              {/* 描述 */}
              <p
                className="mb-6"
                style={{ color: '#666666', lineHeight: '1.8', fontSize: '15px' }}
              >
                兼容60+主流大模型，快速实现企业流程AI化改造
              </p>

              {/* 分割线 */}
              <div className="w-16 h-1 mb-6 rounded-full" style={{ backgroundColor: '#FF3B30' }}></div>

              {/* 三个特点 */}
              <ul className="space-y-3 mb-8">
                <li
                  className="flex items-center justify-between group/item"
                  style={{ color: '#666666', fontSize: '16px' }}
                >
                  <span>多模型调度适配</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" style={{ color: '#FF3B30' }} />
                </li>
                <li
                  className="flex items-center justify-between group/item"
                  style={{ color: '#666666', fontSize: '16px' }}
                >
                  <span>全生命周期知识治理</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" style={{ color: '#FF3B30' }} />
                </li>
                <li
                  className="flex items-center justify-between group/item"
                  style={{ color: '#666666', fontSize: '16px' }}
                >
                  <span>流程智能编排</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" style={{ color: '#FF3B30' }} />
                </li>
              </ul>

              {/* 按钮 */}
              <button
                className="px-8 py-3 font-medium transition-all duration-300 hover:shadow-md flex items-center gap-2"
                style={{
                  border: '1px solid #666666',
                  color: '#666666',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
              >
                了解更多
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 右卡片 - 智算底座 */}
          <div className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:shadow-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50">
            {/* 流光效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent -translate-x-full group-hover:animate-shimmer"></div>

            {/* 内容 */}
            <div className="relative">
            {/* 标题图标和标题 */}
            <div className="flex items-center gap-4 mb-3">
              <Server className="w-10 h-10 flex-shrink-0" style={{ color: '#666666' }} />
              <h3
                className="font-bold leading-tight"
                style={{ color: '#333333', fontSize: '24px', letterSpacing: '1px' }}
              >
                神州鲲泰：全栈AI算力基础设施
              </h3>
            </div>

              {/* 描述 */}
              <p
                className="mb-6"
                style={{ color: '#666666', lineHeight: '1.8', fontSize: '15px' }}
              >
                稳定支撑企业全流程智能运算，适配多行业算力需求
              </p>

              {/* 分割线 */}
              <div className="w-16 h-1 mb-6 rounded-full" style={{ backgroundColor: '#666666' }}></div>

              {/* 三个特点 */}
              <ul className="space-y-3 mb-8">
                <li
                  className="flex items-center justify-between group/item"
                  style={{ color: '#666666', fontSize: '16px' }}
                >
                  <span>训推一体服务器</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" style={{ color: '#666666' }} />
                </li>
                <li
                  className="flex items-center justify-between group/item"
                  style={{ color: '#666666', fontSize: '16px' }}
                >
                  <span>千亿级大模型支撑</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" style={{ color: '#666666' }} />
                </li>
                <li
                  className="flex items-center justify-between group/item"
                  style={{ color: '#666666', fontSize: '16px' }}
                >
                  <span>鲲鹏+昇腾生态</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" style={{ color: '#666666' }} />
                </li>
              </ul>

              {/* 按钮 */}
              <button
                className="px-8 py-3 font-medium transition-all duration-300 hover:shadow-md flex items-center gap-2"
                style={{
                  border: '1px solid #666666',
                  color: '#666666',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
              >
                了解更多
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
