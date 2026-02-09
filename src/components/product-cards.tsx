'use client';

import { Brain, Server, ChevronRight } from 'lucide-react';

export default function ProductCards() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* 区域标题 */}
        <h2
          className="text-4xl font-bold mb-12"
          style={{ color: '#333333' }}
        >
          核心产品 | AI for Process 技术支撑
        </h2>

        {/* 双列网格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 左卡片 - 智能平台 */}
          <div className="group relative overflow-hidden bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
            {/* 流光效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>

            {/* 内容 */}
            <div className="relative">
              {/* 标题图标 */}
              <div className="mb-6">
                <Brain className="w-12 h-12" style={{ color: '#FF3B30' }} />
              </div>

              {/* 标题 */}
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: '#333333' }}
              >
                神州问学：企业级Agent中台
              </h3>

              {/* 描述 */}
              <p
                className="text-base mb-6"
                style={{ color: '#666666' }}
              >
                兼容60+主流大模型，快速实现企业流程AI化改造
              </p>

              {/* 特点列表 */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-base" style={{ color: '#666666' }}>
                  <ChevronRight className="w-4 h-4 mr-2" style={{ color: '#666666' }} />
                  多模型调度适配
                </li>
                <li className="flex items-center text-base" style={{ color: '#666666' }}>
                  <ChevronRight className="w-4 h-4 mr-2" style={{ color: '#666666' }} />
                  全生命周期知识治理
                </li>
                <li className="flex items-center text-base" style={{ color: '#666666' }}>
                  <ChevronRight className="w-4 h-4 mr-2" style={{ color: '#666666' }} />
                  流程智能编排
                </li>
              </ul>

              {/* 按钮 */}
              <button
                className="px-6 py-2 text-sm font-medium rounded transition-all duration-200 hover:bg-gray-100"
                style={{
                  border: '1px solid #666666',
                  color: '#666666',
                  borderRadius: '4px'
                }}
              >
                了解更多
              </button>
            </div>
          </div>

          {/* 右卡片 - 智算底座 */}
          <div className="group relative overflow-hidden bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
            {/* 流光效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>

            {/* 内容 */}
            <div className="relative">
              {/* 标题图标 */}
              <div className="mb-6">
                <Server className="w-12 h-12" style={{ color: '#666666' }} />
              </div>

              {/* 标题 */}
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: '#333333' }}
              >
                神州鲲泰：全栈AI算力基础设施
              </h3>

              {/* 描述 */}
              <p
                className="text-base mb-6"
                style={{ color: '#666666' }}
              >
                稳定支撑企业全流程智能运算，适配多行业算力需求
              </p>

              {/* 特点列表 */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-base" style={{ color: '#666666' }}>
                  <ChevronRight className="w-4 h-4 mr-2" style={{ color: '#666666' }} />
                  训推一体服务器
                </li>
                <li className="flex items-center text-base" style={{ color: '#666666' }}>
                  <ChevronRight className="w-4 h-4 mr-2" style={{ color: '#666666' }} />
                  千亿级大模型支撑
                </li>
                <li className="flex items-center text-base" style={{ color: '#666666' }}>
                  <ChevronRight className="w-4 h-4 mr-2" style={{ color: '#666666' }} />
                  鲲鹏+昇腾生态
                </li>
              </ul>

              {/* 按钮 */}
              <button
                className="px-6 py-2 text-sm font-medium rounded transition-all duration-200 hover:bg-gray-100"
                style={{
                  border: '1px solid #666666',
                  color: '#666666',
                  borderRadius: '4px'
                }}
              >
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
