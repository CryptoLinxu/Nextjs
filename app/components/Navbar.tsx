/*
 * @Description: 
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-09-08 16:50:26
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-09-09 17:29:46
 */

import { auth, signOut, signIn } from '@/auth';
import { Span } from 'next/dist/trace';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = async () => {
    const session = await auth(); // 读取当前登录状态

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={144} height={30} />
                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {session && session?.user 
                        ? (
                            <>
                                <Link href="/startup/create">
                                    <span className='max-sm:hidden'>Create</span>
                                </Link>

                                <form action={async () => {
                                    'use server';
                                    await signOut({ redirectTo: "/" });
                                }}>
                                    <button type='submit'>Logout</button>
                                </form>

                                <Link href={`/user/${session?.id}`}>
                                    <span>{session?.user?.name}</span>
                                </Link>
                            </>
                        ) 
                        : (
                            <>
                                <form action={async () => {
                                    'use server';
                                    await signIn('github');
                                }}>
                                    <button type='submit'>Login</button>
                                </form>
                            </>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;