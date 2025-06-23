import { useState } from "react";
import UI_Daisyui_autocomplete from "@/pages/Components/Autocomplete/daisyui-autocomplete/Contents";

interface ComponentItem {
  id: string;
  name: string;
  description: string;
  category: string;
  component: React.ComponentType;
  tags?: string[];
  color?: "primary" | "secondary" | "accent" | "info" | "success" | "warning";
}

const GetStartedPage: React.FC = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // รายการคอมโพเนนต์ที่มีให้เลือก
  const componentsList: ComponentItem[] = [
    {
      id: "daisyui-autocomplete",
      name: "DaisyUI Autocomplete",
      description:
        "Input field with autocomplete functionality using DaisyUI styling",
      category: "Form Controls",
      component: UI_Daisyui_autocomplete,
      tags: ["input", "search", "form", "autocomplete"],
      color: "primary",
    },

    // เพิ่มคอมโพเนนต์อื่นๆ ได้ที่นี่
  ];

  const categories = [...new Set(componentsList.map((item) => item.category))];

  // สีสำหรับแต่ละ category
  const categoryColors = {
    "Form Controls": "primary",
    Navigation: "secondary",
    "Data Display": "accent",
    Feedback: "info",
    Layout: "success",
    Utilities: "warning",
  } as const;

  const handleSelectComponent = (component: ComponentItem) => {
    setSelectedComponent(component);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedComponent(null);
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header */}
        <div className="hero bg-gradient-to-r from-primary to-secondary rounded-2xl mb-8 text-primary-content">
          <div className="hero-content text-center py-12">
            <div className="max-w-md ">
              <h1 className="text-5xl font-bold mb-4 text-nowrap ">
                🚀 SMART UI
              </h1>
              <p className="text-xl opacity-90">
                สำรวจและทดลองใช้คอมโพเนนต์ต่างๆ ที่พร้อมใช้งาน
              </p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-lg w-full mb-8 bg-base-100">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-base-content/70">
              Total Components
            </div>
            <div className="stat-value text-primary">
              {componentsList.length}
            </div>
            <div className="stat-desc text-base-content/50">Ready to use</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-base-content/70">Categories</div>
            <div className="stat-value text-secondary">{categories.length}</div>
            <div className="stat-desc text-base-content/50">
              Different types
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-base-content/70">Tech Stack</div>
            <div className="stat-value text-accent">React + TS</div>
            <div className="stat-desc text-base-content/50">
              Modern framework
            </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="space-y-8">
          {categories.map((category, index) => {
            const colorKey = category as keyof typeof categoryColors;
            const themeColor =
              categoryColors[colorKey] ||
              (["primary", "secondary", "accent", "info"][index % 4] as any);

            return (
              <div key={category} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-2 h-12 bg-${themeColor} rounded-full`}
                    ></div>
                    <div className="flex-1">
                      <h2 className="card-title text-2xl text-base-content">
                        {category}
                      </h2>
                      <p className="text-base-content/60">
                        Explore {category.toLowerCase()} components
                      </p>
                    </div>
                    <div className={`badge badge-${themeColor} badge-lg`}>
                      {
                        componentsList.filter(
                          (item) => item.category === category
                        ).length
                      }{" "}
                      items
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {componentsList
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="card bg-base-200 hover:bg-base-300 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:scale-105 border border-base-300 hover:border-primary/30"
                          onClick={() => handleSelectComponent(item)}
                        >
                          <div className="card-body p-6">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="card-title text-lg text-base-content">
                                {item.name}
                              </h3>
                              <div
                                className={`badge badge-${
                                  item.color || themeColor
                                } badge-outline badge-sm`}
                              >
                                Demo
                              </div>
                            </div>

                            <p className="text-base-content/70 text-sm mb-4 line-clamp-2">
                              {item.description}
                            </p>

                            {item.tags && (
                              <div className="flex flex-wrap gap-1 mb-4">
                                {item.tags.slice(0, 3).map((tag) => (
                                  <div
                                    key={tag}
                                    className="badge badge-neutral badge-xs"
                                  >
                                    {tag}
                                  </div>
                                ))}
                                {item.tags.length > 3 && (
                                  <div className="badge badge-neutral badge-xs">
                                    +{item.tags.length - 3}
                                  </div>
                                )}
                              </div>
                            )}

                            <div className="card-actions justify-end">
                              <button
                                className={`btn btn-${
                                  item.color || themeColor
                                } btn-sm`}
                              >
                                View Demo
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
          <div className="modal-box max-w-6xl w-11/12 max-h-[90vh] bg-base-100">
            {selectedComponent && (
              <>
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-3xl text-base-content mb-2">
                      {selectedComponent.name}
                    </h3>
                    <p className="text-base-content/70 text-lg">
                      {selectedComponent.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <div
                        className={`badge badge-${
                          selectedComponent.color || "primary"
                        } badge-lg`}
                      >
                        {selectedComponent.category}
                      </div>
                      {selectedComponent.tags?.map((tag) => (
                        <div key={tag} className="badge badge-neutral">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className="btn btn-circle btn-ghost hover:btn-error"
                    onClick={closeModal}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="divider"></div>

                {/* Component Preview */}
                <div className="mockup-window border border-base-300 bg-base-300">
                  <div className="flex justify-center bg-base-200 border-t border-base-300">
                    <div className="w-full p-8">
                      <selectedComponent.component />
                    </div>
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="modal-action">
                  <button className="btn btn-neutral" onClick={closeModal}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Close
                  </button>
                  <button className="btn btn-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copy Code
                  </button>
                  <button
                    className={`btn btn-${
                      selectedComponent.color || "primary"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    View Source
                  </button>
                </div>
              </>
            )}
          </div>
          <div
            className="modal-backdrop bg-neutral/50"
            onClick={closeModal}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
