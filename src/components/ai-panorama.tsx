'use client';

import { useState, useEffect } from 'react';
import { X, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface CircleItem {
  id: string;
  label: string;
  keywords: string[];
  description: string;
  features: string[];
  category?: string;
  link?: string;
}

// 核心圈层（内环）
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
    link: '#infrastructure',
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
    link: '#agent-platform',
  },
];

// 行业圈层（中环）- 8大行业
const industryItems: CircleItem[] = [
  {
    id: 'industry-1',
    label: '政务',
    keywords: ['一网通办', '智慧城市', '数据治理'],
    description: '政务数字化转型智能化支撑',
    features: ['一网通办', '智慧政务', '数据治理', '智能监管'],
    link: '#industry-government',
  },
  {
    id: 'industry-2',
    label: '制造',
    keywords: ['预测性维护', '质量检测', '供应链'],
    description: '智能制造全流程AI赋能',
    features: ['预测性维护', '智能质检', '供应链优化', '能源管理'],
    link: '#industry-manufacturing',
  },
  {
    id: 'industry-3',
    label: '金融',
    keywords: ['风控', '投研', '客服'],
    description: '面向金融行业的智能化解决方案',
    features: ['智能风控', '量化投研', '智能客服', '反欺诈'],
    link: '#industry-finance',
  },
  {
    id: 'industry-4',
    label: '医疗',
    keywords: ['影像诊断', '药物研发', '健康管理'],
    description: '医疗健康智能化解决方案',
    features: ['影像诊断', '药物研发', '健康管理', '慢病管理'],
    link: '#industry-healthcare',
  },
  {
    id: 'industry-5',
    label: '零售',
    keywords: ['智能推荐', '会员运营', '库存优化'],
    description: '零售行业智能化运营方案',
    features: ['智能推荐', '会员运营', '库存优化', '价格预测'],
    link: '#industry-retail',
  },
  {
    id: 'industry-6',
    label: '教育',
    keywords: ['个性化学习', '智能批改', '知识图谱'],
    description: '教育行业智能化应用场景',
    features: ['个性化学习', '智能批改', '知识图谱', '学情分析'],
    link: '#industry-education',
  },
  {
    id: 'industry-7',
    label: '能源',
    keywords: ['智能调度', '负荷预测', '设备监测'],
    description: '能源行业智能化管理方案',
    features: ['智能调度', '负荷预测', '设备监测', '能效优化'],
    link: '#industry-energy',
  },
  {
    id: 'industry-8',
    label: '交通',
    keywords: ['路径规划', '智能调度', '交通监控'],
    description: '智慧交通智能化解决方案',
    features: ['路径规划', '智能调度', '交通监控', '违章识别'],
    link: '#industry-transport',
  },
];

// 产品圈层（外环）- 12个产品，分三层
const productItems: CircleItem[] = [
  // 基础层
  {
    id: 'product-1',
    label: '大模型服务',
    category: '基础层',
    keywords: ['多模型', 'API服务', '私有化部署'],
    description: '提供60+主流大模型统一接入服务',
    features: ['多模型统一接入', 'API标准化', '私有化部署支持', '模型微调'],
    link: '#product-llm-service',
  },
  {
    id: 'product-2',
    label: '向量数据库',
    category: '基础层',
    keywords: ['高性能', '企业级', '实时检索'],
    description: '企业级向量数据库，支撑知识库建设',
    features: ['高性能检索', '亿级向量支持', '企业级安全', '实时更新'],
    link: '#product-vector-db',
  },
  {
    id: 'product-3',
    label: 'RAG引擎',
    category: '基础层',
    keywords: ['知识增强', '精准检索', '多模态'],
    description: '检索增强生成引擎，提升回答准确度',
    features: ['知识增强', '精准检索', '多模态支持', '溯源可解释'],
    link: '#product-rag',
  },
  {
    id: 'product-4',
    label: '知识库管理',
    category: '基础层',
    keywords: ['知识治理', '自动解析', '版本控制'],
    description: '企业知识全生命周期管理平台',
    features: ['知识治理', '自动解析', '版本控制', '权限管理'],
    link: '#product-knowledge-base',
  },
  // 平台层
  {
    id: 'product-5',
    label: 'Agent构建平台',
    category: '平台层',
    keywords: ['可视化编排', '零代码', '多Agent协作'],
    description: '可视化Agent构建与编排平台',
    features: ['可视化编排', '零代码开发', '多Agent协作', '流程监控'],
    link: '#product-agent-builder',
  },
  {
    id: 'product-6',
    label: '对话管理平台',
    category: '平台层',
    keywords: ['多渠道接入', '人机协作', '会话分析'],
    description: '统一对话管理与人机协作平台',
    features: ['多渠道接入', '人机协作', '会话分析', '意图识别'],
    link: '#product-dialog-manager',
  },
  {
    id: 'product-7',
    label: '流程编排引擎',
    category: '平台层',
    keywords: ['流程自动化', 'API集成', '业务编排'],
    description: '业务流程自动化编排引擎',
    features: ['流程自动化', 'API集成', '业务编排', '异常处理'],
    link: '#product-workflow-engine',
  },
  {
    id: 'product-8',
    label: 'Prompt优化平台',
    category: '平台层',
    keywords: ['提示词优化', 'A/B测试', '效果评估'],
    description: '提示词工程优化与管理平台',
    features: ['提示词优化', 'A/B测试', '效果评估', '版本管理'],
    link: '#product-prompt-optimizer',
  },
  // 应用层
  {
    id: 'product-9',
    label: '智能客服',
    category: '应用层',
    keywords: ['多模态', '情感识别', '知识库'],
    description: '智能化客户服务解决方案',
    features: ['多模态交互', '情感识别', '知识库驱动', '人机协作'],
    link: '#product-customer-service',
  },
  {
    id: 'product-10',
    label: '智能文档',
    category: '应用层',
    keywords: ['OCR识别', '语义理解', '自动分类'],
    description: '文档智能化处理平台',
    features: ['OCR识别', '语义理解', '自动分类', '智能提取'],
    link: '#product-document',
  },
  {
    id: 'product-11',
    label: '智能营销',
    category: '应用层',
    keywords: ['用户画像', '精准投放', '效果分析'],
    description: '智能化营销运营平台',
    features: ['用户画像', '精准投放', '效果分析', '创意生成'],
    link: '#product-marketing',
  },
  {
    id: 'product-12',
    label: '智能风控',
    category: '应用层',
    keywords: ['实时监控', '异常检测', '风险预警'],
    description: '智能化风险控制系统',
    features: ['实时监控', '异常检测', '风险预警', '策略引擎'],
    link: '#product-risk-control',
  },
];

export default function AIPanorama() {
  const [hoveredItem, setHoveredItem] = useState<CircleItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<CircleItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleItemClick = (item: CircleItem) => {
    setSelectedItem(item);
  };

  const closeDialog = () => {
    setSelectedItem(null);
  };

  return (
    <section
      id="ai-panorama"
      className="py-20 px-4 sm:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#F8F9FA' }}
    >
      {/* 浅色科技渐变背景 */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 50%, #f0f0f0 100%)',
        }}
      ></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* 区域标题 */}
        <h2
          className="font-bold mb-16 text-center"
          style={{ color: '#333333', fontSize: '32px', letterSpacing: '0.5px' }}
        >
          AI能力全景图
        </h2>

        {/* 桌面端：环形布局 */}
        {!isMobile && (
          <div className="relative" style={{ height: '700px' }}>
            <svg viewBox="0 0 800 700" className="w-full h-full">
              <defs>
                {/* 渐变定义 */}
                <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF3B30" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#666666" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="industryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="productGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9CA3AF" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#D1D5DB" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* 中心点 */}
              <g transform="translate(400, 350)">
                {/* 核心圈层 - 内环 */}
                <circle cx="0" cy="0" r="80" fill="url(#coreGradient)" stroke="#FF3B30" strokeWidth="2" strokeOpacity="0.3" />

                {/* 核心项1 */}
                <g
                  transform="translate(0, -35)"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredItem(coreItems[0])}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleItemClick(coreItems[0])}
                >
                  <circle
                    r="25"
                    fill={hoveredItem?.id === coreItems[0].id ? '#FF3B30' : '#FFFFFF'}
                    stroke="#FF3B30"
                    strokeWidth="2"
                    className="transition-all duration-300"
                    style={{
                      transform: hoveredItem?.id === coreItems[0].id ? 'scale(1.2)' : 'scale(1)',
                    }}
                  />
                  <text
                    x="0"
                    y="-5"
                    textAnchor="middle"
                    className="text-xs font-semibold transition-all duration-300"
                    style={{
                      fill: hoveredItem?.id === coreItems[0].id ? '#FFFFFF' : '#333333',
                      fontSize: '12px',
                    }}
                  >
                    AI算力
                  </text>
                  <text
                    x="0"
                    y="10"
                    textAnchor="middle"
                    className="text-xs transition-all duration-300"
                    style={{
                      fill: hoveredItem?.id === coreItems[0].id ? '#FFFFFF' : '#333333',
                      fontSize: '12px',
                    }}
                  >
                    底座
                  </text>
                </g>

                {/* 核心项2 */}
                <g
                  transform="translate(0, 35)"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredItem(coreItems[1])}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleItemClick(coreItems[1])}
                >
                  <circle
                    r="25"
                    fill={hoveredItem?.id === coreItems[1].id ? '#666666' : '#FFFFFF'}
                    stroke="#666666"
                    strokeWidth="2"
                    className="transition-all duration-300"
                    style={{
                      transform: hoveredItem?.id === coreItems[1].id ? 'scale(1.2)' : 'scale(1)',
                    }}
                  />
                  <text
                    x="0"
                    y="-5"
                    textAnchor="middle"
                    className="text-xs font-semibold transition-all duration-300"
                    style={{
                      fill: hoveredItem?.id === coreItems[1].id ? '#FFFFFF' : '#333333',
                      fontSize: '12px',
                    }}
                  >
                    神州问学
                  </text>
                  <text
                    x="0"
                    y="10"
                    textAnchor="middle"
                    className="text-xs transition-all duration-300"
                    style={{
                      fill: hoveredItem?.id === coreItems[1].id ? '#FFFFFF' : '#333333',
                      fontSize: '12px',
                    }}
                  >
                    Agent中台
                  </text>
                </g>

                {/* 行业圈层 - 中环 */}
                <circle cx="0" cy="0" r="160" fill="url(#industryGradient)" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.2" />

                {/* 行业项 - 8个 */}
                {industryItems.map((item, index) => {
                  const angle = (index * 45 - 90) * (Math.PI / 180);
                  const x = Math.cos(angle) * 160;
                  const y = Math.sin(angle) * 160;

                  return (
                    <g
                      key={item.id}
                      transform={`translate(${x}, ${y})`}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredItem(item)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => handleItemClick(item)}
                    >
                      <circle
                        r="22"
                        fill={hoveredItem?.id === item.id ? '#3B82F6' : '#FFFFFF'}
                        stroke="#3B82F6"
                        strokeWidth="2"
                        className="transition-all duration-300"
                        style={{
                          transform: hoveredItem?.id === item.id ? 'scale(1.15)' : 'scale(1)',
                        }}
                      />
                      <text
                        x="0"
                        y="5"
                        textAnchor="middle"
                        className="text-xs font-medium transition-all duration-300"
                        style={{
                          fill: hoveredItem?.id === item.id ? '#FFFFFF' : '#333333',
                          fontSize: '13px',
                        }}
                      >
                        {item.label}
                      </text>
                    </g>
                  );
                })}

                {/* 产品圈层 - 外环 */}
                <circle cx="0" cy="0" r="260" fill="url(#productGradient)" stroke="#9CA3AF" strokeWidth="2" strokeOpacity="0.2" />

                {/* 产品项 - 12个 */}
                {productItems.map((item, index) => {
                  const angle = (index * 30 - 90) * (Math.PI / 180);
                  const x = Math.cos(angle) * 260;
                  const y = Math.sin(angle) * 260;

                  return (
                    <g
                      key={item.id}
                      transform={`translate(${x}, ${y})`}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredItem(item)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => handleItemClick(item)}
                    >
                      <circle
                        r="18"
                        fill={hoveredItem?.id === item.id ? '#9CA3AF' : '#FFFFFF'}
                        stroke="#9CA3AF"
                        strokeWidth="2"
                        className="transition-all duration-300"
                        style={{
                          transform: hoveredItem?.id === item.id ? 'scale(1.15)' : 'scale(1)',
                        }}
                      />
                      <text
                        x="0"
                        y="4"
                        textAnchor="middle"
                        className="text-xs transition-all duration-300"
                        style={{
                          fill: hoveredItem?.id === item.id ? '#FFFFFF' : '#333333',
                          fontSize: '11px',
                        }}
                      >
                        {item.label.slice(0, 4)}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>

            {/* 悬停关键词显示 */}
            {hoveredItem && (
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-6 min-w-[320px] z-20 transition-all duration-300"
                style={{ marginTop: '180px' }}
              >
                <h3
                  className="font-bold mb-3"
                  style={{ color: '#333333', fontSize: '18px' }}
                >
                  {hoveredItem.label}
                </h3>
                {hoveredItem.category && (
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                    style={{
                      backgroundColor: '#E5E7EB',
                      color: '#666666',
                    }}
                  >
                    {hoveredItem.category}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {hoveredItem.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-sm rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: '#F3F4F6',
                        color: '#333333',
                      }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 移动端：垂直滑动卡片 */}
        {isMobile && (
          <div className="space-y-4">
            {/* 核心圈层 */}
            <div>
              <h3
                className="font-semibold mb-3 px-2"
                style={{ color: '#333333', fontSize: '16px' }}
              >
                核心圈层
              </h3>
              <div className="space-y-3">
                {coreItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl p-5 shadow-md cursor-pointer transition-all duration-300 active:scale-95"
                    onClick={() => handleItemClick(item)}
                  >
                    <h4
                      className="font-semibold mb-2"
                      style={{ color: '#333333', fontSize: '16px' }}
                    >
                      {item.label}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.keywords.slice(0, 3).map((keyword, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full"
                          style={{
                            backgroundColor: '#F3F4F6',
                            color: '#666666',
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

            {/* 行业圈层 */}
            <div>
              <h3
                className="font-semibold mb-3 px-2"
                style={{ color: '#333333', fontSize: '16px' }}
              >
                行业圈层
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {industryItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl p-4 shadow-sm cursor-pointer transition-all duration-300 active:scale-95"
                    onClick={() => handleItemClick(item)}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-2 mx-auto"
                      style={{ backgroundColor: '#3B82F6', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                    >
                      <span
                        className="font-semibold"
                        style={{ color: '#3B82F6', fontSize: '14px' }}
                      >
                        {item.label[0]}
                      </span>
                    </div>
                    <h4
                      className="text-center font-medium"
                      style={{ color: '#333333', fontSize: '14px' }}
                    >
                      {item.label}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* 产品圈层 */}
            <div>
              <h3
                className="font-semibold mb-3 px-2"
                style={{ color: '#333333', fontSize: '16px' }}
              >
                产品圈层
              </h3>
              <div className="space-y-3">
                {['基础层', '平台层', '应用层'].map((category) => (
                  <div key={category}>
                    <div
                      className="px-2 mb-2 text-xs font-medium"
                      style={{ color: '#666666' }}
                    >
                      {category}
                    </div>
                    <div className="space-y-2">
                      {productItems
                        .filter((item) => item.category === category)
                        .map((item) => (
                          <div
                            key={item.id}
                            className="bg-white rounded-lg p-3 shadow-sm cursor-pointer transition-all duration-300 active:scale-95"
                            onClick={() => handleItemClick(item)}
                          >
                            <h4
                              className="font-medium"
                              style={{ color: '#333333', fontSize: '14px' }}
                            >
                              {item.label}
                            </h4>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 详情弹窗 */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={closeDialog}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
              onClick={closeDialog}
            >
              <X className="w-5 h-5" style={{ color: '#666666' }} />
            </button>

            {/* 内容 */}
            <div className="p-6 sm:p-8">
              {/* 标题 */}
              <div className="mb-6">
                {selectedItem.category && (
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                    style={{
                      backgroundColor: '#F3F4F6',
                      color: '#666666',
                    }}
                  >
                    {selectedItem.category}
                  </div>
                )}
                <h3
                  className="font-bold mb-2"
                  style={{ color: '#333333', fontSize: '24px' }}
                >
                  {selectedItem.label}
                </h3>
                <p style={{ color: '#666666', lineHeight: '1.8', fontSize: '15px' }}>
                  {selectedItem.description}
                </p>
              </div>

              {/* 关键词 */}
              <div className="mb-6">
                <h4
                  className="font-semibold mb-3"
                  style={{ color: '#333333', fontSize: '16px' }}
                >
                  核心能力
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm rounded-full"
                      style={{
                        backgroundColor: 'rgba(255, 59, 48, 0.1)',
                        color: '#FF3B30',
                      }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* 特性列表 */}
              <div className="mb-6">
                <h4
                  className="font-semibold mb-3"
                  style={{ color: '#333333', fontSize: '16px' }}
                >
                  主要特性
                </h4>
                <ul className="space-y-2">
                  {selectedItem.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3"
                      style={{ color: '#666666', fontSize: '14px' }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: '#FF3B30' }}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA按钮 */}
              {selectedItem.link && (
                <div className="pt-4 border-t border-gray-100">
                  <button
                    className="w-full py-3 font-semibold text-white rounded-lg transition-all duration-300 hover:shadow-lg"
                    style={{ backgroundColor: '#FF3B30' }}
                  >
                    直达对应板块
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
