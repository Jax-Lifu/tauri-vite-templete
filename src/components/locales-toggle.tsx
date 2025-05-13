import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const LOCALES: Record<string, string> = {
    en: 'English',
    zh: '中文',
};

/** 提取通用 changeLanguage 函数 */
function useLocaleState() {
    const { i18n } = useTranslation();
    const [locale, setLocale] = useState(i18n.language.split('-')[0]); // 兼容 en-US -> en

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale, i18n]);

    return {
        locale,
        setLocale,
    };
}

/** 🌐 语言下拉菜单按钮（图标） */
export function LocalesDropdownMenu() {
    const { setLocale } = useLocaleState();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    aria-label="Toggle Language"
                    data-slot="language-toggle-button"
                >
                    <Globe className="size-[1.2rem]" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-slot="language-toggle-content">
                {Object.entries(LOCALES).map(([key, label]) => (
                    <DropdownMenuItem
                        key={key}
                        onClick={() => setLocale(key)}
                        data-slot="language-toggle-item"
                    >
                        {label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

/** 🔘 ToggleGroup 语言选择（按钮组） */
export function LocaleToggleGroup() {
    const { locale, setLocale } = useLocaleState();
    console.log('LocaleToggleGroup', locale);
    return (
        <ToggleGroup type="single" value={locale} onValueChange={(val) => val && setLocale(val)}>
            {Object.entries(LOCALES).map(([key, label]) => (
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

/** ⬇️ Select 语言下拉选择框 */
export function LocaleSelect() {
    const { locale, setLocale } = useLocaleState();

    return (
        <Select value={locale} onValueChange={setLocale}>
            <SelectTrigger className="w-[180px]" aria-label="Select Language">
                <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
                {Object.entries(LOCALES).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                        {label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
