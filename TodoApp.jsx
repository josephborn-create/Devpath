import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div style={styles.form}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        style={styles.input}
      />
      <button onClick={handleAdd} style={styles.addBtn}>Add</button>
    </div>
  );
}

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div
      style={{
        ...styles.todoItem,
        ...(todo.done ? styles.todoItemDone : {}),
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#93c5fd")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
    >
      <div
        onClick={onToggle}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          flex: 1,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            ...styles.checkbox,
            ...(todo.done ? styles.checkboxDone : {}),
          }}
        >
          {todo.done && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 6L5 8.5L9.5 3.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <span
          style={{
            textDecoration: todo.done ? "line-through" : "none",
            color: todo.done ? "#9ca3af" : "#111827",
            fontSize: 15,
            transition: "color 0.15s",
          }}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={onDelete}
        style={styles.deleteBtn}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#ef4444";
          e.currentTarget.style.backgroundColor = "#fef2f2";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#d1d5db";
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        &times;
      </button>
    </div>
  );
}

function TodoFilters({ filter, onFilterChange, remaining, onClearCompleted, hasCompleted }) {
  const filters = ["all", "active", "completed"];
  return (
    <div style={styles.filterBar}>
      <span style={styles.remaining}>
        {remaining} item{remaining !== 1 ? "s" : ""} left
      </span>
      <div style={{ display: "flex", gap: 4 }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            style={{
              ...styles.filterBtn,
              ...(filter === f ? styles.filterBtnActive : {}),
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      {hasCompleted && (
        <button onClick={onClearCompleted} style={styles.clearBtn}>
          Clear done
        </button>
      )}
    </div>
  );
}

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.done));
  };

  const filtered = todos.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "completed") return t.done;
    return true;
  });

  const remaining = todos.filter((t) => !t.done).length;
  const hasCompleted = todos.some((t) => t.done);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Todos</h1>
        <p style={styles.subtitle}>Your first React app</p>

        <TodoForm onAdd={addTodo} />

        {todos.length > 0 && (
          <>
            <div style={styles.list}>
              {filtered.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={() => toggleTodo(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
                />
              ))}
              {filtered.length === 0 && (
                <p style={styles.noResults}>
                  No {filter} todos to show.
                </p>
              )}
            </div>
            <TodoFilters
              filter={filter}
              onFilterChange={setFilter}
              remaining={remaining}
              onClearCompleted={clearCompleted}
              hasCompleted={hasCompleted}
            />
          </>
        )}

        {todos.length === 0 && (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>&#9745;</div>
            <p style={styles.emptyText}>No todos yet. Add one above!</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#fafafa",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    padding: "48px 24px",
  },
  container: {
    maxWidth: 480,
    margin: "0 auto",
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 4,
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: 15,
    color: "#9ca3af",
    marginBottom: 28,
  },
  form: {
    display: "flex",
    gap: 8,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    padding: "12px 16px",
    border: "1px solid #d1d5db",
    borderRadius: 10,
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.15s, box-shadow 0.15s",
    backgroundColor: "white",
  },
  addBtn: {
    padding: "12px 24px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 15,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "background 0.15s",
    whiteSpace: "nowrap",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  todoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: 10,
    transition: "border-color 0.15s",
  },
  todoItemDone: {
    background: "#f9fafb",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    border: "2px solid #d1d5db",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 700,
    color: "white",
    flexShrink: 0,
    transition: "all 0.15s",
  },
  checkboxDone: {
    background: "#16a34a",
    borderColor: "#16a34a",
  },
  deleteBtn: {
    background: "none",
    border: "none",
    color: "#d1d5db",
    fontSize: 20,
    cursor: "pointer",
    padding: "4px 8px",
    borderRadius: 6,
    transition: "color 0.15s, background 0.15s",
    lineHeight: 1,
  },
  filterBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    paddingTop: 16,
    borderTop: "1px solid #f3f4f6",
    flexWrap: "wrap",
    gap: 8,
  },
  remaining: {
    fontSize: 13,
    color: "#9ca3af",
  },
  filterBtn: {
    padding: "6px 12px",
    border: "none",
    background: "transparent",
    borderRadius: 6,
    fontSize: 13,
    color: "#6b7280",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: 500,
    transition: "all 0.15s",
  },
  filterBtnActive: {
    background: "#eff6ff",
    color: "#2563eb",
    fontWeight: 600,
  },
  clearBtn: {
    padding: "6px 12px",
    border: "none",
    background: "transparent",
    borderRadius: 6,
    fontSize: 13,
    color: "#9ca3af",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: 500,
    transition: "color 0.15s",
  },
  noResults: {
    textAlign: "center",
    color: "#9ca3af",
    fontSize: 14,
    padding: "24px 0",
  },
  emptyState: {
    textAlign: "center",
    padding: "48px 24px",
  },
  emptyIcon: {
    fontSize: 32,
    marginBottom: 12,
    opacity: 0.4,
  },
  emptyText: {
    color: "#9ca3af",
    fontSize: 15,
  },
};