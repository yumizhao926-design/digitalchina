import { Building2, Factory, Landmark, Stethoscope, ArrowRight } from 'lucide-react';

interface IndustrySolution {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

const industrySolutions: IndustrySolution[] = [
  {
    id: 'solution-1',
    name: '政务流程智能方案',
    icon: <Building2 size={48} strokeWidth={1.5} />,
    color: '#FF3B30', // 红色
  },
  {
    id: 'solution-2',
    name: '制造流程优化方案',
    icon: <Factory size={48} strokeWidth={1.5} />,
    color: '#666666', // 灰色
  },
  {
    id: 'solution-3',
    name: '金融流程数智方案',
    icon: <Landmark size={48} strokeWidth={1.5} />,
    color: '#666666', // 灰色
  },
  {
    id: 'solution-4',
    name: '医疗医药流程升级方案',
    icon: <Stethoscope size={48} strokeWidth={1.5} />,
    color: '#FF3B30', // 红色
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

        {/* 2×2 网格布局 - 图文混排 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {industrySolutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-6">
                {/* 行业图标 */}
                <div
                  className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: solution.color }}
                >
                  {solution.icon}
                </div>

                {/* 右侧内容 */}
                <div className="flex-1">
                  {/* 方案名称 */}
                  <h3
                    className="font-medium mb-3"
                    style={{
                      color: '#333333',
                      fontSize: '18px'
                    }}
                  >
                    {solution.name}
                  </h3>

                  {/* 详情按钮 */}
                  <button
                    className="px-6 py-2 text-sm font-medium border rounded hover:bg-gray-50 transition-colors"
                    style={{
                      borderColor: '#999999',
                      color: '#666666'
                    }}
                  >
                    详情
                  </button>
                </div>
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
