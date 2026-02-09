import { Building2, Factory, Landmark, Stethoscope, ArrowRight } from 'lucide-react';

interface IndustrySolution {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const industrySolutions: IndustrySolution[] = [
  {
    id: 'solution-1',
    name: '政务流程智能方案',
    description: '一网通办·智慧政务·数据治理',
    icon: <Building2 size={48} strokeWidth={1.5} />,
    color: '#FF3B30', // 红色
    bgColor: '#FFF5F5', // 浅红色背景
  },
  {
    id: 'solution-2',
    name: '制造流程优化方案',
    description: '预测性维护·智能质检·供应链',
    icon: <Factory size={48} strokeWidth={1.5} />,
    color: '#666666', // 灰色
    bgColor: '#F5F5F5', // 浅灰色背景
  },
  {
    id: 'solution-3',
    name: '金融流程数智方案',
    description: '智能风控·量化投研·反欺诈',
    icon: <Landmark size={48} strokeWidth={1.5} />,
    color: '#666666', // 灰色
    bgColor: '#F5F5F5', // 浅灰色背景
  },
  {
    id: 'solution-4',
    name: '医疗医药流程升级方案',
    description: '影像诊断·药物研发·健康管理',
    icon: <Stethoscope size={48} strokeWidth={1.5} />,
    color: '#FF3B30', // 红色
    bgColor: '#FFF5F5', // 浅红色背景
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

        {/* 2×2 网格布局 - 图片+文字叠加 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {industrySolutions.map((solution) => (
            <div
              key={solution.id}
              className="rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
              style={{ backgroundColor: solution.bgColor }}
            >
              {/* 内容容器 */}
              <div className="relative z-10 p-6 flex flex-col items-start">
                {/* 图标 */}
                <div
                  className="mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: solution.color }}
                >
                  {solution.icon}
                </div>

                {/* 方案名称 */}
                <h3
                  className="font-medium mb-2"
                  style={{
                    color: '#333333',
                    fontSize: '18px'
                  }}
                >
                  {solution.name}
                </h3>

                {/* 描述文字 */}
                <p
                  className="text-sm mb-4"
                  style={{ color: '#666666' }}
                >
                  {solution.description}
                </p>

                {/* 详情按钮 */}
                <button
                  className="px-6 py-2 text-sm font-medium border rounded hover:bg-white transition-colors"
                  style={{
                    borderColor: '#999999',
                    color: '#666666'
                  }}
                >
                  详情
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
