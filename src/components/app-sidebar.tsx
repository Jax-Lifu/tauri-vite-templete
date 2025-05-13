'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Smartphone, Settings2, ChevronLeft, ChevronRight } from 'lucide-react';

// 路由项配置：每个对象代表一个侧边栏按钮
const routes = [
    {
        path: '/',
        icon: Smartphone,
        labelKey: 'home',
        exact: true,
    },
    {
        path: '/settings',
        icon: Settings2,
        labelKey: 'settings',
    },
];

export function AppSidebar() {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const [_isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                setCollapsed(true);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div
            className={cn(
                'flex flex-col h-screen border-r bg-background transition-all duration-300 relative',
                collapsed ? 'w-[70px]' : 'w-[240px]'
            )}
        >
            <div className="flex items-center h-16 px-4 border-b">
                {!collapsed && <h1 className="text-xl font-bold truncate">{t('appName')}</h1>}
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        'absolute right-2',
                        collapsed && 'right-[-12px] bg-background border rounded-full'
                    )}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? (
                        <ChevronRight className="h-4 w-4" />
                    ) : (
                        <ChevronLeft className="h-4 w-4" />
                    )}
                </Button>
            </div>

            <ScrollArea className="flex-1">
                <div className="px-2 py-4 space-y-2">
                    {routes.map(({ path, icon: Icon, labelKey, exact }) => (
                        <NavLink key={path} to={path} end={exact}>
                            {({ isActive }) => (
                                <Button
                                    variant={isActive ? 'default' : 'ghost'}
                                    className={cn(
                                        'w-full justify-start',
                                        collapsed && 'justify-center px-0'
                                    )}
                                >
                                    <Icon className="h-5 w-5" />
                                    {!collapsed && <span className="ml-2">{t(labelKey)}</span>}
                                </Button>
                            )}
                        </NavLink>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
