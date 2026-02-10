'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

interface DropdownItem {
  name: string;
  href: string;
  hasSubItems?: boolean;
  subItems?: { name: string; href: string }[];
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  // 表单状态
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    demand: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        { name: '生态伙伴', href: '#ecosystem-partners', hasSubItems: true, subItems: [
          { name: 'ICT合作伙伴', href: '#ecosystem-ict' },
          { name: '数字中国服务联盟', href: '#ecosystem-alliance' },
          { name: '千帆计划', href: '#ecosystem-qianfan' },
          { name: '伙伴学院', href: '#ecosystem-academy' },
        ]},
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

  const handleDropdownClick = (itemName: string) => {
    if (itemName !== '首页') {
      if (activeDropdown === itemName) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(itemName);
      }
      setActiveSubItem(null);
    }
  };

  const handleSubItemClick = (itemName: string) => {
    setActiveSubItem(activeSubItem === itemName ? null : itemName);
  };

  const handleDropdownItemClick = (e: React.MouseEvent, dropdownItemName: string) => {
    e.stopPropagation();
    setActiveDropdown(null);
    setActiveSubItem(null);
  };

  // 点击页面其他区域关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // 检查点击是否在下拉菜单容器内
      if (dropdownContainerRef.current?.contains(target)) {
        return;
      }
      // 检查点击是否在导航栏内
      if (target.closest('nav')) {
        return;
      }
      // 否则关闭下拉菜单
      setActiveDropdown(null);
      setActiveSubItem(null);
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('提交预约信息:', formData);
    alert('预约提交成功！我们会尽快联系您。');

    // 重置表单
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      demand: '',
    });
    setIsBookingDialogOpen(false);
    setIsSubmitting(false);
  };

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
          <nav className="hidden md:flex items-center space-x-1 flex-1 relative">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDropdownClick(item.name);
                }}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm text-foreground hover:bg-accent rounded transition-colors duration-200 whitespace-nowrap ${
                    activeDropdown === item.name ? 'bg-accent' : ''
                  }`}
                  onClick={(e) => {
                    if (!item.hasDropdown) return;
                    e.preventDefault();
                    e.stopPropagation();
                    handleDropdownClick(item.name);
                  }}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>

                {/* 下拉菜单 - 全屏通栏 */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div
                    ref={dropdownContainerRef}
                    className="fixed top-16 left-0 right-0 bg-white border-b border-border shadow-lg z-40"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-6">
                      <div className="grid grid-cols-4 gap-4">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <div key={dropdownItem.name} className="relative">
                            {dropdownItem.hasSubItems ? (
                              <div className="relative">
                                <div
                                  className={`flex items-center gap-2 text-sm transition-colors whitespace-nowrap cursor-pointer ${
                                    activeSubItem === dropdownItem.name
                                      ? 'text-red-600'
                                      : 'text-gray-600 hover:text-red-600'
                                  }`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleSubItemClick(dropdownItem.name);
                                  }}
                                >
                                  <div className="w-1 h-1 rounded-full bg-red-600"></div>
                                  {dropdownItem.name}
                                  <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 ml-auto ${
                                    activeSubItem === dropdownItem.name ? 'rotate-180' : ''
                                  }`} />
                                </div>
                                {/* 二级菜单 - 内嵌展开 */}
                                {dropdownItem.subItems && activeSubItem === dropdownItem.name && (
                                  <div className="mt-3 py-2 px-3 bg-white rounded-lg border border-gray-200">
                                    {dropdownItem.subItems.map((subItem) => (
                                      <a
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="block py-2 px-3 text-sm text-gray-600 hover:text-red-600 transition-colors whitespace-nowrap rounded hover:bg-gray-50"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleDropdownItemClick(e, subItem.name);
                                        }}
                                      >
                                        • {subItem.name}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors whitespace-nowrap"
                                onClick={(e) => handleDropdownItemClick(e, dropdownItem.name)}
                              >
                                <div className="w-1 h-1 rounded-full bg-red-600"></div>
                                {dropdownItem.name}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
              onClick={() => setIsBookingDialogOpen(true)}
              className="px-5 py-2 text-sm font-medium text-white whitespace-nowrap rounded hover:bg-primary/90 transition-colors duration-200"
              style={{ backgroundColor: 'rgb(215, 0, 29)' }}
            >
              预约演示
            </button>
          </div>
        </div>
      </div>

      {/* 预约演示对话框 */}
      <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-xl">预约定制演示</DialogTitle>
            <DialogDescription>
              填写以下信息，我们的专业团队将为您提供定制化的演示方案
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  手机号码 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="请输入手机号码"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  公司名称
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="请输入公司名称"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  邮箱
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="请输入邮箱地址"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                需求描述 <span className="text-red-500">*</span>
              </label>
              <textarea
                name="demand"
                value={formData.demand}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                placeholder="请简要描述您的需求和期望"
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsBookingDialogOpen(false)}
                disabled={isSubmitting}
              >
                取消
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {isSubmitting ? '提交中...' : '提交预约'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  );
}
