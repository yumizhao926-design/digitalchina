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
    description: '质量检测 · 用户运营 · 车联网',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_3ce6bd77-2148-483d-a420-ed8c025932cb.jpeg?sign=1802169845-2ac763ccab-0-a377c68a91f539ef916d198afdbd050c47364cfd63c5b0e5b79e23092d51ce0e',
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
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_2b3ec2e1-b496-444b-a930-2d78d46cb7dd.jpeg?sign=1802169954-8c09c1734b-0-da3a0a9e23ed62b95530f36a7b1ef5cad9d5035629f274b958aa7e5908fd5496',
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
    id: 'solution-4',
    name: '医药医疗',
    description: '药物研发 · 智慧诊疗 · 数据安全',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_edaae34b-c2e9-4da1-95f2-bb2c72deefab.jpeg?sign=1802169655-7f24c88fe4-0-6434bd273ee160e884a18c82d5dd9ae66bd3e795aea16fc834dc34ebd8bde599',
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
    description: '智能风控 · 投顾助手 · 交易反欺诈',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_4fb92c51-85e9-45b9-921c-3faebef48a98.jpeg?sign=1802169974-7de1d28fed-0-acba8dc17643b682d635d364d65c2d2ddb109e13a62f5a828c010e1fb4a843dc',
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
    description: '网络优化 · 客服坐席 · 流量分析',
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_4da64b4f-8ecb-42a2-b8b2-322821d6c7e6.jpeg?sign=1802169690-32abb4110c-0-a1e914a22e379658b14a76634bc66c681ee0026e37eb903219f493cedc5c9054',
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
    image: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_51308365-34f0-4c3e-a124-746129e5073b.jpeg?sign=1802169708-8b9e185970-0-09dabfbd596d5c442d3263f454129a1b6ae500d4cd69e610ae3313e97cfd8040',
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
          className="font-bold mb-12 text-center"
          style={{ color: '#333333', fontSize: '32px' }}
        >
          行业解决方案
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
                      backgroundColor: '#E60012',
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
                  <p
                    className="text-sm font-light mb-4"
                    style={{
                      color: '#FFFFFF',
                      lineHeight: '1.5',
                      textShadow: '0 1px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {solution.description}
                  </p>

                  {/* 详情文字链接 */}
                  <div
                    className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3 cursor-pointer"
                    style={{ color: '#FFFFFF', opacity: 0.9 }}
                  >
                    查看详情
                    <ArrowRight size={14} />
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
                  backgroundColor: index === currentIndex ? '#E60012' : '#D1D5DB',
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
                      backgroundColor: '#E60012',
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

                  <p
                    className="text-sm font-light mb-4"
                    style={{
                      color: '#FFFFFF',
                      lineHeight: '1.5',
                      textShadow: '0 1px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {solution.description}
                  </p>

                  {/* 详情文字链接 */}
                  <div
                    className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3 cursor-pointer"
                    style={{ color: '#FFFFFF', opacity: 0.9 }}
                  >
                    查看详情
                    <ArrowRight size={14} />
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
                    borderBottom: '2px solid #E60012'
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
                        style={{ backgroundColor: '#E60012' }}
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
                    borderBottom: '2px solid #E60012'
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
                        style={{ color: '#E60012', fontSize: '18px' }}
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
