'use client';

import { TrendingUp, Award, Globe, Building2, Zap, Users } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    value: '182',
    label: '《财富》中国500强',
  },
  {
    icon: <Award className="w-7 h-7" />,
    value: '43',
    label: '《财富》最受赞赏中国公司',
  },
  {
    icon: <Globe className="w-7 h-7" />,
    value: '29',
    label: '《福布斯》中国数字经济100强',
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    value: '72',
    label: '中国民营企业500强',
  },
  {
    icon: <Zap className="w-7 h-7" />,
    value: '26',
    label: '数实融合企业TOP100',
  },
  {
    icon: <Users className="w-7 h-7" />,
    value: '300+',
    label: '技术生态伙伴',
  },
];

export default function DataStats() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 sm:p-6 rounded-lg border transition-all hover:shadow-md"
              style={{
                borderColor: '#E0E0E0',
              }}
            >
              {/* 图标 */}
              <div className="flex-shrink-0">
                <span style={{ color: '#FF3B30' }}>{stat.icon}</span>
              </div>

              {/* 内容 */}
              <div className="flex flex-col">
                {/* 数字 */}
                <div
                  className="text-3xl sm:text-4xl font-bold leading-none mb-1"
                  style={{
                    color: '#333333',
                  }}
                >
                  {stat.value}
                </div>

                {/* 标签 */}
                <div
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{
                    color: '#666666',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

