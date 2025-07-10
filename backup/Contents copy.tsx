import { useState } from "react";
import Daisyui_autocomplete from "../src/pages/Components/Autocomplete/daisyui-autocomplete/Daisyui_autocomplete";
import CODESnippet from "@/pages/Components/CODESnippet/CODESnippet";
import code_how_to_use from "./code_how_to_use.txt?raw";
import autocompleteCode from "./ui_code.txt?raw";

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
      title: "Basic Usage",
      language: "typescript",
      code: code_how_to_use,
    },
  ];

  const componentCodeSnippets = [
    {
      title: "DaisyUI Autocomplete Component",
      language: "typescript",
      code: autocompleteCode,
    },
  ];

  const features = [
    {
      icon: "🔍",
      title: "Smart Search",
      description: "Real-time filtering with intelligent matching",
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Optimized for large datasets with virtual scrolling",
    },
    {
      icon: "🎨",
      title: "DaisyUI Styled",
      description: "Beautiful themes and consistent design system",
    },
    {
      icon: "♿",
      title: "Accessible",
      description: "Full keyboard navigation and screen reader support",
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Touch-optimized interface for all devices",
    },
    {
      icon: "🔧",
      title: "Customizable",
      description: "Flexible props and styling options",
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
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 bg-primary/10 rounded-full">
            <span className="text-3xl">🎯</span>
          </div>
          <h1 className="text-4xl font-bold text-primary">
            DaisyUI Autocomplete
          </h1>
        </div>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          A powerful and beautiful autocomplete component built with DaisyUI.
          Perfect for search interfaces, form inputs, and data selection.
        </p>
      </div>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="card-body">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{feature.icon}</span>
                <h3 className="card-title text-lg">{feature.title}</h3>
              </div>
              <p className="text-base-content/70">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

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

        <div className="grid lg:grid-cols-2 gap-8">
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
              <div className="join join-vertical bg-base-100">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title font-semibold">CODE</div>
                  <div className="collapse-content">
                    <section className="space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🛠️</span>
                        <h2 className="text-3xl font-bold text-secondary">
                          Usage Examples
                        </h2>
                      </div>
                      <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                          <CODESnippet codeSnippets={basicUsageSnippets} />
                        </div>
                      </div>
                    </section>
                  </div>
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

          {/* Country Search */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-primary mb-4">
                🌍 Country Search
              </h3>
              <Daisyui_autocomplete
                options={countryOptions}
                value={selectedCountry}
                onChange={setSelectedCountry}
                optionKey="name"
                label="Select Country"
                placeholder="Choose your country..."
              />
              {selectedCountry && (
                <div className="mt-4 p-4 bg-info/10 rounded-lg">
                  <p className="text-sm text-info">
                    ✅ Selected: <strong>{selectedCountry}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Skills Search */}
          <div className="card bg-base-100 shadow-lg lg:col-span-2">
            <div className="card-body">
              <h3 className="card-title text-primary mb-4">💪 Skills Search</h3>
              <Daisyui_autocomplete
                options={skillOptions}
                value={selectedSkill}
                onChange={setSelectedSkill}
                optionKey="skill"
                label="Select Your Skill"
                placeholder="What's your expertise?"
              />
              {selectedSkill && (
                <div className="mt-4 p-4 bg-warning/10 rounded-lg">
                  <p className="text-sm text-warning">
                    ✅ Selected: <strong>{selectedSkill}</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📦</span>
          <h2 className="text-3xl font-bold text-secondary">Installation</h2>
        </div>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <CODESnippet
              codeSnippets={[
                {
                  title: "Install Dependencies",
                  language: "bash",
                  code: `npm install @mui/material @emotion/react @emotion/styled`,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Props Documentation */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📋</span>
          <h2 className="text-3xl font-bold text-secondary">Props Reference</h2>
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
                            prop.required ? "badge-error" : "badge-ghost"
                          }`}
                        >
                          {prop.required ? "Required" : "Optional"}
                        </span>
                      </td>
                      <td className="text-sm">{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Component Source Code */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">💻</span>
          <h2 className="text-3xl font-bold text-secondary">
            Component Source
          </h2>
        </div>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <CODESnippet codeSnippets={componentCodeSnippets} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UI_Daisyui_autocomplete;
