'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', href: '#' },
    { name: '智能平台', href: '#' },
    { name: '智算底座', href: '#' },
    { name: '行业方案', href: '#' },
    { name: '标杆案例', href: '#' },
    { name: '关于我们', href: '#' },
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
            <span className="text-base font-semibold text-foreground">
              神州数码
            </span>
          </div>

          {/* 中间导航项 */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-foreground hover:bg-accent rounded transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* 右侧搜索和CTA按钮 */}
          <div className="flex items-center space-x-4">
            {/* 搜索图标 */}
            <button className="flex items-center justify-center w-8 h-8 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* CTA 按钮 */}
            <button
              className="px-5 py-2 text-sm font-medium text-white rounded hover:bg-primary/90 transition-colors duration-200"
              style={{ backgroundColor: '#FF3B30' }}
            >
              预约演示
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
