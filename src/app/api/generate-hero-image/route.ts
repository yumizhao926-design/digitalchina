import { NextRequest, NextResponse } from 'next/server';
import { ImageGenerationClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    const config = new Config();
    const client = new ImageGenerationClient(config, customHeaders);

    // 生成浅色商务风格背景图片 - 禁止任何文字
    const response = await client.generate({
      prompt: 'clean minimalist business background with soft gradient in light gray and white tones. Pure abstract geometric shapes with subtle red accents (#FF3B30). Modern corporate aesthetic. Absolutely NO text, NO typography, NO characters, NO words, NO letters, NO numbers, NO writing, NO symbols. Clean abstract design only. Professional photography style.',
      size: '2K',
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
