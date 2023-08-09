import { useEffect, useState } from 'react';

const MediaBreakPoints = ({
  mediaName,
  children,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const flag =
    (mediaName === 'xsDown' && width < 576) ||
    (mediaName === 'smDown' && width < 768) ||
    (mediaName === 'mdDown' && width < 992) ||
    (mediaName === 'lgDown' && width < 1200) ||
    (mediaName === 'xlDown' && width < 1400) ||
    (mediaName === 'xsUp' && width >= 576) ||
    (mediaName === 'smUp' && width >= 768) ||
    (mediaName === 'mdUp' && width >= 992) ||
    (mediaName === 'lgUp' && width >= 1200) ||
    (mediaName === 'xlUp' && width >= 1400);

  return children || flag;
};

export default MediaBreakPoints;
