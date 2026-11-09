import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useMemo, useState } from "react";
import { Table, sortRows, type SortDescriptor } from "./Table";
import { TableCard } from "./TableCard";
import { Pagination } from "./Pagination";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Button } from "./Button";

/**
 * No `component:` here on purpose. Table requires `aria-label`, so naming the
 * component makes Storybook demand `args` on every story — and both of these
 * render a stateful wrapper rather than a bare Table.
 */
const meta = { title: "Data/Table" } satisfies Meta<typeof Table>;
export default meta;
type Story = StoryObj;

interface Member {
  username: string;
  name: string;
  email: string;
  status: "active" | "inactive";
  role: string;
  sources: number;
  teams: string[];
}

const members: Member[] = [
  { username: "@priya", name: "Priya Raman", email: "priya@trainertwin.io", status: "active", role: "Owner", sources: 47, teams: ["System Design", "Interviews", "Backend", "Hiring"] },
  { username: "@dinesh", name: "Dinesh Singh", email: "dinesh@trainertwin.io", status: "active", role: "Trainer", sources: 31, teams: ["Product", "Startups"] },
  { username: "@aarti", name: "Aarti Nair", email: "aarti@trainertwin.io", status: "inactive", role: "Reviewer", sources: 0, teams: ["Frontend"] },
  { username: "@kenji", name: "Kenji Watanabe", email: "kenji@trainertwin.io", status: "active", role: "Trainer", sources: 88, teams: ["Data", "ML", "Platform"] },
  { username: "@sam", name: "Sam Okonkwo", email: "sam@trainertwin.io", status: "active", role: "Viewer", sources: 12, teams: ["Onboarding"] },
];

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5 5 13h6l.5-8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M11.2 2.8a1.7 1.7 0 0 1 2.4 2.4L6 12.8l-3.2.8.8-3.2 7.6-7.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

function TeamMembersTable() {
  const [sort, setSort] = useState<SortDescriptor>({ column: "name", direction: "ascending" });
  const [page, setPage] = useState(1);
  const rows = useMemo(
    () => sortRows(members as unknown as Record<string, unknown>[], sort) as unknown as Member[],
    [sort],
  );

  return (
    <TableCard.Root className="max-w-[980px]">
      <TableCard.Header
        title="Team members"
        badge={`${members.length} people`}
        description="Everyone who can train or review this twin."
        contentTrailing={
          <Button variant="secondary" size="sm" iconOnly aria-label="Table options">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <circle cx="8" cy="3" r="1.5" /><circle cx="8" cy="8" r="1.5" /><circle cx="8" cy="13" r="1.5" />
            </svg>
          </Button>
        }
      />

      <Table aria-label="Team members" selectionMode="multiple" sortDescriptor={sort} onSortChange={setSort}>
        <Table.Header>
          <Table.Head id="name" label="Name" isRowHeader allowsSorting />
          <Table.Head id="status" label="Status" allowsSorting />
          <Table.Head id="role" label="Role" allowsSorting tooltip="What this person can change" />
          <Table.Head id="sources" label="Sources" allowsSorting className="text-right" />
          <Table.Head id="teams" label="Teams" />
          <Table.Head id="actions" label="Actions" labelHidden />
        </Table.Header>

        <Table.Body items={rows}>
          {(item) => (
            <Table.Row key={item.username} id={item.username}>
              <Table.Cell>
                <div className="flex items-center gap-3">
                  <Avatar alt={item.name} size="md" />
                  <div className="whitespace-nowrap">
                    <p className="text-[13.5px] font-title text-ink">{item.name}</p>
                    <p className="text-[12px] font-normal text-ink-tertiary">{item.username}</p>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Badge dot tone={item.status === "active" ? "success" : "neutral"}>
                  {item.status === "active" ? "Active" : "Inactive"}
                </Badge>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap">{item.role}</Table.Cell>
              <Table.Cell numeric strong>{item.sources}</Table.Cell>
              <Table.Cell>
                <div className="flex gap-1">
                  {item.teams.slice(0, 3).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                  {item.teams.length > 3 ? <Badge>+{item.teams.length - 3}</Badge> : null}
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="flex justify-end gap-0.5">
                  <Button variant="ghost" size="sm" iconOnly aria-label={`Edit ${item.name}`}><EditIcon /></Button>
                  <Button variant="ghost" size="sm" iconOnly aria-label={`Remove ${item.name}`}><TrashIcon /></Button>
                </div>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      <Pagination page={page} total={10} onPageChange={setPage} />
    </TableCard.Root>
  );
}

export const TeamMembers: Story = { render: () => <TeamMembersTable /> };

export const WithoutSelection: Story = {
  render: () => (
    <TableCard.Root className="max-w-[720px]">
      <TableCard.Header title="Recent sessions" badge="3 today" />
      <Table aria-label="Recent sessions">
        <Table.Header>
          <Table.Head id="learner" label="Learner" />
          <Table.Head id="scenario" label="Scenario" />
          <Table.Head id="score" label="Score" className="text-right" />
        </Table.Header>
        <Table.Body items={[
          { id: "1", learner: "Ana Duarte", scenario: "System Design — Round 2", score: 78 },
          { id: "2", learner: "Marco Ruiz", scenario: "Behavioural — Conflict", score: 91 },
          { id: "3", learner: "Wei Chen", scenario: "System Design — Round 1", score: 64 },
        ]}>
          {(r) => (
            <Table.Row key={r.id} id={r.id}>
              <Table.Cell strong>{r.learner}</Table.Cell>
              <Table.Cell>{r.scenario}</Table.Cell>
              <Table.Cell numeric strong>{r.score}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </TableCard.Root>
  ),
};
