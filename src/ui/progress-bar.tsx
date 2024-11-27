import { CSSProperties } from 'react';

interface ProgressBarProps {
  width?: number | string;
  progressBackgroundColor?: string;
  progressBarWidth?: number;
  progressStyle?: CSSProperties;
  progressNumber?: number;
  containerStyle?: CSSProperties;
}

const ProgressBar = ({
  width,
  progressBarWidth,
  progressBackgroundColor,
  progressStyle,
  progressNumber,
  containerStyle,
}: ProgressBarProps) => {
  return (
    <div
      style={{
        ...containerStyle,
        width: typeof width === 'number' ? width + 'px' : width,
      }}
      className="rounded-[1rem]  relative overflow-hidden"
    >
      <ProgressBarOutlines /> {/* Render outlines first, behind the progress */}
      <div
        style={{
          ...progressStyle,
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          width: progressBarWidth + '%',
          backgroundColor: progressBackgroundColor,
          zIndex: 10, // Ensure progress bar is in the foreground
          position: 'relative',
        }}
      >
        <span className="text-[1.6rem]">{progressNumber}%</span>
      </div>
    </div>
  );
};

const ProgressBarOutlines = () => {
  return (
    <div className="flex gap-4 z-0 absolute -top-[10px] left-0 h-full ">
      {Array.from({ length: 30 }, (_, i) => (
        <span
          key={i}
          className="rotate-45 w-[5px] h-[100px] bg-secondary "
        ></span>
      ))}
    </div>
  );
};

export default ProgressBar;
