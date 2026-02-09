import { NextRequest, NextResponse } from 'next/server';
import { S3Storage } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { url, name } = await request.json();

    if (!url || !name) {
      return NextResponse.json(
        { error: 'URL and name are required' },
        { status: 400 }
      );
    }

    const storage = new S3Storage({
      endpointUrl: process.env.COZE_BUCKET_ENDPOINT_URL,
      accessKey: '',
      secretKey: '',
      bucketName: process.env.COZE_BUCKET_NAME,
      region: 'cn-beijing',
    });

    // 从URL上传文件
    const key = await storage.uploadFromUrl({
      url: url,
      timeout: 30000,
    });

    // 生成签名URL
    const signedUrl = await storage.generatePresignedUrl({
      key: key,
      expireTime: 86400 * 365, // 1年有效期
    });

    return NextResponse.json({
      success: true,
      key: key,
      url: signedUrl,
      name: name
    });
  } catch (error) {
    console.error('Error uploading logo:', error);
    return NextResponse.json(
      { error: 'Failed to upload logo' },
      { status: 500 }
    );
  }
}
