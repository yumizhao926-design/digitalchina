import { Building2, Factory, Landmark, Stethoscope, ArrowRight } from 'lucide-react';

interface IndustrySolution {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const industrySolutions: IndustrySolution[] = [
  {
    id: 'solution-1',
    name: '政务流程智能方案',
    description: '一网通办·智慧政务·数据治理',
    icon: <Building2 size={48} strokeWidth={1.5} />,
    color: '#FF3B30', // 红色
  },
  {
    id: 'solution-2',
    name: '制造流程优化方案',
    description: '预测性维护·智能质检·供应链',
    icon: <Factory size={48} strokeWidth={1.5} />,
    color: '#666666', // 灰色
  },
  {
    id: 'solution-3',
    name: '金融流程数智方案',
    description: '智能风控·量化投研·反欺诈',
    icon: <Landmark size={48} strokeWidth={1.5} />,
    color: '#666666', // 灰色
  },
  {
    id: 'solution-4',
    name: '医疗医药流程升级方案',
    description: '影像诊断·药物研发·健康管理',
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

        {/* 一排4个卡片 - 横向布局 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industrySolutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-4">
                {/* 图标 - 上方 */}
                <div
                  className="p-3 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: solution.color === '#FF3B30' ? '#FFF5F5' : '#F5F5F5',
                    color: solution.color
                  }}
                >
                  {solution.icon}
                </div>

                {/* 方案名称 - 中间 */}
                <h3
                  className="font-medium text-center"
                  style={{
                    color: '#333333',
                    fontSize: '18px'
                  }}
                >
                  {solution.name}
                </h3>

                {/* 描述文字 - 中间下方 */}
                <p
                  className="text-sm text-center"
                  style={{ color: '#666666' }}
                >
                  {solution.description}
                </p>

                {/* 详情按钮 - 底部 */}
                <button
                  className="px-6 py-2 text-sm font-medium border rounded-lg transition-all duration-300 hover:bg-white hover:border-gray-600 hover:text-gray-900"
                  style={{
                    borderColor: '#E5E5E5',
                    color: '#666666',
                    backgroundColor: '#FAFAFA'
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
