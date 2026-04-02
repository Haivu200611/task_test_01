import { useState } from "react"
import Sidebar from "./components/Sidebar"
import DataTable from "./components/DataTable"
import QuickCreateModal from "./components/QuickCreateModal"
import { useFetchData } from "./hooks/useFetchData"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  )

  const filteredData = data.filter((item: any) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex">
      <Sidebar collapsed={collapsed} toggle={() => setCollapsed(!collapsed)} />

      <div className="flex-1 p-4">
        <div className="flex justify-between mb-4">
          <h1>Dashboard</h1>
          <Button onClick={() => setOpen(true)}>Quick Create</Button>
        </div>

        {/* SEARCH */}
        <Input
          placeholder="Search name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4"
        />

        {/* TABLE */}
        <DataTable data={filteredData} loading={loading} error={error} />
      </div>

      <QuickCreateModal open={open} setOpen={setOpen} />
    </div>
  )
}

export default App