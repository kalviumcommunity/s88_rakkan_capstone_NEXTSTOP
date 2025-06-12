import { CircularProgress } from '@mui/material';

export interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

const LoadingSpinner = ({ size = 40, className = '' }: LoadingSpinnerProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <CircularProgress size={size} />
    </div>
  );
};

export default LoadingSpinner;
