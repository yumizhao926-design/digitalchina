"use client";

import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface Partner {
  name: string;
  type: 'technical' | 'ecosystem';
  logo: string;
}

// 合作伙伴数据
const partners: Partner[] = [
  // 技术伙伴
  { name: '华为', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Huawei_Logo.svg' },
  { name: '微软', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: '百度', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Baidu_logo.svg' },
  { name: '阿里巴巴', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Alibaba_logo.svg' },
  { name: '腾讯', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Tencent_logo.svg' },
  { name: '字节跳动', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/ByteDance_Logo_2021.svg' },
  { name: '科大讯飞', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Iflytek_logo.svg' },
  { name: '商汤科技', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/SenseTime_logo.svg' },
  { name: '旷视科技', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Megvii_logo.svg' },
  { name: '云从科技', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/CloudWalk_logo.svg' },
  { name: '依图科技', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Yitu_Technology_logo.svg' },
  { name: '第四范式', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/4Paradigm_logo.svg' },
  { name: '京东科技', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/JD.com_logo.svg' },
  { name: '网易', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/86/NetEase_logo.svg' },
  { name: '小米', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg' },
  { name: '滴滴出行', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Didi_logo.svg' },
  { name: '美团', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Meituan_logo.svg' },
  { name: '快手', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Kuaishou_logo.svg' },
  { name: 'B站', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Bilibili_logo.svg' },
  { name: '小红书', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Xiaohongshu_logo.svg' },
  { name: '网易有道', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Youdao_logo.svg' },
  { name: '搜狗', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Sogou_logo.svg' },
  { name: '搜狐', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Sohu_logo.svg' },
  { name: '360', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/360_logo.svg' },
  { name: '金山云', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Kingsoft_Cloud_logo.svg' },
  { name: '华为云', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Huawei_Cloud_logo.svg' },
  { name: '阿里云', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Alibaba_Cloud_logo.svg' },
  { name: '腾讯云', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Tencent_Cloud_logo.svg' },
  { name: '百度智能云', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Baidu_AI_Cloud_logo.svg' },
  { name: '字节云', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Volcengine_logo.svg' },
  { name: '火山引擎', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Volcano_Engine_logo.svg' },
  { name: '阿里达摩院', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Damo_Academy_logo.svg' },
  { name: '腾讯AI Lab', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tencent_AI_Lab_logo.svg' },
  { name: '百度研究院', type: 'technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Baidu_Research_logo.svg' },
  
  // 生态共建伙伴
  { name: '德勤中国', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Deloitte_logo.svg' },
  { name: '普华永道', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/PwC_logo.svg' },
  { name: '毕马威', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/KPMG_logo.svg' },
  { name: '安永', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/60/EY_logo.svg' },
  { name: '中国信通院', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/42/CAICT_logo.svg' },
  { name: '中国电子技术标准化研究院', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/CESI_logo.svg' },
  { name: '中国工业互联网研究院', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/AII_logo.svg' },
  { name: '中国信息通信研究院', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/CAICT_logo_2.svg' },
  { name: '中国软件评测中心', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/CSTC_logo.svg' },
  { name: '国家工业信息安全发展研究中心', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/CICT_logo.svg' },
  { name: '中国电子信息产业发展研究院', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/CCID_logo.svg' },
  { name: '中国电子学会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/CIE_logo.svg' },
  { name: '中国计算机学会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/CCF_logo.svg' },
  { name: '中国人工智能学会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/CAAI_logo.svg' },
  { name: '中国自动化学会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/CAA_logo.svg' },
  { name: '中国图象图形学学会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/CSIG_logo.svg' },
  { name: '中国网络空间安全协会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/CSAC_logo.svg' },
  { name: '中国互联网协会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/ISC_logo.svg' },
  { name: '中国软件行业协会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/CSIA_logo.svg' },
  { name: '中国电子信息行业联合会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/CEIA_logo.svg' },
  { name: '中国工业互联网产业联盟', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/AII_Logo_2.svg' },
  { name: '中国通信标准化协会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/CCSA_logo.svg' },
  { name: '中国信息协会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/IIA_logo.svg' },
  { name: '中国互联网发展基金会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/77/CIDF_logo.svg' },
  { name: '中国网络社会组织联合会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/CNF_logo.svg' },
  { name: '中国人工智能产业发展联盟', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/AIIA_logo.svg' },
  { name: '中国数字经济百人会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/DEC100_logo.svg' },
  { name: '中国新一代人工智能发展战略研究院', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/NAI_logo.svg' },
  { name: '中国移动通信联合会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/CMCA_logo.svg' },
  { name: '中国电子商会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/CECC_logo.svg' },
  { name: '中国工业经济联合会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/CFIE_logo.svg' },
  { name: '中国企业联合会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/CEC_logo.svg' },
  { name: '中国中小企业协会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/CASME_logo.svg' },
  { name: '中国企业家协会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/CEA_logo.svg' },
  { name: '中国质量管理协会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/CAQ_logo.svg' },
  { name: '中国标准化协会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/CAS_logo.svg' },
  { name: '中国物流与采购联合会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/CFLP_logo.svg' },
  { name: '中国对外经济贸易统计学会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/CFTES_logo.svg' },
  { name: '中国国际贸易学会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/CITS_logo.svg' },
  { name: '中国国际商会', type: 'ecosystem', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/CCOIC_logo.svg' },
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
              filter: 'grayscale(100%)',
              width: '160px',
              height: '80px',
            }}
            title={partner.name}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain px-3"
              onError={(e) => {
                // 图片加载失败时显示文字
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const textDiv = parent.querySelector('div');
                  if (textDiv) textDiv.style.display = 'block';
                }
              }}
            />
            <div
              className="text-center truncate w-full px-2"
              style={{ color: '#666666', fontSize: '12px', fontWeight: 500, display: 'none' }}
            >
              {partner.name}
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

            {/* 底部信息 */}
            <div className="flex items-center justify-between mt-6">
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
                <span>{isPaused ? '滚动暂停' : '自动滚动中'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
