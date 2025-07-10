import { useState, version } from "react";
import Daisyui_autocomplete from "./Daisyui_autocomplete";
import CODESnippet from "@/pages/Components/CODESnippet/CODESnippet";
import code_how_to_use from "./code_how_to_use.txt?raw";
import autocompleteCode from "./ui_code.txt?raw";
import { s } from "node_modules/framer-motion/dist/types.d-6pKw1mTI";

const UI_Daisyui_autocomplete = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");

  const productOptions = [
    { product_name: "MacBook Pro", id: 1, category: "Laptop", price: "$1,999" },
    { product_name: "iPhone 15", id: 2, category: "Phone", price: "$999" },
    { product_name: "iPad Air", id: 3, category: "Tablet", price: "$599" },
    { product_name: "Apple Watch", id: 4, category: "Wearable", price: "$399" },
    { product_name: "AirPods Pro", id: 5, category: "Audio", price: "$249" },
    { product_name: "Mac Studio", id: 6, category: "Desktop", price: "$1,999" },
  ];

  const countryOptions = [
    { name: "Thailand", code: "TH", continent: "Asia" },
    { name: "United States", code: "US", continent: "North America" },
    { name: "Japan", code: "JP", continent: "Asia" },
    { name: "Germany", code: "DE", continent: "Europe" },
    { name: "Australia", code: "AU", continent: "Oceania" },
  ];

  const skillOptions = [
    { skill: "React", level: "Advanced", category: "Frontend" },
    { skill: "Node.js", level: "Intermediate", category: "Backend" },
    { skill: "TypeScript", level: "Advanced", category: "Language" },
    { skill: "Python", level: "Beginner", category: "Language" },
    { skill: "Docker", level: "Intermediate", category: "DevOps" },
  ];

  const basicUsageSnippets = [
    {
      title: "Main.tsx",
      language: "typescript",
      code: code_how_to_use,
    },
    {
      title: "Daisyui_autocomplete.tsx",
      language: "typescript",
      code: autocompleteCode,
    },
  ];

  const props = [
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
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Installation Section */}

      {/* Live Demo Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-2">
            🚀 Interactive Demo
          </h2>
          <p className="text-base-content/70">
            Try out the autocomplete component with different datasets
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Product Search */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-primary mb-4">
                🛍️ Product Search
              </h3>
              <Daisyui_autocomplete
                options={productOptions}
                value={selectedProduct}
                onChange={setSelectedProduct}
                optionKey="product_name"
                label="Select Product"
                placeholder="Search for Apple products..."
              />
              {/* name of each tab group should be unique */}
              <div className="tabs tabs-border">
                <input
                  type="radio"
                  name="my_tabs_2"
                  className="tab"
                  aria-label="CODE"
                />
                <div className="tab-content border-base-300 bg-base-100">
                  <div className="tabs tabs-border">
                    {basicUsageSnippets.map((snippet, index) => (
                      <>
                        <input
                          key={index}
                          type="radio"
                          name="tabs-code"
                          className="tab"
                          aria-label={snippet.title}
                        />
                        <div className="tab-content border-base-300 bg-base-100 p-4">
                          <CODESnippet
                            codeSnippets={[basicUsageSnippets[index]]}
                          />
                        </div>
                      </>
                    ))}
                  </div>
                </div>

                <input
                  type="radio"
                  name="my_tabs_2"
                  className="tab"
                  aria-label="PROPS"
                  defaultChecked
                />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                  {/* Props Documentation */}
                  <section className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📋</span>
                      <h2 className="text-3xl font-bold text-secondary">
                        Props Reference
                      </h2>
                    </div>
                    <div className="card bg-base-100 shadow-lg">
                      <div className="card-body">
                        <div className="overflow-x-auto">
                          <table className="table table-zebra">
                            <thead>
                              <tr className="text-base">
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
                                  <td className="font-mono text-secondary text-sm">
                                    {prop.type}
                                  </td>
                                  <td>
                                    <span
                                      className={`badge ${
                                        prop.required
                                          ? "badge-error"
                                          : "badge-ghost"
                                      }`}
                                    >
                                      {prop.required ? "Required" : "Optional"}
                                    </span>
                                  </td>
                                  <td className="text-sm">
                                    {prop.description}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <input
                  type="radio"
                  name="my_tabs_2"
                  className="tab"
                  aria-label="Installation"
                />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                  <section className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📦</span>
                      <h2 className="text-3xl font-bold text-secondary">
                        Installation
                      </h2>
                    </div>
                    <div className="card bg-base-100 shadow-lg">
                      <div className="card-body">
                        <div className="grid grid-cols-1">
                          <CODESnippet
                            codeSnippets={[
                              {
                                title: "Material UI",
                                language: "bash",
                                code: `npm install @mui/material @emotion/react @emotion/styled`,
                              },
                            ]}
                          />
                          <CODESnippet
                            codeSnippets={[
                              {
                                title: "Daisy UI",
                                language: "bash",
                                code: `npm i -D daisyui@latest`,
                              },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              {selectedProduct && (
                <div className="mt-4 p-4 bg-success/10 rounded-lg">
                  <p className="text-sm text-success">
                    ✅ Selected: <strong>{selectedProduct}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UI_Daisyui_autocomplete;
