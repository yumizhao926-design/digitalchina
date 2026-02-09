'use client';

import { Brain, Server } from 'lucide-react';

export default function ProductCards() {
  return (
    <section className="py-24 px-4 sm:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* 区域标题 */}
        <h2
          className="text-3xl font-bold mb-8"
          style={{ color: '#333333', fontSize: '32px' }}
        >
          核心产品 | AI for Process 技术支撑
        </h2>

        {/* 双列网格布局 - 间距32px */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '32px' }}>
          {/* 左卡片 - 智能平台 */}
          <div
            className="bg-white rounded-lg p-8 transition-all duration-300"
            style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* 标题图标 - 红色线性图标 */}
            <div className="mb-6">
              <Brain
                className="w-12 h-12"
                style={{ color: '#FF3B30', strokeWidth: 1.5 }}
              />
            </div>

            {/* 标题 - 24px 深灰色 */}
            <h3
              className="font-semibold mb-4"
              style={{ color: '#333333', fontSize: '24px' }}
            >
              神州问学：企业级Agent中台
            </h3>

            {/* 描述 - 灰色 */}
            <p
              className="mb-8"
              style={{ color: '#666666', lineHeight: '1.6' }}
            >
              兼容60+主流大模型，快速实现企业流程AI化改造
            </p>

            {/* 三个特点 - 16px 灰色 */}
            <ul className="space-y-4 mb-8">
              <li
                className="flex items-center"
                style={{ color: '#666666', fontSize: '16px' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mr-3"
                  style={{ backgroundColor: '#666666' }}
                ></span>
                多模型调度适配
              </li>
              <li
                className="flex items-center"
                style={{ color: '#666666', fontSize: '16px' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mr-3"
                  style={{ backgroundColor: '#666666' }}
                ></span>
                全生命周期知识治理
              </li>
              <li
                className="flex items-center"
                style={{ color: '#666666', fontSize: '16px' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mr-3"
                  style={{ backgroundColor: '#666666' }}
                ></span>
                流程智能编排
              </li>
            </ul>

            {/* 按钮 - 灰色边框，灰色文字，圆角4px */}
            <button
              className="px-6 py-2.5 font-medium transition-all duration-200 hover:bg-gray-50"
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

          {/* 右卡片 - 智算底座 */}
          <div
            className="bg-white rounded-lg p-8 transition-all duration-300"
            style={{
              border: '1px solid #E5E7EB',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* 标题图标 - 灰色服务器图标 */}
            <div className="mb-6">
              <Server
                className="w-12 h-12"
                style={{ color: '#666666', strokeWidth: 1.5 }}
              />
            </div>

            {/* 标题 - 24px 深灰色 */}
            <h3
              className="font-semibold mb-4"
              style={{ color: '#333333', fontSize: '24px' }}
            >
              神州鲲泰：全栈AI算力基础设施
            </h3>

            {/* 描述 - 灰色 */}
            <p
              className="mb-8"
              style={{ color: '#666666', lineHeight: '1.6' }}
            >
              稳定支撑企业全流程智能运算，适配多行业算力需求
            </p>

            {/* 三个特点 - 16px 灰色 */}
            <ul className="space-y-4 mb-8">
              <li
                className="flex items-center"
                style={{ color: '#666666', fontSize: '16px' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mr-3"
                  style={{ backgroundColor: '#666666' }}
                ></span>
                训推一体服务器
              </li>
              <li
                className="flex items-center"
                style={{ color: '#666666', fontSize: '16px' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mr-3"
                  style={{ backgroundColor: '#666666' }}
                ></span>
                千亿级大模型支撑
              </li>
              <li
                className="flex items-center"
                style={{ color: '#666666', fontSize: '16px' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mr-3"
                  style={{ backgroundColor: '#666666' }}
                ></span>
                鲲鹏+昇腾生态
              </li>
            </ul>

            {/* 按钮 - 灰色边框，灰色文字，圆角4px */}
            <button
              className="px-6 py-2.5 font-medium transition-all duration-200 hover:bg-gray-50"
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
    </section>
  );
}
