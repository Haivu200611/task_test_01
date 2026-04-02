import { useState } from "react"
import { Button } from "@/components/ui/button"

type Props = {
  collapsed: boolean
  toggle: () => void
}

export default function Sidebar({ collapsed, toggle }: Props) {
  return (
    <div className={`h-screen bg-gray-900 text-white ${collapsed ? "w-16" : "w-64"} transition-all`}>
      <div className="p-4 font-bold">LOGO</div>

      <Button variant="ghost" onClick={toggle}>
        Toggle
      </Button>

      <div className="p-2 space-y-2">
        <div className="hover:bg-gray-700 p-2 rounded">Dashboard</div>
        <div className="hover:bg-gray-700 p-2 rounded">Users</div>
      </div>
    </div>
  )
}