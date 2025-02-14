import { useEffect, useRef } from "react";
import { parseGIF, decompressFrames } from "gifuct-js";
import gifUrl from "./assets/giphy-preview.gif?url";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playRef = useRef(false);

  const playWithGifuct = async () => {
    const response = await fetch(gifUrl);
    const arrayBuffer = await response.arrayBuffer();
    const gif = parseGIF(arrayBuffer);
    const frames: OffscreenCanvas[] = decompressFrames(gif, true).map(currentFrame => {
      const offscreenCanvas = new OffscreenCanvas(gif.lsd.width, gif.lsd.height);
      const ctx = offscreenCanvas.getContext("2d");
      if (ctx) {
        const { width, height, left, top } = currentFrame.dims;
        ctx.putImageData(new ImageData(currentFrame.patch, width, height), left, top);
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      offscreenCanvas.disposalType = currentFrame.disposalType;
      return offscreenCanvas;
    });

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = gif.lsd.width;
      canvas.height = gif.lsd.height;
    }

    let startTime = 0;

    const renderFrame = (timestamp: number) => {
      startTime = startTime || timestamp;
      const time = timestamp - startTime;
      const frameIndex = Math.floor(time / 100) % frames.length;
      const frame = frames[frameIndex];
      const ctx = canvas!.getContext("2d");
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (frame.disposalType === 2) {
        ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      }
      ctx!.drawImage(frame, 0, 0);
      requestAnimationFrame(renderFrame);
    };

    requestAnimationFrame(renderFrame);
  };

  useEffect(() => {
    if (!playRef.current) {
      playRef.current = true;
      playWithGifuct();
    }
  }, []);

  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <div className="flex flex-col w-full max-w-sm items-center justify-center gap-1.5">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

export default App;
