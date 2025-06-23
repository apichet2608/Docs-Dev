import { useState } from "react";
import CODESnippet from "@/pages/Components/CODESnippet/CODESnippet";
import DynamicAutocomplete from "./DynamicAutocomplete"; // import component จริง
import autocompleteCode from "./code.txt?raw";

const GetStartedPage: React.FC = () => {
  // State สำหรับ demo
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  // ข้อมูลตัวอย่าง
  const productOptions = [
    { product_name: "MacBook Pro", product_id: 1, category: "Laptop" },
    { product_name: "iPhone 15", product_id: 2, category: "Phone" },
    { product_name: "iPad Air", product_id: 3, category: "Tablet" },
    { product_name: "Apple Watch", product_id: 4, category: "Wearable" },
  ];

  const categoryOptions = [
    { name: "Electronics", id: 1 },
    { name: "Clothing", id: 2 },
    { name: "Books", id: 3 },
    { name: "Sports", id: 4 },
  ];

  const statusOptions = [
    { label: "Active", value: "active", color: "green" },
    { label: "Inactive", value: "inactive", color: "red" },
    { label: "Pending", value: "pending", color: "yellow" },
    { label: "Draft", value: "draft", color: "gray" },
  ];

  // Code snippets
  const componentCodeSnippets = [
    {
      title: "DynamicAutocomplete Component",
      language: "typescript",
      code: autocompleteCode,
    },
  ];

  const basicUsageSnippets = [
    {
      title: "Basic Usage",
      language: "typescript",
      code: `import DynamicAutocomplete from './DynamicAutocomplete';

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');
  
  const options = [
    { product_name: 'MacBook Pro', product_id: 1 },
    { product_name: 'iPhone 15', product_id: 2 },
    { product_name: 'iPad Air', product_id: 3 },
  ];

  return (
    <DynamicAutocomplete
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      optionKey="product_name"
      label="Select Product"
      placeholder="Choose a product..."
    />
  );
};`,
    },
  ];

  const advancedUsageSnippets = [
    {
      title: "Advanced Usage with Different Keys",
      language: "typescript",
      code: `// ใช้ key ต่างกันสำหรับ value และ display
const statusOptions = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];

<DynamicAutocomplete
  options={statusOptions}
  value={selectedStatus}
  onChange={setSelectedStatus}
  optionKey="value"        // ใช้เป็น value
  displayKey="label"       // แสดงผลเป็น label
  label="Status"
  placeholder="Select status..."
/>`,
    },
  ];

  const propsDocumentation = [
    {
      title: "Props Documentation",
      language: "typescript",
      code: `interface AutocompleteProps {
  options: any[];              // รายการตัวเลือก
  value: string;               // ค่าที่เลือกอยู่
  onChange: (value: string) => void;  // ฟังก์ชันเมื่อเปลี่ยนค่า
  disabled?: boolean;          // ปิดการใช้งาน (default: false)
  label?: string;              // ป้ายชื่อ (default: "Select Option")
  optionKey: string;           // key สำหรับค่า value เช่น 'id', 'name'
  displayKey?: string;         // key สำหรับแสดงผล (ถ้าไม่ระบุจะใช้ optionKey)
  placeholder?: string;        // ข้อความตัวอย่าง
}`,
    },
  ];

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          DynamicAutocomplete
        </h1>
        <p className="text-lg text-base-content/70">
          A flexible autocomplete component built with MUI that supports dynamic
          option keys and custom styling.
        </p>
      </div>

      {/* Live Demo Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-secondary">
          🚀 Live Demo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Basic Example */}
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-lg">Basic Usage</h3>
              <DynamicAutocomplete
                options={productOptions}
                value={selectedProduct}
                onChange={setSelectedProduct}
                optionKey="product_name"
                label="Select Product"
                placeholder="Choose a product..."
              />
              <div className="mt-2 text-sm">
                <strong>Selected:</strong> {selectedProduct || "None"}
              </div>
            </div>
          </div>

          {/* Different Keys Example */}
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-lg">Different Display Key</h3>
              <DynamicAutocomplete
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
                optionKey="id"
                displayKey="name"
                label="Category"
                placeholder="Select category..."
              />
              <div className="mt-2 text-sm">
                <strong>Selected ID:</strong> {selectedCategory || "None"}
              </div>
            </div>
          </div>

          {/* Disabled Example */}
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-lg">Disabled State</h3>
              <DynamicAutocomplete
                options={statusOptions}
                value="active"
                onChange={() => {}}
                optionKey="value"
                displayKey="label"
                label="Status"
                disabled={true}
              />
              <div className="mt-2 text-sm text-base-content/50">
                This component is disabled
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Props Documentation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          📖 API Reference
        </h2>
        <CODESnippet codeSnippets={propsDocumentation} />
      </section>

      {/* Basic Usage */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          🛠️ Basic Usage
        </h2>
        <CODESnippet codeSnippets={basicUsageSnippets} />
      </section>

      {/* Advanced Usage */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          ⚡ Advanced Usage
        </h2>
        <CODESnippet codeSnippets={advancedUsageSnippets} />
      </section>

      {/* Full Component Code */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          💻 Full Component Source
        </h2>
        <CODESnippet codeSnippets={componentCodeSnippets} />
      </section>

      {/* Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          ✨ Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-success">🎯 Flexible Keys</h3>
              <p>Support different keys for value and display</p>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-info">🎨 Custom Styling</h3>
              <p>CSS variables for theming support</p>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-warning">🔒 Type Safety</h3>
              <p>Full TypeScript support</p>
            </div>
          </div>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-error">🛡️ Error Handling</h3>
              <p>Safe array handling and validation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;
