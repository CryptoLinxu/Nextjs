/*
 * @Description: 根布局文件  后续会使用的字体：font-work-sans
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-09-08 16:44:37
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-09-08 17:01:14
 */
import Navbar from '@/app/components/Navbar';
export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <main className="font-work-sans">
            <Navbar />
            {children}
        </main>
    )
}