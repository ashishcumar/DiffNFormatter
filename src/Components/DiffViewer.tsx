import React from "react";

interface DiffViewerProps {
  diffHtml: string;
  isLeft?: boolean;
}

const DiffViewer: React.FC<DiffViewerProps> = ({ diffHtml, isLeft }) => {
  return (
    <div
      style={{
        whiteSpace: "pre-wrap",
        fontFamily: "'Fira Code', monospace",
        fontSize: "12px", 
        fontWeight: 400,
        lineHeight: "1.6",
        backgroundColor: "#f9f9f9",
        padding: "1rem",
        borderRadius: "8px",
        overflowX: "auto",
        height:'100%'
      }}
      className={
        isLeft
          ? `diff-container${isLeft ? "-left" : "-right"}`
          : "diff-container"
      }
      dangerouslySetInnerHTML={{ __html: diffHtml }}
    />
  );
};

export default DiffViewer;
