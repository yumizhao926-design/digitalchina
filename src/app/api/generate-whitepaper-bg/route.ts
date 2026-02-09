import { NextRequest, NextResponse } from 'next/server';
import { ImageGenerationClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    const config = new Config();
    const client = new ImageGenerationClient(config, customHeaders);

    // 生成白皮书相关背景图片 - 浅色商务风格
    const response = await client.generate({
      prompt: 'professional abstract business book or whitepaper design background in light gray and white tones. Subtle book shape or document silhouette with soft shadows. Minimalist geometric elements in red (#FF3B30) and gray colors. Low contrast background with plenty of empty space. Absolutely NO text, NO typography, NO characters, NO words, NO letters, NO numbers, NO writing. Clean modern corporate design suitable for whitepaper download section. Professional photography style with soft lighting.',
      size: '4K',
      watermark: false,
    });

    const helper = client.getResponseHelper(response);

    if (helper.success && helper.imageUrls.length > 0) {
      return NextResponse.json({
        success: true,
        imageUrl: helper.imageUrls[0],
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: helper.errorMessages.join(', '),
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Image generation error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate image',
      },
      { status: 500 }
    );
  }
}
