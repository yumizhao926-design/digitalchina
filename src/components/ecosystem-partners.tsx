"use client";

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Partner {
  name: string;
  type: 'technical' | 'ecosystem';
}

// 生成100个合作伙伴列表
const generatePartners = (): Partner[] => {
  const technicalPartners = [
    '华为', '智谱AI', 'DeepSeek', '微软', '百度', '阿里巴巴', '腾讯', '字节跳动',
    '科大讯飞', '商汤科技', '旷视科技', '依图科技', '云从科技', '第四范式', '明略科技',
    '百分点', '百分点智能', '百分点数据', '百分点技术', '百分点算法',
    '京东科技', '网易', '小米', '滴滴出行', '美团', '快手', 'B站', '小红书',
    '网易有道', '搜狗', '搜狐', '360', '金山云', '华为云', '阿里云', '腾讯云',
    '百度智能云', '字节云', '火山引擎', '阿里达摩院', '腾讯AI Lab', '百度研究院',
  ];

  const ecosystemPartners = [
    '德勤中国', '中国信通院', '普华永道', '毕马威', '安永', '中国电子技术标准化研究院',
    '中国工业互联网研究院', '中国信息通信研究院', '中国软件评测中心', '国家工业信息安全发展研究中心',
    '中国电子信息产业发展研究院', '中国电子学会', '中国计算机学会', '中国人工智能学会',
    '中国自动化学会', '中国图象图形学学会', '中国网络空间安全协会', '中国互联网协会',
    '中国软件行业协会', '中国电子信息行业联合会', '中国工业互联网产业联盟',
    '中国通信标准化协会', '中国信息协会', '中国互联网发展基金会', '中国网络社会组织联合会',
    '中国人工智能产业发展联盟', '中国数字经济百人会', '中国新一代人工智能发展战略研究院',
    '中国移动通信联合会', '中国电子商会', '中国工业经济联合会', '中国企业联合会',
    '中国中小企业协会', '中国企业家协会', '中国质量管理协会', '中国标准化协会',
    '中国物流与采购联合会', '中国对外经济贸易统计学会', '中国国际贸易学会', '中国国际商会',
  ];

  const partners: Partner[] = [];

  // 添加技术伙伴
  technicalPartners.forEach((name) => {
    partners.push({ name, type: 'technical' });
  });

  // 添加生态共建伙伴
  ecosystemPartners.forEach((name) => {
    partners.push({ name, type: 'ecosystem' });
  });

  // 如果不够100个，循环添加
  while (partners.length < 100) {
    const randomIndex = Math.floor(Math.random() * technicalPartners.length);
    partners.push({ name: technicalPartners[randomIndex], type: 'technical' });
  }

  return partners.slice(0, 100);
};

export default function EcosystemPartners() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const partners = generatePartners();

  // 自动滚动
  useEffect(() => {
    if (!scrollContainerRef.current || isPaused) return;

    const scrollContainer = scrollContainerRef.current;
    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // 滚动速度

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;

        // 当滚动到一定位置时，重置到开始位置（无缝循环）
        const scrollWidth = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= scrollWidth) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

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
          <div className="lg:col-span-7">
            {/* 滚动容器 */}
            <div
              ref={scrollContainerRef}
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* 滚动内容 - 使用两倍数据实现无缝循环 */}
              <div
                className="flex gap-4"
                style={{ width: 'fit-content' }}
              >
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="relative p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 flex-shrink-0"
                    style={{
                      backgroundColor: '#FAFAFA',
                      borderRadius: '8px',
                      border: partner.type === 'technical' ? '1px solid #E60012' : 'none',
                      filter: 'grayscale(100%)',
                      width: '140px',
                      height: '80px',
                    }}
                    title={partner.name}
                  >
                    {/* Logo占位 */}
                    <div
                      className="text-center truncate w-full px-2"
                      style={{ color: '#666666', fontSize: '12px', fontWeight: 500 }}
                    >
                      {partner.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 滚动提示 */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-8 text-xs" style={{ color: '#999999' }}>
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      border: '1px solid #E60012',
                      backgroundColor: '#FAFAFA'
                    }}
                  />
                  <span>技术伙伴</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      border: '1px solid #E5E5E5',
                      backgroundColor: '#FAFAFA'
                    }}
                  />
                  <span>生态共建伙伴</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs" style={{ color: '#999999' }}>
                <span>共 {partners.length} 家合作伙伴</span>
                <span>•</span>
                <span>自动滚动中</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
