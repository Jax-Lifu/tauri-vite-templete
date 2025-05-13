#!/bin/bash

# tauri-add-plugins.sh
# 一键添加常用 Tauri 插件

plugins=(
  shell
  single-instance
  sql
  dialog
  process
  os
  opener
  store
)

echo "🔧 正在添加以下 Tauri 插件："
for plugin in "${plugins[@]}"; do
  echo "➡️  添加插件: $plugin"
  cargo tauri add "$plugin"
done

echo "🔧 正在添加 fs-pro Tauri 插件："
pnpm add tauri-plugin-fs-pro-api
cd src-tauri
cargo add tauri-plugin-fs-pro
cd -

echo "🔧 正在添加 tauri-plugin-devtools 插件："
cargo add tauri-plugin-devtools@2.0.0

echo "✅ 所有插件添加完成！"
