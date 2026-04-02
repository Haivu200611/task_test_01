import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";

export function QuickCreateModal({ open, setOpen }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    role: "",
    active: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckbox = (checked) => {
    setForm({ ...form, active: checked });
  };

  const handleSave = () => {
    console.log("Saved:", form);
    setForm({
      name: "",
      age: "",
      role: "",
      active: false,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
          <p className="ui-dialog__subtitle">
            Add a new record with a name, age, role, and status.
          </p>
        </DialogHeader>

        <div className="dialog-form">
          <label className="form-field">
            <span className="form-label">Name</span>
            <Input
              name="name"
              placeholder="Enter full name"
              value={form.name}
              onChange={handleChange}
            />
          </label>

          <label className="form-field">
            <span className="form-label">Age</span>
            <Input
              name="age"
              type="number"
              placeholder="Enter age"
              value={form.age}
              onChange={handleChange}
            />
          </label>

          <label className="form-field">
            <span className="form-label">Role</span>
            <select
              name="role"
              value={form.role}
              className="ui-select"
              onChange={handleChange}
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </label>

          <label className="field-inline">
            <Checkbox checked={form.active} onCheckedChange={handleCheckbox} />
            <span>Active account</span>
          </label>

          <div className="dialog-actions">
            <Button onClick={handleSave}>Save</Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
