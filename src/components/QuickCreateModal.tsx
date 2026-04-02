import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  open: boolean
  setOpen: (value: boolean) => void
}

export default function QuickCreateModal({ open, setOpen }: Props) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    role: "",
    active: false,
  })

  const handleSubmit = () => {
    console.log(form)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create</DialogTitle>
        </DialogHeader>

        <Input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input placeholder="Age" type="number" onChange={(e) => setForm({ ...form, age: e.target.value })} />
        <Input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <Select onValueChange={(val) => setForm({ ...form, role: val })}>
          <SelectTrigger>
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
        <Checkbox
        onCheckedChange=
          {
            (val) =>setForm({ ...form, active: val === true })       
          }
/>          Active
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}