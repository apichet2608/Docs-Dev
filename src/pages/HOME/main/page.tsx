// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Zap,
//   Atom,
//   Palette,
//   Package,
//   Calendar,
//   Shield,
//   BarChart3,
//   Grid3X3,
//   Sparkles,
//   Code,
//   Smartphone,
// } from "lucide-react";

// const HomePage: React.FC = () => {
//   const features = [
//     {
//       icon: <Palette className="w-6 h-6" />,
//       title: "Modern UI",
//       desc: "Tailwind + DaisyUI + MUI",
//     },
//     {
//       icon: <Package className="w-6 h-6" />,
//       title: "Reusable Components",
//       desc: "Enterprise-style components",
//     },
//     {
//       icon: <BarChart3 className="w-6 h-6" />,
//       title: "Built-in Charting",
//       desc: "Chart.js, react-chartjs-2",
//     },
//     {
//       icon: <Grid3X3 className="w-6 h-6" />,
//       title: "Grid System",
//       desc: "MUI X Data Grid",
//     },
//     {
//       icon: <Sparkles className="w-6 h-6" />,
//       title: "Theming",
//       desc: "Multiple theme support",
//     },
//     {
//       icon: <Calendar className="w-6 h-6" />,
//       title: "Rich Interactions",
//       desc: "Date pickers, toasts, alerts",
//     },
//     {
//       icon: <Code className="w-6 h-6" />,
//       title: "API Ready",
//       desc: "Axios integration",
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "PWA Ready",
//       desc: "Offline support",
//     },
//   ];

//   const techStack = [
//     { category: "Core", techs: ["React 18", "Vite", "TypeScript"] },
//     { category: "Styling", techs: ["TailwindCSS 4", "DaisyUI 5", "Emotion"] },
//     { category: "UI Components", techs: ["MUI 6", "DaisyUI", "Custom Themes"] },
//     {
//       category: "Data Display",
//       techs: ["MUI X DataGrid", "Chart.js", "react-chartjs-2"],
//     },
//     {
//       category: "Utilities",
//       techs: ["Axios", "React Router", "Framer Motion"],
//     },
//     {
//       category: "UX Enhancements",
//       techs: ["SweetAlert2", "React Toastify", "DatePicker"],
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//     },
//   };

//   return (
//     <div className="min-h-screen bg-base-100">
//       {/* Hero Section */}
//       <motion.div
//         className="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="hero-content text-center">
//           <div className="max-w-4xl">
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="text-6xl font-bold mb-4">
//                 🌟 <span className="text-primary">MyApp</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
//                 Fullstack-ready Web Application Starter
//               </h1>
//               <p className="text-xl text-base-content/80 mb-8 max-w-2xl mx-auto">
//                 Modern UI/UX with ultra-fast frontend tooling, component-rich
//                 design, and enterprise-ready features for your next project.
//               </p>
//             </motion.div>

//             <motion.div
//               className="flex flex-wrap justify-center gap-4 mb-8"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.6 }}
//             >
//               <div className="badge badge-primary badge-lg gap-2">
//                 <Zap className="w-4 h-4" />
//                 Vite
//               </div>
//               <div className="badge badge-secondary badge-lg gap-2">
//                 <Atom className="w-4 h-4" />
//                 React 18
//               </div>
//               <div className="badge badge-accent badge-lg gap-2">
//                 <Palette className="w-4 h-4" />
//                 MUI + TailwindCSS
//               </div>
//               <div className="badge badge-info badge-lg gap-2">
//                 <Smartphone className="w-4 h-4" />
//                 PWA Ready
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ y: 30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.6 }}
//             >
//               <button className="btn btn-primary btn-lg mr-4">
//                 Get Started
//               </button>
//               <button className="btn btn-outline btn-lg">View Demo</button>
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Features Section */}
//       <motion.section
//         className="py-20 px-4"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.div className="text-center mb-16" variants={itemVariants}>
//             <h2 className="text-4xl font-bold text-base-content mb-4">
//               🚀 Features
//             </h2>
//             <p className="text-xl text-base-content/70">
//               Everything you need to build modern web applications
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300"
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="card-body text-center">
//                   <div className="flex justify-center mb-4 text-primary">
//                     {feature.icon}
//                   </div>
//                   <h3 className="card-title justify-center text-base-content">
//                     {feature.title}
//                   </h3>
//                   <p className="text-base-content/70 text-sm">{feature.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Tech Stack Section */}
//       <motion.section
//         className="py-20 px-4 bg-base-200"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.div className="text-center mb-16" variants={itemVariants}>
//             <h2 className="text-4xl font-bold text-base-content mb-4">
//               📦 Tech Stack
//             </h2>
//             <p className="text-xl text-base-content/70">
//               Built with modern and reliable technologies
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {techStack.map((stack, index) => (
//               <motion.div
//                 key={index}
//                 className="card bg-base-100 shadow-lg"
//                 variants={itemVariants}
//               >
//                 <div className="card-body">
//                   <h3 className="card-title text-primary mb-4">
//                     {stack.category}
//                   </h3>
//                   <div className="space-y-2">
//                     {stack.techs.map((tech, techIndex) => (
//                       <div
//                         key={techIndex}
//                         className="badge badge-outline badge-lg w-full justify-start"
//                       >
//                         {tech}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Project Structure Section */}
//       <motion.section
//         className="py-20 px-4"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="max-w-4xl mx-auto">
//           <motion.div className="text-center mb-16" variants={itemVariants}>
//             <h2 className="text-4xl font-bold text-base-content mb-4">
//               📂 Project Structure
//             </h2>
//             <p className="text-xl text-base-content/70">
//               Organized and scalable folder structure
//             </p>
//           </motion.div>

//           <motion.div
//             className="mockup-code bg-base-300 shadow-2xl"
//             variants={itemVariants}
//           >
//             <pre data-prefix="$">
//               <code>src/</code>
//             </pre>
//             <pre data-prefix="├──" className="text-primary">
//               <code>assets/ # Icons, images, etc.</code>
//             </pre>
//             <pre data-prefix="├──" className="text-secondary">
//               <code>components/ # Reusable components</code>
//             </pre>
//             <pre data-prefix="├──" className="text-accent">
//               <code>pages/ # Main page routes</code>
//             </pre>
//             <pre data-prefix="├──" className="text-info">
//               <code>services/ # Axios API services</code>
//             </pre>
//             <pre data-prefix="├──" className="text-success">
//               <code>hooks/ # Custom React hooks</code>
//             </pre>
//             <pre data-prefix="├──" className="text-warning">
//               <code>styles/ # Tailwind + DaisyUI config</code>
//             </pre>
//             <pre data-prefix="├──">
//               <code>App.tsx</code>
//             </pre>
//             <pre data-prefix="└──">
//               <code>main.tsx</code>
//             </pre>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <footer className="footer footer-center p-10 bg-base-300 text-base-content">
//         <div>
//           <div className="text-2xl font-bold">🌟 MyApp</div>
//           <p className="font-semibold">
//             Modern fullstack web application starter
//           </p>
//           <p>Built with ❤️ using React, Vite, and DaisyUI</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Atom,
  Palette,
  Package,
  Calendar,
  Shield,
  BarChart3,
  Grid3X3,
  Sparkles,
  Code,
  Smartphone,
  Info,
} from "lucide-react";

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Modern UI",
      desc: "Tailwind + DaisyUI + MUI",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Reusable Components",
      desc: "Enterprise-style components",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Built-in Charting",
      desc: "Chart.js, react-chartjs-2",
    },
    {
      icon: <Grid3X3 className="w-6 h-6" />,
      title: "Grid System",
      desc: "MUI X Data Grid",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Theming",
      desc: "Multiple theme support",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Rich Interactions",
      desc: "Date pickers, toasts, alerts",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "API Ready",
      desc: "Axios integration",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "PWA Ready",
      desc: "Offline support",
    },
  ];

  const techStack = [
    { category: "Core", techs: ["React 18", "Vite", "TypeScript"] },
    { category: "Styling", techs: ["TailwindCSS 4", "DaisyUI 5", "Emotion"] },
    { category: "UI Components", techs: ["MUI 6", "DaisyUI", "Custom Themes"] },
    {
      category: "Data Display",
      techs: ["MUI X DataGrid", "Chart.js", "react-chartjs-2"],
    },
    {
      category: "Utilities",
      techs: ["Axios", "React Router", "Framer Motion"],
    },
    {
      category: "UX Enhancements",
      techs: ["SweetAlert2", "React Toastify", "DatePicker"],
    },
  ];

  // เพิ่มข้อมูล version ของ libraries
  const libraryVersions = [
    { name: "React", version: "^18.0.0", category: "Core Framework" },
    { name: "Vite", version: "^6.2.1", category: "Build Tool" },
    { name: "TypeScript", version: "~5.8.2", category: "Language" },
    { name: "TailwindCSS", version: "^4.0.12", category: "CSS Framework" },
    { name: "DaisyUI", version: "^5.0.0", category: "UI Components" },
    { name: "@mui/material", version: "^6.3.0", category: "UI Library" },
    { name: "@mui/x-data-grid", version: "^7.23.3", category: "Data Grid" },
    { name: "framer-motion", version: "^12.4.10", category: "Animation" },
    { name: "axios", version: "^1.8.2", category: "HTTP Client" },
    { name: "react-router-dom", version: "^7.3.0", category: "Routing" },
    { name: "chart.js", version: "^4.4.8", category: "Charts" },
    { name: "react-chartjs-2", version: "^5.3.0", category: "React Charts" },
    { name: "sweetalert2", version: "^11.17.2", category: "Alerts" },
    { name: "react-toastify", version: "^11.0.5", category: "Notifications" },
    { name: "react-datepicker", version: "^8.1.0", category: "Date Picker" },
    { name: "lucide-react", version: "^0.479.0", category: "Icons" },
    { name: "next-themes", version: "^0.4.4", category: "Theme Management" },
    { name: "vite-plugin-pwa", version: "^0.21.1", category: "PWA Support" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <motion.div
        className="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl font-bold mb-4">
                🌟 <span className="text-primary">MyApp</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
                Fullstack-ready Web Application Starter
              </h1>
              <p className="text-xl text-base-content/80 mb-8 max-w-2xl mx-auto">
                Modern UI/UX with ultra-fast frontend tooling, component-rich
                design, and enterprise-ready features for your next project.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="badge badge-primary badge-lg gap-2">
                <Zap className="w-4 h-4" />
                Vite
              </div>
              <div className="badge badge-secondary badge-lg gap-2">
                <Atom className="w-4 h-4" />
                React 18
              </div>
              <div className="badge badge-accent badge-lg gap-2">
                <Palette className="w-4 h-4" />
                MUI + TailwindCSS
              </div>
              <div className="badge badge-info badge-lg gap-2">
                <Smartphone className="w-4 h-4" />
                PWA Ready
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button
                className="btn btn-primary btn-lg mr-4"
                onClick={() =>
                  (window.location.href = "/template-typescript/get-started")
                }
              >
                Get Started
              </button>
              <button className="btn btn-outline btn-lg">View Demo</button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        className="py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-base-content mb-4">
              🚀 Features
            </h2>
            <p className="text-xl text-base-content/70">
              Everything you need to build modern web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card-body text-center">
                  <div className="flex justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="card-title justify-center text-base-content">
                    {feature.title}
                  </h3>
                  <p className="text-base-content/70 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        className="py-20 px-4 bg-base-200"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-base-content mb-4">
              📦 Tech Stack
            </h2>
            <p className="text-xl text-base-content/70">
              Built with modern and reliable technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                className="card bg-base-100 shadow-lg"
                variants={itemVariants}
              >
                <div className="card-body">
                  <h3 className="card-title text-primary mb-4">
                    {stack.category}
                  </h3>
                  <div className="space-y-2">
                    {stack.techs.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="badge badge-outline badge-lg w-full justify-start"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Library Versions Section - เพิ่มส่วนใหม่ */}
      <motion.section
        className="py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-base-content mb-4">
              📋 Library Versions
            </h2>
            <p className="text-xl text-base-content/70">
              Complete list of dependencies and their versions
            </p>
          </motion.div>

          <motion.div
            className="card bg-base-200 shadow-xl"
            variants={itemVariants}
          >
            <div className="card-body">
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th className="text-primary">
                        <Info className="w-4 h-4 inline mr-2" />
                        Library Name
                      </th>
                      <th className="text-secondary">Version</th>
                      <th className="text-accent">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {libraryVersions.map((lib, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-base-300 transition-colors"
                      >
                        <td className="font-semibold text-base-content">
                          {lib.name}
                        </td>
                        <td>
                          <div className="badge badge-success badge-sm">
                            {lib.version}
                          </div>
                        </td>
                        <td>
                          <div className="badge badge-outline badge-sm">
                            {lib.category}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="divider"></div>

              <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                  <div className="stat-title">Total Dependencies</div>
                  <div className="stat-value text-primary">
                    {libraryVersions.length}
                  </div>
                </div>
                <div className="stat">
                  <div className="stat-title">Core Libraries</div>
                  <div className="stat-value text-secondary">8</div>
                  <div className="stat-desc">React, TypeScript, Vite</div>
                </div>
                <div className="stat">
                  <div className="stat-title">UI Libraries</div>
                  <div className="stat-value text-accent">6</div>
                  <div className="stat-desc">MUI, Tailwind, DaisyUI</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Latest Updates</div>
                  <div className="stat-value text-info">2024</div>
                  <div className="stat-desc">All libraries up-to-date</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Version Highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            variants={containerVariants}
          >
            <motion.div
              className="card bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20"
              variants={itemVariants}
            >
              <div className="card-body text-center">
                <Atom className="w-8 h-8 mx-auto text-primary mb-2" />
                <h3 className="font-bold text-primary">React 18</h3>
                <p className="text-sm opacity-70">
                  Latest with Concurrent Features
                </p>
              </div>
            </motion.div>

            <motion.div
              className="card bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20"
              variants={itemVariants}
            >
              <div className="card-body text-center">
                <Zap className="w-8 h-8 mx-auto text-secondary mb-2" />
                <h3 className="font-bold text-secondary">Vite 6</h3>
                <p className="text-sm opacity-70">Lightning Fast Build Tool</p>
              </div>
            </motion.div>

            <motion.div
              className="card bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20"
              variants={itemVariants}
            >
              <div className="card-body text-center">
                <Palette className="w-8 h-8 mx-auto text-accent mb-2" />
                <h3 className="font-bold text-accent">Tailwind 4</h3>
                <p className="text-sm opacity-70">Next-Gen CSS Framework</p>
              </div>
            </motion.div>

            <motion.div
              className="card bg-gradient-to-br from-info/20 to-info/5 border border-info/20"
              variants={itemVariants}
            >
              <div className="card-body text-center">
                <Package className="w-8 h-8 mx-auto text-info mb-2" />
                <h3 className="font-bold text-info">MUI 6</h3>
                <p className="text-sm opacity-70">Material Design Components</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Structure Section */}
      <motion.section
        className="py-20 px-4 bg-base-200"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-base-content mb-4">
              📂 Project Structure
            </h2>
            <p className="text-xl text-base-content/70">
              Organized and scalable folder structure
            </p>
          </motion.div>

          <motion.div
            className="mockup-code bg-base-300 shadow-2xl"
            variants={itemVariants}
          >
            <pre data-prefix="$">
              <code>src/</code>
            </pre>
            <pre data-prefix="├──" className="text-primary">
              <code>assets/ # Icons, images, etc.</code>
            </pre>
            <pre data-prefix="├──" className="text-secondary">
              <code>components/ # Reusable components</code>
            </pre>
            <pre data-prefix="├──" className="text-accent">
              <code>pages/ # Main page routes</code>
            </pre>
            <pre data-prefix="├──" className="text-info">
              <code>services/ # Axios API services</code>
            </pre>
            <pre data-prefix="├──" className="text-success">
              <code>hooks/ # Custom React hooks</code>
            </pre>
            <pre data-prefix="├──" className="text-warning">
              <code>styles/ # Tailwind + DaisyUI config</code>
            </pre>
            <pre data-prefix="├──">
              <code>App.tsx</code>
            </pre>
            <pre data-prefix="└──">
              <code>main.tsx</code>
            </pre>
          </motion.div>

          {/* Package.json Preview */}
          <motion.div className="mt-8" variants={itemVariants}>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary mb-4">
                  📄 Package.json Overview
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title">Dependencies</div>
                    <div className="stat-value text-primary">22</div>
                    <div className="stat-desc">Production ready</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title">Dev Dependencies</div>
                    <div className="stat-value text-secondary">12</div>
                    <div className="stat-desc">Development tools</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title">Node Version</div>
                    <div className="stat-value text-accent">18+</div>
                    <div className="stat-desc">Recommended</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content">
        <div>
          <div className="text-2xl font-bold">🌟 MyApp</div>
          <p className="font-semibold">
            Modern fullstack web application starter
          </p>
          <p>Built with ❤️ using React, Vite, and DaisyUI</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <div className="badge badge-outline">v0.0.0</div>
            <div className="badge badge-outline">React 18</div>
            <div className="badge badge-outline">TypeScript 5.8</div>
            <div className="badge badge-outline">Vite 6</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
