import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

// 提示消息内容的函数
const showToast = () => {
    toast.success('操作成功！');
};

export function Home() {
    return (
        <div className="flex flex-col gap-6 justify-center items-center min-h-screen text-center">
            <h1 className="text-4xl font-semibold mb-6 text-primary">🏠 欢迎来到主页</h1>
            <Label className="text-lg text-gray-600 mb-6">在这里，你可以访问所有功能和配置。</Label>

            {/* 优化按钮样式 */}
            <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={showToast}
            >
                显示成功提示
            </Button>
        </div>
    );
}
