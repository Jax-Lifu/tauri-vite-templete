import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';
import type { Theme } from '@/components/theme-provider';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
// 支持的主题列表
const THEMES: Record<Theme, string> = {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
};

// 封装通用 setTheme hook
function useThemeState() {
    const { theme, setTheme } = useTheme();
    return {
        theme,
        setTheme,
    };
}

export function ThemeDropdownMenu() {
    const { setTheme } = useThemeState();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    aria-label="Toggle Theme"
                    data-slot="theme-toggle-button"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-slot="theme-toggle-content">
                {Object.entries(THEMES).map(([key, label]) => (
                    <DropdownMenuItem
                        key={key}
                        onClick={() => setTheme(key as Theme)}
                        data-slot="theme-toggle-item"
                    >
                        {label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
export function ThemeToggleGroup() {
    const { theme, setTheme } = useThemeState();

    return (
        <ToggleGroup type="single" value={theme} onValueChange={(val) => val && setTheme(val)}>
            {Object.entries(THEMES).map(([key, label]) => (
                <ToggleGroupItem
                    key={key}
                    value={key}
                    className="data-[state=on]:bg-primary data-[state=on]:text-secondary"
                >
                    {label}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    );
}

export function ThemeSelect() {
    const { theme, setTheme } = useThemeState();

    return (
        <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="w-[180px]" aria-label="Select Theme">
                <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
                {Object.entries(THEMES).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                        {label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
