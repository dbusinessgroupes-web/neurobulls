import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'NeuroBulls — AI Marketing Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          gap: '20px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '-2px',
          }}
        >
          NeuroBulls
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: '#E31837',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          AI Marketing Agency
        </div>
      </div>
    ),
    { ...size }
  );
}
