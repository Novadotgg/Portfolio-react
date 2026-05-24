import React from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'angle' | 'dots';
  flip?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'wave', flip = false }) => {
  if (variant === 'wave') {
    return (
      <div className={`section-divider ${flip ? 'flip' : ''}`} aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[30px] md:h-[50px]"
        >
          <path
            d="M0 30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0V30Z"
            fill="hsl(var(--secondary))"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex justify-center items-center py-8 gap-2" aria-hidden="true">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 animate-pulse" />
        <span className="w-2 h-2 rounded-full bg-emerald-500/60 animate-pulse" style={{ animationDelay: '0.2s' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 animate-pulse" style={{ animationDelay: '0.4s' }} />
      </div>
    );
  }

  // angle variant
  return (
    <div className={`section-divider ${flip ? 'flip' : ''}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-[20px] md:h-[40px]"
      >
        <polygon
          points="0,40 1440,0 1440,40"
          fill="hsl(var(--secondary))"
          fillOpacity="0.2"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
