import { useState, ReactNode } from "react";
import Daisyui_autocomplete from "./Daisyui_autocomplete";
import CODESnippet from "@/pages/Components/CODESnippet/CODESnippet";
import code_how_to_use from "./code_how_to_use.txt?raw";
import autocompleteCode from "./ui_code.txt?raw";

// Component for Props Table
const PropsTable = ({ props }: { props: any[] }) => (
  <div className="overflow-x-auto">
    <table className="table table-zebra w-full">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop, index) => (
          <tr key={index}>
            <td className="font-mono text-primary font-semibold">
              {prop.name}
            </td>
            <td className="font-mono text-secondary text-sm">{prop.type}</td>
            <td>
              <span
                className={`badge ${
                  prop.required ? "badge-error" : "badge-ghost"
                }`}
              >
                {prop.required ? "Required" : "Optional"}
              </span>
            </td>
            <td>{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Component for Code Tabs
const CodeTabs = ({ snippets }: { snippets: any[] }) => (
  <div className="tabs tabs-boxed">
    {snippets.map((snippet, index) => (
      <>
        <input
          type="radio"
          name="code_tabs"
          role="tab"
          className="tab"
          aria-label={snippet.title}
          defaultChecked={index === 0}
          key={`tab-${index}`}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-200 rounded-box p-4 -mt-px"
          key={`content-${index}`}
        >
          <CODESnippet codeSnippets={[snippet]} />
        </div>
      </>
    ))}
  </div>
);

const UI_Daisyui_autocomplete = () => {
  const [selectedProduct, setSelectedProduct] = useState("");

  const productOptions = [
    { product_name: "MacBook Pro", id: 1, category: "Laptop", price: "$1,999" },
    { product_name: "iPhone 15", id: 2, category: "Phone", price: "$999" },
    { product_name: "iPad Air", id: 3, category: "Tablet", price: "$599" },
  ];

  const codeSnippets = [
    { title: "Main.tsx", language: "typescript", code: code_how_to_use },
    {
      title: "Daisyui_autocomplete.tsx",
      language: "typescript",
      code: autocompleteCode,
    },
  ];

  const propsData = [
    {
      name: "options",
      type: "Array<Object>",
      required: true,
      description: "Array of selectable options",
    },
    {
      name: "value",
      type: "string",
      required: true,
      description: "Current selected value",
    },
    {
      name: "onChange",
      type: "Function",
      required: true,
      description: "Callback function when selection changes",
    },
    {
      name: "optionKey",
      type: "string",
      required: true,
      description: "Key to display from option object",
    },
    // displayKey
    {
      name: "displayKey",
      type: "string",
      required: false,
      description: "Key to display from option object",
    },
    {
      name: "label",
      type: "string",
      required: false,
      description: "Label text for the input",
    },
    {
      name: "placeholder",
      type: "string",
      required: false,
      description: "Placeholder text",
    },
    {
      name: "width",
      type: "string",
      required: false,
      description: "Width of the input field",
    },
  ];

  // --- Tab Configuration ---
  const tabsConfig: { label: string; content: ReactNode }[] = [
    {
      label: "📦 INSTALLATION",
      content: (
        <CODESnippet
          codeSnippets={[
            {
              title: "Install Dependencies",
              language: "bash",
              code: `npm install @mui/material @emotion/react @emotion/styled\nnpm i -D daisyui@latest`,
            },
          ]}
        />
      ),
    },
    {
      label: "💻 CODE",
      content: <CodeTabs snippets={codeSnippets} />,
    },
    {
      label: "📋 PROPS",
      content: <PropsTable props={propsData} />,
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h3 className="card-title text-primary mb-4">Autocomplete</h3>
          <Daisyui_autocomplete
            options={productOptions}
            value={selectedProduct}
            onChange={setSelectedProduct}
            optionKey="product_name"
            label="Select Product"
            placeholder="Search for Apple products..."
            width="100%"
          />
          {selectedProduct && (
            <div className="mt-4 p-4 bg-success/10 rounded-lg">
              <p className="text-sm text-success">
                ✅ Selected: <strong>{selectedProduct}</strong>
              </p>
            </div>
          )}

          {/* Dynamic Tabs Section */}
          <div className="tabs tabs-bordered mt-6">
            {tabsConfig.map((tab, index) => (
              <>
                <input
                  type="radio"
                  name="main_tabs"
                  role="tab"
                  className="tab"
                  aria-label={tab.label}
                  defaultChecked={index === 0}
                  key={`tab-main-${index}`}
                />
                <div
                  role="tabpanel"
                  className="tab-content bg-base-100 border-base-300 rounded-box p-4 -mt-px"
                  key={`content-main-${index}`}
                >
                  {tab.content}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI_Daisyui_autocomplete;
