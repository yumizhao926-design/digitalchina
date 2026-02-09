"use client";

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DemoBookingDialog } from '@/components/demo-booking-dialog';

export default function FinalCTA() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section
      className="py-24 sm:py-32 px-4 sm:px-8"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="container mx-auto max-w-7xl text-center">
        {/* 主标题 */}
        <h1
          className="font-bold mb-6"
          style={{
            color: '#333333',
            fontSize: '32px',
            lineHeight: '1.4'
          }}
        >
          开启企业流程数智化转型之旅
        </h1>

        {/* 副标题 */}
        <p
          className="mb-12 max-w-3xl mx-auto"
          style={{
            color: '#666666',
            fontSize: '18px',
            lineHeight: '1.6'
          }}
        >
          基于AI for Process理念，为您定制全栈数智化解决方案
        </p>

        {/* 核心主CTA按钮 */}
        <button
          onClick={() => setIsDialogOpen(true)}
          className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold transition-all duration-300 hover:gap-3 hover:shadow-2xl"
          style={{
            backgroundColor: 'rgb(215, 0, 29)',
            color: '#FFFFFF',
            borderRadius: '9999px',
            boxShadow: '0 4px 20px rgba(230, 0, 18, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(230, 0, 18, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(230, 0, 18, 0.3)';
          }}
        >
          预约定制演示
          <ArrowRight size={20} />
        </button>
      </div>

      {/* 预约演示对话框 */}
      <DemoBookingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
}
