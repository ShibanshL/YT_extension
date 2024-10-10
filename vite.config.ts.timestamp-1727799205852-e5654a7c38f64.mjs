// vite.config.ts
import { defineConfig } from "file:///home/shibansh/Not_Work/YT_extension/node_modules/.pnpm/vite@4.5.2/node_modules/vite/dist/node/index.js";
import react from "file:///home/shibansh/Not_Work/YT_extension/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@4.5.2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { crx } from "file:///home/shibansh/Not_Work/YT_extension/node_modules/.pnpm/@crxjs+vite-plugin@2.0.0-beta.23/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "Chrome extension BoilerPlate",
  version: "1.0.0",
  action: {
    default_popup: "index.html",
    default_icon: {
      "16": "YT_1.png",
      "24": "YT_1.png",
      "32": "YT_1.png"
    }
  },
  background: {
    service_worker: "./src/background/background.js"
  },
  icons: {
    "16": "YT_2.png",
    "32": "YT_2.png",
    "48": "YT_2.png",
    "128": "YT_2.png"
  },
  options_page: "./src/optionsPage/optionsPage.html",
  permissions: [
    "activeTab",
    "background",
    "browser_action",
    "action",
    "declarativeNetRequest",
    "declarativeNetRequestWithHostAccess",
    "tabs",
    "unlimitedStorage",
    "storage",
    "alarms",
    "activeTab",
    "scripting"
  ],
  content_security_policy: {
    extension_pages: "script-src 'self'; object-src 'self'; img-src 'self' data: blob:;"
  },
  content_scripts: [
    {
      matches: ["https://www.youtube.com/*"],
      js: ["src/content/content.tsx"],
      run_at: "document_idle"
    }
  ]
};

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [
    react(),
    crx({ manifest: manifest_default })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWFuaWZlc3QuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3NoaWJhbnNoL05vdF9Xb3JrL1lUX2V4dGVuc2lvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvc2hpYmFuc2gvTm90X1dvcmsvWVRfZXh0ZW5zaW9uL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3NoaWJhbnNoL05vdF9Xb3JrL1lUX2V4dGVuc2lvbi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyBjcnggfSBmcm9tICdAY3J4anMvdml0ZS1wbHVnaW4nXG5pbXBvcnQgbWFuaWZlc3QgZnJvbSAnLi9tYW5pZmVzdC5qc29uJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgY3J4KHsgbWFuaWZlc3QgfSksXG4gIF0sXG59KVxuIiwgIntcbiAgXCJtYW5pZmVzdF92ZXJzaW9uXCI6IDMsXG4gIFwibmFtZVwiOiBcIkNocm9tZSBleHRlbnNpb24gQm9pbGVyUGxhdGVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIixcbiAgXCJhY3Rpb25cIjoge1xuICAgIFwiZGVmYXVsdF9wb3B1cFwiOiBcImluZGV4Lmh0bWxcIixcbiAgICBcImRlZmF1bHRfaWNvblwiOiB7XG4gICAgICBcIjE2XCI6IFwiWVRfMS5wbmdcIixcbiAgICAgIFwiMjRcIjogXCJZVF8xLnBuZ1wiLFxuICAgICAgXCIzMlwiOiBcIllUXzEucG5nXCJcbiAgICB9XG4gIH0sXG5cbiAgXCJiYWNrZ3JvdW5kXCI6IHtcbiAgICBcInNlcnZpY2Vfd29ya2VyXCI6IFwiLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzXCJcbiAgfSxcbiAgXCJpY29uc1wiOiB7XG4gICAgXCIxNlwiOiBcIllUXzIucG5nXCIsXG4gICAgXCIzMlwiOiBcIllUXzIucG5nXCIsXG4gICAgXCI0OFwiOiBcIllUXzIucG5nXCIsXG4gICAgXCIxMjhcIjogXCJZVF8yLnBuZ1wiXG4gIH0sXG4gIFwib3B0aW9uc19wYWdlXCI6IFwiLi9zcmMvb3B0aW9uc1BhZ2Uvb3B0aW9uc1BhZ2UuaHRtbFwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICBcImFjdGl2ZVRhYlwiLFxuICAgIFwiYmFja2dyb3VuZFwiLFxuICAgIFwiYnJvd3Nlcl9hY3Rpb25cIixcbiAgICBcImFjdGlvblwiLFxuICAgIFwiZGVjbGFyYXRpdmVOZXRSZXF1ZXN0XCIsXG4gICAgXCJkZWNsYXJhdGl2ZU5ldFJlcXVlc3RXaXRoSG9zdEFjY2Vzc1wiLFxuICAgIFwidGFic1wiLFxuICAgIFwidW5saW1pdGVkU3RvcmFnZVwiLFxuICAgIFwic3RvcmFnZVwiLFxuICAgIFwiYWxhcm1zXCIsXG4gICAgXCJhY3RpdmVUYWJcIixcbiAgICBcInNjcmlwdGluZ1wiXG4gIF0sXG5cbiAgXCJjb250ZW50X3NlY3VyaXR5X3BvbGljeVwiOiB7XG4gICAgXCJleHRlbnNpb25fcGFnZXNcIjogXCJzY3JpcHQtc3JjICdzZWxmJzsgb2JqZWN0LXNyYyAnc2VsZic7IGltZy1zcmMgJ3NlbGYnIGRhdGE6IGJsb2I6O1wiXG4gIH0sXG5cbiAgXCJjb250ZW50X3NjcmlwdHNcIjogW1xuICAgIHtcbiAgICAgIFwibWF0Y2hlc1wiOiBbXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS8qXCJdLFxuICAgICAgXCJqc1wiOiBbXCJzcmMvY29udGVudC9jb250ZW50LnRzeFwiXSxcbiAgICAgIFwicnVuX2F0XCI6IFwiZG9jdW1lbnRfaWRsZVwiXG4gICAgfVxuICBdXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThSLFNBQVMsb0JBQW9CO0FBQzNULE9BQU8sV0FBVztBQUNsQixTQUFTLFdBQVc7OztBQ0ZwQjtBQUFBLEVBQ0Usa0JBQW9CO0FBQUEsRUFDcEIsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsUUFBVTtBQUFBLElBQ1IsZUFBaUI7QUFBQSxJQUNqQixjQUFnQjtBQUFBLE1BQ2QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFFQSxZQUFjO0FBQUEsSUFDWixnQkFBa0I7QUFBQSxFQUNwQjtBQUFBLEVBQ0EsT0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLGNBQWdCO0FBQUEsRUFDaEIsYUFBZTtBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUVBLHlCQUEyQjtBQUFBLElBQ3pCLGlCQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFFQSxpQkFBbUI7QUFBQSxJQUNqQjtBQUFBLE1BQ0UsU0FBVyxDQUFDLDJCQUEyQjtBQUFBLE1BQ3ZDLElBQU0sQ0FBQyx5QkFBeUI7QUFBQSxNQUNoQyxRQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFDRjs7O0FEM0NBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLElBQUksRUFBRSwyQkFBUyxDQUFDO0FBQUEsRUFDbEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
