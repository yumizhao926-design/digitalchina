'use client';

import { useState } from 'react';
import { ArrowRight, X, Circle } from 'lucide-react';

interface CircleItem {
  id: string;
  label: string;
  keywords: string[];
  description: string;
  features: string[];
  color: string;
}

const coreItems: CircleItem[] = [
  {
    id: 'core-1',
    label: 'AI算力底座',
    keywords: ['全栈算力', '千亿模型', '鲲鹏+昇腾'],
    description: '神州鲲泰全栈AI算力基础设施，为企业提供稳定可靠的智能运算支撑',
    features: [
      '训推一体服务器集群',
      '千亿级大模型训练支持',
      '异构算力统一调度',
      '多云弹性算力'
    ],
    color: '#FF3B30',
  },
  {
    id: 'core-2',
    label: '神州问学Agent中台',
    keywords: ['60+模型', '智能编排', '知识治理'],
    description: '企业级Agent中台，快速实现企业流程AI化改造',
    features: [
      '多模型统一调度',
      '全生命周期知识治理',
      '流程智能编排引擎',
      '企业级安全保障'
    ],
    color: '#666666',
  },
];

const industryItems: CircleItem[] = [
  {
    id: 'industry-1',
    label: '金融AI',
    keywords: ['风控', '投研', '客服'],
    description: '面向金融行业的智能化解决方案',
    features: ['智能风控', '量化投研', '智能客服', '反欺诈'],
    color: '#FF3B30',
  },
  {
    id: 'industry-2',
    label: '政务AI',
    keywords: ['一网通办', '智慧城市', '数据治理'],
    description: '政务数字化转型智能化支撑',
    features: ['一网通办', '智慧政务', '数据治理', '智能监管'],
    color: '#666666',
  },
  {
    id: 'industry-3',
    label: '制造AI',
    keywords: ['预测性维护', '质量检测', '供应链'],
    description: '智能制造全流程AI赋能',
    features: ['预测性维护', '智能质检', '供应链优化', '能源管理'],
    color: '#FF3B30',
  },
  {
    id: 'industry-4',
    label: '零售AI',
    keywords: ['智能推荐', '会员运营', '库存优化'],
    description: '零售行业智能化运营方案',
    features: ['智能推荐', '会员运营', '库存优化', '价格预测'],
    color: '#666666',
  },
  {
    id: 'industry-5',
    label: '教育AI',
    keywords: ['个性化学习', '智能批改', '知识图谱'],
    description: '教育行业智能化应用场景',
    features: ['个性化学习', '智能批改', '知识图谱', '学情分析'],
    color: '#FF3B30',
  },
  {
    id: 'industry-6',
    label: '医疗AI',
    keywords: ['影像诊断', '药物研发', '健康管理'],
    description: '医疗健康智能化解决方案',
    features: ['影像诊断', '药物研发', '健康管理', '慢病管理'],
    color: '#666666',
  },
  {
    id: 'industry-7',
    label: '物流AI',
    keywords: ['路径规划', '仓储管理', '智能配送'],
    description: '物流供应链智能化升级',
    features: ['路径规划', '仓储管理', '智能配送', '需求预测'],
    color: '#FF3B30',
  },
  {
    id: 'industry-8',
    label: '能源AI',
    keywords: ['智能调度', '负荷预测', '设备监测'],
    description: '能源行业智能化管理方案',
    features: ['智能调度', '负荷预测', '设备监测', '能效优化'],
    color: '#666666',
  },
];

const productItems: CircleItem[] = [
  {
    id: 'product-1',
    label: '智能客服',
    keywords: ['多模态', '情感识别', '知识库'],
    description: '智能化客户服务解决方案',
    features: ['多模态交互', '情感识别', '知识库驱动', '人机协作'],
    color: '#FF3B30',
  },
  {
    id: 'product-2',
    label: '智能文档',
    keywords: ['OCR识别', '语义理解', '自动分类'],
    description: '文档智能化处理平台',
    features: ['OCR识别', '语义理解', '自动分类', '智能提取'],
    color: '#666666',
  },
  {
    id: 'product-3',
    label: '智能营销',
    keywords: ['用户画像', '精准投放', '效果分析'],
    description: '智能化营销运营平台',
    features: ['用户画像', '精准投放', '效果分析', '创意生成'],
    color: '#FF3B30',
  },
  {
    id: 'product-4',
    label: '智能风控',
    keywords: ['实时监控', '异常检测', '风险预警'],
    description: '智能化风险控制系统',
    features: ['实时监控', '异常检测', '风险预警', '策略引擎'],
    color: '#666666',
  },
];

export default function AIPanorama() {
  const [hoveredItem, setHoveredItem] = useState<CircleItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<CircleItem | null>(null);

  const handleItemClick = (item: CircleItem) => {
    setSelectedItem(item);
  };

  const closeDialog = () => {
    setSelectedItem(null);
  };

  return (
    <section className="py-24 px-4 sm:px-8 relative overflow-hidden" style={{ backgroundColor: '#F8F9FA' }}>
      {/* 浅色科技渐变背景 */}
      <div className="absolute inset-0 opacity-30" style={{
        background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 50%, #f0f0f0 100%)'
      }}></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* 区域标题 */}
        <h2
          className="font-bold mb-16 text-center"
          style={{ color: '#333333', fontSize: '32px' }}
        >
          AI能力全景图
        </h2>

        {/* 桌面端：环形布局 */}
        <div className="hidden md:block relative" style={{ height: '600px' }}>
          {/* 中心核心圈层 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-64 h-64 rounded-full flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, rgba(255, 59, 48, 0.1) 0%, rgba(102, 102, 102, 0.1) 100%)',
              border: '2px solid rgba(255, 59, 48, 0.2)'
            }}>
              {/* 核心项1 */}
              <div
                className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center cursor-pointer group"
                onMouseEnter={() => setHoveredItem(coreItems[0])}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleItemClick(coreItems[0])}
              >
                <Circle className="w-16 h-16 mx-auto mb-2 transition-all duration-300 group-hover:scale-110" style={{ color: coreItems[0].color }} />
                <div className="text-sm font-semibold" style={{ color: '#333333' }}>{coreItems[0].label}</div>
              </div>

              {/* 核心项2 */}
              <div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center cursor-pointer group"
                onMouseEnter={() => setHoveredItem(coreItems[1])}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleItemClick(coreItems[1])}
              >
                <Circle className="w-16 h-16 mx-auto mb-2 transition-all duration-300 group-hover:scale-110" style={{ color: coreItems[1].color }} />
                <div className="text-sm font-semibold" style={{ color: '#333333' }}>{coreItems[1].label}</div>
              </div>
            </div>
          </div>

          {/* 外层行业AI场景 */}
          {industryItems.map((item, index) => {
            const angle = (index * 45) * (Math.PI / 180);
            const radius = 220;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={item.id}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer group"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleItemClick(item)}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: hoveredItem?.id === item.id ? `${item.color}20` : `${item.color}10`,
                    border: `2px solid ${item.color}40`,
                  }}
                >
                  <Circle className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <div className="text-xs font-medium mt-2" style={{ color: '#333333' }}>{item.label}</div>
              </div>
            );
          })}

          {/* 外层AI赋能产品 */}
          {productItems.map((item, index) => {
            const angle = (index * 90 + 45) * (Math.PI / 180);
            const radius = 290;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={item.id}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer group"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleItemClick(item)}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: hoveredItem?.id === item.id ? `${item.color}20` : `${item.color}10`,
                    border: `2px solid ${item.color}40`,
                  }}
                >
                  <Circle className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <div className="text-xs font-medium mt-2" style={{ color: '#333333' }}>{item.label}</div>
              </div>
            );
          })}

          {/* 悬停关键词显示 */}
          {hoveredItem && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-64 bg-white rounded-lg shadow-xl p-6 min-w-[280px] z-20">
              <h3 className="font-bold mb-3" style={{ color: '#333333', fontSize: '18px' }}>{hoveredItem.label}</h3>
              <div className="flex flex-wrap gap-2">
                {hoveredItem.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full"
                    style={{
                      backgroundColor: `${hoveredItem.color}15`,
                      color: hoveredItem.color,
                    }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 移动端：滑动卡片 */}
        <div className="md:hidden">
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {/* 核心项 */}
              {coreItems.map((item) => (
                <div
                  key={item.id}
                  className="w-64 bg-white rounded-xl p-5 shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Circle className="w-10 h-10" style={{ color: item.color }} />
                    <h3 className="font-bold" style={{ color: '#333333', fontSize: '16px' }}>{item.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full"
                        style={{
                          backgroundColor: `${item.color}15`,
                          color: item.color,
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* 行业场景 */}
              {industryItems.map((item) => (
                <div
                  key={item.id}
                  className="w-56 bg-white rounded-xl p-4 shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Circle className="w-8 h-8" style={{ color: item.color }} />
                    <h3 className="font-bold" style={{ color: '#333333', fontSize: '15px' }}>{item.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.keywords.slice(0, 2).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs rounded-full"
                        style={{
                          backgroundColor: `${item.color}15`,
                          color: item.color,
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* 产品矩阵 */}
              {productItems.map((item) => (
                <div
                  key={item.id}
                  className="w-52 bg-white rounded-xl p-4 shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Circle className="w-7 h-7" style={{ color: item.color }} />
                    <h3 className="font-bold" style={{ color: '#333333', fontSize: '14px' }}>{item.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.keywords.slice(0, 2).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs rounded-full"
                        style={{
                          backgroundColor: `${item.color}15`,
                          color: item.color,
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 弹窗 */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={closeDialog}>
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              {/* 关闭按钮 */}
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                onClick={closeDialog}
              >
                <X className="w-5 h-5" style={{ color: '#666666' }} />
              </button>

              {/* 标题 */}
              <div className="flex items-center gap-3 mb-4">
                <Circle className="w-12 h-12" style={{ color: selectedItem.color }} />
                <h3 className="font-bold" style={{ color: '#333333', fontSize: '24px' }}>{selectedItem.label}</h3>
              </div>

              {/* 描述 */}
              <p className="mb-6" style={{ color: '#666666', lineHeight: '1.7' }}>{selectedItem.description}</p>

              {/* 核心能力 */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3" style={{ color: '#333333', fontSize: '16px' }}>核心能力</h4>
                <ul className="space-y-2">
                  {selectedItem.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start" style={{ color: '#666666' }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3" style={{ backgroundColor: selectedItem.color }}></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 直达按钮 */}
              <button
                className="w-full flex items-center justify-center gap-2 py-3 font-medium transition-all duration-300 hover:shadow-md"
                style={{
                  border: '1px solid #FF3B30',
                  color: '#FF3B30',
                  borderRadius: '6px',
                }}
              >
                直达对应板块
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
