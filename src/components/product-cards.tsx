'use client';

import { Brain, Server, ChevronRight } from 'lucide-react';

export default function ProductCards() {
  return (
    <section className="py-24 px-4 sm:px-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto max-w-7xl">
        {/* 区域标题 */}
        <h2
          className="font-bold mb-16"
          style={{ color: '#333333', fontSize: '32px' }}
        >
          AI for Process 技术支撑
        </h2>

        {/* 双列网格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 左卡片 - 智能平台 */}
          <div className="group relative overflow-hidden bg-white rounded-xl p-10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
            {/* 流光效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/50 to-transparent -translate-x-full group-hover:animate-shimmer"></div>

            {/* 内容 */}
            <div className="relative">
              {/* 标题图标 */}
              <div className="mb-6">
                <Brain className="w-10 h-10" style={{ color: '#FF3B30' }} />
              </div>

              {/* 标题 */}
              <h3
                className="font-semibold mb-4"
                style={{ color: '#333333', fontSize: '24px' }}
              >
                神州问学：企业级Agent中台
              </h3>

              {/* 描述 */}
              <p
                className="mb-10"
                style={{ color: '#666666', lineHeight: '1.7', fontSize: '15px' }}
              >
                兼容60+主流大模型，快速实现企业流程AI化改造
              </p>

              {/* 三个特点 */}
              <ul className="space-y-3.5 mb-10">
                <li
                  className="flex items-center"
                  style={{ color: '#666666', fontSize: '16px' }}
                >
                  <ChevronRight className="w-4 h-4 mr-3" style={{ color: '#FF3B30' }} />
                  多模型调度适配
                </li>
                <li
                  className="flex items-center"
                  style={{ color: '#666666', fontSize: '16px' }}
                >
                  <ChevronRight className="w-4 h-4 mr-3" style={{ color: '#FF3B30' }} />
                  全生命周期知识治理
                </li>
                <li
                  className="flex items-center"
                  style={{ color: '#666666', fontSize: '16px' }}
                >
                  <ChevronRight className="w-4 h-4 mr-3" style={{ color: '#FF3B30' }} />
                  流程智能编排
                </li>
              </ul>

              {/* 按钮 */}
              <button
                className="px-7 py-2.5 font-medium transition-all duration-300 hover:bg-gray-50 hover:border-red-300"
                style={{
                  border: '1px solid #666666',
                  color: '#666666',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              >
                了解更多
              </button>
            </div>
          </div>

          {/* 右卡片 - 智算底座 */}
          <div className="group relative overflow-hidden bg-white rounded-xl p-10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
            {/* 流光效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent -translate-x-full group-hover:animate-shimmer"></div>

            {/* 内容 */}
            <div className="relative">
              {/* 标题图标 */}
              <div className="mb-6">
                <Server className="w-10 h-10" style={{ color: '#666666' }} />
              </div>

              {/* 标题 */}
              <h3
                className="font-semibold mb-4"
                style={{ color: '#333333', fontSize: '24px' }}
              >
                神州鲲泰：全栈AI算力基础设施
              </h3>

              {/* 描述 */}
              <p
                className="mb-10"
                style={{ color: '#666666', lineHeight: '1.7', fontSize: '15px' }}
              >
                稳定支撑企业全流程智能运算，适配多行业算力需求
              </p>

              {/* 三个特点 */}
              <ul className="space-y-3.5 mb-10">
                <li
                  className="flex items-center"
                  style={{ color: '#666666', fontSize: '16px' }}
                >
                  <ChevronRight className="w-4 h-4 mr-3" style={{ color: '#666666' }} />
                  训推一体服务器
                </li>
                <li
                  className="flex items-center"
                  style={{ color: '#666666', fontSize: '16px' }}
                >
                  <ChevronRight className="w-4 h-4 mr-3" style={{ color: '#666666' }} />
                  千亿级大模型支撑
                </li>
                <li
                  className="flex items-center"
                  style={{ color: '#666666', fontSize: '16px' }}
                >
                  <ChevronRight className="w-4 h-4 mr-3" style={{ color: '#666666' }} />
                  鲲鹏+昇腾生态
                </li>
              </ul>

              {/* 按钮 */}
              <button
                className="px-7 py-2.5 font-medium transition-all duration-300 hover:bg-gray-50"
                style={{
                  border: '1px solid #666666',
                  color: '#666666',
                  borderRadius: '4px',
                  fontSize: '14px'
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
