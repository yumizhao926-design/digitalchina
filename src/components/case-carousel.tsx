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
    logo: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_37b47048-72a0-4f77-91a4-dc3c223eec4d.jpeg?sign=1802175838-6d45fbc159-0-7df63f18c12182cbca66360dd5548692b78ab552d477005324934ce2a27a6064',
    industry: '制造',
    scenario: '案卷AI评审',
    result: '效率提升70%'
  },
  {
    id: 'case-2',
    clientName: '岚图汽车',
    logo: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_d1c0b62a-b682-4526-9efb-5d1343d482b3.jpeg?sign=1802172482-1243795b91-0-c791808ac5c6e149e29b1ea3632c2e974d1f2523163e97e32fb02f0903431815',
    industry: '制造',
    scenario: '智能办公',
    result: '成本降低40%'
  },
  {
    id: 'case-3',
    clientName: '天士力',
    logo: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_7e09de6b-6a1c-4d19-b0c3-b415b175dfa8.jpeg?sign=1802171571-c89c21c10f-0-eef277139d7496c25bb305419b39e695ec39571cb6343f882a836aa58517d72a',
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
    <section className="py-24 px-4 sm:px-8" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container mx-auto max-w-7xl">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h2
            className="font-bold mb-2"
            style={{ color: '#333333', fontSize: '32px' }}
          >
            AI赋能各行各业 创造真实价值
          </h2>
        </div>

        {/* 轮播区域 */}
        <div className="relative w-full">
          {/* 轮播容器 */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{ width: '100%', minHeight: '400px' }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / caseStudies.length)}%)`,
                width: `${caseStudies.length * 100}%`
              }}
            >
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / caseStudies.length}%` }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg min-h-[400px]">
                    {/* 背景图片 */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 hover:scale-110"
                      style={{ backgroundImage: `url(${caseStudy.logo})` }}
                    />

                    {/* 内容叠加 */}
                    <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-between min-h-[400px]">
                      <div>
                        {/* 行业标签 */}
                        <div
                          className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                          style={{
                            backgroundColor: 'rgb(215, 0, 29)',
                            color: '#FFFFFF'
                          }}
                        >
                          {caseStudy.industry}
                        </div>

                        {/* 客户名称 */}
                        <h3
                          className="font-bold mb-3"
                          style={{ color: '#333333', fontSize: '28px', letterSpacing: '0.5px' }}
                        >
                          {caseStudy.clientName}
                        </h3>

                        {/* 合作场景 */}
                        <div className="mb-4">
                          <p
                            className="text-xs mb-2"
                            style={{ color: '#666666' }}
                          >
                            合作场景
                          </p>
                          <p
                            className="font-medium"
                            style={{ color: '#333333', fontSize: '20px', lineHeight: '1.4' }}
                          >
                            {caseStudy.scenario}
                          </p>
                        </div>
                      </div>

                      {/* 核心成果 */}
                      <div>
                        <p
                          className="text-xs mb-2"
                          style={{ color: '#666666' }}
                        >
                          核心成果
                        </p>
                        <p
                          className="font-bold"
                          style={{ color: 'rgb(215, 0, 29)', fontSize: '32px' }}
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
                  backgroundColor: index === currentIndex ? 'rgb(215, 0, 29)' : '#CCCCCC',
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
              border: '1px solid rgb(215, 0, 29)',
              color: 'rgb(215, 0, 29)',
              backgroundColor: 'transparent',
              borderRadius: '6px'
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
