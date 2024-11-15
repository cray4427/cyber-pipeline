// vitest.config.js
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { mergeConfig, defineConfig as defineConfig2, configDefaults } from "file:///workspaces/cyber-pipeline/client/node_modules/vitest/dist/config.js";

// vite.config.js
import { fileURLToPath, URL as URL2 } from "node:url";
import { defineConfig } from "file:///workspaces/cyber-pipeline/client/node_modules/vite/dist/node/index.js";
import vue from "file:///workspaces/cyber-pipeline/client/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///workspaces/cyber-pipeline/client/node_modules/unplugin-vue-components/dist/vite.js";
import { PrimeVueResolver } from "file:///workspaces/cyber-pipeline/client/node_modules/unplugin-vue-components/dist/resolvers.js";
import VueDevTools from "file:///workspaces/cyber-pipeline/client/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///workspaces/cyber-pipeline/client/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })
  ],
  optimizeDeps: {
    excluse: ["@primevue/themes"]
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false
      },
      "/auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false
      },
      "/docs": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false
      }
    }
  }
});

// vitest.config.js
var __vite_injected_original_import_meta_url2 = "file:///workspaces/cyber-pipeline/client/vitest.config.js";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/*"],
      root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2)),
      isolate: false,
      // you can also disable isolation only for specific pools
      poolOptions: {
        vmThreads: {
          isolate: false
        }
      },
      fileParallelism: false,
      setupFiles: "./__tests__/setupTests.js",
      // Path to your setup file
      coverage: {
        provider: "v8",
        reporter: ["text", "json", "html"],
        // Choose desired reporters
        include: ["src/**/*.{js,ts,vue}"],
        // Specify which files to include in coverage
        exclude: ["node_modules/**/*"],
        // Specify files to exclude from coverage
        reportsDirectory: "./__tests__/coverage"
      }
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy5qcyIsICJ2aXRlLmNvbmZpZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi93b3Jrc3BhY2VzL2N5YmVyLXBpcGVsaW5lL2NsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3dvcmtzcGFjZXMvY3liZXItcGlwZWxpbmUvY2xpZW50L3ZpdGVzdC5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3dvcmtzcGFjZXMvY3liZXItcGlwZWxpbmUvY2xpZW50L3ZpdGVzdC5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB7IG1lcmdlQ29uZmlnLCBkZWZpbmVDb25maWcsIGNvbmZpZ0RlZmF1bHRzIH0gZnJvbSAndml0ZXN0L2NvbmZpZydcclxuaW1wb3J0IHZpdGVDb25maWcgZnJvbSAnLi92aXRlLmNvbmZpZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lcmdlQ29uZmlnKFxyXG4gIHZpdGVDb25maWcsXHJcbiAgZGVmaW5lQ29uZmlnKHtcclxuICAgIHRlc3Q6IHtcclxuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXHJcbiAgICAgIGV4Y2x1ZGU6IFsuLi5jb25maWdEZWZhdWx0cy5leGNsdWRlLCAnZTJlLyonXSxcclxuICAgICAgcm9vdDogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuLycsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICBpc29sYXRlOiBmYWxzZSxcclxuICAgICAgLy8geW91IGNhbiBhbHNvIGRpc2FibGUgaXNvbGF0aW9uIG9ubHkgZm9yIHNwZWNpZmljIHBvb2xzXHJcbiAgICAgIHBvb2xPcHRpb25zOiB7XHJcbiAgICAgICAgdm1UaHJlYWRzOiB7XHJcbiAgICAgICAgICBpc29sYXRlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBmaWxlUGFyYWxsZWxpc206IGZhbHNlLFxyXG4gICAgICBzZXR1cEZpbGVzOiAnLi9fX3Rlc3RzX18vc2V0dXBUZXN0cy5qcycsIC8vIFBhdGggdG8geW91ciBzZXR1cCBmaWxlXHJcbiAgICAgIGNvdmVyYWdlOiB7XHJcbiAgICAgICAgcHJvdmlkZXI6ICd2OCcsXHJcbiAgICAgICAgcmVwb3J0ZXI6IFsndGV4dCcsICdqc29uJywgJ2h0bWwnXSwgLy8gQ2hvb3NlIGRlc2lyZWQgcmVwb3J0ZXJzXHJcbiAgICAgICAgaW5jbHVkZTogWydzcmMvKiovKi57anMsdHMsdnVlfSddLCAvLyBTcGVjaWZ5IHdoaWNoIGZpbGVzIHRvIGluY2x1ZGUgaW4gY292ZXJhZ2VcclxuICAgICAgICBleGNsdWRlOiBbJ25vZGVfbW9kdWxlcy8qKi8qJ10sIC8vIFNwZWNpZnkgZmlsZXMgdG8gZXhjbHVkZSBmcm9tIGNvdmVyYWdlXHJcbiAgICAgICAgcmVwb3J0c0RpcmVjdG9yeTogJy4vX190ZXN0c19fL2NvdmVyYWdlJ1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcbilcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9jeWJlci1waXBlbGluZS9jbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi93b3Jrc3BhY2VzL2N5YmVyLXBpcGVsaW5lL2NsaWVudC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vd29ya3NwYWNlcy9jeWJlci1waXBlbGluZS9jbGllbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcclxuaW1wb3J0IHtQcmltZVZ1ZVJlc29sdmVyfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xyXG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIFZ1ZURldlRvb2xzKCksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgUHJpbWVWdWVSZXNvbHZlcigpXHJcbiAgICAgIF1cclxuICAgIH0pXHJcbiAgXSxcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGV4Y2x1c2U6IFsnQHByaW1ldnVlL3RoZW1lcyddXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwcm94eToge1xyXG4gICAgICAnL2FwaSc6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICBzZWN1cmU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICAnL2F1dGgnOiB7XHJcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgc2VjdXJlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgJy9kb2NzJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVIsU0FBUyxpQkFBQUEsc0JBQXFCO0FBQ3ZULFNBQVMsYUFBYSxnQkFBQUMsZUFBYyxzQkFBc0I7OztBQ0QyTixTQUFTLGVBQWUsT0FBQUMsWUFBVztBQUV4VCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUSx3QkFBdUI7QUFDL0IsT0FBTyxpQkFBaUI7QUFOa0osSUFBTSwyQ0FBMkM7QUFTM04sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLE1BQ1QsV0FBVztBQUFBLFFBQ1QsaUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsa0JBQWtCO0FBQUEsRUFDOUI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJQyxLQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzs7O0FEOUMySyxJQUFNQyw0Q0FBMkM7QUFJN04sSUFBTyx3QkFBUTtBQUFBLEVBQ2I7QUFBQSxFQUNBQyxjQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsTUFDSixhQUFhO0FBQUEsTUFDYixTQUFTLENBQUMsR0FBRyxlQUFlLFNBQVMsT0FBTztBQUFBLE1BQzVDLE1BQU1DLGVBQWMsSUFBSSxJQUFJLE1BQU1GLHlDQUFlLENBQUM7QUFBQSxNQUNsRCxTQUFTO0FBQUE7QUFBQSxNQUVULGFBQWE7QUFBQSxRQUNYLFdBQVc7QUFBQSxVQUNULFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRjtBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsTUFDakIsWUFBWTtBQUFBO0FBQUEsTUFDWixVQUFVO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixVQUFVLENBQUMsUUFBUSxRQUFRLE1BQU07QUFBQTtBQUFBLFFBQ2pDLFNBQVMsQ0FBQyxzQkFBc0I7QUFBQTtBQUFBLFFBQ2hDLFNBQVMsQ0FBQyxtQkFBbUI7QUFBQTtBQUFBLFFBQzdCLGtCQUFrQjtBQUFBLE1BQ3BCO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogWyJmaWxlVVJMVG9QYXRoIiwgImRlZmluZUNvbmZpZyIsICJVUkwiLCAiVVJMIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwiLCAiZGVmaW5lQ29uZmlnIiwgImZpbGVVUkxUb1BhdGgiXQp9Cg==
