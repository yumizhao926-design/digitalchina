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
    logo: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_ed4caed5-53be-40e5-82d8-27d10438e98a.jpeg?sign=1802170314-bf92e0c9b2-0-b7fe4d29f7f79e29c56ba7874f2c14f433c0dd329c0ebcd01de14fb298501a42',
    industry: '政务',
    scenario: '案卷AI评审',
    result: '效率提升70%'
  },
  {
    id: 'case-2',
    clientName: '岚图汽车',
    logo: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_cf0d650f-46dc-4a47-9135-0f11f83168b9.jpeg?sign=1802170331-5e3282c4ff-0-a6ed577a29682e30abc6481bd4c32997caf7c17c4891cdb6cfbdbee77fb68d32',
    industry: '制造',
    scenario: '智能办公',
    result: '成本降低40%'
  },
  {
    id: 'case-3',
    clientName: '天士力',
    logo: 'https://coze-coding-project.tos.coze.site/coze_storage_7604743735447978010/image/generate_image_ce137bef-a8d9-4109-bd11-9c99ef048dce.jpeg?sign=1802170348-924319581e-0-0032c23fd91c1c41b08678dc9565adc021b4f40397ccfd94b994843ff9596515',
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
                  <div className="relative h-full overflow-hidden rounded-2xl shadow-lg">
                    {/* 背景图片 */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 hover:scale-110"
                      style={{ backgroundImage: `url(${caseStudy.logo})` }}
                    />

                    {/* 渐变遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

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
                          style={{ color: '#FFFFFF', fontSize: '28px', letterSpacing: '0.5px' }}
                        >
                          {caseStudy.clientName}
                        </h3>

                        {/* 合作场景 */}
                        <div className="mb-4">
                          <p
                            className="text-xs mb-2"
                            style={{ color: '#FFFFFF', opacity: 0.8 }}
                          >
                            合作场景
                          </p>
                          <p
                            className="font-medium"
                            style={{ color: '#FFFFFF', fontSize: '20px', lineHeight: '1.4' }}
                          >
                            {caseStudy.scenario}
                          </p>
                        </div>
                      </div>

                      {/* 核心成果 */}
                      <div>
                        <p
                          className="text-xs mb-2"
                          style={{ color: '#FFFFFF', opacity: 0.8 }}
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
