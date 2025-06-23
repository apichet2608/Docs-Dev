import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import copy from "copy-to-clipboard";

const CODESnippet = ({ codeSnippets }: any) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const handleCopy = (text: string, index: number) => {
    const success = copy(text);
    if (success) {
      setCopiedIndex(index);
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    }
  };

  return (
    <div className="grid gap-6 mb-8">
      {codeSnippets.map((snippet: any, index: any) => (
        <div
          key={index}
          className="bg-base-100 rounded-lg shadow-md border border-base-300 overflow-hidden"
        >
          <div className="flex justify-between items-center p-4 border-b border-base-300 bg-base-200">
            <h3 className="text-lg font-semibold text-base-content">
              {snippet.title}
            </h3>
            <div className="flex gap-2 items-center">
              <span className="text-xs text-base-content/70 bg-base-300 px-2 py-1 rounded">
                {snippet.language}
              </span>
              <button
                onClick={() => handleCopy(snippet.code, index)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  copiedIndex === index
                    ? "bg-success/20 text-success border border-success/30"
                    : "bg-base-100 text-base-content border border-base-300 hover:bg-base-200"
                }`}
              >
                {copiedIndex === index ? "✅ Copied!" : "📋 Copy"}
              </button>
            </div>
          </div>
          <div className="overflow-x-auto bg-base-100">
            <SyntaxHighlighter
              language={snippet.language}
              style={prism}
              customStyle={{
                margin: 0,
                borderRadius: 0,
                background: "transparent",
              }}
              showLineNumbers={snippet.language === "typescript"}
            >
              {snippet.code}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CODESnippet;
