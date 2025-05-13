import { LocalesDropdownMenu, LocaleToggleGroup, LocaleSelect } from '@/components/locales-toggle';
import { ThemeDropdownMenu, ThemeToggleGroup, ThemeSelect } from '@/components/mode-toggle';
import { Label } from '@/components/ui/label';

// Settings 页面组件
export function Settings() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">⚙️ Settings</h1>
            <p>这里是设置页面，配置你的偏好。</p>

            {/* 🎨 主题切换区域 */}
            <section className="space-y-2">
                <Label className="text-sm font-semibold">Theme</Label>
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <ThemeDropdownMenu />
                    <ThemeToggleGroup />
                    <ThemeSelect />
                </div>
            </section>

            {/* 🌐 语言切换区域 */}
            <section className="space-y-2">
                <Label className="text-sm font-semibold">Language</Label>
                <div className="flex flex-wrap gap-4 items-center justify-between">
                    <LocalesDropdownMenu />
                    <LocaleToggleGroup />
                    <LocaleSelect />
                </div>
            </section>
        </div>
    );
}
