#[tauri::command]
pub async fn tauri_version(app: tauri::AppHandle) -> Result<String, String> {
    Ok(app.package_info().version.clone().to_string())
}
