"use client";

import { ArrowRight } from 'lucide-react';

interface Partner {
  name: string;
  type: 'technical' | 'ecosystem';
  logo: string;
}

const partners: Partner[] = [
  { name: '华为', type: 'technical', logo: '/logos/huawei.svg' },
  { name: '智谱AI', type: 'technical', logo: '/logos/zhipu.svg' },
  { name: 'DeepSeek', type: 'technical', logo: '/logos/deepseek.svg' },
  { name: '德勤中国', type: 'ecosystem', logo: '/logos/deloitte.svg' },
  { name: '中国信通院', type: 'ecosystem', logo: '/logos/caict.svg' },
  { name: '微软', type: 'technical', logo: '/logos/microsoft.svg' },
  { name: '阿里云', type: 'ecosystem', logo: '/logos/aliyun.svg' },
  { name: '腾讯云', type: 'ecosystem', logo: '/logos/tencent.svg' },
];

export default function EcosystemPartners() {
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="relative p-6 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#FAFAFA',
                    borderRadius: '8px',
                    border: partner.type === 'technical' ? '1px solid #E60012' : 'none',
                    filter: 'grayscale(100%)',
                  }}
                  title={partner.name}
                >
                  {/* Logo占位 - 实际项目中替换为真实Logo */}
                  <div
                    className="text-center"
                    style={{ color: '#666666', fontSize: '14px', fontWeight: 500 }}
                  >
                    {partner.name}
                  </div>

                  {/* 类型标注（可选） */}
                  {/* <div
                    className="absolute -top-2 -right-2 px-2 py-0.5 text-xs"
                    style={{
                      backgroundColor: partner.type === 'technical' ? '#E60012' : '#999999',
                      color: '#FFFFFF',
                      borderRadius: '4px'
                    }}
                  >
                    {partner.type === 'technical' ? '技术' : '生态'}
                  </div> */}
                </div>
              ))}
            </div>

            {/* 分类标注 */}
            <div className="flex gap-8 mt-8 text-xs" style={{ color: '#999999' }}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
