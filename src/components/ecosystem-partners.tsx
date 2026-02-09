"use client";

import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface Partner {
  name: string;
  type: 'technical' | 'ecosystem';
  logo: string;
}

// 合作伙伴数据 - 使用可靠的CDN URL
const partners: Partner[] = [
  // 技术伙伴
  { name: '华为', type: 'technical', logo: 'https://logo.clearbit.com/huawei.com' },
  { name: '微软', type: 'technical', logo: 'https://logo.clearbit.com/microsoft.com' },
  { name: '百度', type: 'technical', logo: 'https://logo.clearbit.com/baidu.com' },
  { name: '阿里巴巴', type: 'technical', logo: 'https://logo.clearbit.com/alibaba.com' },
  { name: '腾讯', type: 'technical', logo: 'https://logo.clearbit.com/tencent.com' },
  { name: '字节跳动', type: 'technical', logo: 'https://logo.clearbit.com/bytedance.com' },
  { name: '科大讯飞', type: 'technical', logo: 'https://logo.clearbit.com/iflytek.com' },
  { name: '商汤科技', type: 'technical', logo: 'https://logo.clearbit.com/sensetime.com' },
  { name: '旷视科技', type: 'technical', logo: 'https://logo.clearbit.com/megvii.com' },
  { name: '云从科技', type: 'technical', logo: 'https://logo.clearbit.com/cloudwalk.com' },
  { name: '依图科技', type: 'technical', logo: 'https://logo.clearbit.com/yitu.com' },
  { name: '第四范式', type: 'technical', logo: 'https://logo.clearbit.com/4paradigm.com' },
  { name: '京东科技', type: 'technical', logo: 'https://logo.clearbit.com/jd.com' },
  { name: '网易', type: 'technical', logo: 'https://logo.clearbit.com/163.com' },
  { name: '小米', type: 'technical', logo: 'https://logo.clearbit.com/mi.com' },
  { name: '滴滴出行', type: 'technical', logo: 'https://logo.clearbit.com/didiglobal.com' },
  { name: '美团', type: 'technical', logo: 'https://logo.clearbit.com/meituan.com' },
  { name: '快手', type: 'technical', logo: 'https://logo.clearbit.com/kuaishou.com' },
  { name: 'B站', type: 'technical', logo: 'https://logo.clearbit.com/bilibili.com' },
  { name: '小红书', type: 'technical', logo: 'https://logo.clearbit.com/xiaohongshu.com' },
  { name: '网易有道', type: 'technical', logo: 'https://logo.clearbit.com/youdao.com' },
  { name: '搜狗', type: 'technical', logo: 'https://logo.clearbit.com/sogou.com' },
  { name: '搜狐', type: 'technical', logo: 'https://logo.clearbit.com/sohu.com' },
  { name: '360', type: 'technical', logo: 'https://logo.clearbit.com/360.cn' },
  { name: '金山云', type: 'technical', logo: 'https://logo.clearbit.com/ksyun.com' },
  { name: '华为云', type: 'technical', logo: 'https://logo.clearbit.com/huaweicloud.com' },
  { name: '阿里云', type: 'technical', logo: 'https://logo.clearbit.com/aliyun.com' },
  { name: '腾讯云', type: 'technical', logo: 'https://logo.clearbit.com/tencentcloud.com' },
  { name: '百度智能云', type: 'technical', logo: 'https://logo.clearbit.com/bce.baidu.com' },
  { name: '字节云', type: 'technical', logo: 'https://logo.clearbit.com/volcengine.com' },
  { name: '火山引擎', type: 'technical', logo: 'https://logo.clearbit.com/volcengine.com' },
  { name: '阿里达摩院', type: 'technical', logo: 'https://logo.clearbit.com/damo.alibaba.com' },
  { name: '腾讯AI Lab', type: 'technical', logo: 'https://logo.clearbit.com/ai.tencent.com' },
  { name: '百度研究院', type: 'technical', logo: 'https://logo.clearbit.com/research.baidu.com' },
  
  // 生态共建伙伴
  { name: '德勤中国', type: 'ecosystem', logo: 'https://logo.clearbit.com/deloitte.com' },
  { name: '普华永道', type: 'ecosystem', logo: 'https://logo.clearbit.com/pwc.com' },
  { name: '毕马威', type: 'ecosystem', logo: 'https://logo.clearbit.com/kpmg.com' },
  { name: '安永', type: 'ecosystem', logo: 'https://logo.clearbit.com/ey.com' },
  { name: '中国信通院', type: 'ecosystem', logo: 'https://logo.clearbit.com/caict.ac.cn' },
  { name: '中国电子技术标准化研究院', type: 'ecosystem', logo: 'https://logo.clearbit.com/cesi.cn' },
  { name: '中国工业互联网研究院', type: 'ecosystem', logo: 'https://logo.clearbit.com/aii.ac.cn' },
  { name: '中国信息通信研究院', type: 'ecosystem', logo: 'https://logo.clearbit.com/caict.ac.cn' },
  { name: '中国软件评测中心', type: 'ecosystem', logo: 'https://logo.clearbit.com/cstc.org.cn' },
  { name: '国家工业信息安全发展研究中心', type: 'ecosystem', logo: 'https://logo.clearbit.com/cict.org.cn' },
  { name: '中国电子信息产业发展研究院', type: 'ecosystem', logo: 'https://logo.clearbit.com/ccidgroup.com' },
  { name: '中国电子学会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cie-info.org.cn' },
  { name: '中国计算机学会', type: 'ecosystem', logo: 'https://logo.clearbit.com/ccf.org.cn' },
  { name: '中国人工智能学会', type: 'ecosystem', logo: 'https://logo.clearbit.com/caai.cn' },
  { name: '中国自动化学会', type: 'ecosystem', logo: 'https://logo.clearbit.com/caa.org.cn' },
  { name: '中国图象图形学学会', type: 'ecosystem', logo: 'https://logo.clearbit.com/sigchina.org.cn' },
  { name: '中国网络空间安全协会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cybersac.cn' },
  { name: '中国互联网协会', type: 'ecosystem', logo: 'https://logo.clearbit.com/isc.org.cn' },
  { name: '中国软件行业协会', type: 'ecosystem', logo: 'https://logo.clearbit.com/sia.org.cn' },
  { name: '中国电子信息行业联合会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cieia.org.cn' },
  { name: '中国工业互联网产业联盟', type: 'ecosystem', logo: 'https://logo.clearbit.com/aii-alliance.org' },
  { name: '中国通信标准化协会', type: 'ecosystem', logo: 'https://logo.clearbit.com/ccsa.org.cn' },
  { name: '中国信息协会', type: 'ecosystem', logo: 'https://logo.clearbit.com/iiacn.com' },
  { name: '中国互联网发展基金会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cidf.org.cn' },
  { name: '中国网络社会组织联合会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cnf.org.cn' },
  { name: '中国人工智能产业发展联盟', type: 'ecosystem', logo: 'https://logo.clearbit.com/aii-alliance.org' },
  { name: '中国数字经济百人会', type: 'ecosystem', logo: 'https://logo.clearbit.com/dec100.com' },
  { name: '中国新一代人工智能发展战略研究院', type: 'ecosystem', logo: 'https://logo.clearbit.com/nai.tju.edu.cn' },
  { name: '中国移动通信联合会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cmca.org.cn' },
  { name: '中国电子商会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cecc.org.cn' },
  { name: '中国工业经济联合会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cfie.org.cn' },
  { name: '中国企业联合会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cec.gov.cn' },
  { name: '中国中小企业协会', type: 'ecosystem', logo: 'https://logo.clearbit.com/casme.org.cn' },
  { name: '中国企业家协会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cea.org.cn' },
  { name: '中国质量管理协会', type: 'ecosystem', logo: 'https://logo.clearbit.com/caq.org.cn' },
  { name: '中国标准化协会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cas.org.cn' },
  { name: '中国物流与采购联合会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cflp.org.cn' },
  { name: '中国对外经济贸易统计学会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cftes.org.cn' },
  { name: '中国国际贸易学会', type: 'ecosystem', logo: 'https://logo.clearbit.com/cits.org.cn' },
  { name: '中国国际商会', type: 'ecosystem', logo: 'https://logo.clearbit.com/ccpicc.org.cn' },
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
              onLoad={(e) => {
                // 图片加载成功时隐藏文字
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const textDiv = parent.querySelector('div');
                  if (textDiv) textDiv.style.display = 'none';
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
          </div>
        </div>
      </div>
    </section>
  );
}
