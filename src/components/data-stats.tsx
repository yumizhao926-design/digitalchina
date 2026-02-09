'use client';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: '182',
    label: '《财富》中国500强',
  },
  {
    value: '43',
    label: '《财富》最受赞赏中国公司',
  },
  {
    value: '29',
    label: '《福布斯》中国数字经济100强',
  },
  {
    value: '72',
    label: '中国民营企业500强',
  },
  {
    value: '26',
    label: '数实融合企业TOP100',
  },
  {
    value: '300+',
    label: '技术生态伙伴',
  },
];

export default function DataStats() {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-3 sm:px-4"
            >
              {/* 数字 - 渐变效果 */}
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-none mb-2 tracking-wide"
                style={{
                  background: 'linear-gradient(135deg, #333333 0%, #666666 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>

              {/* 标签 */}
              <div
                className="text-[9px] sm:text-[10px] md:text-xs leading-tight opacity-80 whitespace-nowrap"
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


