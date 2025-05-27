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
        fontFamily: "'Fira Code', monospace", // or use theme `mono` class if Chakra is applied
        fontSize: "12px", // consistent and compact
        fontWeight: 400,
        lineHeight: "1.6",
        backgroundColor: "#f9f9f9",
        padding: "1rem",
        borderRadius: "8px",
        overflowX: "auto",
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
