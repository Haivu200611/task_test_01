import { useState } from "react";
import { useFetchData } from "../hook/useFetchData";
import { DataTable } from "../components/DataTable";
import { QuickCreateModal } from "../components/QuickCreateModal";
import { Button } from "../components/ui/button";

export default function Users() {
  const { data: users, loading, error } = useFetchData("https://dummyjson.com/users");

  const [open, setOpen] = useState(false);

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

          {loading && <div className="status">Loading users…</div>}
          {error && <div className="status status--error">{error}</div>}

          {!loading && !error && <DataTable users={users} />}
        </section>

        <QuickCreateModal open={open} setOpen={setOpen} />
      </div>
    </main>
  );
}
