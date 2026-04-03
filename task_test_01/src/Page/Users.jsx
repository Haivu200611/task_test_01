import { useState } from "react";
import { useFetchData } from "../hook/useFetchData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";

const initialForm = {
  name: "",
  age: "",
  role: "",
  active: false,
};

export default function Users() {
  const { data: users, loading, error } = useFetchData("https://dummyjson.com/users");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleCheckbox = (checked) => {
    setForm((current) => ({ ...current, active: checked }));
  };

  const handleSave = () => {
    console.log("Saved:", form);
    setForm(initialForm);
    setOpen(false);
  };

  return (
    <main className="content">
      <div className="page-stack">
        <section className="page-card">
          <div className="page-header">
            <div className="page-copy">
              <div className="page-kicker">Management dashboard</div>
              <h1 className="page-title">Users</h1>
              <p className="page-subtitle">
                Browse the current user set, inspect key fields, and open the
                creation modal from a cleaner layout.
              </p>
            </div>

            <div className="page-actions">
              <Button onClick={() => setOpen(true)}>Quick Create</Button>
            </div>
          </div>

          {loading && <div className="status">Loading users...</div>}
          {error && <div className="status status--error">{error}</div>}

          {!loading && !error && (
            <div className="table-container">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>First Name</TableHead>
                    <TableHead>Last Name</TableHead>
                    <TableHead>Age</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {Array.isArray(users) && users.length > 0 ? (
                    users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.firstName}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                        <TableCell>{user.age}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4}>No data available</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </section>

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
      </div>
    </main>
  );
}
