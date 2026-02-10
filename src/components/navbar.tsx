'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', href: '#' },
    { name: 'AI核心引擎', href: '#ai-engine' },
    { name: 'AI+行业', href: '#industry-solutions' },
    { name: 'AI赋能产品矩阵', href: '#product-cards' },
    { name: '技术服务与生态', href: '#ecosystem-partners' },
    { name: '客户案例', href: '#case-carousel' },
    { name: '关于神州数码', href: '#about' },
    { name: '售后服务', href: '#service' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-border'
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto max-w-7xl h-full px-4 sm:px-8">
        <div className="flex items-center justify-between h-full">
          {/* 左侧 Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F3.+%E7%A5%9E%E5%B7%9E%E6%95%B0%E7%A0%81%E5%93%81%E7%89%8C%E6%A0%87%E8%AF%86%E2%80%94%E2%80%94%E4%B8%AD%E6%96%87%EF%BC%88%E6%A8%AA%EF%BC%89.png&nonce=66d7f3ab-a620-49ae-9a21-f859e68cc0f2&project_id=7604737481589964809&sign=41a4962f44f68a4185601c35633025e349453649b9a325c157ec590390bc31ae"
              alt="神州数码"
              className="h-8 w-auto"
            />
          </div>

          {/* 中间导航项 */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-foreground hover:bg-accent rounded transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* 右侧搜索框和CTA按钮 */}
          <div className="flex items-center space-x-3">
            {/* AI关键词搜索框 */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="AI关键词搜索"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm border border-border rounded-md w-48 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                style={{ backgroundColor: '#F8F9FA' }}
              />
            </div>

            {/* CTA 按钮 */}
            <button
              className="px-5 py-2 text-sm font-medium text-white rounded hover:bg-primary/90 transition-colors duration-200"
              style={{ backgroundColor: 'rgb(215, 0, 29)' }}
            >
              预约演示
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
