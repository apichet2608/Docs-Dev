import { useState } from "react";
import Daisyui_autocomplete from "./Daisyui_autocomplete"; // import component จริง
import CODESnippet from "@/pages/Components/CODESnippet/CODESnippet";
import code_how_to_use from "./code_how_to_use.txt?raw";
import autocompleteCode from "./ui_code.txt?raw";

const UI_Daisyui_autocomplete = () => {
  const [selectedProduct, setSelectedProduct] = useState("");

  const productOptions = [
    { product_name: "MacBook Pro", id: 1, category: "Laptop" },
    { product_name: "iPhone 15", id: 2, category: "Phone" },
    { product_name: "iPad Air", id: 3, category: "Tablet" },
    { product_name: "Apple Watch", id: 4, category: "Wearable" },
  ];
  const basicUsageSnippets = [
    {
      title: "Basic Usage",
      language: "typescript",
      code: code_how_to_use,
    },
  ];
  const componentCodeSnippets = [
    {
      title: "DynamicAutocomplete Component",
      language: "typescript",
      code: autocompleteCode,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-secondary">
        🚀 Live Demo
      </h2>
      <div className="mb-8">
        <Daisyui_autocomplete
          options={productOptions}
          value={selectedProduct}
          onChange={setSelectedProduct}
          optionKey="product_name"
          label="Select Product"
          placeholder="Choose a product..."
        />
      </div>

      {/* Installation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          📦 Installation
        </h2>
        <CODESnippet
          codeSnippets={[
            {
              title: "Install Dependencies",
              language: "bash",
              code: `npm install @mui/material @emotion/react @emotion/styled`,
            },
          ]}
        />
      </section>
      {/* Full Component Code */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          💻 Full Component Source
        </h2>
        <CODESnippet codeSnippets={componentCodeSnippets} />
      </section>
      {/* Basic Usage */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          🛠️ Basic Usage
        </h2>
        <CODESnippet codeSnippets={basicUsageSnippets} />
      </section>
    </div>
  );
};
export default UI_Daisyui_autocomplete;
