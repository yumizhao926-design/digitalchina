"use client";

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface IndustrySolution {
  id: string;
  name: string;
  description: string;
  image: string;
  value: string; // 核心价值数据标签
  detail: {
    title: string;
    content: string[];
    results: string[];
  };
}

const industrySolutions: IndustrySolution[] = [
  {
    id: 'solution-1',
    name: '汽车制造',
    description: '智能制造质量检测：AI视觉质检\n用户运营智能分析：数据深度挖掘\n车联网AI优化：智能驾驶算法优化',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop&q=80',
    value: '效率提升90%',
    detail: {
      title: '汽车制造智能化解决方案',
      content: [
        '智能制造质量检测：AI视觉质检，实时缺陷识别',
        '用户运营智能分析：用户行为数据深度挖掘',
        '车联网AI优化：智能驾驶算法持续优化'
      ],
      results: [
        '流程自动化效率提升90%',
        '生产质检准确率提升98%'
      ]
    }
  },
  {
    id: 'solution-2',
    name: '制造流程优化方案',
    description: '预测性维护 · 智能质检 · 供应链',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=900&fit=crop&q=80',
    value: '良品率+25%',
    detail: {
      title: '智能制造流程优化解决方案',
      content: [
        '基于AI视觉的智能质检系统，实现产品缺陷自动识别与分类',
        '设备预测性维护，提前24小时预警潜在故障',
        '供应链智能调度，动态优化生产计划与库存管理',
        '数字孪生工厂，实时模拟与优化生产流程'
      ],
      results: [
        '产品良品率提升25%',
        '设备停机时间减少70%',
        '生产效率提升40%',
        '能耗降低30%'
      ]
    }
  },
  {
    id: 'solution-3',
    name: '金融流程数智方案',
    description: '智能风控 · 量化投研 · 反欺诈',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=900&fit=crop&q=80',
    value: '风险识别率99.9%',
    detail: {
      title: '金融数智化解决方案',
      content: [
        '基于机器学习的智能风控系统，实时监控交易异常',
        '量化投研平台，自动化分析市场数据与投资机会',
        'AI反欺诈系统，精准识别欺诈交易与账户',
        '智能客服机器人，7x24小时服务客户'
      ],
      results: [
        '风险识别准确率达到99.9%',
        '欺诈交易拦截成功率98.5%',
        '客户服务响应时间从分钟级降至秒级',
        '运营成本降低60%'
      ]
    }
  },
  {
    id: 'solution-4',
    name: '医药医疗',
    description: '药物研发辅助：AI加速新药靶点筛选\n智慧诊疗支持：辅助诊断与治疗方案推荐\n医疗数据安全：私有化部署，数据不出院',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&h=900&fit=crop&q=80',
    value: '靶点筛选效率提升30%',
    detail: {
      title: '靶点研究AI赋能方案',
      content: [
        '药物研发辅助：AI加速新药靶点筛选',
        '智慧诊疗支持：辅助诊断与治疗方案推荐',
        '医疗数据安全：私有化部署，数据不出院'
      ],
      results: [
        '靶点筛选效率提升30%',
        '诊断准确率达94%',
        '数据私有化安全保障'
      ]
    }
  },
  {
    id: 'solution-5',
    name: '零售流程智能化方案',
    description: '智能推荐 · 供应链 · 客户洞察',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=900&fit=crop&q=80',
    value: '转化率+80%',
    detail: {
      title: '零售智能化解决方案',
      content: [
        'AI智能推荐系统，个性化推荐商品提升转化率',
        '需求预测与智能补货，优化库存周转',
        '客户画像分析，精准营销提升复购',
        '智能客服与售后，自动处理订单咨询'
      ],
      results: [
        '页面转化率提升80%',
        '库存周转天数减少50%',
        '客户复购率提升45%',
        '人力成本降低70%'
      ]
    }
  },
  {
    id: 'solution-6',
    name: '能源流程优化方案',
    description: '智能调度 · 能效分析 · 预测维护',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop&q=80',
    value: '能耗降低35%',
    detail: {
      title: '能源智能化解决方案',
      content: [
        '智能电网调度，实时平衡供需优化资源配置',
        '设备能耗分析与优化，识别节能机会',
        '设备预测性维护，降低故障率',
        '碳排放监测与管理，助力双碳目标'
      ],
      results: [
        '综合能耗降低35%',
        '设备故障率降低80%',
        '能源利用效率提升50%',
        '碳排放减少40%'
      ]
    }
  },
  {
    id: 'solution-7',
    name: '教育流程创新方案',
    description: '智能教学 · 个性化学习 · 教务管理',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=900&fit=crop&q=80',
    value: '学习效率+60%',
    detail: {
      title: '教育智能化解决方案',
      content: [
        'AI智能教学系统，自适应学习路径规划',
        '个性化推荐学习内容，因材施教',
        '智能教务管理，自动化排课与考勤',
        '学习效果分析，实时追踪学生进步'
      ],
      results: [
        '学生学习效率提升60%',
        '教师备课时间减少70%',
        '及格率提升至95%',
        '学生参与度提升80%'
      ]
    }
  },
];

export default function IndustrySolutions() {
  const [selectedSolution, setSelectedSolution] = useState<IndustrySolution | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 自动轮播
  useEffect(() => {
    if (!isAutoPlaying || selectedSolution) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industrySolutions.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, selectedSolution]);

  // 滚动到当前卡片
  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0] as HTMLElement;
      const gap = 24; // gap-6
      const scrollPosition = currentIndex * (cardWidth?.offsetWidth || 400 + gap);
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handleCardClick = (solution: IndustrySolution) => {
    setSelectedSolution(solution);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + industrySolutions.length) % industrySolutions.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % industrySolutions.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      className="px-6 lg:px-24 py-20"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <h2
          className="font-semibold mb-12 text-center"
          style={{ color: '#333333', fontSize: '42px', letterSpacing: '-0.5px' }}
        >
          行业AI解决方案
        </h2>

        {/* 桌面端横向滚动 */}
        <div className="hidden md:block relative">
          {/* 左右导航按钮 */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
            style={{ left: '-40px' }}
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
            style={{ right: '-40px' }}
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>

          {/* 卡片容器 */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-hidden"
            style={{ scrollBehavior: 'smooth' }}
          >
            {industrySolutions.map((solution) => (
              <div
                key={solution.id}
                onClick={() => handleCardClick(solution)}
                className="flex-shrink-0 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer relative overflow-hidden"
                style={{ width: '380px', height: '480px' }}
              >
                {/* 背景图片 */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 hover:scale-110"
                  style={{ backgroundImage: `url(${solution.image})` }}
                />

                {/* 渐变遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* 内容叠加 */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  {/* 红色数据标签 */}
                  <div
                    className="inline-block px-4 py-2 rounded-full mb-3 text-sm font-semibold"
                    style={{
                      backgroundColor: '#FF3B30',
                      color: '#FFFFFF',
                      width: 'fit-content'
                    }}
                  >
                    {solution.value}
                  </div>

                  {/* 方案名称 */}
                  <h3
                    className="font-semibold mb-2"
                    style={{
                      color: '#FFFFFF',
                      fontSize: '24px',
                      letterSpacing: '0.3px',
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    {solution.name}
                  </h3>

                  {/* 描述文字 - 支持多行显示 */}
                  <div className="text-sm font-light mb-4 space-y-1" style={{ color: '#FFFFFF', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
                    {solution.description.split('\n').map((line, index) => (
                      <p key={index} className="leading-relaxed" style={{ lineHeight: '1.4' }}>
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* 详情按钮 */}
                  <button
                    className="px-5 py-2.5 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(10px)',
                      width: 'fit-content'
                    }}
                  >
                    查看详情
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 指示器 */}
          <div className="flex justify-center gap-3 mt-8">
            {industrySolutions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="w-2 h-2 rounded-full transition-all duration-300 hover:scale-125"
                style={{
                  backgroundColor: index === currentIndex ? '#FF3B30' : '#D1D5DB',
                  width: index === currentIndex ? '32px' : '8px'
                }}
              />
            ))}
          </div>
        </div>

        {/* 移动端垂直滑动 */}
        <div className="md:hidden">
          <div className="space-y-6">
            {industrySolutions.map((solution) => (
              <div
                key={solution.id}
                onClick={() => handleCardClick(solution)}
                className="rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer relative overflow-hidden"
                style={{ height: '400px' }}
              >
                {/* 背景图片 */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 hover:scale-110"
                  style={{ backgroundImage: `url(${solution.image})` }}
                />

                {/* 渐变遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* 内容叠加 */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  {/* 红色数据标签 */}
                  <div
                    className="inline-block px-4 py-2 rounded-full mb-3 text-sm font-semibold"
                    style={{
                      backgroundColor: '#FF3B30',
                      color: '#FFFFFF',
                      width: 'fit-content'
                    }}
                  >
                    {solution.value}
                  </div>

                  {/* 方案名称 */}
                  <h3
                    className="font-semibold mb-2"
                    style={{
                      color: '#FFFFFF',
                      fontSize: '22px',
                      letterSpacing: '0.3px',
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    {solution.name}
                  </h3>

                  {/* 描述文字 - 支持多行显示 */}
                  <div className="text-sm font-light mb-4 space-y-1" style={{ color: '#FFFFFF', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
                    {solution.description.split('\n').map((line, index) => (
                      <p key={index} className="leading-relaxed" style={{ lineHeight: '1.4' }}>
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* 详情按钮 */}
                  <button
                    className="px-5 py-2.5 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-gray-900"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(10px)',
                      width: 'fit-content'
                    }}
                  >
                    查看详情
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 详情弹窗 */}
      {selectedSolution && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={() => setSelectedSolution(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setSelectedSolution(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 z-10"
            >
              <X size={20} className="text-gray-700" />
            </button>

            {/* 弹窗内容 */}
            <div className="p-8">
              {/* 标题 */}
              <h3
                className="font-semibold mb-6"
                style={{ color: '#333333', fontSize: '32px' }}
              >
                {selectedSolution.detail.title}
              </h3>

              {/* 方案概述 */}
              <div className="mb-8">
                <h4
                  className="font-medium mb-4 pb-2"
                  style={{
                    color: '#333333',
                    fontSize: '20px',
                    borderBottom: '2px solid #FF3B30'
                  }}
                >
                  方案概述
                </h4>
                <ul className="space-y-3">
                  {selectedSolution.detail.content.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                      style={{ color: '#666666', lineHeight: '1.8' }}
                    >
                      <span
                        className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                        style={{ backgroundColor: '#FF3B30' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 应用成果 */}
              <div>
                <h4
                  className="font-medium mb-4 pb-2"
                  style={{
                    color: '#333333',
                    fontSize: '20px',
                    borderBottom: '2px solid #FF3B30'
                  }}
                >
                  应用成果
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {selectedSolution.detail.results.map((result, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: '#FFF5F5' }}
                    >
                      <p
                        className="font-medium"
                        style={{ color: '#FF3B30', fontSize: '18px' }}
                      >
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
