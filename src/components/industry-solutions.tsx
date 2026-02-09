import { Building2, Factory, Landmark, Stethoscope, ArrowRight } from 'lucide-react';

interface IndustrySolution {
  id: string;
  name: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  color: string;
}

const industrySolutions: IndustrySolution[] = [
  {
    id: 'solution-1',
    name: '政务流程智能方案',
    description: '一网通办·智慧政务·数据治理',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    icon: <Building2 size={32} strokeWidth={1.5} />,
    color: '#FFFFFF',
  },
  {
    id: 'solution-2',
    name: '制造流程优化方案',
    description: '预测性维护·智能质检·供应链',
    image: 'https://images.unsplash.com/photo-1563770095124-2f72ed839567?w=600&h=400&fit=crop',
    icon: <Factory size={32} strokeWidth={1.5} />,
    color: '#FFFFFF',
  },
  {
    id: 'solution-3',
    name: '金融流程数智方案',
    description: '智能风控·量化投研·反欺诈',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    icon: <Landmark size={32} strokeWidth={1.5} />,
    color: '#FFFFFF',
  },
  {
    id: 'solution-4',
    name: '医疗医药流程升级方案',
    description: '影像诊断·药物研发·健康管理',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
    icon: <Stethoscope size={32} strokeWidth={1.5} />,
    color: '#FFFFFF',
  },
];

export default function IndustrySolutions() {
  return (
    <section id="industry-solutions" className="py-16 px-4 sm:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* 区域标题 */}
        <h2
          className="font-bold mb-12 text-center"
          style={{
            color: '#333333',
            fontSize: '32px',
            letterSpacing: '0.5px'
          }}
        >
          行业方案 | AI for Process 全域落地
        </h2>

        {/* 2×2 网格布局 - 图片背景+文字叠加 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {industrySolutions.map((solution) => (
            <div
              key={solution.id}
              className="rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
              style={{ height: '280px' }}
            >
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${solution.image})` }}
              />

              {/* 渐变遮罩 - 确保文字清晰可见 */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
              />

              {/* 内容叠加 */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                {/* 图标 */}
                {solution.icon && (
                  <div
                    className="mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: solution.color }}
                  >
                    {solution.icon}
                  </div>
                )}

                {/* 方案名称 */}
                <h3
                  className="font-medium mb-2"
                  style={{
                    color: '#FFFFFF',
                    fontSize: '20px'
                  }}
                >
                  {solution.name}
                </h3>

                {/* 描述文字 */}
                <p
                  className="text-sm mb-4"
                  style={{ color: '#E5E5E5' }}
                >
                  {solution.description}
                </p>

                {/* 详情按钮 */}
                <button
                  className="px-6 py-2 text-sm font-medium border rounded hover:bg-white hover:text-gray-900 transition-colors w-fit"
                  style={{
                    borderColor: '#FFFFFF',
                    color: '#FFFFFF'
                  }}
                >
                  查看详情
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 底部按钮 */}
        <div className="flex justify-center">
          <button
            className="px-8 py-3 text-sm font-medium border rounded-lg hover:bg-gray-50 transition-colors"
            style={{
              borderColor: '#999999',
              color: '#666666'
            }}
          >
            查看全部行业方案
          </button>
        </div>
      </div>
    </section>
  );
}
