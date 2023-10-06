import { ref } from 'vue'

export default ref({
  projects: {
    enabled: import.meta.env.VITE_FEATURE_PROJECTS_ENABLED === "true",
  },
})
