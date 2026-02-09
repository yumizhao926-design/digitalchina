import { NextRequest, NextResponse } from 'next/server';
import { ImageGenerationClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    const config = new Config();
    const client = new ImageGenerationClient(config, customHeaders);

    const response = await client.generate({
      prompt: prompt,
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
