"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  clientName: string;
  logo: string;
  industry: string;
  scenario: string;
  result: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    clientName: '黄冈烟草',
    logo: 'https://via.placeholder.com/120x60/CCCCCC/999999?text=黄冈烟草',
    industry: '政务',
    scenario: '案卷AI评审',
    result: '效率提升70%'
  },
  {
    id: 'case-2',
    clientName: '岚图汽车',
    logo: 'https://via.placeholder.com/120x60/CCCCCC/999999?text=岚图汽车',
    industry: '制造',
    scenario: '智能办公',
    result: '成本降低40%'
  },
  {
    id: 'case-3',
    clientName: '天士力',
    logo: 'https://via.placeholder.com/120x60/CCCCCC/999999?text=天士力',
    industry: '医疗',
    scenario: '医药循证问答',
    result: '效率提升80%'
  }
];

export default function CaseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  return (
    <section className="py-24 px-4 sm:px-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto max-w-7xl">
        {/* 标题区域 */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2
              className="font-bold mb-2"
              style={{ color: '#333333', fontSize: '32px' }}
            >
              客户案例
            </h2>
            <p
              className="text-sm"
              style={{ color: '#666666' }}
            >
              AI赋能各行各业，创造真实价值
            </p>
          </div>

          {/* 次CTA按钮 - 轮廓样式 */}
          <button
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:gap-3"
            style={{
              border: '1px solid #E60012',
              color: '#E60012',
              backgroundColor: 'transparent',
              borderRadius: '9999px'
            }}
          >
            查看全部案例
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 轮播区域 */}
        <div className="relative">
          {/* 轮播容器 */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${caseStudies.length * 100}%`
              }}
            >
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="flex-shrink-0 w-full"
                  style={{ width: `${100 / caseStudies.length}%` }}
                >
                  <div className="p-8 sm:p-12 h-full">
                    <div className="flex flex-col h-full gap-6">
                      {/* 客户LOGO */}
                      <div className="mb-2">
                        <img
                          src={caseStudy.logo}
                          alt={`${caseStudy.clientName} LOGO`}
                          className="h-16 object-contain"
                        />
                      </div>

                      {/* 行业标签 */}
                      <div
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium w-fit"
                        style={{
                          backgroundColor: '#F0F0F0',
                          color: '#666666'
                        }}
                      >
                        {caseStudy.industry}
                      </div>

                      {/* 合作场景 */}
                      <div>
                        <p
                          className="text-xs mb-1"
                          style={{ color: '#999999' }}
                        >
                          合作场景
                        </p>
                        <p
                          className="font-medium"
                          style={{ color: '#333333', fontSize: '20px' }}
                        >
                          {caseStudy.scenario}
                        </p>
                      </div>

                      {/* 核心成果 */}
                      <div className="mt-auto">
                        <p
                          className="text-xs mb-1"
                          style={{ color: '#999999' }}
                        >
                          核心成果
                        </p>
                        <p
                          className="font-bold"
                          style={{ color: '#E60012', fontSize: '24px' }}
                        >
                          {caseStudy.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 左右导航按钮 */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              color: '#333333'
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              color: '#333333'
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* 底部圆点指示器 */}
          <div className="flex justify-center gap-3 mt-6">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: index === currentIndex ? '#E60012' : '#CCCCCC',
                  width: index === currentIndex ? '2.5rem' : '0.625rem'
                }}
              />
            ))}
          </div>
        </div>

        {/* 移动端CTA按钮 */}
        <div className="flex justify-center mt-8 sm:hidden">
          <button
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:gap-3"
            style={{
              border: '1px solid #E60012',
              color: '#E60012',
              backgroundColor: 'transparent',
              borderRadius: '9999px'
            }}
          >
            查看全部案例
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
