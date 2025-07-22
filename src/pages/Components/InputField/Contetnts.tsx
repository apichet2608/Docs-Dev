import { useState } from "react";
import FormField from "./FormField";

const InputFieldContents = () => {
  // State สำหรับแต่ละ input type
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [currencyValue, setCurrencyValue] = useState("");
  const [disabledValue, setDisabledValue] = useState("This field is disabled");

  // Options สำหรับ select
  const countryOptions = [
    "Thailand",
    "United States",
    "Japan",
    "Germany",
    "Australia",
    "Singapore",
    "South Korea",
  ];

  const examples = [
    {
      title: "Text Input",
      icon: "📝",
      description: "Basic text input field",
      component: (
        <FormField
          label="Full Name"
          name="fullName"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          type="text"
          placeholder="Enter your full name"
          required
          className="mb-4"
        />
      ),
    },
    {
      title: "Number Input",
      icon: "🔢",
      description: "Numeric input with validation",
      component: (
        <FormField
          label="Age"
          name="age"
          value={numberValue}
          onChange={(e) => setNumberValue(e.target.value)}
          type="number"
          placeholder="Enter your age"
          required
          className="mb-4"
        />
      ),
    },
    {
      title: "Date Input",
      icon: "📅",
      description: "Date picker input",
      component: (
        <FormField
          label="Date of Birth"
          name="dateOfBirth"
          value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
          type="date"
          required
          className="mb-4"
          helperText="Please select your date of birth"
        />
      ),
    },
    {
      title: "Textarea",
      icon: "📄",
      description: "Multi-line text input",
      component: (
        <FormField
          label="Message"
          name="message"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          type="textarea"
          placeholder="Write your message here..."
          className="mb-4"
        />
      ),
    },
    {
      title: "Select Dropdown",
      icon: "📋",
      description: "Dropdown selection",
      component: (
        <FormField
          label="Country"
          name="country"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          type="select"
          options={countryOptions}
          required
          className="mb-4"
        />
      ),
    },
    {
      title: "Input with Suffix",
      icon: "💰",
      description: "Input field with suffix text",
      component: (
        <FormField
          label="Price"
          name="price"
          value={currencyValue}
          onChange={(e) => setCurrencyValue(e.target.value)}
          type="number"
          placeholder="0.00"
          suffix="USD"
          className="mb-4"
        />
      ),
    },
    {
      title: "Email Input",
      icon: "📧",
      description: "Email input with validation",
      component: (
        <FormField
          label="Email Address"
          name="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          type="text"
          placeholder="your.email@example.com"
          required
          className="mb-4"
        />
      ),
    },
    {
      title: "Phone Input",
      icon: "📱",
      description: "Phone number input",
      component: (
        <FormField
          label="Phone Number"
          name="phone"
          value={phoneValue}
          onChange={(e) => setPhoneValue(e.target.value)}
          type="text"
          placeholder="+66 XX-XXX-XXXX"
          className="mb-4"
        />
      ),
    },
    {
      title: "Disabled Field",
      icon: "🔒",
      description: "Disabled input field",
      component: (
        <FormField
          label="Read Only Field"
          name="readOnly"
          value={disabledValue}
          onChange={(e) => setDisabledValue(e.target.value)}
          type="text"
          disabled
          className="mb-4"
        />
      ),
    },
    // password
    {
      title: "Password Input",
      icon: "🔒",
      description: "Password input with validation",
      component: (
        <FormField
          label="Password"
          name="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
          placeholder="Enter your password"
          required
          className="mb-4"
        />
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 bg-primary/10 rounded-full">
            <span className="text-3xl">📝</span>
          </div>
          <h1 className="text-4xl font-bold text-primary">
            FormField Components
          </h1>
        </div>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          Comprehensive form field components with MUI TextField and DaisyUI
          styling. Supports multiple input types with consistent design.
        </p>
      </div>

      {/* Live Examples Grid */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-2">
            🚀 Live Examples
          </h2>
          <p className="text-base-content/70">
            Try out all the different input types and configurations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{example.icon}</span>
                  <div>
                    <h3 className="card-title text-lg text-primary">
                      {example.title}
                    </h3>
                    <p className="text-sm text-base-content/70">
                      {example.description}
                    </p>
                  </div>
                </div>
                <div className="form-demo">{example.component}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Props Documentation */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-2">
            📚 Props Documentation
          </h2>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-mono text-primary">label</td>
                    <td className="font-mono">string</td>
                    <td>
                      <span className="badge badge-error">Required</span>
                    </td>
                    <td>-</td>
                    <td>Label text for the input field</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-primary">name</td>
                    <td className="font-mono">string</td>
                    <td>
                      <span className="badge badge-error">Required</span>
                    </td>
                    <td>-</td>
                    <td>Name attribute for the input</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-primary">value</td>
                    <td className="font-mono">any</td>
                    <td>
                      <span className="badge badge-error">Required</span>
                    </td>
                    <td>-</td>
                    <td>Current value of the input</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-primary">onChange</td>
                    <td className="font-mono">function</td>
                    <td>
                      <span className="badge badge-error">Required</span>
                    </td>
                    <td>-</td>
                    <td>Callback function when value changes</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-primary">type</td>
                    <td className="font-mono">string</td>
                    <td>
                      <span className="badge badge-ghost">Optional</span>
                    </td>
                    <td>"text"</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-primary">type</td>
                    <td className="font-mono">string</td>
                    <td>
                      <span className="badge badge-ghost">Optional</span>
                    </td>
                    <td>"text"</td>
                    <td>Input type: text, number, date, textarea, select</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-primary">placeholder</td>
                    <td className="font-mono">string</td>
                    <td>
                      <span className="badge badge-ghost">Optional</span>
                    </td>
                    <td>""</td>
                    <td>Placeholder text for the input</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-primary">required</td>
                    <td className="font-mono">boolean</td>
                    <td>
                      <span className="badge badge-ghost">Optional</span>
                    </td>
                    <td>false</td>
                    <td>Whether the field is required</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-primary">options</td>
                    <td className="font-mono">string[]</td>
                    <td>
                      <span className="badge badge-ghost">Optional</span>
                    </td>
                    <td>[]</td>
                    <td>Options array for select type</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-primary">suffix</td>
                    <td className="font-mono">string</td>
                    <td>
                      <span className="badge badge-ghost">Optional</span>
                    </td>
                    <td>-</td>
                    <td>Suffix text to display after input</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-primary">className</td>
                    <td className="font-mono">string</td>
                    <td>
                      <span className="badge badge-ghost">Optional</span>
                    </td>
                    <td>""</td>
                    <td>Additional CSS classes</td>
                  </tr>
                  <tr>
                    <td className="font-mono text-primary">disabled</td>
                    <td className="font-mono">boolean</td>
                    <td>
                      <span className="badge badge-ghost">Optional</span>
                    </td>
                    <td>false</td>
                    <td>Whether the field is disabled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-2">
            ✨ Features
          </h2>
          <p className="text-base-content/70">
            Key features of the FormField component
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="card-title text-primary">MUI + DaisyUI</h3>
              <p className="text-base-content/70">
                Perfect blend of Material-UI functionality with DaisyUI styling
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="card-title text-primary">Responsive</h3>
              <p className="text-base-content/70">
                Fully responsive design that works on all devices
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="card-title text-primary">Customizable</h3>
              <p className="text-base-content/70">
                Highly customizable with CSS variables and props
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="card-title text-primary">TypeScript</h3>
              <p className="text-base-content/70">
                Full TypeScript support with type safety
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="card-title text-primary">Accessibility</h3>
              <p className="text-base-content/70">
                Built with accessibility best practices in mind
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="card-title text-primary">Multiple Types</h3>
              <p className="text-base-content/70">
                Supports text, number, date, textarea, and select inputs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-2">
            💻 Code Examples
          </h2>
          <p className="text-base-content/70">
            How to use the FormField component
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-primary mb-4">Basic Usage</h3>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code className="text-sm">
                    import FormField from './FormField';
                  </code>
                </pre>
                <pre data-prefix="2">
                  <code className="text-sm">
                    {/* import {useState} from 'react'; */}
                  </code>
                </pre>
                <pre data-prefix="3">
                  <code className="text-sm"></code>
                </pre>
                <pre data-prefix="4">
                  <code className="text-sm">
                    const [value, setValue] = useState('');
                  </code>
                </pre>
                <pre data-prefix="5">
                  <code className="text-sm"></code>
                </pre>
                <pre data-prefix="6">
                  <code className="text-sm">&lt;FormField</code>
                </pre>
                <pre data-prefix="7">
                  <code className="text-sm"> label="Name"</code>
                </pre>
                <pre data-prefix="8">
                  <code className="text-sm"> name="name"</code>
                </pre>
                <pre data-prefix="9">
                  {/* <code className="text-sm"> value={value}</code> */}
                </pre>
                <pre data-prefix="10">
                  <code className="text-sm">
                    {" "}
                    {/* onChange={(e) => setValue(e.target.value)} */}
                  </code>
                </pre>
                <pre data-prefix="11">
                  <code className="text-sm"> type="text"</code>
                </pre>
                <pre data-prefix="12">
                  <code className="text-sm">
                    {" "}
                    placeholder="Enter your name"
                  </code>
                </pre>
                <pre data-prefix="13">
                  <code className="text-sm"> required</code>
                </pre>
                <pre data-prefix="14">
                  <code className="text-sm">/&gt;</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-primary mb-4">Select Example</h3>
              <div className="mockup-code">
                <pre data-prefix="1">
                  <code className="text-sm">const options = [</code>
                </pre>
                <pre data-prefix="2">
                  <code className="text-sm"> 'Thailand',</code>
                </pre>
                <pre data-prefix="3">
                  <code className="text-sm"> 'United States',</code>
                </pre>
                <pre data-prefix="4">
                  <code className="text-sm"> 'Japan'</code>
                </pre>
                <pre data-prefix="5">
                  <code className="text-sm">];</code>
                </pre>
                <pre data-prefix="6">
                  <code className="text-sm"></code>
                </pre>
                <pre data-prefix="7">
                  <code className="text-sm">&lt;FormField</code>
                </pre>
                <pre data-prefix="8">
                  <code className="text-sm"> label="Country"</code>
                </pre>
                <pre data-prefix="9">
                  <code className="text-sm"> name="country"</code>
                </pre>
                <pre data-prefix="10">
                  {/* <code className="text-sm"> value={selectedCountry}</code> */}
                </pre>
                <pre data-prefix="11">
                  <code className="text-sm">
                    {" "}
                    {/* onChange={(e) => setSelectedCountry(e.target.value)} */}
                  </code>
                </pre>
                <pre data-prefix="12">
                  <code className="text-sm"> type="select"</code>
                </pre>
                <pre data-prefix="13">
                  {/* <code className="text-sm"> options={options}</code> */}
                </pre>
                <pre data-prefix="14">
                  <code className="text-sm"> required</code>
                </pre>
                <pre data-prefix="15">
                  <code className="text-sm">/&gt;</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-2">
            💡 Pro Tips
          </h2>
          <p className="text-base-content/70">
            Best practices for using FormField components
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-success">✅ Do</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Use meaningful labels for accessibility</li>
                <li>Implement proper form validation</li>
                <li>Group related fields together</li>
                <li>Use appropriate input types for better UX</li>
                <li>Provide clear error messages</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-error">❌ Don't</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Use generic labels like "Input"</li>
                <li>Make all fields required unnecessarily</li>
                <li>Ignore mobile responsiveness</li>
                <li>Use complex validation without feedback</li>
                <li>Forget to handle loading states</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pt-8 border-t border-base-300">
        <div className="space-y-4">
          <p className="text-base-content/70">
            Built with ❤️ using React, TypeScript, MUI, and DaisyUI
          </p>
          <div className="flex justify-center gap-4">
            <div className="badge badge-primary">React 18+</div>
            <div className="badge badge-secondary">TypeScript</div>
            <div className="badge badge-accent">Material-UI</div>
            <div className="badge badge-info">DaisyUI</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InputFieldContents;
