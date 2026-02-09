const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api/upload-logo';

const logos = [
  // 技术伙伴
  { name: '华为', url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Huawei_Logo.svg' },
  { name: '微软', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: '百度', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Baidu_logo.svg' },
  { name: '阿里巴巴', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Alibaba_logo.svg' },
  { name: '腾讯', url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Tencent_logo.svg' },
  { name: '字节跳动', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/ByteDance_Logo_2021.svg' },
  { name: '科大讯飞', url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Iflytek_logo.svg' },
  { name: '商汤科技', url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/SenseTime_logo.svg' },
  { name: '旷视科技', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Megvii_logo.svg' },
  { name: '云从科技', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/CloudWalk_logo.svg' },
  { name: '依图科技', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Yitu_Technology_logo.svg' },
  { name: '第四范式', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/4Paradigm_logo.svg' },
  { name: '京东科技', url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/JD.com_logo.svg' },
  { name: '网易', url: 'https://upload.wikimedia.org/wikipedia/commons/8/86/NetEase_logo.svg' },
  { name: '小米', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg' },
  { name: '滴滴出行', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Didi_logo.svg' },
  { name: '美团', url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Meituan_logo.svg' },
  { name: '快手', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Kuaishou_logo.svg' },
  { name: 'B站', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Bilibili_logo.svg' },
  { name: '小红书', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Xiaohongshu_logo.svg' },
  { name: '网易有道', url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Youdao_logo.svg' },
  { name: '搜狗', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Sogou_logo.svg' },
  { name: '搜狐', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Sohu_logo.svg' },
  { name: '360', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/360_logo.svg' },
  { name: '金山云', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Kingsoft_Cloud_logo.svg' },
  { name: '华为云', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Huawei_Cloud_logo.svg' },
  { name: '阿里云', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Alibaba_Cloud_logo.svg' },
  { name: '腾讯云', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Tencent_Cloud_logo.svg' },
  { name: '百度智能云', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Baidu_AI_Cloud_logo.svg' },
  { name: '字节云', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Volcengine_logo.svg' },
  { name: '火山引擎', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Volcano_Engine_logo.svg' },
  { name: '阿里达摩院', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Damo_Academy_logo.svg' },
  { name: '腾讯AI Lab', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tencent_AI_Lab_logo.svg' },
  { name: '百度研究院', url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Baidu_Research_logo.svg' },
  
  // 生态共建伙伴 - 只上传主要的几个
  { name: '德勤中国', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Deloitte_logo.svg' },
  { name: '普华永道', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/PwC_logo.svg' },
  { name: '毕马威', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/KPMG_logo.svg' },
  { name: '安永', url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/EY_logo.svg' },
  { name: '中国信通院', url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/CAICT_logo.svg' },
];

async function uploadLogo(logo) {
  try {
    const response = await axios.post(BASE_URL, {
      url: logo.url,
      name: logo.name
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log(`✓ ${logo.name}: ${response.data.url}`);
    return { name: logo.name, url: response.data.url, key: response.data.key };
  } catch (error) {
    console.error(`✗ ${logo.name}: ${error.message}`);
    return null;
  }
}

async function uploadAll() {
  console.log('开始上传logo...');
  const results = [];
  
  for (let i = 0; i < logos.length; i++) {
    const result = await uploadLogo(logos[i]);
    if (result) {
      results.push(result);
    }
    
    // 每5个输出一次进度
    if ((i + 1) % 5 === 0) {
      console.log(`进度: ${i + 1}/${logos.length}`);
    }
    
    // 稍微延迟，避免请求过快
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n上传完成！');
  console.log('\n生成的映射数据（复制到代码中）:');
  console.log(JSON.stringify(results, null, 2));
}

uploadAll();
