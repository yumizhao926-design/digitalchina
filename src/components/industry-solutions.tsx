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
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_b3296359-fa0e-423f-a3f6-e7e5d11dd7bd.jpeg?sign=1802168978-d1ae252cc2-0-773469df3099a94f38419e12bf9604d540619fadead713587feae5c2852ded59',
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
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_c522f5bb-f7ab-427c-9ab5-96d385818a17.jpeg?sign=1802169002-f389928b2f-0-f1e3c9125c1edf676232596a8c908e72f60422afcccb0a9b759b985ee0b469a6',
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
    name: '智慧政务',
    description: 'AI辅助决策：政策模拟与效果预测\n智慧政务服务：智能审批与自动受理\n政务数据治理：跨部门数据融合分析',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_6ce34c65-0707-4d5b-9cdb-65aa8d2c1839.jpeg?sign=1802169060-8dbbfaff79-0-5817522e3ded8f98af774378b28efcd62d18aed4dce4350bde66864ebab0d022',
    value: '审批效率提升70%',
    detail: {
      title: '政务智能化升级方案',
      content: [
        'AI辅助决策：政策模拟与效果预测',
        '智慧政务服务：智能审批与自动受理',
        '政务数据治理：跨部门数据融合分析'
      ],
      results: [
        '审批效率提升70%',
        '公众服务满意度提升80%'
      ]
    }
  },
  {
    id: 'solution-4',
    name: '医药医疗',
    description: '药物研发辅助：AI加速新药靶点筛选\n智慧诊疗支持：辅助诊断与治疗方案推荐\n医疗数据安全：私有化部署，数据不出院',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_cb6ffeb4-43d4-4d58-886d-d4f2e874ce56.jpeg?sign=1802169041-50daf75095-0-a04cdf8f8e279baa989964b25e7bbf64f2e80b0be6ee1cdc8b94ad8dd188e82a',
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
    name: '数字金融',
    description: '智能风控：实时交易风险监测\n投顾AI助手：个性化投资建议\n交易反欺诈：异常行为智能识别',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_49c9d35f-7b9a-49e5-85d9-ee875f921694.jpeg?sign=1802169023-e7efb9997d-0-b81a065987f0584bb0e39696c4419a6037438bd6f1ede4470ace3d4ae2b8d118',
    value: '风险识别率提升95%',
    detail: {
      title: '金融智能风控与服务',
      content: [
        '智能风控：实时交易风险监测',
        '投顾AI助手：个性化投资建议',
        '交易反欺诈：异常行为智能识别'
      ],
      results: [
        '风险识别率提升95%',
        '客服效率提升80%'
      ]
    }
  },
  {
    id: 'solution-6',
    name: '通信运营商',
    description: '网络智能优化：基站负载均衡与自愈\n客户服务AI坐席：智能客服与问题预判\n流量经营分析：用户行为与套餐优化',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_d12de778-51dd-40c6-ad14-6a7e778fe365.jpeg?sign=1802169078-75b03dda19-0-f76b9f417cbed32a3cf1e232e13732e00cd645529a979f1a7477bea2f51ca928',
    value: '网络故障自愈率提升90%',
    detail: {
      title: '运营商网络与服务优化',
      content: [
        '网络智能优化：基站负载均衡与自愈',
        '客户服务AI坐席：智能客服与问题预判',
        '流量经营分析：用户行为与套餐优化'
      ],
      results: [
        '网络故障自愈率提升90%',
        '坐席成本降低30%'
      ]
    }
  },
  {
    id: 'solution-7',
    name: '教育流程创新方案',
    description: '智能教学 · 个性化学习 · 教务管理',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_4dd96c56-755e-498c-9d94-b5dc115fa35e.jpeg?sign=1802169098-32303b734f-0-2aa3d28cce18320824f2efa4cd567a521ae053234fd8aeec151a4f133c7637f3',
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

                {/* 渐变遮罩 - 更柔和 */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60" />

                {/* 内容叠加 - 左右布局 */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* 上部：行业名称 + 红色横线 */}
                  <div>
                    <h3
                      className="font-bold mb-3"
                      style={{
                        color: '#FFFFFF',
                        fontSize: '28px',
                        letterSpacing: '0.5px',
                        textShadow: '0 2px 16px rgba(0,0,0,0.5)'
                      }}
                    >
                      {solution.name}
                    </h3>
                    <div
                      className="w-20 h-0.5 rounded-full"
                      style={{ backgroundColor: '#FF3B30' }}
                    />
                  </div>

                  {/* 中部：描述文字 */}
                  <div className="my-4">
                    {solution.description.split('\n').map((line, index) => (
                      <p
                        key={index}
                        className="text-sm font-medium leading-relaxed mb-2"
                        style={{ 
                          color: '#FFFFFF',
                          textShadow: '0 1px 8px rgba(0,0,0,0.5)'
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* 下部：价值数据 + CTA */}
                  <div className="flex items-center justify-between">
                    {/* 价值数据 - 圆形标签 */}
                    <div
                      className="px-5 py-3 rounded-2xl backdrop-blur-sm"
                      style={{
                        backgroundColor: 'rgba(255, 59, 48, 0.2)',
                        border: '2px solid #FF3B30'
                      }}
                    >
                      <p
                        className="text-base font-bold"
                        style={{ 
                          color: '#FF3B30',
                          textShadow: '0 1px 6px rgba(0,0,0,0.3)',
                          letterSpacing: '0.3px'
                        }}
                      >
                        {solution.value}
                      </p>
                    </div>

                    {/* CTA按钮 */}
                    <button
                      className="text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:gap-3 hover:scale-105 group"
                      style={{
                        color: '#FFFFFF',
                        textShadow: '0 1px 8px rgba(0,0,0,0.5)',
                        letterSpacing: '0.5px'
                      }}
                    >
                      查看详情
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
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
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/75" />

                {/* 内容叠加 */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* 行业名称 */}
                  <h3
                    className="font-semibold mb-2"
                    style={{
                      color: '#FFFFFF',
                      fontSize: '24px',
                      letterSpacing: '1px',
                      textShadow: '0 2px 12px rgba(0,0,0,0.4)'
                    }}
                  >
                    {solution.name}
                  </h3>

                  {/* 红色横线 */}
                  <div
                    className="w-16 h-0.5 mb-5"
                    style={{ backgroundColor: '#FF3B30' }}
                  />

                  {/* 描述文字 */}
                  <div className="text-sm font-light mb-auto space-y-2" style={{ color: '#FFFFFF', textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>
                    {solution.description.split('\n').map((line, index) => (
                      <p key={index} className="leading-relaxed" style={{ lineHeight: '1.5' }}>
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* 底部区域：价值数据 + CTA */}
                  <div className="mt-6 space-y-4">
                    {/* 价值数据 - 方框强调 */}
                    <div
                      className="px-5 py-3 rounded-lg backdrop-blur-md"
                      style={{
                        backgroundColor: 'rgba(255, 59, 48, 0.12)',
                        border: '1px solid rgba(255, 59, 48, 0.4)'
                      }}
                    >
                      <p
                        className="text-lg font-bold text-center"
                        style={{ 
                          color: '#FF3B30',
                          textShadow: '0 1px 8px rgba(0,0,0,0.3)',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {solution.value}
                      </p>
                    </div>

                    {/* 详情按钮 - 文字+箭头 */}
                    <button
                      className="text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:gap-3 group"
                      style={{
                        color: '#FFFFFF',
                        textShadow: '0 1px 6px rgba(0,0,0,0.4)',
                        letterSpacing: '0.5px'
                      }}
                    >
                      查看详情
                      <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
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
