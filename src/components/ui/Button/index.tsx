
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  animation?: 'fade' | 'drop';
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  textHover?: string;
  loadingDuration?: number;
}

export default function Button({
  children,
  onClick,
  animation,
  isLoading = false,
  disabled = false,
  className = '',
  textHover,
  loadingDuration = 2,
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    animation === 'fade' ? styles.animationFade : '',
    animation === 'drop' ? styles.animationDrop : '',
    className,
  ].join(' ');

  return (
    <div className={styles.buttonContainer}>
      {isLoading && (
        <div className={styles.loadingBarContainer}>
          <div className={styles.loadingBar} style={{ animationDuration: `${loadingDuration}s` }}></div>
        </div>
      )}
      <button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled || isLoading}
        aria-label='Carregar mais produtos'
      >
        {animation === 'drop' && textHover ? (
          <>
            <span className={styles.textInitial}>{children}</span>
            <span className={styles.textHover}>{textHover}</span>
          </>
        ) : (
          children
        )}
      </button>
    </div>
  );
}