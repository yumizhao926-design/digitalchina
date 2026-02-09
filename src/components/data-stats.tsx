'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Award, Globe, Building2, Zap, Users } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: '182',
    label: '《财富》中国500强',
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: '43',
    label: '《财富》最受赞赏中国公司',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: '29',
    label: '《福布斯》中国数字经济100强',
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    value: '72',
    label: '中国民营企业500强',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: '26',
    label: '数实融合企业TOP100',
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: '300+',
    label: '技术生态伙伴',
  },
];

export default function DataStats() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 min-w-[120px] md:min-w-[140px]"
            >
              {/* 图标 */}
              <div
                className="flex items-center justify-center"
              >
                <span style={{ color: '#FF3B30' }}>{stat.icon}</span>
              </div>

              {/* 数字 */}
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-none"
                style={{
                  color: '#333333',
                }}
              >
                {stat.value}
              </div>

              {/* 标签 */}
              <div
                className="text-xs sm:text-sm leading-relaxed max-w-[150px] md:max-w-[180px]"
                style={{
                  color: '#666666',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
