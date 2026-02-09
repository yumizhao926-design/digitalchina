import { NextRequest, NextResponse } from 'next/server';
import { ImageGenerationClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    const config = new Config();
    const client = new ImageGenerationClient(config, customHeaders);

    // 生成浅色商务风格背景图片 - 新版本
    const response = await client.generate({
      prompt: 'professional business banner with clean minimalist design. Soft gradient background in light gray and white tones. Abstract geometric shapes with subtle red accents (#FF3B30). Modern corporate aesthetic similar to Huawei. High quality photography style. No text, no logo, no branding.',
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
