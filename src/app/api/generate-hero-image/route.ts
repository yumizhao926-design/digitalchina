import { NextRequest, NextResponse } from 'next/server';
import { ImageGenerationClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    const config = new Config();
    const client = new ImageGenerationClient(config, customHeaders);

    // 生成浅色商务风格背景图片 - 4K 高清，确保文字可读性
    const response = await client.generate({
      prompt: 'clean minimalist business background with very soft subtle gradient in light gray and white tones. Extremely subtle abstract geometric shapes with minimal red accents (rgb(215, 0, 29)). Low contrast background design. Absolutely NO text, NO typography, NO characters, NO words, NO letters, NO numbers, NO writing, NO symbols, NO logos, NO branding, NO trademarks. Clean abstract design only with plenty of empty space for text to be clearly visible. Professional photography style.',
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
