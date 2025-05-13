mod commands;

use commands::app_commands::tauri_version;
use tauri::{App, Builder, Manager, Wry};

/// Configure the Tauri application with plugins and settings.
fn configure_plugins(builder: Builder<Wry>) -> Builder<Wry> {
    let mut builder = builder
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_fs_pro::init())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_shell::init());

    #[cfg(desktop)]
    {
        builder = builder.plugin(tauri_plugin_single_instance::init(|app, _args, _cwd| {
            // If the app is already running, we can just focus the main window.
            let _ = app
                .get_webview_window("main")
                .expect("no main window")
                .set_focus();
        }));
    }

    #[cfg(debug_assertions)]
    {
        builder = builder.plugin(tauri_plugin_devtools::init());
    }

    builder
}

/// Setup the Tauri application with initial settings and plugins.
fn setup_app(app: &mut App) -> Result<(), Box<dyn std::error::Error>> {
    #[cfg(debug_assertions)]
    {
        // Enable the devtools for debugging.
        app.get_webview_window("main")
            .expect("no main window")
            .open_devtools();
    }
    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let mut builder = tauri::Builder::default();
    builder = configure_plugins(builder);
    let app = builder
        .setup(setup_app)
        .invoke_handler(tauri::generate_handler![tauri_version,])
        .build(tauri::generate_context!())
        .expect("error while running tauri application");

    app.run(|_app_handle, event| match event {
        tauri::RunEvent::Ready | tauri::RunEvent::Resumed => {
            log::info!("Tauri application is ready");
        }
        _ => {}
    });
}
