export const changeCase = (word) => {
    return word
      .replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  

  