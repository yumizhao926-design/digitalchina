import { NextRequest, NextResponse } from 'next/server';
import { ImageGenerationClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { industry } = await request.json();
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    // 根据行业类型生成对应的图片prompt
    const prompts: Record<string, string> = {
      government: 'A professional government document review scene, soft light gray and white background, abstract representation of AI-powered document analysis, elegant minimalist design with plenty of white space, subtle geometric shapes representing documents and AI processing, light and airy color palette dominated by soft grays and whites, a tiny accent of red (#E60012) as a small geometric detail, no text, no logos, no brands, clean and professional atmosphere, modern business style, 2K resolution',
      manufacturing: 'A modern smart office manufacturing scene, soft light gray and white background, abstract representation of intelligent manufacturing operations, elegant minimalist design with plenty of white space, subtle geometric shapes representing smart devices and workflow automation, light and airy color palette dominated by soft grays and whites, a tiny accent of red (#E60012) as a small geometric detail, no text, no logos, no brands, clean and professional atmosphere, modern business style, 2K resolution',
      healthcare: 'A professional pharmaceutical evidence-based Q&A scene, soft light gray and white background, abstract representation of medical data analysis and knowledge retrieval, elegant minimalist design with plenty of white space, subtle geometric shapes representing medical research and AI-powered answers, light and airy color palette dominated by soft grays and whites, a tiny accent of red (#E60012) as a small geometric detail, no text, no logos, no brands, clean and professional atmosphere, modern business style, 2K resolution',
      tobacco: 'A professional tobacco industry scene with natural grass as the main element, soft light gray and white background, elegant minimalist design with plenty of white space, abstract representation of natural grass fields and tobacco production, light and airy color palette dominated by soft greens and whites, a tiny accent of red (#E60012) as a small geometric detail, no text, no logos, no brands, clean and professional atmosphere, modern business style, 2K resolution'
    };

    const prompt = prompts[industry] || prompts.government;

    const config = new Config();
    const client = new ImageGenerationClient(config, customHeaders);

    const response = await client.generate({
      prompt,
      size: '2K',
      watermark: false
    });

    const helper = client.getResponseHelper(response);

    if (helper.success && helper.imageUrls.length > 0) {
      return NextResponse.json({ imageUrl: helper.imageUrls[0] });
    } else {
      return NextResponse.json({ 
        error: 'Image generation failed',
        details: helper.errorMessages 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error generating case image:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
