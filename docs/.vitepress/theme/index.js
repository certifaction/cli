import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import './themes/certifaction/style.css';
import './themes/mss/style.css';
import './shared.css';
import ProductName from '../../components/ProductName.vue';
import ProductNameShort from '../../components/ProductNameShort.vue';
import ThemeImage from '../../components/ThemeImage.vue';
import ThemeOnly from '../../components/ThemeOnly.vue';
import CommandName from '../../components/CommandName.vue';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ProductName', ProductName);
    app.component('ProductNameShort', ProductNameShort);
    app.component('ThemeImage', ThemeImage);
    app.component('ThemeOnly', ThemeOnly);
    app.component('CommandName', CommandName);
  },
};
