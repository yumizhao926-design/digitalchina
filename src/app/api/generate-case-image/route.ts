import { NextRequest, NextResponse } from 'next/server';
import { ImageGenerationClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { industry } = await request.json();
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    // 根据行业类型生成对应的图片prompt
    const prompts: Record<string, string> = {
      government: 'A clean, minimalist government service interface design, soft light gray and white gradient background, subtle abstract geometric shapes representing documents and workflow, low contrast, elegant and professional, with a tiny accent of red (#E60012) as a small geometric detail, plenty of white space, no text, no logos, no brands, subtle government-related elements like abstract building silhouettes or document-like shapes in the background, modern business style, 2K resolution',
      manufacturing: 'A clean, minimalist manufacturing and factory interface design, soft light gray and white gradient background, subtle abstract geometric shapes representing production lines and machinery, low contrast, elegant and professional, with a tiny accent of red (#E60012) as a small geometric detail, plenty of white space, no text, no logos, no brands, subtle manufacturing-related elements like abstract gear shapes or factory silhouettes in the background, modern business style, 2K resolution',
      healthcare: 'A clean, minimalist healthcare and medical service interface design, soft light gray and white gradient background, subtle abstract geometric shapes representing medical data and care, low contrast, elegant and professional, with a tiny accent of red (#E60012) as a small geometric detail, plenty of white space, no text, no logos, no brands, subtle healthcare-related elements like abstract cross shapes or medical waveform patterns in the background, modern business style, 2K resolution'
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
