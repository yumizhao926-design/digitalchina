'use client';

import { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 鼠标悬停时显示下拉菜单
  const handleMouseEnter = (itemName: string) => {
    if (itemName !== '首页') {
      setActiveDropdown(itemName);
    }
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const navElement = target.closest('nav');
      if (!navElement) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  const navItems: NavItem[] = [
    { name: '首页', href: '#' },
    {
      name: 'AI核心引擎',
      href: '#ai-engine',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI算力底座', href: '#infrastructure' },
        { name: 'Agent中台', href: '#agent-platform' },
      ],
    },
    {
      name: 'AI+行业',
      href: '#industry-solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: '政务', href: '#industry-government' },
        { name: '制造', href: '#industry-manufacturing' },
        { name: '金融', href: '#industry-finance' },
        { name: '医疗', href: '#industry-healthcare' },
        { name: '烟草', href: '#industry-tobacco' },
        { name: '教育', href: '#industry-education' },
        { name: '能源', href: '#industry-energy' },
        { name: '交通', href: '#industry-transport' },
      ],
    },
    {
      name: 'AI赋能产品矩阵',
      href: '#product-cards',
      hasDropdown: true,
      dropdownItems: [
        { name: '基础层', href: '#layer-infrastructure' },
        { name: '模型层', href: '#layer-model' },
        { name: '应用层', href: '#layer-application' },
      ],
    },
    {
      name: '技术服务与生态',
      href: '#ecosystem-partners',
      hasDropdown: true,
      dropdownItems: [
        { name: '技术服务', href: '#technical-service' },
        { name: '生态伙伴', href: '#ecosystem-partners' },
      ],
    },
    {
      name: '客户案例',
      href: '#case-carousel',
      hasDropdown: true,
      dropdownItems: [
        { name: '黄冈烟草', href: '#case-huanggang' },
        { name: '岚图汽车', href: '#case-landvoy' },
        { name: '天士力', href: '#case-tasly' },
      ],
    },
    {
      name: '关于神州数码',
      href: '#about',
      hasDropdown: true,
      dropdownItems: [
        { name: '公司简介', href: '#about-intro' },
        { name: '发展历程', href: '#about-history' },
        { name: '企业文化', href: '#about-culture' },
        { name: '联系我们', href: '#about-contact' },
      ],
    },
    {
      name: '售后服务',
      href: '#service',
      hasDropdown: true,
      dropdownItems: [
        { name: '服务支持', href: '#service-support' },
        { name: '常见问题', href: '#service-faq' },
        { name: '联系客服', href: '#service-contact' },
      ],
    },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white shadow-sm'
        }
      `}
    >
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo 和名称 */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 whitespace-nowrap">神州数码 AI 中心</span>
          </div>

          {/* 导航菜单 */}
          <div className="hidden xl:flex items-center space-x-0.5 overflow-hidden">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative flex-shrink-0"
                onMouseEnter={() => handleMouseEnter(item.name)}
              >
                <a
                  href={item.href}
                  className={`
                    flex items-center px-2 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap
                    ${activeDropdown === item.name
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }
                  `}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform flex-shrink-0 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </a>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  >
                    <div className="py-2">
                      {item.dropdownItems?.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 搜索框 */}
          <div className="hidden xl:flex items-center space-x-3 flex-shrink-0">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索..."
                className="w-48 pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <button className="px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              登录
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
