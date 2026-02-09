"use client";

import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface Partner {
  name: string;
  type: 'technical' | 'ecosystem';
}

// 合作伙伴数据
const partners: Partner[] = [
  // 技术伙伴
  { name: '华为', type: 'technical' },
  { name: '微软', type: 'technical' },
  { name: '百度', type: 'technical' },
  { name: '阿里巴巴', type: 'technical' },
  { name: '腾讯', type: 'technical' },
  { name: '字节跳动', type: 'technical' },
  { name: '科大讯飞', type: 'technical' },
  { name: '商汤科技', type: 'technical' },
  { name: '旷视科技', type: 'technical' },
  { name: '云从科技', type: 'technical' },
  { name: '依图科技', type: 'technical' },
  { name: '第四范式', type: 'technical' },
  { name: '京东科技', type: 'technical' },
  { name: '网易', type: 'technical' },
  { name: '小米', type: 'technical' },
  { name: '滴滴出行', type: 'technical' },
  { name: '美团', type: 'technical' },
  { name: '快手', type: 'technical' },
  { name: 'B站', type: 'technical' },
  { name: '小红书', type: 'technical' },
  { name: '网易有道', type: 'technical' },
  { name: '搜狗', type: 'technical' },
  { name: '搜狐', type: 'technical' },
  { name: '360', type: 'technical' },
  { name: '金山云', type: 'technical' },
  { name: '华为云', type: 'technical' },
  { name: '阿里云', type: 'technical' },
  { name: '腾讯云', type: 'technical' },
  { name: '百度智能云', type: 'technical' },
  { name: '字节云', type: 'technical' },
  { name: '火山引擎', type: 'technical' },
  { name: '阿里达摩院', type: 'technical' },
  { name: '腾讯AI Lab', type: 'technical' },
  { name: '百度研究院', type: 'technical' },
  
  // 生态共建伙伴
  { name: '德勤中国', type: 'ecosystem' },
  { name: '普华永道', type: 'ecosystem' },
  { name: '毕马威', type: 'ecosystem' },
  { name: '安永', type: 'ecosystem' },
  { name: '中国信通院', type: 'ecosystem' },
  { name: '中国电子技术标准化研究院', type: 'ecosystem' },
  { name: '中国工业互联网研究院', type: 'ecosystem' },
  { name: '中国信息通信研究院', type: 'ecosystem' },
  { name: '中国软件评测中心', type: 'ecosystem' },
  { name: '国家工业信息安全发展研究中心', type: 'ecosystem' },
  { name: '中国电子信息产业发展研究院', type: 'ecosystem' },
  { name: '中国电子学会', type: 'ecosystem' },
  { name: '中国计算机学会', type: 'ecosystem' },
  { name: '中国人工智能学会', type: 'ecosystem' },
  { name: '中国自动化学会', type: 'ecosystem' },
  { name: '中国图象图形学学会', type: 'ecosystem' },
  { name: '中国网络空间安全协会', type: 'ecosystem' },
  { name: '中国互联网协会', type: 'ecosystem' },
  { name: '中国软件行业协会', type: 'ecosystem' },
  { name: '中国电子信息行业联合会', type: 'ecosystem' },
  { name: '中国工业互联网产业联盟', type: 'ecosystem' },
  { name: '中国通信标准化协会', type: 'ecosystem' },
  { name: '中国信息协会', type: 'ecosystem' },
  { name: '中国互联网发展基金会', type: 'ecosystem' },
  { name: '中国网络社会组织联合会', type: 'ecosystem' },
  { name: '中国人工智能产业发展联盟', type: 'ecosystem' },
  { name: '中国数字经济百人会', type: 'ecosystem' },
  { name: '中国新一代人工智能发展战略研究院', type: 'ecosystem' },
  { name: '中国移动通信联合会', type: 'ecosystem' },
  { name: '中国电子商会', type: 'ecosystem' },
  { name: '中国工业经济联合会', type: 'ecosystem' },
  { name: '中国企业联合会', type: 'ecosystem' },
  { name: '中国中小企业协会', type: 'ecosystem' },
  { name: '中国企业家协会', type: 'ecosystem' },
  { name: '中国质量管理协会', type: 'ecosystem' },
  { name: '中国标准化协会', type: 'ecosystem' },
  { name: '中国物流与采购联合会', type: 'ecosystem' },
  { name: '中国对外经济贸易统计学会', type: 'ecosystem' },
  { name: '中国国际贸易学会', type: 'ecosystem' },
  { name: '中国国际商会', type: 'ecosystem' },
];

// 将合作伙伴分成三行
const rows = [
  partners.slice(0, 35),  // 第一行
  partners.slice(35, 70), // 第二行
  partners.slice(70, 100), // 第三行
];

interface LogoRowProps {
  partners: Partner[];
  direction: 'left' | 'right';
  speed?: number;
  isPaused: boolean;
}

function LogoRow({ partners, direction, speed = 0.5, isPaused }: LogoRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainerRef.current || isPaused) return;

    const scrollContainer = scrollContainerRef.current;
    let animationFrameId: number;
    let scrollPosition = 0;

    const animate = () => {
      if (!isPaused) {
        if (direction === 'left') {
          scrollPosition += speed;
          const scrollWidth = scrollContainer.scrollWidth / 2;
          if (scrollPosition >= scrollWidth) {
            scrollPosition = 0;
          }
        } else {
          scrollPosition -= speed;
          if (scrollPosition <= 0) {
            const scrollWidth = scrollContainer.scrollWidth / 2;
            scrollPosition = scrollWidth;
          }
        }

        scrollContainer.scrollLeft = scrollPosition;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [direction, speed, isPaused]);

  return (
    <div className="overflow-hidden mb-4" style={{ height: '100px' }}>
      <div
        ref={scrollContainerRef}
        className="flex gap-3"
        style={{ width: 'fit-content' }}
      >
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="relative flex items-center justify-center transition-all duration-300 hover:scale-105 flex-shrink-0"
            style={{
              backgroundColor: '#FAFAFA',
              borderRadius: '8px',
              border: partner.type === 'technical' ? '1px solid #E60012' : 'none',
              width: '160px',
              height: '80px',
            }}
            title={partner.name}
          >
            {/* 使用SVG文字作为logo */}
            <div className="text-center px-3 w-full">
              <p
                style={{
                  color: '#666666',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '1.3',
                  wordBreak: 'break-word',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                {partner.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EcosystemPartners() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-24 px-4 sm:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto max-w-7xl">
        {/* 标题区域 */}
        <h2
          className="font-bold mb-16 text-center"
          style={{ color: '#333333', fontSize: '32px' }}
        >
          开放生态 | 共筑AI for Process产业未来
        </h2>

        {/* 左右布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
          {/* 左侧文字区 - 30% */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <p
              className="mb-8 leading-relaxed"
              style={{ color: '#666666', fontSize: '16px' }}
            >
              整合全球技术与行业资源，打造「平台+底座+方案+服务」全栈生态体系，与伙伴共建、共生、共赢。
            </p>

            {/* 生态合作申请按钮 */}
            <button
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 hover:gap-3 w-fit"
              style={{
                border: '1px solid #E60012',
                color: '#E60012',
                backgroundColor: 'transparent',
                borderRadius: '9999px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E60012';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#E60012';
              }}
            >
              生态合作申请
              <ArrowRight size={16} />
            </button>
          </div>

          {/* 右侧LOGO墙 - 70% */}
          <div
            className="lg:col-span-7"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* 第一行 - 向左滚动 */}
            <LogoRow
              partners={rows[0]}
              direction="left"
              speed={0.5}
              isPaused={isPaused}
            />

            {/* 第二行 - 向右滚动 */}
            <LogoRow
              partners={rows[1]}
              direction="right"
              speed={0.6}
              isPaused={isPaused}
            />

            {/* 第三行 - 向左滚动 */}
            <LogoRow
              partners={rows[2]}
              direction="left"
              speed={0.4}
              isPaused={isPaused}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
