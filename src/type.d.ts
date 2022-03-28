declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  const style: any;

  export default src;
}

declare module '*.png';
declare module '*.gif';
