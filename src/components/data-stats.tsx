'use client';

import { TrendingUp, Award, Globe, Building2, Zap, Users } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    value: '182',
    label: '《财富》中国500强',
  },
  {
    icon: <Award className="w-5 h-5" />,
    value: '43',
    label: '《财富》最受赞赏中国公司',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    value: '29',
    label: '《福布斯》中国数字经济100强',
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    value: '72',
    label: '中国民营企业500强',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    value: '26',
    label: '数实融合企业TOP100',
  },
  {
    icon: <Users className="w-5 h-5" />,
    value: '300+',
    label: '技术生态伙伴',
  },
];

export default function DataStats() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-lg border transition-all hover:shadow-md hover:scale-105"
              style={{
                borderColor: '#E0E0E0',
              }}
            >
              {/* 图标 - 很小 */}
              <div className="mb-3 opacity-60">
                <span style={{ color: '#FF3B30' }}>{stat.icon}</span>
              </div>

              {/* 数字 - 超大 */}
              <div
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none mb-2"
                style={{
                  color: '#333333',
                }}
              >
                {stat.value}
              </div>

              {/* 标签 - 很小 */}
              <div
                className="text-xs sm:text-[11px] leading-tight opacity-70"
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


