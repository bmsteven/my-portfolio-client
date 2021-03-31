import React, { lazy } from "react"

const Layout = lazy(() => import("../../components/chats/Layout"))

const Chat = () => {
  return (
    <div>
      <Layout page="user">Hello There</Layout>
    </div>
  )
}

export default Chat
