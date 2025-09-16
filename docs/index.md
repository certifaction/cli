---
layout: home
title: Developers
editLink: true
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Get browser language preferences
  const browserLang = navigator.language || navigator.userLanguage
  const langCode = browserLang.split('-')[0] // Get primary language code

  // Supported languages
  const supportedLanguages = ['en', 'de', 'fr', 'it']
  const defaultLang = 'en'

  // Determine target language
  let targetLang = defaultLang
  if (supportedLanguages.includes(langCode)) {
    targetLang = langCode
  }

  // Only redirect if not already on a localized path
  if (!window.location.pathname.match(/^\/(en|de|fr|it)\//)) {
    window.location.replace(`/${targetLang}/`)
  }
})
</script>

<div style="text-align: center; padding: 2rem;">
  <h1>Detecting your language...</h1>
  <p>Redirecting to the appropriate language version...</p>

  <div style="margin-top: 2rem;">
    <p>Or choose manually:</p>
    <a href="/en/" style="margin: 0 1rem;">English</a>
    <a href="/de/" style="margin: 0 1rem;">Deutsch</a>
    <a href="/fr/" style="margin: 0 1rem;">Français</a>
    <a href="/it/" style="margin: 0 1rem;">Italiano</a>
  </div>
</div>