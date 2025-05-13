import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { ThemeProvider } from '@/components/theme-provider';
import { Home } from '@/pages/home';
import { AppLayout } from '@/components/app-layout';
import { Settings } from '@/pages/settings';
import { Toaster } from '@/components/ui/sonner';

import './App.css';
function App() {
    return (
        <ThemeProvider defaultTheme="system">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Home />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster />
        </ThemeProvider>
    );
}

export default App;
