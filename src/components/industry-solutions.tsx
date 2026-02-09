import { ArrowRight } from 'lucide-react';

interface IndustrySolution {
  id: string;
  name: string;
  description: string;
  image: string;
}

const industrySolutions: IndustrySolution[] = [
  {
    id: 'solution-1',
    name: '政务流程智能方案',
    description: '一网通办·智慧政务·数据治理',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  },
  {
    id: 'solution-2',
    name: '制造流程优化方案',
    description: '预测性维护·智能质检·供应链',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
  },
  {
    id: 'solution-3',
    name: '金融流程数智方案',
    description: '智能风控·量化投研·反欺诈',
    image: 'https://images.unsplash.com/photo-1565514020296-59d775083a16?w=800&h=600&fit=crop',
  },
  {
    id: 'solution-4',
    name: '医疗医药流程升级方案',
    description: '影像诊断·药物研发·健康管理',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop',
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

        {/* 一排4个卡片 - 大图背景+文字叠加 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industrySolutions.map((solution) => (
            <div
              key={solution.id}
              className="rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
              style={{ height: '320px' }}
            >
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${solution.image})` }}
              />

              {/* 渐变遮罩 */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              />

              {/* 内容叠加 */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                {/* 方案名称 */}
                <h3
                  className="font-medium mb-3"
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
                  style={{ color: '#E5E5E5', lineHeight: '1.6' }}
                >
                  {solution.description}
                </p>

                {/* 详情按钮 */}
                <button
                  className="px-5 py-2 text-sm font-medium rounded-lg flex items-center gap-2 transition-all duration-300 hover:bg-white/20"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  查看详情
                  <ArrowRight size={14} />
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
