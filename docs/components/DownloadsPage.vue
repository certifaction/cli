<script setup>
import { computed, ref, onMounted } from 'vue'
import { data } from '../downloads.data.js'
import { useTheme } from '../.vitepress/theme/useTheme.js'

const { latest, previousVersions, platformOrder } = data
const { theme } = useTheme()

const commandName = computed(() => theme.value.commandName)

// After hydration, Vue may not patch all attribute mismatches in production.
// Use a post-mount prefix that triggers a normal reactive update (not hydration recovery).
const hydrated = ref(false)
onMounted(() => { hydrated.value = true })
const downloadPrefix = computed(() => hydrated.value ? commandName.value : 'certifaction')

const platformNames = {
  macos: 'macOS',
  linux: 'Linux',
  windows: 'Windows',
  freebsd: 'FreeBSD'
}

function displayFileName(download) {
  return `${downloadPrefix.value}_${download.fileSuffix}`
}
</script>

<template>
  <div class="downloads-page">
    <!-- Latest Version -->
    <template v-if="latest">
      <h2>Latest Version ({{ latest.version }})</h2>

      <div v-for="platformKey in platformOrder" :key="platformKey" class="platform-section">
        <h3>{{ latest.platforms[platformKey].name }}</h3>
        <table>
          <thead>
            <tr>
              <th>Architecture</th>
              <th>Format</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="download in latest.platforms[platformKey].downloads" :key="download.canonicalFileName">
              <td>{{ download.arch }}</td>
              <td>{{ download.format }}</td>
              <td><a :href="download.link" :download="displayFileName(download)">{{ displayFileName(download) }}</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Checksums</h3>
      <p>
        Verify the integrity of your download:
        <a :href="latest.checksumsLink">checksums.txt</a>
      </p>

      <div class="language-bash">
        <pre><code># Verify all files
sha256sum -c checksums.txt

# Or verify a single file
sha256sum {{ downloadPrefix }}_{{ latest.version }}_darwin_amd64.tar.gz</code></pre>
      </div>
    </template>

    <template v-else>
      <div class="warning custom-block">
        <p class="custom-block-title">No Downloads Available</p>
        <p>Run <code>make download-releases</code> to fetch the CLI binaries.</p>
      </div>
    </template>

    <!-- Previous Versions -->
    <template v-if="previousVersions && previousVersions.length > 0">
      <h2>Previous Versions</h2>

      <div v-for="release in previousVersions" :key="release.version" class="previous-version">
        <details>
          <summary>Version {{ release.version }}</summary>

          <div v-for="platformKey in platformOrder" :key="platformKey" class="platform-section">
            <h4>{{ platformNames[platformKey] }}</h4>
            <table>
              <thead>
                <tr>
                  <th>Architecture</th>
                  <th>Format</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="download in release.platforms[platformKey].downloads" :key="download.canonicalFileName">
                  <td>{{ download.arch }}</td>
                  <td>{{ download.format }}</td>
                  <td><a :href="download.link" :download="displayFileName(download)">{{ displayFileName(download) }}</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4>Checksums</h4>
          <p><a :href="release.checksumsLink">checksums.txt</a></p>
        </details>
      </div>
    </template>
  </div>
</template>

<style scoped>
.downloads-page table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.downloads-page th,
.downloads-page td {
  padding: 0.5rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
}

.downloads-page th {
  font-weight: 600;
  background: var(--vp-c-bg-soft);
}

.downloads-page .platform-section {
  margin-bottom: 1.5rem;
}

.downloads-page details {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.downloads-page summary {
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
}

.downloads-page details[open] summary {
  margin-bottom: 1rem;
}

.downloads-page .previous-version {
  margin-bottom: 0.5rem;
}

.downloads-page h4 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
</style>
