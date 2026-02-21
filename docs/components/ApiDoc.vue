<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useData } from 'vitepress'
import { useTheme } from '../.vitepress/theme/useTheme.js'

const props = defineProps({
    specUrl: {
        type: String,
        required: true,
    },
})

const data = useData()
const isDark = data.isDark
const { theme } = useTheme()

const rapiDocElement = ref(null)
let linkObserver = null

const CANONICAL_DOCS_DOMAIN = 'developers.certifaction.com'

function rewriteLinks() {
    const shadowRoot = rapiDocElement.value?.shadowRoot
    if (!shadowRoot) return
    const links = shadowRoot.querySelectorAll(`a[href*="${CANONICAL_DOCS_DOMAIN}"]`)
    links.forEach(link => {
        link.href = link.href.replace(`https://${CANONICAL_DOCS_DOMAIN}`, window.location.origin)
    })
}

onMounted(async () => {
    await import('rapidoc')
    await nextTick()

    rapiDocElement.value.loadSpec(props.specUrl)

    setTheme(isDark.value ? 'dark' : 'light')

    const shadowRoot = rapiDocElement.value?.shadowRoot
    if (shadowRoot) {
        linkObserver = new MutationObserver(() => rewriteLinks())
        linkObserver.observe(shadowRoot, { childList: true, subtree: true })
    }
})

onUnmounted(() => {
    if (linkObserver) {
        linkObserver.disconnect()
        linkObserver = null
    }
})

watch(isDark, (newValue) => {
    setTheme(newValue ? 'dark' : 'light')
})

watch(theme, () => {
    setTheme(isDark.value ? 'dark' : 'light')
})

function setTheme(mode) {
    const rapiDocElementInstance = rapiDocElement.value

    if (!rapiDocElementInstance) {
        return
    }

    const primaryColor = theme.value.primaryColor

    if (mode === 'dark') {
        rapiDocElementInstance.setAttribute('theme', 'dark')
        rapiDocElementInstance.setAttribute('bg-color', '#1e1e20')
        rapiDocElementInstance.setAttribute('nav-bg-color', '#fafafa')
        rapiDocElementInstance.setAttribute('nav-text-color', '#a9b7d0')
        rapiDocElementInstance.setAttribute('nav-hover-bg-color', '#ffebea')
        rapiDocElementInstance.setAttribute('nav-hover-text-color', '#9b0700')
        rapiDocElementInstance.setAttribute('nav-accent-color', '#f87070')
        rapiDocElementInstance.setAttribute('primary-color', primaryColor)
    } else if (mode === 'light') {
        rapiDocElementInstance.setAttribute('theme', 'light')
        rapiDocElementInstance.setAttribute('bg-color', '#ffffff')
        rapiDocElementInstance.setAttribute('nav-bg-color', '#fafafa')
        rapiDocElementInstance.setAttribute('nav-text-color', '#a9b7d0')
        rapiDocElementInstance.setAttribute('nav-hover-bg-color', '#ffebea')
        rapiDocElementInstance.setAttribute('nav-hover-text-color', '#9b0700')
        rapiDocElementInstance.setAttribute('nav-accent-color', '#f87070')
        rapiDocElementInstance.setAttribute('primary-color', primaryColor)
    }
}
</script>

<template>
    <div class="rapidoc-container">
        <rapi-doc
            ref="rapiDocElement"
            allow-spec-url-load="false"
            allow-spec-file-load="true"
            show-header="false"
            show-info="true"
            font-size="largest"
            render-style="view"
            allow-try="true"
            regular-font="Arial"
            show-method-in-nav-bar="as-colored-block"
            nav-item-spacing="relaxed"
            style="height: 88vh; width: 100%"/>
    </div>
</template>
