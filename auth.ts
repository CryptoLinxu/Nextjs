/*
 * @Description: 认证配置
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-09-08 16:02:00
 * @LastEditors: linxu devinlin9679@gmail.com
 * @LastEditTime: 2025-09-09 19:56:49
 */
// import NextAuth from "next-auth"
 
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [],
// })

// import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"

// 解决nodejs无法使用代理的问题
// import { HttpsProxyAgent } from "https-proxy-agent";

// const proxyAgent = new HttpsProxyAgent("http://127.0.0.1:7899");
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [
//     GitHub({
//       clientId: process.env.AUTH_GITHUB_ID!,
//       clientSecret: process.env.AUTH_GITHUB_SECRET!,
//     }),
//   ],
//   secret: process.env.AUTH_SECRET,
// })

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
})