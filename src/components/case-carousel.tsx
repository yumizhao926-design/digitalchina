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
    logo: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_a2f81d2c-1ea2-4094-8ce4-2fc89929c576.jpeg?sign=1802171540-21f5e3cb07-0-f0fe53e935acf2716d2228629d04fe2074bbb8f0b4565d6e5ccd6dc3f4a41b66',
    industry: '医疗',
    scenario: '案卷AI评审',
    result: '效率提升70%'
  },
  {
    id: 'case-2',
    clientName: '岚图汽车',
    logo: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_e1f5fa63-c6a8-4a01-a765-0fd584af0635.jpeg?sign=1802171835-1f0b6535fe-0-817b2b9cfa691d35786422c52941bff272c88d2dad51bbd16c003906dc9112f6',
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
                            backgroundColor: '#E60012',
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
                          style={{ color: '#E60012', fontSize: '32px' }}
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
