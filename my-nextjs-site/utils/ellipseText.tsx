const ellipseText = (value: string, length: number): string => {
    const hasImg = value.includes("<img src=");
    const hasShortText = value.length < 200;
    if (hasImg && hasShortText) {
      return `${value.substring(0, 50).trim()}...`;
    }
    if (value && value.length <= length) {
      return value;
    }
    return `${value.substring(0, length).trim()}...`;
  };
  
  export default ellipseText;
  