"use client";

import { ArrowRight } from 'lucide-react';

interface NewsItem {
  title: string;
  date: string;
}

interface EventItem {
  name: string;
  status: string;
}

const news: NewsItem[] = [
  {
    title: '《AI for Process蓝皮书》正式发布',
    date: '2024-01-15'
  },
  {
    title: '神州问学入选信通院高质量数字化转型全景图',
    date: '2024-01-10'
  },
  {
    title: '神州鲲泰新品亮相世界人工智能大会',
    date: '2023-12-20'
  }
];

const events: EventItem[] = [
  {
    name: 'AI for Process线上研讨会',
    status: '回放已上线'
  },
  {
    name: '企业流程数智化转型沙龙（上海站）',
    status: '即将开启'
  }
];

export default function NewsUpdates() {
  return (
    <section className="py-24 px-4 sm:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto max-w-7xl">
        {/* 标题 */}
        <h2
          className="font-bold mb-12 text-center"
          style={{ color: '#333333', fontSize: '32px' }}
        >
          资讯动态
        </h2>

        {/* 左右并列布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* 左栏：企业资讯 */}
          <div>
            <h3
              className="mb-6 pb-3"
              style={{
                color: '#333333',
                fontSize: '20px',
                fontWeight: 600,
                borderBottom: '2px solid rgb(215, 0, 29)'
              }}
            >
              企业资讯
            </h3>
            <ul className="space-y-6 mb-8">
              {news.map((item, index) => (
                <li key={index} className="group cursor-pointer">
                  <div className="flex justify-between items-start gap-4">
                    <p
                      className="group-hover:text-red-600 transition-colors"
                      style={{ color: '#333333', fontSize: '16px', lineHeight: '1.6' }}
                    >
                      {item.title}
                    </p>
                    <span
                      style={{ color: '#999999', fontSize: '14px', flexShrink: 0 }}
                    >
                      {item.date}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* 企业资讯CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 group"
              style={{ color: 'rgb(215, 0, 29)', fontSize: '14px' }}
            >
              了解更多
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* 右栏：行业活动 */}
          <div>
            <h3
              className="mb-6 pb-3"
              style={{
                color: '#333333',
                fontSize: '20px',
                fontWeight: 600,
                borderBottom: '2px solid rgb(215, 0, 29)'
              }}
            >
              行业活动
            </h3>
            <ul className="space-y-6 mb-8">
              {events.map((item, index) => (
                <li key={index} className="group cursor-pointer">
                  <div className="flex justify-between items-start gap-4">
                    <p
                      className="group-hover:text-red-600 transition-colors"
                      style={{ color: '#333333', fontSize: '16px', lineHeight: '1.6' }}
                    >
                      {item.name}
                    </p>
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: item.status === '即将开启' ? '#FFF0F0' : '#F5F5F5',
                        color: item.status === '即将开启' ? 'rgb(215, 0, 29)' : '#666666',
                        fontSize: '12px',
                        flexShrink: 0
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* 行业活动CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 group"
              style={{ color: 'rgb(215, 0, 29)', fontSize: '14px' }}
            >
              了解更多
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
