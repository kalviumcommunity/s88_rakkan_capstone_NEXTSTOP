import React from 'react';

interface DebugProps {
  componentName: string;
  children: React.ReactNode;
}

export const DebugComponent: React.FC<DebugProps> = ({ componentName, children }) => {
  console.log(`Rendering ${componentName}`);
  return (
    <div data-component={componentName}>
      {children}
    </div>
  );
};

export const useDebugEffect = (componentName: string) => {
  React.useEffect(() => {
    console.log(`${componentName} mounted`);
    return () => console.log(`${componentName} unmounted`);
  }, [componentName]);
};
