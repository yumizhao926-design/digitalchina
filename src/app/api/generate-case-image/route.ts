import { NextRequest, NextResponse } from 'next/server';
import { ImageGenerationClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { industry } = await request.json();
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    // 根据行业类型生成对应的图片prompt
    const prompts: Record<string, string> = {
      government: 'A professional government document review scene, soft light gray and white background, elegant minimalist design with plenty of white space on the left, abstract representation of AI-powered document analysis positioned on the right side, light and airy color palette dominated by soft grays and whites, a small red cube (#E60012) as a subtle accent element on the left side, absolutely no text, no words, no characters, no letters, no logos, no brands, clean and professional atmosphere, modern business style, 2K resolution',
      manufacturing: 'A clean minimalist image with a sleek car positioned exclusively on the right third of the frame, the left two-thirds must be completely empty white space with absolutely nothing, soft light gray and white background, elegant minimalist design, a small red cube (#E60012) as a subtle accent element positioned on the far left side, ABSOLUTELY NO TEXT, NO WORDS, NO CHARACTERS, NO LETTERS, NO NUMBERS, NO SYMBOLS, NO LOGOS, NO BRANDS, NO WRITING, NO MARKINGS, completely empty left side, clean and professional atmosphere, modern business style, 2K resolution',
      healthcare: 'A professional pharmaceutical evidence-based Q&A scene with medicine pills positioned on the right side, soft light gray and white background, elegant minimalist design with plenty of white space on the left, abstract representation of medical data analysis and knowledge retrieval, light and airy color palette dominated by soft grays and whites, a small red cube (#E60012) as a subtle accent element on the left side, absolutely no text, no words, no characters, no letters, no logos, no brands, clean and professional atmosphere, modern business style, 2K resolution',
      tobacco: 'A professional tobacco industry scene with natural grass positioned on the right side, soft light gray and white background, elegant minimalist design with plenty of white space on the left, abstract representation of natural grass fields and tobacco production, light and airy color palette dominated by soft greens and whites, a small red cube (#E60012) as a subtle accent element on the left side, absolutely no text, no words, no characters, no letters, no logos, no brands, clean and professional atmosphere, modern business style, 2K resolution'
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
