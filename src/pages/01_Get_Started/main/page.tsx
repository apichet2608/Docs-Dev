import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Chip,
  Box,
  Paper,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import UI_Daisyui_autocomplete from "@/pages/Components/Autocomplete/daisyui-autocomplete/Contents";
import InputFieldComponents from "@/pages/Components/InputField/Contetnts";
interface ComponentItem {
  id: string;
  name: string;
  description: string;
  category: string;
  component: React.ComponentType;
  tags?: string[];
  color?: "primary" | "secondary" | "accent" | "info" | "success" | "warning";
  create_by: string;
}

const GetStartedPage: React.FC = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // รายการคอมโพเนนต์ที่มีให้เลือก
  const componentsList: ComponentItem[] = [
    {
      id: "daisyui-autocomplete",
      name: "Autocomplete (MUI + DaisyUI)",
      description: "Input field with autocomplete functionality using styling",
      category: "Form Controls",
      component: UI_Daisyui_autocomplete,
      tags: ["input", "search", "form", "autocomplete"],
      color: "primary",
      create_by: "APICHET",
    },
    {
      id: "daisyui-input-field",
      name: "Input Field",
      description: "Input field with various styles and variants using DaisyUI",
      category: "Form Controls",
      component: InputFieldComponents,
      tags: ["input", "form", "styles", "variants"],
      color: "primary",
      create_by: "APICHET",
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
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
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
                            <div className="badge badge-neutral badge-xs">
                              Created by: {item.create_by}
                            </div>
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

        {/* MUI Dialog */}
        <Dialog
          open={isDialogOpen}
          onClose={closeDialog}
          fullScreen
          maxWidth="xl"
          fullWidth
          // PaperProps={{
          //   sx: {
          //     maxHeight: "90vh",
          //     borderRadius: 3,
          //     backgroundColor:
          //       "var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))",
          //   },
          // }}
        >
          {selectedComponent && (
            <>
              <DialogTitle sx={{ p: 3, pb: 1 }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography
                      variant="h4"
                      component="h2"
                      fontWeight="bold"
                      color="primary"
                      gutterBottom
                    >
                      {selectedComponent.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {selectedComponent.description}
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      gap={1}
                      flexWrap="wrap"
                    >
                      <Chip
                        label={selectedComponent.category}
                        color="primary"
                        variant="filled"
                        size="medium"
                      />
                      {selectedComponent.tags?.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          variant="outlined"
                          size="small"
                          color="default"
                        />
                      ))}
                    </Box>
                  </Box>
                  <IconButton
                    aria-label="close"
                    onClick={closeDialog}
                    sx={{
                      color: "text.secondary",
                      "&:hover": {
                        color: "error.main",
                        backgroundColor: "error.light",
                      },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </DialogTitle>

              <DialogContent dividers sx={{ p: 0 }}>
                {/* <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    backgroundColor:
                      "var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)))",
                    border:
                      "1px solid var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)))",
                  }}
                > */}
                <selectedComponent.component />
                {/* </Paper> */}
              </DialogContent>

              {/* <DialogActions sx={{ p: 3, pt: 2 }}>
                <Button
                  onClick={closeDialog}
                  variant="outlined"
                  color="inherit"
                  startIcon={<CloseIcon />}
                  sx={{ minWidth: 120 }}
                >
                  Close
                </Button>
              </DialogActions> */}
            </>
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default GetStartedPage;
