import React from "react";

interface TextProps {
  children: React.ReactNode;
  variant?: "title" | "subtitle" | "body";
}

const Text: React.FC<TextProps> = ({ children, variant = "body" }) => {
  const Tag = variant === "title" ? "h2" : variant === "subtitle" ? "h4" : "p";
  return <Tag className={`text-${variant}`}>{children}</Tag>;
};

export default Text;
